const path = require("path");
const { addSubmodule, isGitAvailable, isInsideGitRepo } = require("./git");
const {
  appendUniqueLines,
  ensureDir,
  exists,
  writeText,
  writeTextSafe
} = require("./filesystem");
const {
  CEIP_REPO_URL,
  agentsFile,
  contextMd,
  coreReference,
  minimalCoreReference,
  productExperienceWorkspaceFiles,
  productIntelligenceWorkspaceFiles,
  projectJson,
  projectMd,
  runtimeWorkspaceFiles,
  simpleDoc,
  stackMd,
  workspaceReadme
} = require("./templates");
const { logInfo, logSuccess, logWarn } = require("./logger");

const GITIGNORE_LINES = [
  ".ceip/cache/",
  ".ceip/temp/",
  ".ceip/workspace/temporary/",
  ".ceip/output/exports/"
];

async function initializeProject(cwd, answers, detection, prompt) {
  const result = {
    created: [],
    skipped: [],
    warnings: []
  };

  await integrateCore(cwd, answers, detection, prompt, result);

  if (answers.createWorkspace) {
    await createWorkspace(cwd, answers, detection, prompt, result);
  }

  if (answers.createAgents) {
    await createAiFile(cwd, "AGENTS.md", "AGENTS.md", prompt, result);
  }

  for (const fileName of answers.toolFiles) {
    await createAiFile(cwd, fileName, fileName, prompt, result);
  }

  if (answers.updateGitignore) {
    const gitignorePath = path.join(cwd, ".gitignore");
    const update = appendUniqueLines(gitignorePath, GITIGNORE_LINES, "# CEIP temporary files");
    if (update.changed) {
      result.created.push(".gitignore");
    } else {
      result.skipped.push(".gitignore");
    }
  }

  return result;
}

async function integrateCore(cwd, answers, detection, prompt, result) {
  const target = path.join(cwd, ".cloudsix", "method");

  if (answers.integrationMode === "Git submodule") {
    if (detection.hasCeipCoreSubmodule || exists(target)) {
      result.skipped.push(".cloudsix/method");
      return;
    }

    if (!isGitAvailable()) {
      result.warnings.push(`Git não está disponível. Execute manualmente: git submodule add ${CEIP_REPO_URL}.git .cloudsix/method`);
      return;
    }

    if (!isInsideGitRepo(cwd)) {
      result.warnings.push("Diretório atual não parece ser um repositório Git. Submodule não foi adicionado.");
      return;
    }

    try {
      logInfo("Adicionando CEIP Core como submodule...");
      addSubmodule(cwd, CEIP_REPO_URL, ".cloudsix/method");
      result.created.push(".cloudsix/method");
    } catch (error) {
      result.warnings.push(`Não foi possível adicionar submodule automaticamente. Execute manualmente: git submodule add ${CEIP_REPO_URL} .cloudsix/method`);
      result.warnings.push(error.message);
    }
    return;
  }

  if (!answers.createWorkspace) {
    result.warnings.push("Referência do Core não foi criada porque o Workspace .ceip/ não foi solicitado.");
    return;
  }

  const referencePath = path.join(cwd, ".ceip", "CEIP_CORE_REFERENCE.md");
  const reference = coreReference(answers.integrationMode);
  await writeTracked(referencePath, reference, ".ceip/CEIP_CORE_REFERENCE.md", prompt, result);

  if (answers.integrationMode === "Cópia local mínima") {
    await writeTracked(
      path.join(cwd, ".ceip", "core-minimal", "README.md"),
      minimalCoreReference(),
      ".ceip/core-minimal/README.md",
      prompt,
      result
    );
  }
}

async function createWorkspace(cwd, answers, detection, prompt, result) {
  const base = path.join(cwd, ".ceip");
  ensureDir(base);

  const files = {
    "README.md": workspaceReadme(answers),
    "PROJECT.md": projectMd(answers, detection),
    "STACK.md": stackMd(detection),
    "CONTEXT.md": contextMd(answers),
    "CURRENT_FOCUS.md": simpleDoc("Foco Atual", "Registrar a prioridade atual do projeto."),
    "KNOWN_ISSUES.md": simpleDoc("Problemas Conhecidos", "Registrar problemas conhecidos, impacto, risco e status."),
    "TECHNICAL_DEBT.md": simpleDoc("Dívida Técnica", "Registrar dívida técnica, impacto, risco e plano incremental."),
    "ARCHITECTURE_MAP.md": simpleDoc("Mapa de Arquitetura", "Mapear módulos, dependências, integrações e fluxos críticos."),
    "QUALITY_DASHBOARD.md": simpleDoc("Quality Dashboard", "Registrar scores, gates pendentes, riscos e próximas ações."),
    "project.json": `${JSON.stringify(projectJson(answers, detection), null, 2)}\n`
  };

  for (const [relativePath, content] of Object.entries(files)) {
    await writeTracked(path.join(base, relativePath), content, `.ceip/${relativePath}`, prompt, result);
  }

  createContextFiles(base, prompt, result);
  createRuntime(base, answers, prompt, result);
  if (answers.createProductIntelligence) {
    createProductIntelligence(base, answers, prompt, result);
  }
  if (answers.createProductExperience) {
    createProductExperience(base, answers, prompt, result);
  }
  createAlwaysOnDirectories(base, prompt, result);

  if (answers.createMemory) {
    createMemory(base, prompt, result);
  }

  if (answers.createAdr) {
    createStatusDirectory(base, "adr", ["proposed", "accepted", "rejected", "deprecated"], "ADRs", prompt, result);
  }

  if (answers.createRfc) {
    createStatusDirectory(base, "rfc", ["proposed", "accepted", "rejected"], "RFCs", prompt, result);
  }

  if (answers.createReviews) {
    createReviews(base, prompt, result);
  }

  if (answers.createMetrics) {
    createMetrics(base, prompt, result);
  }
}

function createContextFiles(base, prompt, result) {
  const files = [
    "business-context.md",
    "technical-context.md",
    "architecture-context.md",
    "integration-context.md",
    "database-context.md",
    "security-context.md",
    "ux-ui-context.md",
    "product-experience-context.md"
  ];

  for (const fileName of files) {
    writeTrackedSync(path.join(base, "context", fileName), simpleDoc(titleFromFile(fileName), "Preencher com contexto observado e evidências."), `.ceip/context/${fileName}`, prompt, result);
  }
}

function createRuntime(base, answers, prompt, result) {
  const files = runtimeWorkspaceFiles(answers);
  for (const [relativePath, content] of Object.entries(files)) {
    writeTrackedSync(path.join(base, relativePath), content, `.ceip/${relativePath}`, prompt, result);
  }
}

function createProductIntelligence(base, answers, prompt, result) {
  const files = productIntelligenceWorkspaceFiles(answers);
  for (const [relativePath, content] of Object.entries(files)) {
    writeTrackedSync(path.join(base, relativePath), content, `.ceip/${relativePath}`, prompt, result);
  }
}

function createProductExperience(base, answers, prompt, result) {
  const files = productExperienceWorkspaceFiles(answers);
  for (const [relativePath, content] of Object.entries(files)) {
    writeTrackedSync(path.join(base, relativePath), content, `.ceip/${relativePath}`, prompt, result);
  }
}

function createAlwaysOnDirectories(base, prompt, result) {
  createStatusDirectory(base, "tasks", ["active", "completed", "cancelled"], "Tarefas", prompt, result);
  createReadmeOnlyTree(base, "artifacts", ["diagrams", "reports", "specs", "screenshots", "exports"], "Artefatos", prompt, result);
  createReadmeOnlyTree(base, "logs", [], "Logs", prompt, result);
  const logs = ["decisions-log.md", "implementation-log.md", "review-log.md", "incident-log.md"];
  for (const fileName of logs) {
    writeTrackedSync(path.join(base, "logs", fileName), simpleDoc(titleFromFile(fileName), "Registrar eventos relevantes do projeto."), `.ceip/logs/${fileName}`, prompt, result);
  }
  createReadmeOnlyTree(base, "knowledge", ["business", "architecture", "backend", "frontend", "database", "integrations", "security", "performance", "ux-ui", "product-experience"], "Knowledge", prompt, result);
  createReadmeOnlyTree(base, "cache", [], "Cache", prompt, result);
  for (const fileName of ["context-cache.md", "agent-cache.md", "policy-cache.md"]) {
    writeTrackedSync(path.join(base, "cache", fileName), simpleDoc(titleFromFile(fileName), "Cache local. Revise antes de versionar."), `.ceip/cache/${fileName}`, prompt, result);
  }
  createReadmeOnlyTree(base, "workspace", ["planning", "analysis", "drafts", "temporary"], "Workspace temporário", prompt, result);
  createReadmeOnlyTree(base, "output", ["final-reports", "generated-prompts", "implementation-plans"], "Output", prompt, result);
  createReadmeOnlyTree(base, "temp", [], "Temporários", prompt, result);
}

function createMemory(base, prompt, result) {
  const files = ["decisions.md", "lessons-learned.md", "mistakes.md", "patterns.md", "project-memory.md", "business-memory.md"];
  createReadmeOnlyTree(base, "memory", [], "Memória", prompt, result);
  for (const fileName of files) {
    writeTrackedSync(path.join(base, "memory", fileName), simpleDoc(titleFromFile(fileName), "Registrar memória local útil, sem segredos."), `.ceip/memory/${fileName}`, prompt, result);
  }
}

function createReviews(base, prompt, result) {
  createReadmeOnlyTree(base, "reviews", ["architecture", "backend", "frontend", "product-experience", "database", "security", "performance", "qa", "documentation"], "Reviews", prompt, result);
}

function createMetrics(base, prompt, result) {
  createReadmeOnlyTree(base, "metrics", [], "Métricas", prompt, result);
  const files = ["quality-score.md", "risk-score.md", "security-score.md", "performance-score.md", "maintainability-score.md", "visual-quality-score.md"];
  for (const fileName of files) {
    writeTrackedSync(path.join(base, "metrics", fileName), simpleDoc(titleFromFile(fileName), "Registrar score, evidência, data e decisão."), `.ceip/metrics/${fileName}`, prompt, result);
  }
}

function createStatusDirectory(base, name, statuses, title, prompt, result) {
  const dir = path.join(base, name);
  ensureDir(dir);
  writeTrackedSync(path.join(dir, "README.md"), simpleDoc(title, `Registrar ${title.toLowerCase()} do projeto.`), `.ceip/${name}/README.md`, prompt, result);
  for (const status of statuses) {
    ensureDir(path.join(dir, status));
  }
}

function createReadmeOnlyTree(base, name, children, title, prompt, result) {
  const dir = path.join(base, name);
  ensureDir(dir);
  writeTrackedSync(path.join(dir, "README.md"), simpleDoc(title, `Área local para ${title.toLowerCase()}.`), `.ceip/${name}/README.md`, prompt, result);
  for (const child of children) {
    ensureDir(path.join(dir, child));
  }
}

async function createAiFile(cwd, fileName, toolName, prompt, result) {
  await writeTracked(path.join(cwd, fileName), agentsFile(toolName), fileName, prompt, result);
}

async function writeTracked(targetPath, content, label, prompt, result) {
  const writeResult = await writeTextSafe(targetPath, content, { prompt, label });
  if (writeResult.written) {
    result.created.push(label);
  } else {
    result.skipped.push(label);
  }
}

function writeTrackedSync(targetPath, content, label, prompt, result) {
  if (exists(targetPath)) {
    result.skipped.push(label);
    return;
  }
  writeText(targetPath, content);
  result.created.push(label);
}

function titleFromFile(fileName) {
  return fileName
    .replace(/\.md$/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function printResult(result) {
  if (result.created.length > 0) {
    logSuccess(`Criados/atualizados: ${result.created.length}`);
  }
  if (result.skipped.length > 0) {
    logInfo(`Ignorados por segurança: ${result.skipped.length}`);
  }
  for (const warning of result.warnings) {
    logWarn(warning);
  }
}

module.exports = {
  GITIGNORE_LINES,
  initializeProject,
  printResult
};
