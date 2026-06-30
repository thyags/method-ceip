const CEIP_REPO_URL = "https://github.com/thyags/method-ceip";
const WORKSPACE_VERSION = "1.4.0";
const CLI_VERSION = "0.9.0-rc.2";

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
      requiresProductExperience: true,
      requiresRuntime: true,
      requiresContextLoader: true,
      requiresPromptBuilder: true,
      requiresPolicyEngine: true,
      requiresQualityGates: true,
      requiresPRDForProductChanges: true,
      requiresAcceptanceCriteriaForFeatures: true,
      requiresMVPForRoadmap: true,
      requiresProductIntelligenceGate: true,
      requiresProductExperienceGate: true,
      requiresCloudSixDesignLanguage: true,
      requiresVisualQualityScore: true,
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
    productExperience: {
      currentStage: "not_started",
      status: "not_started",
      requiresExperienceBrief: true,
      requiresCloudSixDesignLanguage: true,
      requiresDesignReview: true,
      requiresVisualQualityScore: true,
      requiresProductExperienceGate: true,
      artifacts: {
        cloudsixDesignLanguage: ".ceip/product-experience/cloudsix-design-language.md",
        cdlCompliance: ".ceip/product-experience/cdl-compliance.md",
        experienceBrief: ".ceip/product-experience/experience-brief.md",
        screenInventory: ".ceip/product-experience/screen-inventory.md",
        designDecisions: ".ceip/product-experience/design-decisions.md",
        interactionStates: ".ceip/product-experience/interaction-states.md",
        visualQualityScore: ".ceip/product-experience/visual-quality-score.md",
        reviewNotes: ".ceip/product-experience/review-notes.md",
        experienceMemory: ".ceip/product-experience/experience-memory.md"
      }
    },
    runtime: {
      currentStage: "ready",
      status: "enabled",
      requiresContextLoader: true,
      requiresTaskRouter: true,
      requiresPromptBuilder: true,
      requiresDecisionRuntime: true,
      artifacts: {
        readme: ".ceip/runtime/README.md",
        contextLoad: ".ceip/runtime/context-load.md",
        taskRouting: ".ceip/runtime/task-routing.md",
        promptBuilder: ".ceip/runtime/prompt-builder.md",
        executionPlan: ".ceip/runtime/execution-plan.md",
        decisionRuntime: ".ceip/runtime/decision-runtime.md"
      }
    },
    quality: {
      currentScore: null,
      visualQualityScore: null,
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
- Registrar artefatos de Product Experience e CloudSix Design Language em \`.ceip/product-experience/\` antes de UX/UI/Frontend ou release de interface relevante.
- Registrar decisões de execução do CEIP Runtime em \`.ceip/runtime/\`.
- Consultar \`PROJECT.md\`, \`STACK.md\` e \`CONTEXT.md\` antes de tarefas relevantes.

## Checklist

- [ ] PROJECT.md preenchido.
- [ ] STACK.md preenchido com evidências.
- [ ] CONTEXT.md atualizado.
- [ ] Product Intelligence iniciado quando houver ideia, produto, feature, módulo, API ou integração relevante.
- [ ] Product Experience e CDL iniciados quando houver tela, dashboard, formulário, tabela, site ou experiência responsiva relevante.
- [ ] Runtime, Context Loader e Prompt Builder consultados antes de tarefas relevantes.
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

## Product Experience

Antes de UX, UI, frontend ou release de interface relevante, registrar CDL local, experience brief, decisões de layout, revisão visual, Visual Quality Score e evidências em \`.ceip/product-experience/\`.

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
- Preencher Product Experience quando houver interface relevante.
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
2. \`.cloudsix/method/runtime/README.md\`
3. \`.cloudsix/method/runtime/context-loader.md\`
4. \`.cloudsix/method/runtime/task-router.md\`
5. \`.cloudsix/method/runtime/prompt-builder.md\`
6. \`.cloudsix/method/product-intelligence/README.md\`
7. \`.cloudsix/method/product-intelligence/PRODUCT_PIPELINE.md\`
8. \`.cloudsix/method/product-experience/README.md\`, quando houver interface impactada
9. \`.cloudsix/method/product-experience/CLOUDSIX_DESIGN_LANGUAGE.md\`, quando houver interface impactada
10. \`.ceip/runtime/README.md\`, quando existir
11. \`.ceip/runtime/context-load.md\`, quando existir
12. \`.ceip/product-experience/cloudsix-design-language.md\`, quando existir e houver interface impactada
13. \`.ceip/product-experience/cdl-compliance.md\`, quando existir e houver interface impactada
14. \`.cloudsix/method/policy-engine/PRODUCT_INTELLIGENCE_POLICIES.md\`
15. \`.cloudsix/method/policy-engine/PRODUCT_EXPERIENCE_POLICIES.md\`, quando houver interface impactada
16. \`.cloudsix/method/policy-engine/RUNTIME_POLICIES.md\`
17. \`.cloudsix/method/POLICY_ENGINE.md\`
18. \`.cloudsix/method/ORCHESTRATOR.md\`
19. \`.ceip/PROJECT.md\`
20. \`.ceip/STACK.md\`
21. \`.ceip/CONTEXT.md\`
22. \`.ceip/product-intelligence/README.md\`, quando existir
23. \`.ceip/product-experience/README.md\`, quando existir
24. \`.ceip/CURRENT_FOCUS.md\`, quando existir
25. Classificar tarefa
26. Classificar risco
27. Aplicar Quality Gates

## Regras

- Não inventar funcionalidades.
- Não avançar para arquitetura ou implementação relevante sem discovery, PRD, MVP, roadmap e critérios de aceite, salvo exceção formal pelo Policy Engine.
- Não avançar para UX/UI/Frontend ou release de interface relevante sem Product Experience, CloudSix Design Language, CDL Compliance, Product Experience Gate e Visual Quality Score, salvo exceção formal pelo Policy Engine.
- Não alterar regra de negócio sem solicitação.
- Não assumir stack.
- Preservar arquitetura existente.
- Registrar ADR/RFC quando aplicável.
- Registrar aprendizados em \`.ceip/memory\`.
- Nunca gravar segredos no Workspace.
- Nunca remover, ocultar ou alterar avisos de direitos autorais e licença da CEIP.
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

Demandas executadas com IA devem consultar o CEIP Runtime em \`runtime/\` para carregar contexto, rotear tarefa, montar prompt e aplicar decisão operacional.

Demandas de produto devem consultar também o Product Intelligence System em \`product-intelligence/\`.

Demandas com interface relevante devem consultar o Product Experience System, a CloudSix Design Language e a CDL Compliance em \`product-experience/\`.

## Direitos autorais

© 2026 CloudSix Sistemas e Tecnologia Ltda. Todos os direitos reservados.

O repositório público da CEIP permite consulta e integração operacional autorizada, mas não concede licença aberta. Consulte \`LICENSE.md\` no CEIP Core.

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
- runtime/README.md
- runtime/execution-pipeline.md
- runtime/context-loader.md
- runtime/prompt-builder.md
- product-intelligence/README.md
- product-intelligence/PRODUCT_PIPELINE.md
- product-experience/README.md
- product-experience/CLOUDSIX_DESIGN_LANGUAGE.md
- product-experience/CDL_COMPLIANCE.md
- product-experience/VISUAL_QUALITY_SCORE.md
- policy-engine/RUNTIME_POLICIES.md
- policy-engine/PRODUCT_EXPERIENCE_POLICIES.md
- POLICY_ENGINE.md
- ORCHESTRATOR.md
- QUALITY_STANDARD.md
- AGENTS.md
- LICENSE.md

## Direitos autorais

© 2026 CloudSix Sistemas e Tecnologia Ltda. Todos os direitos reservados.
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

function productExperienceWorkspaceFiles(answers) {
  return {
    "product-experience/README.md": `# Product Experience Local - ${answers.projectName}

## Objetivo

Registrar decisões de experiência, aplicação local da CloudSix Design Language, layout, interação, acessibilidade, revisão visual, Visual Quality Score e memória local de interface deste projeto.

## Regra

Nenhuma interface relevante deve seguir para UX/UI/Frontend ou release sem critérios mínimos de Product Experience e CDL, salvo exceção formal pelo Policy Engine.

## Ordem local

1. \`cloudsix-design-language.md\`
2. \`experience-brief.md\`
3. \`screen-inventory.md\`
4. \`design-decisions.md\`
5. \`interaction-states.md\`
6. \`cdl-compliance.md\`
7. \`visual-quality-score.md\`
8. \`review-notes.md\`
9. \`experience-memory.md\`

## Checklist

- [ ] Experience brief criado quando houver interface relevante.
- [ ] CDL local preenchida com identidade, restrições e desvios aceitos.
- [ ] Telas e fluxos inventariados.
- [ ] Decisões de layout registradas.
- [ ] Estados de interação definidos.
- [ ] Conformidade CDL avaliada.
- [ ] Visual Quality Score calculado.
- [ ] Product Experience Gate avaliado.
- [ ] Memória de experiência registrada sem dados sensíveis.
`,
    "product-experience/cloudsix-design-language.md": `# CloudSix Design Language Local

## Objetivo

Aplicar a CloudSix Design Language ao contexto real de ${answers.projectName}, sem impor stack, biblioteca, tema ou identidade visual fixa.

## Referência do Core

- \`.cloudsix/method/product-experience/CLOUDSIX_DESIGN_LANGUAGE.md\`
- \`.cloudsix/method/product-experience/VISUAL_LANGUAGE.md\`
- \`.cloudsix/method/product-experience/PREMIUM_UI_RULES.md\`
- \`.cloudsix/method/product-experience/CDL_COMPLIANCE.md\`

## Identidade operacional desejada

Marque os atributos que devem ser percebidos por usuários reais neste projeto.

- [ ] Confiança.
- [ ] Velocidade.
- [ ] Organização.
- [ ] Tecnologia.
- [ ] Inteligência.
- [ ] Simplicidade.
- [ ] Precisão.
- [ ] Maturidade operacional.

## Design system existente

- Existe design system local?
- Existe biblioteca de componentes?
- Existem tokens, tema, guia de marca ou padrões herdados?
- Quais padrões devem ser preservados?

## Adaptação local da CDL

| Camada | Decisão local | Evidência |
| --- | --- | --- |
| Hierarquia | | |
| Densidade | | |
| Cor e semântica | | |
| Tipografia | | |
| Espaçamento | | |
| Componentes | | |
| Estados | | |
| Acessibilidade | | |
| Responsividade | | |
| Motion | | |

## Restrições

- Stack visual:
- Componentes obrigatórios:
- Limites de marca:
- Requisitos de acessibilidade:
- Plataformas e viewports:

## Desvios aceitos

| Decisão | Motivo | Aprovador | Revisar em |
| --- | --- | --- | --- |
| | | | |

## Checklist

- [ ] CDL aplicada como critério de qualidade, não como tema fixo.
- [ ] Design system local foi respeitado quando existente.
- [ ] Decisões visuais têm motivo operacional.
- [ ] Desvios foram registrados.
- [ ] Nenhum dado sensível foi registrado.
`,
    "product-experience/experience-brief.md": `# Experience Brief

## Produto ou módulo

${answers.projectName}

## Origem

- PRD:
- Requisito:
- Critérios de aceite:

## Usuário

## Tarefa principal

## Contexto de uso

## Padrões existentes

## Restrições

## Critérios de experiência

- Hierarquia:
- Densidade:
- Estados:
- Acessibilidade:
- Responsividade:
- CDL local:
- Premium feel:
`,
    "product-experience/screen-inventory.md": `# Screen Inventory

| Tela ou fluxo | Usuário | Objetivo | Risco | Status |
| --- | --- | --- | --- | --- |
| | | | | |

## Observações

Registrar telas relevantes, fluxos críticos e pontos que exigem Product Experience Gate.
`,
    "product-experience/design-decisions.md": `# Design Decisions

## Decisões

| Data | Tela | Decisão | Alternativas | Justificativa |
| --- | --- | --- | --- | --- |
| | | | | |

## Restrições

- Design system:
- Componentes:
- Acessibilidade:
- Responsividade:
`,
    "product-experience/interaction-states.md": `# Interaction States

## Tela ou fluxo

## Estados

- Loading:
- Empty:
- Error:
- Success:
- Disabled:
- Permissão:
- Conflito:

## Feedbacks

## Confirmações
`,
    "product-experience/cdl-compliance.md": `# CDL Compliance

## Entrega avaliada

## Origem

- PRD:
- Experience brief:
- Tela ou fluxo:

## Resultado

- Status: pendente
- Score visual:
- Risco:
- Data:

## Matriz de conformidade

| Critério CDL | Status | Evidência | Ação |
| --- | --- | --- | --- |
| Identidade profissional | pendente | | |
| Hierarquia clara | pendente | | |
| Densidade adequada | pendente | | |
| Ação primária evidente | pendente | | |
| Semântica visual consistente | pendente | | |
| Componentes coerentes | pendente | | |
| Estados definidos | pendente | | |
| Acessibilidade mínima | pendente | | |
| Responsividade sem quebra | pendente | | |
| Benchmark sem cópia | pendente | | |

## Bloqueios

- [ ] Texto ilegível ou sobreposto.
- [ ] Layout quebrado em viewport obrigatório.
- [ ] Informação crítica depende apenas de cor.
- [ ] Interface contradiz requisito ou regra de negócio.
- [ ] Benchmark usado como cópia visual.

## Parecer

- [ ] Aprovado.
- [ ] Aprovado com ressalvas.
- [ ] Bloqueado.

## Próximas ações
`,
    "product-experience/visual-quality-score.md": `# Visual Quality Score

## Entrega

## Risco

## Pontuação

| Dimensão | Peso | Nota 0-10 | Evidência |
| --- | ---: | ---: | --- |
| Hierarquia | 15 | | |
| Espaçamento | 10 | | |
| Alinhamento | 10 | | |
| Consistência | 15 | | |
| Acessibilidade | 15 | | |
| Equilíbrio visual | 10 | | |
| Interação | 15 | | |
| Premium feel | 10 | | |

## CDL

- Arquivo local consultado:
- Conformidade registrada em:
- Desvios aceitos:

## Resultado

Score visual: \`__/100\`

## Bloqueios

## Recomendações
`,
    "product-experience/review-notes.md": `# Product Experience Review Notes

## Evidências analisadas

## Bloqueios

## Melhorias

## Parecer

- [ ] Aprovado.
- [ ] Aprovado com ressalvas.
- [ ] Bloqueado.
`,
    "product-experience/experience-memory.md": `# Experience Memory

## Referências aprovadas

| Tipo | Contexto | Decisão | Score | Reutilização |
| --- | --- | --- | ---: | --- |
| | | | | |

## Regras

- Não registrar dados sensíveis.
- Não copiar telas de clientes ou terceiros.
- Explicar por que o padrão funcionou.
`,
    "product-experience/best-layouts/README.md": `# Best Layouts

Registrar padrões de layout aprovados para este projeto, sem dados sensíveis.
`,
    "product-experience/best-dashboard/README.md": `# Best Dashboard

Registrar decisões aprovadas para dashboards deste projeto.
`,
    "product-experience/best-table/README.md": `# Best Table

Registrar decisões aprovadas para tabelas operacionais deste projeto.
`,
    "product-experience/best-form/README.md": `# Best Form

Registrar decisões aprovadas para formulários deste projeto.
`,
    "product-experience/best-sidebar/README.md": `# Best Sidebar

Registrar decisões aprovadas para navegação lateral, drawers e painéis contextuais deste projeto.
`
  };
}

function runtimeWorkspaceFiles(answers) {
  return {
    "runtime/README.md": `# CEIP Runtime Local - ${answers.projectName}

## Objetivo

Registrar decisões de execução, carregamento de contexto, roteamento de tarefa, prompt builder e plano operacional local deste projeto.

## Regra

Toda tarefa relevante executada com IA deve passar por Runtime, Context Loader, Task Router, Policy Engine, Orchestrator e Prompt Builder antes de implementação, revisão ou release.

## Artefatos

1. \`context-load.md\`
2. \`task-routing.md\`
3. \`prompt-builder.md\`
4. \`execution-plan.md\`
5. \`decision-runtime.md\`

## Checklist

- [ ] Contexto mínimo carregado.
- [ ] Tarefa classificada.
- [ ] Policies e gates aplicáveis identificados.
- [ ] Prompt final montado com contexto suficiente.
- [ ] Decisões e exceções registradas.
`,
    "runtime/context-load.md": `# Context Load

## Tarefa

## Fontes obrigatórias

- .ceip/PROJECT.md
- .ceip/STACK.md
- .ceip/CONTEXT.md
- .ceip/project.json

## Fontes condicionais

- .ceip/product-intelligence/
- .ceip/product-experience/
- .ceip/memory/
- .ceip/adr/
- .ceip/rfc/
- .ceip/reviews/
- .ceip/metrics/

## Contexto carregado

## Lacunas

## Riscos de contexto
`,
    "runtime/task-routing.md": `# Task Routing

## Tarefa

## Classificação

- Tipo:
- Risco:
- Domínios impactados:
- Agentes necessários:

## Policies

## Quality Gates

## Handoff
`,
    "runtime/prompt-builder.md": `# Prompt Builder

## Objetivo do prompt

## Contexto selecionado

## Policies obrigatórias

## Agentes

## Restrições

## Saída esperada

## Prompt final
`,
    "runtime/execution-plan.md": `# Execution Plan

## Tarefa

## Pipeline

1. Carregar contexto.
2. Classificar tarefa.
3. Aplicar Policy Engine.
4. Acionar Orchestrator.
5. Montar prompt.
6. Executar agente.
7. Aplicar reviews, gates e score.
8. Registrar aprendizado.

## Evidências

## Status
`,
    "runtime/decision-runtime.md": `# Decision Runtime

## Decisão

## Contexto

## Alternativas

## Critérios

## Resultado

## ADR/RFC relacionado

## Revisar em
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
  productExperienceWorkspaceFiles,
  productIntelligenceWorkspaceFiles,
  projectJson,
  projectMd,
  runtimeWorkspaceFiles,
  simpleDoc,
  stackMd,
  workspaceReadme
};
