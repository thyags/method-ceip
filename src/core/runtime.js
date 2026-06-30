const path = require("path");
const { detectProject } = require("./detector");
const { ensureDir, exists, readText, writeText } = require("./filesystem");

const COMMANDS = {
  analyze: {
    title: "CEIP Analyze",
    objective: "Entender o projeto, carregar contexto e identificar lacunas antes de qualquer execução.",
    agents: ["Business Analyst", "Chief Software Architect", "Documentation Engineer"],
    gates: ["documentation-gate", "architecture-gate"],
    output: "diagnóstico de contexto, lacunas, riscos e próximos passos"
  },
  plan: {
    title: "CEIP Plan",
    objective: "Transformar demanda em PRD, requisitos, MVP, roadmap, stories e critérios de aceite.",
    agents: ["Product Manager", "Business Analyst", "QA Engineer"],
    gates: ["product-intelligence-gate", "business-gate", "qa-gate"],
    output: "plano de produto e backlog inicial"
  },
  architect: {
    title: "CEIP Architect",
    objective: "Avaliar impacto arquitetural, alternativas, trade-offs e necessidade de ADR.",
    agents: ["Chief Software Architect", "Principal Staff Engineer", "Security Engineer"],
    gates: ["architecture-gate", "security-gate", "performance-gate"],
    output: "decisão arquitetural, riscos e ADR quando aplicável"
  },
  review: {
    title: "CEIP Review",
    objective: "Executar revisão por especialistas, localizar riscos e definir correções antes de aprovação.",
    agents: ["Code Reviewer Tech Lead", "QA Engineer", "Security Engineer", "Performance Engineer"],
    gates: ["review-gate", "qa-gate", "security-gate", "performance-gate"],
    output: "achados por severidade, evidências e decisão de aprovação"
  },
  release: {
    title: "CEIP Release",
    objective: "Validar readiness de release, quality gates, score, riscos e rollback.",
    agents: ["DevOps Engineer", "QA Engineer", "Security Engineer", "Documentation Engineer"],
    gates: ["release-gate", "documentation-gate", "security-gate", "performance-gate"],
    output: "parecer de release, bloqueios, mitigação e checklist final"
  },
  learn: {
    title: "CEIP Learn",
    objective: "Transformar aprendizados recorrentes em memória, pattern, anti-pattern, policy, recipe ou template.",
    agents: ["Knowledge Curator", "Documentation Engineer", "Chief Engineering Officer"],
    gates: ["documentation-gate", "review-gate"],
    output: "aprendizados classificados e proposta de evolução da CEIP"
  }
};

function buildRuntimePack(cwd, command, args) {
  const profile = COMMANDS[command];
  if (!profile) {
    throw new Error(`Comando runtime desconhecido: ${command}`);
  }

  const detection = detectProject(cwd);
  const task = args.join(" ").trim() || "Tarefa não informada. Descreva o objetivo antes de executar.";
  const projectJson = readJsonIfExists(path.join(cwd, ".ceip", "project.json"));
  const context = collectContext(cwd);

  return {
    command,
    profile,
    task,
    detection,
    projectJson,
    context,
    route: routeTask(command, task),
    generatedAt: new Date().toISOString()
  };
}

function renderRuntimePack(pack) {
  const stack = pack.detection.stack;
  const stackLine = [
    ...stack.languages,
    ...stack.frameworks,
    ...stack.databases,
    ...stack.infrastructure
  ].join(", ") || "não identificada";

  return `# ${pack.profile.title}

## Tarefa

${pack.task}

## Objetivo

${pack.profile.objective}

## Projeto

- Nome: ${pack.projectJson && pack.projectJson.project ? pack.projectJson.project.name : pack.detection.projectName}
- Repositório: ${pack.detection.remoteUrl || "não identificado"}
- Stack detectada: ${stackLine}
- Workspace CEIP: ${pack.detection.hasCeipWorkspace ? "sim" : "não"}
- Core local: ${pack.detection.hasCeipCoreSubmodule ? "sim" : "não"}

## Context Loader

### Fontes carregadas

${formatList(pack.context.loaded)}

### Fontes ausentes ou não preenchidas

${formatList(pack.context.missing)}

## Task Router

- Tipo: ${pack.route.type}
- Risco inicial: ${pack.route.risk}
- Product Intelligence: ${pack.route.requiresProductIntelligence ? "obrigatório" : "avaliar"}
- Product Experience: ${pack.route.requiresProductExperience ? "obrigatório" : "avaliar"}
- Runtime: obrigatório

## Agentes recomendados

${formatList(pack.profile.agents)}

## Policies e gates

${formatList(pack.profile.gates)}

## Prompt Builder

\`\`\`text
Atue segundo a CloudSix Engineering Intelligence Platform.

Comando runtime: ${pack.profile.title}
Objetivo: ${pack.profile.objective}
Tarefa: ${pack.task}

Antes de responder:
- carregue o contexto listado neste Runtime Pack;
- respeite CONSTITUTION.md, runtime/, POLICY_ENGINE.md e ORCHESTRATOR.md;
- use Product Intelligence quando houver produto, feature, módulo, API ou integração;
- use Product Experience, CDL e CDL Compliance quando houver interface relevante;
- não invente requisito, stack, dado, regra de negócio ou decisão não observada;
- registre lacunas e riscos antes de propor execução.

Entregue: ${pack.profile.output}.
\`\`\`

## Próximos passos

1. Completar lacunas de contexto antes de implementar.
2. Aplicar Policy Engine e Orchestrator.
3. Executar agentes recomendados.
4. Aplicar gates e score antes de concluir.
5. Registrar aprendizado em \`.ceip/memory/\` quando aplicável.
`;
}

function writeRuntimePack(cwd, pack, content) {
  if (!pack.detection.hasCeipWorkspace) {
    return null;
  }

  const runtimeDir = path.join(cwd, ".ceip", "runtime");
  const promptDir = path.join(cwd, ".ceip", "output", "generated-prompts");
  ensureDir(runtimeDir);
  ensureDir(promptDir);

  const runtimePath = path.join(runtimeDir, `${pack.command}-runtime-pack.md`);
  const promptPath = path.join(promptDir, `${pack.command}-prompt.md`);
  writeText(runtimePath, content);
  writeText(promptPath, extractPrompt(content));
  return {
    runtimePath,
    promptPath
  };
}

function collectContext(cwd) {
  const required = [
    ".ceip/PROJECT.md",
    ".ceip/STACK.md",
    ".ceip/CONTEXT.md",
    ".ceip/project.json",
    "AGENTS.md"
  ];
  const optional = [
    ".ceip/runtime/README.md",
    ".ceip/product-intelligence/README.md",
    ".ceip/product-experience/README.md",
    ".ceip/memory/README.md",
    ".ceip/adr/README.md",
    ".ceip/rfc/README.md"
  ];

  const loaded = [];
  const missing = [];

  for (const file of [...required, ...optional]) {
    const full = path.join(cwd, file);
    if (!exists(full)) {
      missing.push(file);
      continue;
    }
    const text = readText(full).trim();
    if (text.length === 0) {
      missing.push(`${file} vazio`);
    } else {
      loaded.push(file);
    }
  }

  return { loaded, missing };
}

function routeTask(command, task) {
  const normalized = task.toLowerCase();
  const requiresProductExperience = /(tela|interface|frontend|ux|ui|dashboard|formul[aá]rio|site|layout|visual)/i.test(normalized);
  const requiresProductIntelligence = /(produto|feature|funcionalidade|m[oó]dulo|api|integra[cç][aã]o|prd|roadmap|mvp|story|hist[oó]ria)/i.test(normalized);
  const highRisk = /(pagamento|financeiro|seguran[cç]a|login|auth|permiss[aã]o|dados sens[ií]veis|produ[cç][aã]o|release|migra[cç][aã]o)/i.test(normalized);

  return {
    type: command,
    risk: highRisk || command === "release" ? "alto" : "médio",
    requiresProductExperience,
    requiresProductIntelligence
  };
}

function readJsonIfExists(filePath) {
  if (!exists(filePath)) {
    return null;
  }
  try {
    return JSON.parse(readText(filePath));
  } catch (_error) {
    return null;
  }
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

module.exports = {
  COMMANDS,
  buildRuntimePack,
  renderRuntimePack,
  writeRuntimePack
};
