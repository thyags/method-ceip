const CEIP_REPO_URL = "https://github.com/thyags/method-cloudsix";
const WORKSPACE_VERSION = "1.1.0";
const CLI_VERSION = "0.2.0";

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
      requiresProductIntelligence: true,
      requiresPolicyEngine: true,
      requiresQualityGates: true,
      requiresPRDForProductChanges: true,
      requiresAcceptanceCriteriaForFeatures: true,
      requiresMVPForRoadmap: true,
      requiresProductIntelligenceGate: true,
      requiresADRForArchitectureChanges: true,
      requiresRFCForScopeChanges: true
    },
    productIntelligence: {
      currentStage: "idea",
      status: "not_started",
      requiresDiscovery: true,
      requiresPRD: true,
      requiresMVP: true,
      requiresRoadmap: true,
      artifacts: {
        ideaBrief: ".ceip/product-intelligence/idea-brief.md",
        discoveryBrief: ".ceip/product-intelligence/discovery-brief.md",
        prd: ".ceip/product-intelligence/prd.md",
        requirementsMap: ".ceip/product-intelligence/requirements-map.md",
        mvp: ".ceip/product-intelligence/mvp.md",
        roadmap: ".ceip/product-intelligence/roadmap.md",
        acceptanceCriteria: ".ceip/product-intelligence/acceptance-criteria.md"
      }
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
- Registrar artefatos de Product Intelligence em \`.ceip/product-intelligence/\` antes de arquitetura ou implementação relevante.
- Consultar \`PROJECT.md\`, \`STACK.md\` e \`CONTEXT.md\` antes de tarefas relevantes.

## Checklist

- [ ] PROJECT.md preenchido.
- [ ] STACK.md preenchido com evidências.
- [ ] CONTEXT.md atualizado.
- [ ] Product Intelligence iniciado quando houver ideia, produto, feature, módulo, API ou integração relevante.
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

## Product Intelligence

Antes de arquitetura ou implementação relevante, registrar discovery, PRD, requisitos, MVP, roadmap e critérios de aceite em \`.ceip/product-intelligence/\`.

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
- Preencher Product Intelligence quando houver demanda de produto.
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
2. \`.cloudsix/method/product-intelligence/README.md\`
3. \`.cloudsix/method/product-intelligence/PRODUCT_PIPELINE.md\`
4. \`.cloudsix/method/policy-engine/PRODUCT_INTELLIGENCE_POLICIES.md\`
5. \`.cloudsix/method/POLICY_ENGINE.md\`
6. \`.cloudsix/method/ORCHESTRATOR.md\`
7. \`.ceip/PROJECT.md\`
8. \`.ceip/STACK.md\`
9. \`.ceip/CONTEXT.md\`
10. \`.ceip/product-intelligence/README.md\`, quando existir
11. \`.ceip/CURRENT_FOCUS.md\`, quando existir
12. Classificar tarefa
13. Classificar risco
14. Aplicar Quality Gates

## Regras

- Não inventar funcionalidades.
- Não avançar para arquitetura ou implementação relevante sem discovery, PRD, MVP, roadmap e critérios de aceite, salvo exceção formal pelo Policy Engine.
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

Demandas de produto devem consultar também o Product Intelligence System em \`product-intelligence/\`.

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
- product-intelligence/README.md
- product-intelligence/PRODUCT_PIPELINE.md
- POLICY_ENGINE.md
- ORCHESTRATOR.md
- QUALITY_STANDARD.md
- AGENTS.md
`;
}

function productIntelligenceWorkspaceFiles(answers) {
  return {
    "product-intelligence/README.md": `# Product Intelligence Local - ${answers.projectName}

## Objetivo

Registrar discovery, PRD, requisitos, MVP, roadmap, features, stories e critérios de aceite específicos deste projeto.

## Regra

Nenhuma demanda relevante de produto, feature, módulo, API ou integração deve seguir para arquitetura ou implementação sem artefatos mínimos ou exceção formal pelo Policy Engine.

## Ordem local

1. \`idea-brief.md\`
2. \`discovery-brief.md\`
3. \`prd.md\`
4. \`requirements-map.md\`
5. \`mvp.md\`
6. \`roadmap.md\`
7. \`acceptance-criteria.md\`

## Checklist

- [ ] Ideia registrada.
- [ ] Discovery preenchido.
- [ ] PRD criado quando aplicável.
- [ ] Requisitos rastreáveis.
- [ ] MVP e roadmap definidos.
- [ ] Critérios de aceite testáveis.
- [ ] Product Intelligence Gate avaliado.
`,
    "product-intelligence/idea-brief.md": `# Idea Brief

## Ideia original

${answers.description || "Registrar a ideia inicial com as palavras do solicitante."}

## Problema provável

Registrar problema sem antecipar solução.

## Usuários afetados

- Usuário direto:
- Stakeholder decisor:

## Valor esperado

- Resultado desejado:
- Indicador de sucesso:

## Lacunas

- O que ainda precisa ser descoberto?
`,
    "product-intelligence/discovery-brief.md": `# Discovery Brief

## Problema

## Usuários e stakeholders

## Contexto atual

## Alternativas atuais

## Restrições

## Hipóteses

## Recomendação

- [ ] Avançar para PRD.
- [ ] Validar hipótese.
- [ ] Suspender.
`,
    "product-intelligence/prd.md": `# PRD

## Resumo executivo

## Problema

## Objetivos

## Público-alvo

## Escopo

## Fora do escopo

## Requisitos funcionais

## Requisitos não funcionais

## Regras de negócio

## Fluxos e casos de uso

## Segurança, performance e UX

## Critérios de aceite

## KPIs e métricas

## Dependências, premissas, restrições e riscos

## MVP

## Roadmap

## Handoff
`,
    "product-intelligence/requirements-map.md": `# Requirements Map

## Requisitos funcionais

| ID | Requisito | Origem | Critério |
| --- | --- | --- | --- |
| RF001 | | | |

## Requisitos não funcionais

| ID | Requisito | Métrica |
| --- | --- | --- |
| RNF001 | | |

## Regras de negócio

| ID | Regra | Fonte | Impacto |
| --- | --- | --- | --- |
| RN001 | | | |
`,
    "product-intelligence/mvp.md": `# MVP

## Objetivo do MVP

## Funcionalidades incluídas

## Fora do MVP

## Métricas de validação

## Riscos e premissas

## Condição para avançar
`,
    "product-intelligence/roadmap.md": `# Roadmap

## MVP

## V1

## V2

## V3

## Dependências

## Riscos

## Critérios de revisão
`,
    "product-intelligence/feature-map.md": `# Feature Map

| Feature | Requisito de origem | Persona | Critérios de aceite |
| --- | --- | --- | --- |
| | | | |
`,
    "product-intelligence/acceptance-criteria.md": `# Acceptance Criteria

## Feature ou Story

## Critérios

- Dado:
- Quando:
- Então:

## Casos negativos

## Evidência esperada
`,
    "product-intelligence/validation-notes.md": `# Product Validation Notes

## Hipóteses

## Evidências

## Decisão

- [ ] Avançar.
- [ ] Revisar.
- [ ] Suspender.
- [ ] Rejeitar.
`
  };
}

module.exports = {
  CEIP_REPO_URL,
  CLI_VERSION,
  WORKSPACE_VERSION,
  agentsFile,
  contextMd,
  coreReference,
  minimalCoreReference,
  productIntelligenceWorkspaceFiles,
  projectJson,
  projectMd,
  simpleDoc,
  stackMd,
  workspaceReadme
};
