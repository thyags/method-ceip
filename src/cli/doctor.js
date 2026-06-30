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
  checks.push(check("AGENTS.md", detection.hasAgentsFile, "AGENTS.md não encontrado na raiz."));
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

function findSensitiveFiles(cwd) {
  const ceipPath = path.join(cwd, ".ceip");
  return listFilesRecursive(ceipPath)
    .map((filePath) => path.relative(cwd, filePath))
    .filter((relativePath) => SENSITIVE_NAME_PATTERNS.some((pattern) => pattern.test(relativePath)));
}

module.exports = {
  runDoctor
};
