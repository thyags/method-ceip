const CEIP_REPO_URL = "https://github.com/thyags/method-cloudsix";
const WORKSPACE_VERSION = "1.0.0";
const CLI_VERSION = "0.1.0";

function projectJson(answers, detection) {
  return {
    ceipWorkspaceVersion: WORKSPACE_VERSION,
    project: {
      name: answers.projectName,
      type: answers.projectType,
      description: answers.description,
      status: "active",
      owner: answers.owner,
      repository: detection.remoteUrl || ""
    },
    preferences: {
      language: answers.language,
      aiTools: answers.aiTools
    },
    stack: detection.stack,
    architecture: {
      style: "not_identified",
      modules: [],
      integrations: [],
      criticalFlows: []
    },
    governance: {
      riskLevel: "not_classified",
      requiresPolicyEngine: true,
      requiresQualityGates: true,
      requiresADRForArchitectureChanges: true,
      requiresRFCForScopeChanges: true
    },
    quality: {
      currentScore: null,
      lastReviewDate: null,
      knownRisks: [],
      technicalDebt: []
    },
    memory: {
      lastUpdated: null,
      importantDecisions: [],
      lessonsLearned: []
    }
  };
}

function workspaceReadme(answers) {
  return `# CEIP Workspace - ${answers.projectName}

## Objetivo

Este diretório guarda o contexto local do projeto para uso com a CloudSix Engineering Intelligence Platform.

## Relação com o CEIP Core

- CEIP Core: método global, normalmente em \`.cloudsix/method\`.
- CEIP Workspace: contexto local deste projeto, em \`.ceip/\`.

## Regras

- Não armazenar senhas, tokens ou chaves.
- Não duplicar o CEIP Core dentro deste diretório.
- Registrar decisões, reviews, métricas e aprendizados locais.
- Consultar \`PROJECT.md\`, \`STACK.md\` e \`CONTEXT.md\` antes de tarefas relevantes.

## Checklist

- [ ] PROJECT.md preenchido.
- [ ] STACK.md preenchido com evidências.
- [ ] CONTEXT.md atualizado.
- [ ] project.json gerado.
- [ ] Segurança e privacidade revisadas.
`;
}

function projectMd(answers, detection) {
  return `# Projeto

## Nome

${answers.projectName}

## Descrição

${answers.description || "Não informada."}

## Responsável

${answers.owner || "Não informado."}

## Tipo de projeto

${answers.projectType}

## Status

active

## Repositório

${detection.remoteUrl || "Não identificado."}

## Objetivo

Descrever o objetivo do projeto e o resultado esperado para usuários e operação.

## Observações iniciais

- Documento criado pelo CEIP Installer.
- Revisar e completar com contexto real do projeto.
`;
}

function stackMd(detection) {
  const stack = detection.stack;
  const format = (items) => (items && items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- não identificado");

  return `# Stack

## Stack detectada automaticamente

### Linguagens

${format(stack.languages)}

### Frameworks

${format(stack.frameworks)}

### Bancos e ORMs

${format(stack.databases)}

### Frontend

${format(stack.frontend)}

### Backend

${format(stack.backend)}

### Infraestrutura

${format(stack.infrastructure)}

### Testes

${format(stack.testing)}

### Observabilidade

${format(stack.observability)}

## Itens não identificados

Preencher manualmente após inspeção do projeto.

## Observações para futuras análises

A detecção automática é conservadora. Quando não houver evidência suficiente, o item permanece como não identificado.
`;
}

function contextMd(answers) {
  return `# Contexto

## Contexto geral

${answers.description || "Descrever contexto geral do projeto."}

## Contexto técnico

Preencher após inspeção de arquitetura, dependências, módulos e ambientes.

## Contexto de negócio

Preencher com regras de negócio confirmadas, fluxos críticos e usuários impactados.

## Pontos pendentes

- Completar contexto de negócio.
- Revisar arquitetura atual.
- Identificar riscos conhecidos.

## Próximas informações a preencher

- Fluxos críticos.
- Integrações.
- Dados sensíveis.
- Critérios de qualidade.
`;
}

function simpleDoc(title, body) {
  return `# ${title}

${body}
`;
}

function agentsFile(toolName) {
  return `# ${toolName}

Este projeto utiliza a CloudSix Engineering Intelligence Platform - CEIP.

## CEIP Core

O método oficial deve estar disponível em:

\`\`\`text
.cloudsix/method
\`\`\`

## CEIP Workspace

O contexto local deste projeto está disponível em:

\`\`\`text
.ceip
\`\`\`

## Ordem obrigatória de consulta

1. \`.cloudsix/method/CONSTITUTION.md\`
2. \`.cloudsix/method/POLICY_ENGINE.md\`
3. \`.cloudsix/method/ORCHESTRATOR.md\`
4. \`.ceip/PROJECT.md\`
5. \`.ceip/STACK.md\`
6. \`.ceip/CONTEXT.md\`
7. \`.ceip/CURRENT_FOCUS.md\`, quando existir
8. Classificar tarefa
9. Classificar risco
10. Aplicar Quality Gates

## Regras

- Não inventar funcionalidades.
- Não alterar regra de negócio sem solicitação.
- Não assumir stack.
- Preservar arquitetura existente.
- Registrar ADR/RFC quando aplicável.
- Registrar aprendizados em \`.ceip/memory\`.
- Nunca gravar segredos no Workspace.
`;
}

function coreReference(integrationMode) {
  return `# CEIP Core Reference

## Modo de integração

${integrationMode}

## Repositório oficial

${CEIP_REPO_URL}

## Uso

Este projeto deve consultar o CEIP Core para Constituição, Policy Engine, Orchestrator, agentes, Quality Gates e padrões globais.

O contexto local fica em \`.ceip/\`.
`;
}

function minimalCoreReference() {
  return `# CEIP Core Minimal Reference

Este diretório não é uma cópia do CEIP Core.

Use-o apenas como referência mínima quando o projeto não puder usar submodule. A fonte oficial continua sendo:

${CEIP_REPO_URL}

## Documentos globais obrigatórios

- CONSTITUTION.md
- POLICY_ENGINE.md
- ORCHESTRATOR.md
- QUALITY_STANDARD.md
- AGENTS.md
`;
}

module.exports = {
  CEIP_REPO_URL,
  CLI_VERSION,
  WORKSPACE_VERSION,
  agentsFile,
  contextMd,
  coreReference,
  minimalCoreReference,
  projectJson,
  projectMd,
  simpleDoc,
  stackMd,
  workspaceReadme
};
