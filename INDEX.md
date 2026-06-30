# Índice Navegável da CEIP

## Objetivo

Oferecer um ponto único de navegação para localizar rapidamente regras, leis, agentes, meta-agentes, padrões, playbooks, templates, checklists, workflows, ADRs, RFCs, quality gates, scorecards, métricas, bibliotecas, prompts, receitas e exemplos.

## Contexto

A CloudSix Engineering Intelligence Platform é usada por pessoas e agentes de IA. Um índice explícito reduz ambiguidade, acelera onboarding e ajuda cada executor a encontrar o documento certo antes de propor mudanças.

## Diretrizes de navegação

- Comece pelos documentos-raiz quando precisar entender a governança.
- Use `PLATFORM.md` para entender o escopo estratégico da CEIP.
- Use `CHANGELOG.md`, `VERSIONING.md` e `RELEASE_PROCESS.md` para entender versões, releases e critérios de publicação.
- Use `GOVERNANCE.md`, `RFC_PROCESS.md` e `CONTRIBUTING.md` para propor mudanças sem perder coerência de produto.
- Use `intelligence-core` para entender os brains e o Core.
- Use `runtime` para carregar contexto, rotear tarefas, montar prompts e transformar a CEIP em execução operacional.
- Use `product-intelligence` para transformar ideias em PRD, requisitos, MVP, roadmap e backlog antes de arquitetura.
- Use `product-experience` para transformar requisitos em experiência premium, CDL, conformidade visual, layout, interação, acessibilidade e Visual Quality Score antes de UX/UI/Frontend.
- Use `layers`, `engines`, `policies` e `knowledge-graph` para entender a arquitetura operacional.
- Use `constitution` para leis operacionais consultáveis por IA.
- Use `ORCHESTRATOR.md` para coordenar meta-agentes, agentes e gates.
- Use `docs/agents` para responsabilidades de papéis especialistas.
- Use `docs/prompts` para acionar agentes em ferramentas de IA.
- Use `docs/standards` para padrões permanentes.
- Use `docs/playbooks` para procedimentos situacionais.
- Use `docs/reference-architectures` para modelos conceituais de solução.
- Use `docs/checklists` para validação antes de revisão ou release.
- Use `docs/adr` para decisões arquiteturais registradas.
- Use `quality-gates`, `review` e `score-system` antes de concluir entregas relevantes.
- Use `knowledge`, `patterns` e `anti-patterns` como memória organizacional.
- Use `workspace` para instalar o CEIP Core em projetos consumidores e criar `.ceip/`.

## Documentos-raiz

| Documento | Assunto |
| --- | --- |
| `README.md` | Visão geral e uso inicial |
| `LICENSE.md` | Direitos autorais, titularidade e restrições de uso |
| `CHANGELOG.md` | Histórico de mudanças por versão |
| `VERSIONING.md` | Regras de versionamento semântico, tags e compatibilidade |
| `RELEASE_PROCESS.md` | Processo de release, branches, gates e publicação |
| `GOVERNANCE.md` | Modelo de governança, decisão e entrada de mudanças no Core |
| `RFC_PROCESS.md` | Processo público de RFC para mudanças relevantes |
| `CONTRIBUTING.md` | Regras de contribuição, escopo aceito e critérios de revisão |
| `MANUAL_DE_USO.md` | Manual de adoção da CEIP em projetos consumidores |
| `PLATFORM.md` | Escopo estratégico da CloudSix Engineering Intelligence Platform |
| `CONSTITUTION.md` | Regras fundamentais em artigos numerados |
| `MANIFESTO.md` | Valores de engenharia |
| `NEXT_STEPS.md` | Fases de maturidade, revisão, validação, piloto e CLI |
| `ORCHESTRATOR.md` | Orquestração de meta-agentes, agentes, reviews e quality gates |
| `POLICY_ENGINE.md` | Visão executiva do Policy Engine |
| `AGENTS.md` | Orquestração e ordem de agentes |
| `CODEX.md` | Operação específica do Codex |
| `AI_USAGE_GUIDE.md` | Uso com Codex, Claude Code, Gemini CLI, Cursor, Windsurf, Copilot e outras IAs |
| `ROADMAP.md` | Evolução planejada do framework |
| `ENGINEERING_PRINCIPLES.md` | Princípios técnicos gerais |
| `DECISION_FRAMEWORK.md` | Critérios e árvores de decisão |
| `QUALITY_STANDARD.md` | Definição de qualidade de entrega |
| `CHANGE_MANAGEMENT.md` | Gestão de mudanças |
| `RISK_MANAGEMENT.md` | Gestão de riscos |
| `SECURITY_PRINCIPLES.md` | Segurança por padrão |
| `PERFORMANCE_PRINCIPLES.md` | Performance orientada por medição |
| `ARCHITECTURE_PRINCIPLES.md` | Princípios de arquitetura |
| `DOCUMENTATION_STANDARD.md` | Padrão de documentação |

## Diretórios

| Diretório | Quando usar |
| --- | --- |
| `brains` | Consultar cérebros especializados da CEIP e o Engineering Intelligence Core |
| `runtime` | Usar Runtime, Context Loader, Task Router, Prompt Builder, Prompt Runtime e Runtime API |
| `profiles` | Ajustar adoção por perfil de organização, time e maturidade |
| `domains` | Estruturar futuros Domain Packs por domínio de negócio |
| `capabilities` | Estruturar futuros Capability Packs por capacidade recorrente |
| `plugins` | Estruturar futuro Engineering Marketplace |
| `product-intelligence` | Conduzir Product Intelligence System, discovery, PRD, requisitos, MVP, roadmap, features, stories e critérios de aceite |
| `product-experience` | Conduzir Product Experience System, CloudSix Design Language, CDL Compliance, design review, layout intelligence, interação, acessibilidade e score visual |
| `intelligence-core` | Entender o Engineering Intelligence Core e os brains |
| `layers` | Mapear módulos por camada da plataforma |
| `engines` | Consultar mecanismos de contexto, pensamento, planejamento, políticas, memória, decisão e evolução |
| `policy-engine` | Aplicar policies, rules, exemplos, roteamento, risco e aprovação |
| `policies` | Aplicar políticas operacionais derivadas de regras repetitivas |
| `knowledge-graph` | Relacionar leis, policies, agents, gates, ADRs, patterns e aprendizados |
| `lifecycle` | Entender o ciclo contínuo de evolução da CEIP |
| `constitution` | Consultar leis operacionais por domínio |
| `governance` | Localizar regras de governança transversal da CEIP |
| `decision-framework` | Organizar materiais complementares de decisão |
| `decision-trees` | Usar fluxogramas Mermaid para tomada de decisão |
| `orchestrator` | Aplicar roteamento, handoff e escalonamento operacional |
| `agents` | Entrar no catálogo oficial de agentes |
| `meta-agents` | Coordenar qualidade, programa, conhecimento e conflitos estratégicos |
| `docs/agents` | Definir missão, limites e fluxo de cada agente |
| `docs/prompts` | Copiar prompts operacionais para acionar agentes |
| `prompts` | Usar prompts por tipo de tarefa |
| `docs/architecture` | Orientações para documentação arquitetural e mapas de sistema |
| `docs/standards` | Consultar padrões de stack, arquitetura, código, dados, API, frontend, UX, segurança, performance, testes, documentação e observabilidade |
| `docs/playbooks` | Executar procedimentos de projeto, legado, refatoração, review, release, incidente, integração, migração, auditoria e performance |
| `docs/templates` | Criar ADR, RFC, PR, user story, especificação, plano de testes, release notes, incidente e revisão arquitetural |
| `docs/checklists` | Validar arquitetura, backend, frontend, banco, segurança, performance, QA, release, review e documentação |
| `docs/workflows` | Seguir fluxos de feature, bugfix, hotfix, modernização, IA assistida e orquestração |
| `docs/adr` | Consultar decisões arquiteturais iniciais e futuras |
| `docs/reference-architectures` | Consultar modelos de arquitetura por tipo de sistema |
| `docs/examples` | Ver exemplos práticos por domínio |
| `docs/glossary` | Alinhar termos usados no framework |
| `knowledge` | Registrar memória organizacional por área |
| `memory` | Registrar memória operacional com regras de privacidade |
| `adr` | Gerenciar ADRs vivos por status |
| `rfc` | Propor grandes mudanças antes de decisão |
| `review` | Executar revisões especializadas por disciplina |
| `score-system` | Pontuar entregas com evidência |
| `metrics` | Acompanhar saúde técnica e melhoria contínua |
| `quality-gates` | Validar prontidão antes de concluir entrega |
| `patterns` | Consultar padrões de design e arquitetura |
| `anti-patterns` | Reconhecer práticas prejudiciais |
| `recipes` | Executar tarefas recorrentes com passos e gates |
| `diagrams` | Consultar diagramas Mermaid centrais |
| `examples` | Consultar exemplos operacionais da CEIP |
| `specialist-reviews` | Executar rodadas de revisão por especialistas |
| `validation` | Auditar o framework com perguntas estruturadas |
| `audits` | Registrar resultados de auditorias do framework |
| `pilots` | Planejar validação em projetos reais |
| `cli` | Especificar o futuro CLI CloudSix Engineering |
| `workspace` | Arquitetura Core + Workspace, instalação, templates, exemplos e validação de `.ceip/` |

## Exemplos de busca por necessidade

- "Preciso iniciar um SaaS": leia `docs/playbooks/01-novo-projeto.md`, `docs/reference-architectures/01-saas.md`, `docs/workflows/01-feature-development.md`.
- "Tenho só uma ideia de produto": leia `product-intelligence/README.md`, `product-intelligence/PRODUCT_PIPELINE.md`, `product-intelligence/playbooks/novo-produto.md` e `product-intelligence/templates/prd-template.md`.
- "Preciso montar contexto para IA": use `runtime/README.md`, `runtime/context-loader.md`, `runtime/prompt-builder.md` e `ceip analyze`.
- "Preciso gerar prompt por tarefa": use `runtime/prompt-builder.md`, `runtime/runtime-api.md` e o comando CEIP adequado.
- "Preciso criar PRD, MVP e roadmap": use `product-intelligence/engines/prd-engine.md`, `product-intelligence/engines/mvp-engine.md`, `product-intelligence/engines/roadmap-engine.md` e os templates correspondentes.
- "Preciso criar uma tela premium": leia `product-experience/README.md`, `product-experience/EXPERIENCE_CONSTITUTION.md`, `product-experience/CLOUDSIX_DESIGN_LANGUAGE.md`, `product-experience/CDL_COMPLIANCE.md`, `product-experience/engines/cdl-compliance-engine.md` e `product-experience/templates/screen-spec-template.md`.
- "Preciso revisar UX/UI antes de frontend": use `product-experience/DESIGN_REVIEW.md`, `product-experience/checklists/screen-quality-checklist.md` e `quality-gates/product-experience-gate.md`.
- "Preciso pontuar qualidade visual": use `product-experience/VISUAL_QUALITY_SCORE.md`, `product-experience/CDL_COMPLIANCE.md`, `product-experience/engines/cdl-compliance-engine.md`, `product-experience/engines/visual-quality-score-engine.md`, `metrics/visual-quality-score.md` e `product-experience/templates/visual-quality-scorecard-template.md`.
- "Preciso acionar PXS por prompt": use `prompts/product-experience-prompt.md`.
- "Preciso usar benchmarks sem copiar visual": leia `product-experience/benchmarks/README.md` e o benchmark correspondente.
- "Preciso revisar uma PR": leia `docs/playbooks/04-code-review.md`, `docs/checklists/code-review-checklist.md`, `docs/agents/13-code-reviewer-tech-lead.md`.
- "Preciso usar IA com segurança": leia `AI_USAGE_GUIDE.md`, `docs/workflows/05-ai-assisted-development.md`, `docs/agents/16-ai-engineer.md`.
- "Preciso instalar a CEIP em um projeto": leia `MANUAL_DE_USO.md`.
- "Preciso preparar uma release": leia `CHANGELOG.md`, `VERSIONING.md`, `RELEASE_PROCESS.md` e `ROADMAP.md`.
- "Preciso propor mudança estrutural": leia `GOVERNANCE.md`, `RFC_PROCESS.md` e use `docs/templates/rfc-template.md`.
- "Preciso contribuir com o método": leia `CONTRIBUTING.md`, `GOVERNANCE.md` e `RFC_PROCESS.md`.
- "Preciso criar `.ceip/` em um projeto": leia `workspace/INSTALLATION_GUIDE.md`, `workspace/INITIALIZATION_FLOW.md` e `workspace/WORKSPACE_STRUCTURE.md`.
- "Preciso validar instalação CEIP": use `ceip doctor`, que valida Core, Workspace, Runtime local, Product Intelligence local, Product Experience local, CDL local, `project.json`, `AGENTS.md`, `.gitignore` e possíveis arquivos sensíveis.
- "Preciso instalar o Core por submodule": leia `workspace/INSTALLATION_GUIDE.md` e use `.cloudsix/method`.
- "Preciso decidir arquitetura": leia `DECISION_FRAMEWORK.md`, `ARCHITECTURE_PRINCIPLES.md`, `docs/templates/adr-template.md`.
- "Preciso auditar o framework": use `docs/prompts/99-framework-audit-prompt.md`, `docs/checklists/documentation-checklist.md` e atualize este índice.
- "Preciso coordenar uma entrega complexa": leia `ORCHESTRATOR.md`, `meta-agents/README.md` e `quality-gates/README.md`.
- "Preciso avaliar uma entrega": use `review/README.md`, `score-system/scorecard-template.md` e os gates aplicáveis.
- "Preciso criar API, dashboard ou importador": use a receita correspondente em `recipes/`.
- "Preciso orientar uma IA por tarefa": use `prompts/`.
- "Preciso acionar um agente por prompt": use `prompts/agents/`.
- "Preciso aplicar uma policy": use `POLICY_ENGINE.md` e `policy-engine/POLICY_INDEX.md`.
- "Preciso decidir aprovação por risco": use `engines/score-engine.md`, `metrics/` e `policy-engine/APPROVAL_POLICIES.md`.
- "Preciso ver um exemplo prático": use `examples/01-policy-routing-example.md`, `examples/02-quality-score-example.md` ou `examples/03-pilot-scope-example.md`.
- "Preciso explicar o fluxo CEIP": use `diagrams/ceip-operational-flow.md`, `diagrams/policy-orchestration-flow.md` ou `diagrams/score-approval-flow.md`.
- "Preciso amadurecer o framework": leia `NEXT_STEPS.md`, `specialist-reviews/README.md`, `validation/README.md` e registre resultado em `audits/`.
- "Preciso evoluir a plataforma": leia `PLATFORM.md`, `intelligence-core/README.md`, `layers/README.md`, `engines/README.md` e `lifecycle/README.md`.
- "Preciso transformar regra repetitiva em governança": use `policies/README.md` e `engines/policy-engine.md`.
- "Preciso testar em projeto real": use `docs/playbooks/projeto-piloto.md`, `validation/pilot-project-validation.md`, `pilots/gsa-oficina-pilot.md` e `pilots/project-validation-template.md`.
- "Preciso planejar o CLI": leia `cli/README.md`, `cli/commands.md` e `rfc/0005/README.md`.

## Checklist

- [ ] O assunto foi localizado no diretório correto.
- [ ] Runtime foi consultado quando a tarefa envolve execução assistida por IA.
- [ ] Product Intelligence foi consultado quando a demanda nasceu como ideia, produto, feature, módulo, API ou integração.
- [ ] Product Experience, CDL e conformidade CDL foram consultados quando a demanda impactou interface, jornada visual, dashboard, tabela, formulário ou site.
- [ ] O documento-raiz aplicável foi consultado antes de execução.
- [ ] O agente correto foi selecionado quando a tarefa envolve especialidade.
- [ ] O checklist correspondente foi usado antes da entrega.
- [ ] ADR foi criado quando houve decisão arquitetural relevante.
- [ ] Quality gates foram considerados quando a tarefa envolve entrega.
- [ ] Product Experience Gate, CDL Compliance e Visual Quality Score foram aplicados quando houve interface relevante.
- [ ] Knowledge Base foi atualizada quando houve aprendizado novo.
- [ ] Validações e rodadas especializadas foram usadas quando o framework mudou.
- [ ] Layers, engines, policies e knowledge graph foram atualizados quando a plataforma mudou.
- [ ] Changelog, versionamento, release e governança foram consultados quando a plataforma evoluiu.

## Conclusão

Este índice deve ser atualizado sempre que novos documentos forem criados, renomeados ou reposicionados. Ele é a porta de entrada operacional do framework.
