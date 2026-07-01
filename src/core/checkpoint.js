const { execSync } = require("child_process");
const path = require("path");
const {
  fileStamp,
  parseExecutionArgs,
  writeCurrentArtifact,
  writeHistoricalArtifact
} = require("./artifacts");
const { detectProject } = require("./detector");
const { ensureDir, exists, readText, writeText } = require("./filesystem");

function buildCheckpoint(cwd, args = []) {
  const parsed = parseExecutionArgs(args);
  const task = parsed.task || "Checkpoint CEIP sem tarefa informada.";
  const detection = detectProject(cwd);
  const status = parseStatus(runGit(cwd, ["status", "--porcelain"]));
  const changedFiles = status.map((item) => item.file);
  const areas = classifyAreas(changedFiles);
  const staleSignals = detectStaleSignals(cwd, changedFiles);
  const gates = inferGates(areas, changedFiles);

  return {
    dryRun: parsed.options.dryRun,
    force: parsed.options.force,
    task,
    detection,
    generatedAt: new Date(),
    git: {
      branch: runGit(cwd, ["branch", "--show-current"]) || "detached",
      head: runGit(cwd, ["log", "-1", "--oneline"]) || "sem commit",
      remote: detection.remoteUrl || "não identificado"
    },
    status,
    areas,
    gates,
    staleSignals
  };
}

function renderCheckpoint(checkpoint) {
  return `# CEIP Checkpoint

## Tarefa

${checkpoint.task}

## Git Snapshot

- Data: ${formatDateTime(checkpoint.generatedAt)}
- Branch: ${checkpoint.git.branch}
- HEAD: ${checkpoint.git.head}
- Remote: ${checkpoint.git.remote}
- Workspace CEIP: ${checkpoint.detection.hasCeipWorkspace ? "sim" : "não"}
- Core local: ${checkpoint.detection.hasCeipCoreSubmodule ? "sim" : "não"}

## Mudanças detectadas

### Áreas

${formatList(checkpoint.areas.length ? checkpoint.areas : ["nenhuma mudança detectada"])}

### Arquivos

${formatStatus(checkpoint.status)}

## Gates recomendados

${formatList(checkpoint.gates)}

## Sinais de artefatos possivelmente atrasados

${formatStaleSignals(checkpoint.staleSignals)}

## Ações recomendadas

${formatList(recommendedActions(checkpoint))}

## Prompt para IA

\`\`\`text
Atue segundo a CloudSix Engineering Intelligence Platform.

Execute um checkpoint do Workspace CEIP para a tarefa:
${checkpoint.task}

Use apenas evidências do Git, dos arquivos alterados e dos artefatos .ceip existentes.
Não invente requisito, decisão, teste, status de gate ou resultado não observado.

Verifique:
- se Runtime Pack, implementação, logs, known issues, dívida técnica e quality dashboard estão coerentes;
- se Product Intelligence, Product Experience e ADRs foram respeitados;
- se os gates recomendados têm evidências suficientes;
- se há documentos atrasados em relação ao código.

Entregue:
- resumo do avanço real;
- artefatos .ceip que precisam de atualização;
- validações que devem ser executadas antes do commit;
- riscos e próximos passos.
\`\`\`
`;
}

function writeCheckpoint(cwd, checkpoint, content) {
  if (!checkpoint.detection.hasCeipWorkspace) {
    return null;
  }

  const stamp = fileStamp(checkpoint.generatedAt);
  const runtimeDir = path.join(cwd, ".ceip", "runtime");
  const runtimeHistoryDir = path.join(runtimeDir, "history", "checkpoint");
  const reviewsDir = path.join(cwd, ".ceip", "reviews");
  const promptDir = path.join(cwd, ".ceip", "output", "generated-prompts");
  const promptHistoryDir = path.join(promptDir, "history", "checkpoint");
  const logPath = path.join(cwd, ".ceip", "logs", "implementation-log.md");

  ensureDir(runtimeDir);
  ensureDir(runtimeHistoryDir);
  ensureDir(reviewsDir);
  ensureDir(promptDir);
  ensureDir(promptHistoryDir);
  ensureDir(path.dirname(logPath));

  const runtimePath = path.join(runtimeDir, "checkpoint-runtime-pack.md");
  const runtimeHistoryPath = path.join(runtimeHistoryDir, `${stamp}-checkpoint-runtime-pack.md`);
  const reviewPath = path.join(reviewsDir, `${stamp}-ceip-checkpoint.md`);
  const promptPath = path.join(promptDir, "checkpoint-prompt.md");
  const promptHistoryPath = path.join(promptHistoryDir, `${stamp}-checkpoint-prompt.md`);

  const runtimeHistory = writeHistoricalArtifact(runtimeHistoryPath, content);
  const review = writeHistoricalArtifact(reviewPath, renderReview(checkpoint));
  const promptHistory = writeHistoricalArtifact(promptHistoryPath, extractPrompt(content));
  const currentOptions = { force: checkpoint.force, stamp };
  const runtimeCurrent = writeCurrentArtifact(cwd, runtimePath, content, currentOptions);
  const promptCurrent = writeCurrentArtifact(cwd, promptPath, extractPrompt(content), currentOptions);
  appendImplementationLog(logPath, checkpoint);

  return {
    runtimeCurrent,
    runtimeHistory,
    review,
    promptCurrent,
    promptHistory,
    logPath,
    backups: [runtimeCurrent.backupPath, promptCurrent.backupPath].filter(Boolean)
  };
}

function renderReview(checkpoint) {
  return `# CEIP Checkpoint Review

## Objetivo

Registrar checkpoint automático do Workspace CEIP com base no estado real do Git e nos artefatos locais.

## Tarefa

${checkpoint.task}

## Evidências

- Data: ${formatDateTime(checkpoint.generatedAt)}
- Branch: ${checkpoint.git.branch}
- HEAD: ${checkpoint.git.head}
- Áreas alteradas: ${checkpoint.areas.length ? checkpoint.areas.join(", ") : "nenhuma"}

## Arquivos alterados

${formatStatus(checkpoint.status)}

## Gates recomendados

${formatList(checkpoint.gates)}

## Artefatos possivelmente atrasados

${formatStaleSignals(checkpoint.staleSignals)}

## Checklist

- [ ] Validações do projeto foram executadas e registradas.
- [ ] Runtime Pack do corte atual está coerente com o código.
- [ ] Implementation Log foi atualizado.
- [ ] Known Issues e Technical Debt refletem o estado atual.
- [ ] Quality Dashboard reflete os gates reais.
- [ ] Mudanças de arquitetura possuem ADR.
- [ ] Mudanças de produto possuem PRD/requisitos/AC rastreáveis.

## Conclusão

Checkpoint gerado automaticamente. Revisar sinais e atualizar os artefatos indicados antes de concluir ou commitar o corte.
`;
}

function appendImplementationLog(logPath, checkpoint) {
  const current = exists(logPath) ? readText(logPath).replace(/\s*$/, "") : "# Implementation Log";
  const block = `

## ${formatDateTime(checkpoint.generatedAt)} - CEIP Checkpoint

- Tarefa: ${checkpoint.task}
- Branch: ${checkpoint.git.branch}
- HEAD: ${checkpoint.git.head}
- Áreas alteradas: ${checkpoint.areas.length ? checkpoint.areas.join(", ") : "nenhuma"}
- Arquivos alterados: ${checkpoint.status.length}
- Gates recomendados: ${checkpoint.gates.join(", ")}
- Sinais de sincronização: ${checkpoint.staleSignals.length ? checkpoint.staleSignals.map((item) => item.file).join(", ") : "nenhum"}
`;

  writeText(logPath, `${current}${block}\n`);
}

function parseStatus(output) {
  return output
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => {
      const rawStatus = line.slice(0, 2);
      const file = line.slice(3).trim();
      return {
        rawStatus,
        status: describeStatus(rawStatus),
        file
      };
    });
}

function describeStatus(rawStatus) {
  if (rawStatus === "??") {
    return "untracked";
  }
  if (rawStatus[0] !== " " && rawStatus[1] !== " ") {
    return "staged+unstaged";
  }
  if (rawStatus[0] !== " ") {
    return "staged";
  }
  if (rawStatus[1] !== " ") {
    return "modified";
  }
  return rawStatus.trim() || "unknown";
}

function classifyAreas(files) {
  const areas = new Set();

  for (const file of files) {
    if (file.startsWith(".ceip/")) areas.add("ceip-workspace");
    if (file.startsWith(".cloudsix/method")) areas.add("ceip-core-reference");
    if (file.startsWith("api/app/") || file.startsWith("api/routes/")) areas.add("backend-api");
    if (file.startsWith("api/database/")) areas.add("database");
    if (file.startsWith("api/tests/")) areas.add("backend-tests");
    if (file.startsWith("app/src/") || file.startsWith("app/tests/")) areas.add("frontend");
    if (file.startsWith("app/") && /test|spec|playwright|vitest/i.test(file)) areas.add("frontend-tests");
    if (file.startsWith("infra/")) areas.add("infra");
    if (/auth|login|permission|acl|role|membership|tenant/i.test(file)) areas.add("security-iam");
    if (/README|\.md$/.test(file)) areas.add("documentation");
  }

  return [...areas].sort();
}

function inferGates(areas, files) {
  const gates = new Set(["documentation-gate"]);
  const joined = files.join("\n").toLowerCase();

  if (areas.includes("backend-api")) gates.add("backend-gate");
  if (areas.includes("database")) gates.add("database-gate");
  if (areas.includes("backend-tests") || areas.includes("frontend-tests")) gates.add("qa-gate");
  if (areas.includes("frontend")) gates.add("frontend-gate");
  if (areas.includes("infra")) gates.add("release-gate");
  if (areas.includes("security-iam") || /(auth|login|permission|acl|tenant|token|security)/i.test(joined)) {
    gates.add("security-gate");
    gates.add("qa-gate");
  }
  if (areas.includes("ceip-workspace")) gates.add("review-gate");

  return [...gates].sort();
}

function detectStaleSignals(cwd, changedFiles) {
  const signals = [];
  const hasCode = changedFiles.some((file) => /^(api|app|infra)\//.test(file));
  const hasAuth = changedFiles.some((file) => /(auth|login|membership|permission|acl|role|tenant)/i.test(file));
  const hasTests = changedFiles.some((file) => /(^api\/tests\/|^app\/.*(test|spec)|playwright|vitest)/i.test(file));

  addSignalIfText(
    signals,
    cwd,
    ".ceip/TECHNICAL_DEBT.md",
    hasCode && /Ainda n[aã]o h[aá] c[oó]digo/i,
    "Documento ainda declara ausência de código, mas há mudanças em código."
  );
  addSignalIfText(
    signals,
    cwd,
    ".ceip/KNOWN_ISSUES.md",
    hasTests && /Plano de testes automatizados ainda pendente/i,
    "Documento ainda declara plano de testes pendente, mas há testes alterados."
  );
  addSignalIfText(
    signals,
    cwd,
    ".ceip/KNOWN_ISSUES.md",
    hasAuth && /Matriz de permiss[oõ]es ainda pendente/i,
    "Documento ainda declara matriz de permissões pendente, mas há implementação IAM/auth."
  );
  addSignalIfText(
    signals,
    cwd,
    ".ceip/QUALITY_DASHBOARD.md",
    hasCode && /Backend\/API\s*\|\s*Pendente/i,
    "Quality Dashboard ainda marca Backend/API como pendente apesar de mudanças em backend."
  );
  addSignalIfText(
    signals,
    cwd,
    ".ceip/QUALITY_DASHBOARD.md",
    hasCode && /Database\s*\|\s*Pendente/i,
    "Quality Dashboard ainda marca Database como pendente apesar de scaffold/migrações/modelos."
  );
  addSignalIfText(
    signals,
    cwd,
    ".ceip/runtime/iam-runtime-pack.md",
    hasAuth && /Escopo fora deste corte:\s*login real/i,
    "Runtime Pack de IAM ainda diz que login real está fora do corte, mas há mudanças de auth/login."
  );

  return signals;
}

function addSignalIfText(signals, cwd, relativePath, condition, message) {
  const fullPath = path.join(cwd, relativePath);
  if (!exists(fullPath) || !condition) {
    return;
  }

  const text = readText(fullPath);
  const regex = condition instanceof RegExp ? condition : null;
  if (regex && !regex.test(text)) {
    return;
  }

  signals.push({
    file: relativePath,
    message
  });
}

function recommendedActions(checkpoint) {
  const actions = [
    "Executar validações do projeto antes do commit.",
    "Atualizar `.ceip/logs/implementation-log.md` com resultados reais das validações.",
    "Revisar `.ceip/QUALITY_DASHBOARD.md` para refletir gates parciais, aprovados ou pendentes."
  ];

  if (checkpoint.staleSignals.length > 0) {
    actions.push("Atualizar os artefatos listados em sinais de atraso antes de concluir o corte.");
  }
  if (checkpoint.areas.includes("security-iam")) {
    actions.push("Confirmar Security Gate e QA Gate para autenticação, autorização, tenant e token.");
  }
  if (checkpoint.areas.includes("backend-api")) {
    actions.push("Garantir testes de backend para fluxos positivos, negativos e isolamento multi-tenant.");
  }
  if (checkpoint.areas.includes("frontend")) {
    actions.push("Aplicar Product Experience/CDL, estados de tela e validação responsiva.");
  }

  return actions;
}

function runGit(cwd, args) {
  try {
    return execSync(["git", ...args].join(" "), {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).replace(/\s+$/, "");
  } catch (_error) {
    return "";
  }
}

function formatStatus(status) {
  if (!status || status.length === 0) {
    return "- nenhuma mudança detectada";
  }

  return status.map((item) => `- ${item.status}: ${item.file}`).join("\n");
}

function formatStaleSignals(signals) {
  if (!signals || signals.length === 0) {
    return "- nenhum sinal automático encontrado";
  }

  return signals.map((item) => `- ${item.file}: ${item.message}`).join("\n");
}

function formatList(items) {
  if (!items || items.length === 0) {
    return "- nenhum";
  }

  return items.map((item) => `- ${item}`).join("\n");
}

function extractPrompt(content) {
  const match = content.match(/```text\n([\s\S]*?)\n```/);
  if (!match) {
    return content;
  }
  return `# Prompt Gerado\n\n\`\`\`text\n${match[1]}\n\`\`\`\n`;
}

function formatDateTime(date) {
  return date.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC");
}

module.exports = {
  buildCheckpoint,
  renderCheckpoint,
  writeCheckpoint
};
