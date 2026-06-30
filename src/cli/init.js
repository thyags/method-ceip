const path = require("path");
const { detectProject } = require("../core/detector");
const { createPrompt } = require("../core/prompts");
const { initializeProject, printResult } = require("../core/writer");
const { section, logInfo, logSuccess, logWarn } = require("../core/logger");

const LANGUAGES = ["pt-BR", "en-US", "es-ES"];
const PROJECT_TYPES = ["SaaS", "ERP", "CRM", "Site institucional", "Marketplace", "Sistema legado", "App mobile", "API", "Outro"];
const AI_TOOLS = ["Codex", "Claude Code", "Cursor", "Windsurf", "Gemini CLI", "GitHub Copilot", "Outro"];
const INTEGRATION_MODES = ["Git submodule", "Referência externa", "Cópia local mínima"];
const TOOL_FILES = {
  Codex: "CODEX.md",
  "Claude Code": "CLAUDE.md",
  Cursor: "CURSOR.md",
  Windsurf: "WINDSURF.md",
  "Gemini CLI": "GEMINI.md",
  "GitHub Copilot": "COPILOT.md"
};

async function runInit() {
  const cwd = process.cwd();
  const detection = detectProject(cwd);
  const prompt = createPrompt();

  try {
    section("CEIP Installer");
    logInfo(`Projeto detectado: ${detection.projectName}`);
    logInfo(`Git: ${detection.insideGit ? "repositório detectado" : "não identificado"}`);
    if (detection.remoteUrl) {
      logInfo(`Remote: ${detection.remoteUrl}`);
    }
    if (detection.hasCeipWorkspace) {
      logWarn("Workspace .ceip/ já existe. Arquivos existentes não serão sobrescritos sem confirmação.");
    }
    if (detection.hasCeipCoreSubmodule) {
      logInfo("CEIP Core já encontrado em .cloudsix/method.");
    }

    const answers = await collectAnswers(prompt, detection);
    const result = await initializeProject(cwd, answers, detection, prompt);

    section("Resultado");
    printResult(result);
    logSuccess("Inicialização CEIP concluída.");
    logWarn("Revise .ceip/ antes de compartilhar o repositório. Nunca versionar segredos, tokens ou chaves.");
  } finally {
    prompt.close();
  }
}

async function collectAnswers(prompt, detection) {
  const projectName = await prompt.text("Nome do projeto", detection.projectName);
  const description = await prompt.text("Descrição breve do projeto", "");
  const owner = await prompt.text("Responsável ou empresa", "");
  const language = await prompt.select("Idioma da documentação", LANGUAGES, "pt-BR");
  const projectType = await prompt.select("Tipo de projeto", PROJECT_TYPES, "SaaS");
  const aiTools = await prompt.multiSelect("Ferramentas de IA que pretende usar", AI_TOOLS, ["Codex"]);
  const integrationMode = await prompt.select("Forma de integração do CEIP Core", INTEGRATION_MODES, "Git submodule");
  const createWorkspace = await prompt.confirm("Criar workspace .ceip/?", true);
  const createProductIntelligence = createWorkspace
    ? await prompt.confirm("Criar estrutura de Product Intelligence?", true)
    : false;
  const createProductExperience = createWorkspace
    ? await prompt.confirm("Criar estrutura de Product Experience e CDL?", true)
    : false;
  const createAgents = await prompt.confirm("Criar AGENTS.md na raiz?", !detection.hasAgentsFile);

  const defaultToolFiles = aiTools
    .map((tool) => TOOL_FILES[tool])
    .filter(Boolean);
  const toolFileChoices = ["CODEX.md", "CLAUDE.md", "CURSOR.md", "GEMINI.md", "WINDSURF.md", "COPILOT.md"];
  const toolFiles = await prompt.multiSelect("Arquivos específicos para ferramentas", toolFileChoices, defaultToolFiles);

  const createAdr = await prompt.confirm("Criar estrutura de ADR?", true);
  const createRfc = await prompt.confirm("Criar estrutura de RFC?", true);
  const createMemory = await prompt.confirm("Criar estrutura de memória?", true);
  const createReviews = await prompt.confirm("Criar estrutura de reviews?", true);
  const createMetrics = await prompt.confirm("Criar estrutura de métricas?", true);
  const updateGitignore = await prompt.confirm("Atualizar .gitignore com pastas temporárias do CEIP?", true);

  return {
    aiTools,
    createAdr,
    createAgents,
    createMemory,
    createMetrics,
    createProductExperience,
    createProductIntelligence,
    createReviews,
    createRfc,
    createWorkspace,
    description,
    integrationMode,
    language,
    owner,
    projectName,
    projectType,
    toolFiles,
    updateGitignore
  };
}

module.exports = {
  runInit
};
