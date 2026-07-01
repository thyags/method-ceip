const path = require("path");
const { detectProject } = require("../core/detector");
const { exists, listFilesRecursive, readText } = require("../core/filesystem");
const { GITIGNORE_LINES } = require("../core/writer");
const { section } = require("../core/logger");

const REQUIRED_WORKSPACE_FILES = [
  ".ceip/README.md",
  ".ceip/PROJECT.md",
  ".ceip/STACK.md",
  ".ceip/CONTEXT.md",
  ".ceip/runtime/README.md",
  ".ceip/runtime/context-load.md",
  ".ceip/runtime/task-routing.md",
  ".ceip/runtime/prompt-builder.md",
  ".ceip/runtime/execution-plan.md",
  ".ceip/runtime/decision-runtime.md",
  ".ceip/runtime/evolution-protocol.md",
  ".ceip/runtime/history/README.md",
  ".ceip/output/generated-prompts/history/README.md",
  ".ceip/product-intelligence/README.md",
  ".ceip/product-intelligence/prd.md",
  ".ceip/product-intelligence/mvp.md",
  ".ceip/product-intelligence/roadmap.md",
  ".ceip/product-intelligence/acceptance-criteria.md",
  ".ceip/product-experience/README.md",
  ".ceip/product-experience/cloudsix-design-language.md",
  ".ceip/product-experience/experience-brief.md",
  ".ceip/product-experience/screen-inventory.md",
  ".ceip/product-experience/design-decisions.md",
  ".ceip/product-experience/interaction-states.md",
  ".ceip/product-experience/cdl-compliance.md",
  ".ceip/product-experience/visual-quality-score.md",
  ".ceip/product-experience/review-notes.md",
  ".ceip/product-experience/experience-memory.md",
  ".ceip/project.json"
];

const SENSITIVE_NAME_PATTERNS = [
  /\.env$/i,
  /secret/i,
  /token/i,
  /api[-_]?key/i,
  /private[-_]?key/i,
  /\.pem$/i,
  /\.key$/i,
  /id_rsa/i
];

async function runDoctor() {
  const cwd = process.cwd();
  const detection = detectProject(cwd);
  const checks = [];

  checks.push(check("Git repository", detection.insideGit, "Diretório atual não parece estar dentro de um repositório Git."));
  checks.push(check(".ceip/", detection.hasCeipWorkspace, "Workspace .ceip/ não encontrado."));
  checks.push(check(".ceip/project.json", exists(path.join(cwd, ".ceip", "project.json")), "project.json não encontrado."));
  checks.push(check("project.json Runtime", projectJsonHasRuntime(cwd), "project.json não declara governança de Runtime, Context Loader e Prompt Builder."));
  checks.push(check("project.json Evolution Protocol", projectJsonHasEvolutionProtocol(cwd), "project.json não declara runtime.artifacts.evolutionProtocol. Execute ceip upgrade."));
  checks.push(check("project.json Safety", projectJsonHasSafety(cwd), "project.json não declara política safety de preservação, backup e histórico. Execute ceip upgrade."));
  checks.push(check("project.json Product Intelligence", projectJsonHasProductIntelligence(cwd), "project.json não declara governança de Product Intelligence."));
  checks.push(check("project.json Product Experience", projectJsonHasProductExperience(cwd), "project.json não declara governança de Product Experience."));
  checks.push(check("project.json CloudSix Design Language", projectJsonHasCloudSixDesignLanguage(cwd), "project.json não declara governança e artefatos da CloudSix Design Language."));
  checks.push(check("AGENTS.md", detection.hasAgentsFile, "AGENTS.md não encontrado na raiz."));
  checks.push(check("AGENTS.md Runtime", aiFileMentionsRuntime(cwd), "AGENTS.md não orienta consulta ao CEIP Runtime."));
  checks.push(check("AGENTS.md Product Intelligence", aiFileMentionsProductIntelligence(cwd), "AGENTS.md não orienta consulta ao Product Intelligence System."));
  checks.push(check("AGENTS.md Product Experience", aiFileMentionsProductExperience(cwd), "AGENTS.md não orienta consulta ao Product Experience System."));
  checks.push(check("AGENTS.md CloudSix Design Language", aiFileMentionsCloudSixDesignLanguage(cwd), "AGENTS.md não orienta consulta à CloudSix Design Language."));
  checks.push(check("CEIP Core reference", hasCoreReference(cwd), "Não encontrei .cloudsix/method nem .ceip/CEIP_CORE_REFERENCE.md."));

  for (const relativePath of REQUIRED_WORKSPACE_FILES) {
    checks.push(check(relativePath, exists(path.join(cwd, relativePath)), `${relativePath} não encontrado.`));
  }

  checks.push(check(".gitignore CEIP temp entries", gitignoreHasEntries(cwd), ".gitignore não contém todas as entradas temporárias recomendadas."));

  const sensitive = findSensitiveFiles(cwd);
  checks.push({
    name: "Sensitive file names in .ceip/",
    ok: sensitive.length === 0,
    message: sensitive.length === 0 ? "" : `Possíveis arquivos sensíveis: ${sensitive.join(", ")}`
  });

  section("CEIP Doctor");
  for (const item of checks) {
    console.log(`${item.ok ? "ok  " : "warn"} ${item.name}${item.ok ? "" : ` - ${item.message}`}`);
  }

  const warnings = checks.filter((item) => !item.ok).length;
  console.log(`\nResultado: ${warnings === 0 ? "aprovado" : `${warnings} aviso(s)`}`);
}

function check(name, ok, message) {
  return { name, ok, message };
}

function hasCoreReference(cwd) {
  return exists(path.join(cwd, ".cloudsix", "method")) || exists(path.join(cwd, ".ceip", "CEIP_CORE_REFERENCE.md"));
}

function gitignoreHasEntries(cwd) {
  const gitignore = path.join(cwd, ".gitignore");
  if (!exists(gitignore)) {
    return false;
  }
  const text = readText(gitignore);
  return GITIGNORE_LINES.every((line) => text.split(/\r?\n/).includes(line));
}

function projectJsonHasProductIntelligence(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(parsed.governance && parsed.governance.requiresProductIntelligence && parsed.productIntelligence);
  } catch (_error) {
    return false;
  }
}

function projectJsonHasRuntime(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(
      parsed.governance &&
        parsed.governance.requiresRuntime &&
        parsed.governance.requiresContextLoader &&
        parsed.governance.requiresPromptBuilder &&
        parsed.runtime &&
        parsed.runtime.artifacts &&
        parsed.runtime.artifacts.contextLoad &&
        parsed.runtime.artifacts.promptBuilder
    );
  } catch (_error) {
    return false;
  }
}

function projectJsonHasEvolutionProtocol(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(parsed.runtime && parsed.runtime.artifacts && parsed.runtime.artifacts.evolutionProtocol);
  } catch (_error) {
    return false;
  }
}

function projectJsonHasSafety(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(
      parsed.safety &&
        parsed.safety.preserveExistingWorkspaceFiles &&
        parsed.safety.requiresForceForOverwrite &&
        parsed.safety.backupBeforeOverwrite &&
        parsed.safety.generatedArtifactsHistory &&
        parsed.safety.backupDirectory &&
        parsed.safety.runtimeHistoryDirectory &&
        parsed.safety.promptHistoryDirectory
    );
  } catch (_error) {
    return false;
  }
}

function projectJsonHasProductExperience(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(parsed.governance && parsed.governance.requiresProductExperience && parsed.productExperience);
  } catch (_error) {
    return false;
  }
}

function projectJsonHasCloudSixDesignLanguage(cwd) {
  const target = path.join(cwd, ".ceip", "project.json");
  if (!exists(target)) {
    return false;
  }
  try {
    const parsed = JSON.parse(readText(target));
    return Boolean(
      parsed.governance &&
        parsed.governance.requiresCloudSixDesignLanguage &&
        parsed.productExperience &&
        parsed.productExperience.requiresCloudSixDesignLanguage &&
        parsed.productExperience.artifacts &&
        parsed.productExperience.artifacts.cloudsixDesignLanguage &&
        parsed.productExperience.artifacts.cdlCompliance
    );
  } catch (_error) {
    return false;
  }
}

function aiFileMentionsProductIntelligence(cwd) {
  const target = path.join(cwd, "AGENTS.md");
  return exists(target) && /Product Intelligence|product-intelligence/.test(readText(target));
}

function aiFileMentionsRuntime(cwd) {
  const target = path.join(cwd, "AGENTS.md");
  return exists(target) && /CEIP Runtime|runtime\/README|Context Loader|Prompt Builder/.test(readText(target));
}

function aiFileMentionsProductExperience(cwd) {
  const target = path.join(cwd, "AGENTS.md");
  return exists(target) && /Product Experience|product-experience/.test(readText(target));
}

function aiFileMentionsCloudSixDesignLanguage(cwd) {
  const target = path.join(cwd, "AGENTS.md");
  return exists(target) && /CloudSix Design Language|CLOUDSIX_DESIGN_LANGUAGE|cloudsix-design-language|CDL/.test(readText(target));
}

function findSensitiveFiles(cwd) {
  const ceipPath = path.join(cwd, ".ceip");
  return listFilesRecursive(ceipPath)
    .map((filePath) => path.relative(cwd, filePath))
    .filter((relativePath) => SENSITIVE_NAME_PATTERNS.some((pattern) => pattern.test(relativePath)));
}

module.exports = {
  runDoctor
};
