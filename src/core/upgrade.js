const path = require("path");
const { fileStamp, parseExecutionArgs, backupExistingFile, writeHistoricalArtifact } = require("./artifacts");
const { detectProject } = require("./detector");
const { appendUniqueLines, ensureDir, exists, readText, writeText } = require("./filesystem");
const { runtimeWorkspaceFiles, WORKSPACE_VERSION } = require("./templates");
const { GITIGNORE_LINES, initializeProject } = require("./writer");

async function upgradeWorkspace(cwd, args = []) {
  const parsed = parseExecutionArgs(args);
  const generatedAt = new Date();
  const stamp = fileStamp(generatedAt);
  const detection = detectProject(cwd);
  const result = {
    dryRun: parsed.options.dryRun,
    stamp,
    detection,
    created: [],
    updated: [],
    skipped: [],
    backups: [],
    warnings: [],
    reportPath: null
  };

  if (!detection.hasCeipWorkspace) {
    result.warnings.push("Workspace .ceip/ não encontrado. Execute ceip init antes de ceip upgrade.");
    return result;
  }

  const projectJsonPath = path.join(cwd, ".ceip", "project.json");
  const projectJson = readProjectJson(projectJsonPath, result);
  const projectName = projectJson && projectJson.project && projectJson.project.name
    ? projectJson.project.name
    : detection.projectName;

  await createMissingStandardWorkspace(cwd, detection, projectJson, result);
  createMissingWorkspaceFiles(cwd, projectName, result);
  upgradeProjectJson(cwd, projectJsonPath, projectJson, result);
  updateGitignore(cwd, result);
  writeUpgradeReport(cwd, result);

  return result;
}

async function createMissingStandardWorkspace(cwd, detection, projectJson, result) {
  if (result.dryRun) {
    result.created.push("Arquivos padrão ausentes do Workspace seriam criados sem sobrescrita");
    return;
  }

  const answers = {
    aiTools: (projectJson && projectJson.preferences && projectJson.preferences.aiTools) || ["Codex"],
    createAdr: true,
    createAgents: !detection.hasAgentsFile,
    createMemory: true,
    createMetrics: true,
    createProductExperience: true,
    createProductIntelligence: true,
    createReviews: true,
    createRfc: true,
    createWorkspace: true,
    description: (projectJson && projectJson.project && projectJson.project.description) || "",
    integrationMode: detection.hasCeipCoreSubmodule ? "Git submodule" : "Referência externa",
    language: (projectJson && projectJson.preferences && projectJson.preferences.language) || "pt-BR",
    owner: (projectJson && projectJson.project && projectJson.project.owner) || "",
    projectName: (projectJson && projectJson.project && projectJson.project.name) || detection.projectName,
    projectType: (projectJson && projectJson.project && projectJson.project.type) || "Outro",
    toolFiles: ["CODEX.md"],
    updateGitignore: true
  };
  const prompt = { confirm: async () => false };
  const initResult = await initializeProject(cwd, answers, detection, prompt);

  result.created.push(...initResult.created);
  result.skipped.push(...initResult.skipped.map((item) => `${item} preservado`));
  result.warnings.push(...initResult.warnings);
}

function createMissingWorkspaceFiles(cwd, projectName, result) {
  const runtimeFiles = runtimeWorkspaceFiles({ projectName });
  const files = {
    ".ceip/runtime/evolution-protocol.md": runtimeFiles["runtime/evolution-protocol.md"],
    ".ceip/runtime/history/README.md": historyReadme("Runtime History", "Histórico timestampado de Runtime Packs gerados pelos comandos CEIP."),
    ".ceip/output/generated-prompts/history/README.md": historyReadme("Prompt History", "Histórico timestampado de prompts gerados pelos comandos CEIP."),
    ".ceip/upgrades/README.md": historyReadme("Upgrades", "Relatórios de migração não destrutiva do CEIP Workspace.")
  };

  for (const [relativePath, content] of Object.entries(files)) {
    const target = path.join(cwd, relativePath);
    if (exists(target)) {
      result.skipped.push(`${relativePath} já existe`);
      continue;
    }
    if (result.dryRun) {
      result.created.push(`${relativePath} seria criado`);
      continue;
    }
    writeText(target, content);
    result.created.push(relativePath);
  }
}

function upgradeProjectJson(cwd, projectJsonPath, projectJson, result) {
  if (!projectJson) {
    return;
  }

  const upgraded = JSON.parse(JSON.stringify(projectJson));
  let changed = false;

  changed = setValue(upgraded, ["ceipWorkspaceVersion"], WORKSPACE_VERSION) || changed;
  changed = setValue(upgraded, ["governance", "riskLevel"], upgraded.governance && upgraded.governance.riskLevel ? upgraded.governance.riskLevel : "not_classified") || changed;
  changed = setValue(upgraded, ["governance", "requiresProductIntelligence"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresProductExperience"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresRuntime"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresContextLoader"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresPromptBuilder"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresPolicyEngine"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresQualityGates"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresPRDForProductChanges"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresAcceptanceCriteriaForFeatures"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresMVPForRoadmap"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresProductIntelligenceGate"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresProductExperienceGate"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresCloudSixDesignLanguage"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresVisualQualityScore"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresADRForArchitectureChanges"], true) || changed;
  changed = setValue(upgraded, ["governance", "requiresRFCForScopeChanges"], true) || changed;
  changed = setValue(upgraded, ["runtime", "currentStage"], upgraded.runtime && upgraded.runtime.currentStage ? upgraded.runtime.currentStage : "ready") || changed;
  changed = setValue(upgraded, ["runtime", "status"], upgraded.runtime && upgraded.runtime.status ? upgraded.runtime.status : "enabled") || changed;
  changed = setValue(upgraded, ["runtime", "requiresContextLoader"], true) || changed;
  changed = setValue(upgraded, ["runtime", "requiresTaskRouter"], true) || changed;
  changed = setValue(upgraded, ["runtime", "requiresPromptBuilder"], true) || changed;
  changed = setValue(upgraded, ["runtime", "requiresDecisionRuntime"], true) || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "readme"], ".ceip/runtime/README.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "contextLoad"], ".ceip/runtime/context-load.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "taskRouting"], ".ceip/runtime/task-routing.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "promptBuilder"], ".ceip/runtime/prompt-builder.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "executionPlan"], ".ceip/runtime/execution-plan.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "decisionRuntime"], ".ceip/runtime/decision-runtime.md") || changed;
  changed = setValue(upgraded, ["runtime", "artifacts", "evolutionProtocol"], ".ceip/runtime/evolution-protocol.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "currentStage"], upgraded.productIntelligence && upgraded.productIntelligence.currentStage ? upgraded.productIntelligence.currentStage : "idea") || changed;
  changed = setValue(upgraded, ["productIntelligence", "status"], upgraded.productIntelligence && upgraded.productIntelligence.status ? upgraded.productIntelligence.status : "not_started") || changed;
  changed = setValue(upgraded, ["productIntelligence", "requiresDiscovery"], true) || changed;
  changed = setValue(upgraded, ["productIntelligence", "requiresPRD"], true) || changed;
  changed = setValue(upgraded, ["productIntelligence", "requiresMVP"], true) || changed;
  changed = setValue(upgraded, ["productIntelligence", "requiresRoadmap"], true) || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "ideaBrief"], ".ceip/product-intelligence/idea-brief.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "discoveryBrief"], ".ceip/product-intelligence/discovery-brief.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "prd"], ".ceip/product-intelligence/prd.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "requirementsMap"], ".ceip/product-intelligence/requirements-map.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "mvp"], ".ceip/product-intelligence/mvp.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "roadmap"], ".ceip/product-intelligence/roadmap.md") || changed;
  changed = setValue(upgraded, ["productIntelligence", "artifacts", "acceptanceCriteria"], ".ceip/product-intelligence/acceptance-criteria.md") || changed;
  changed = setValue(upgraded, ["productExperience", "currentStage"], upgraded.productExperience && upgraded.productExperience.currentStage ? upgraded.productExperience.currentStage : "not_started") || changed;
  changed = setValue(upgraded, ["productExperience", "status"], upgraded.productExperience && upgraded.productExperience.status ? upgraded.productExperience.status : "not_started") || changed;
  changed = setValue(upgraded, ["productExperience", "requiresExperienceBrief"], true) || changed;
  changed = setValue(upgraded, ["productExperience", "requiresCloudSixDesignLanguage"], true) || changed;
  changed = setValue(upgraded, ["productExperience", "requiresDesignReview"], true) || changed;
  changed = setValue(upgraded, ["productExperience", "requiresVisualQualityScore"], true) || changed;
  changed = setValue(upgraded, ["productExperience", "requiresProductExperienceGate"], true) || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "cloudsixDesignLanguage"], ".ceip/product-experience/cloudsix-design-language.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "cdlCompliance"], ".ceip/product-experience/cdl-compliance.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "experienceBrief"], ".ceip/product-experience/experience-brief.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "screenInventory"], ".ceip/product-experience/screen-inventory.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "designDecisions"], ".ceip/product-experience/design-decisions.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "interactionStates"], ".ceip/product-experience/interaction-states.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "visualQualityScore"], ".ceip/product-experience/visual-quality-score.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "reviewNotes"], ".ceip/product-experience/review-notes.md") || changed;
  changed = setValue(upgraded, ["productExperience", "artifacts", "experienceMemory"], ".ceip/product-experience/experience-memory.md") || changed;
  changed = setValue(upgraded, ["safety", "preserveExistingWorkspaceFiles"], true) || changed;
  changed = setValue(upgraded, ["safety", "requiresForceForOverwrite"], true) || changed;
  changed = setValue(upgraded, ["safety", "backupBeforeOverwrite"], true) || changed;
  changed = setValue(upgraded, ["safety", "generatedArtifactsHistory"], true) || changed;
  changed = setValue(upgraded, ["safety", "backupDirectory"], ".ceip/backups") || changed;
  changed = setValue(upgraded, ["safety", "runtimeHistoryDirectory"], ".ceip/runtime/history") || changed;
  changed = setValue(upgraded, ["safety", "promptHistoryDirectory"], ".ceip/output/generated-prompts/history") || changed;

  if (!changed) {
    result.skipped.push(".ceip/project.json já está atualizado");
    return;
  }

  if (result.dryRun) {
    result.updated.push(".ceip/project.json seria atualizado com merge não destrutivo");
    return;
  }

  const backupPath = backupExistingFile(cwd, projectJsonPath, result.stamp);
  result.backups.push(path.relative(cwd, backupPath));
  writeText(projectJsonPath, `${JSON.stringify(upgraded, null, 2)}\n`);
  result.updated.push(".ceip/project.json");
}

function updateGitignore(cwd, result) {
  const gitignorePath = path.join(cwd, ".gitignore");
  const missing = GITIGNORE_LINES.filter((line) => {
    if (!exists(gitignorePath)) {
      return true;
    }
    return !readText(gitignorePath).split(/\r?\n/).includes(line);
  });

  if (missing.length === 0) {
    result.skipped.push(".gitignore já contém entradas CEIP recomendadas");
    return;
  }

  if (result.dryRun) {
    result.updated.push(`.gitignore receberia: ${missing.join(", ")}`);
    return;
  }

  appendUniqueLines(gitignorePath, GITIGNORE_LINES, "# CEIP temporary and local safety files");
  result.updated.push(".gitignore");
}

function writeUpgradeReport(cwd, result) {
  if (result.dryRun) {
    return;
  }

  const reportPath = path.join(cwd, ".ceip", "upgrades", `${result.stamp}-workspace-upgrade.md`);
  ensureDir(path.dirname(reportPath));
  const report = writeHistoricalArtifact(reportPath, renderUpgradeReport(result));
  result.reportPath = report.path;
}

function renderUpgradeReport(result) {
  return `# CEIP Workspace Upgrade

## Data

${result.stamp}

## Versão alvo

${WORKSPACE_VERSION}

## Arquivos criados

${formatList(result.created)}

## Arquivos atualizados

${formatList(result.updated)}

## Arquivos preservados

${formatList(result.skipped)}

## Backups criados

${formatList(result.backups)}

## Avisos

${formatList(result.warnings)}

## Política

Upgrade não destrutivo: arquivos existentes são preservados, metadados são atualizados por merge controlado e qualquer alteração em arquivo existente exige backup prévio.
`;
}

function readProjectJson(projectJsonPath, result) {
  if (!exists(projectJsonPath)) {
    result.warnings.push(".ceip/project.json não encontrado. Metadados do Workspace não foram atualizados.");
    return null;
  }
  try {
    return JSON.parse(readText(projectJsonPath));
  } catch (error) {
    result.warnings.push(`.ceip/project.json inválido. Corrija o JSON antes de atualizar. ${error.message}`);
    return null;
  }
}

function setValue(target, pathParts, value) {
  let current = target;
  for (let index = 0; index < pathParts.length - 1; index += 1) {
    const key = pathParts[index];
    if (!current[key] || typeof current[key] !== "object" || Array.isArray(current[key])) {
      current[key] = {};
    }
    current = current[key];
  }

  const key = pathParts[pathParts.length - 1];
  if (current[key] === value) {
    return false;
  }
  current[key] = value;
  return true;
}

function historyReadme(title, description) {
  return `# ${title}

${description}

Arquivos nesta área são gerados por comandos CEIP e devem ser revisados antes de compartilhamento externo.
`;
}

function formatList(items) {
  if (!items || items.length === 0) {
    return "- nenhum";
  }
  return items.map((item) => `- ${item}`).join("\n");
}

module.exports = {
  upgradeWorkspace,
  renderUpgradeReport
};
