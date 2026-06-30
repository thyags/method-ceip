# Índice Navegável da CEIP

## Objetivo

Oferecer um ponto único de navegação para localizar rapidamente regras, leis, agentes, meta-agentes, padrões, playbooks, templates, checklists, workflows, ADRs, RFCs, quality gates, scorecards, métricas, bibliotecas, prompts, receitas e exemplos.

## Contexto

A CloudSix Engineering Intelligence Platform é usada por pessoas e agentes de IA. Um índice explícito reduz ambiguidade, acelera onboarding e ajuda cada executor a encontrar o documento certo antes de propor mudanças.

## Diretrizes de navegação

- Comece pelos documentos-raiz quando precisar entender a governança.
- Use `PLATFORM.md` para entender o escopo estratégico da CEIP.
- Use `intelligence-core` para entender os brains e o Core.
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

## Documentos-raiz

| Documento | Assunto |
| --- | --- |
| `README.md` | Visão geral e uso inicial |
| `PLATFORM.md` | Escopo estratégico da CloudSix Engineering Intelligence Platform |
| `CONSTITUTION.md` | Regras fundamentais em artigos numerados |
| `MANIFESTO.md` | Valores de engenharia |
| `NEXT_STEPS.md` | Fases de maturidade, revisão, validação, piloto e CLI |
| `ORCHESTRATOR.md` | Orquestração de meta-agentes, agentes, reviews e quality gates |
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
| `intelligence-core` | Entender o Engineering Intelligence Core e os brains |
| `layers` | Mapear módulos por camada da plataforma |
| `engines` | Consultar mecanismos de contexto, pensamento, planejamento, políticas, memória, decisão e evolução |
| `policies` | Aplicar políticas operacionais derivadas de regras repetitivas |
| `knowledge-graph` | Relacionar leis, policies, agents, gates, ADRs, patterns e aprendizados |
| `lifecycle` | Entender o ciclo contínuo de evolução da CEIP |
| `constitution` | Consultar leis operacionais por domínio |
| `decision-trees` | Usar fluxogramas Mermaid para tomada de decisão |
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
| `adr` | Gerenciar ADRs vivos por status |
| `rfc` | Propor grandes mudanças antes de decisão |
| `review` | Executar revisões especializadas por disciplina |
| `score-system` | Pontuar entregas com evidência |
| `metrics` | Acompanhar saúde técnica e melhoria contínua |
| `quality-gates` | Validar prontidão antes de concluir entrega |
| `patterns` | Consultar padrões de design e arquitetura |
| `anti-patterns` | Reconhecer práticas prejudiciais |
| `recipes` | Executar tarefas recorrentes com passos e gates |
| `specialist-reviews` | Executar rodadas de revisão por especialistas |
| `validation` | Auditar o framework com perguntas estruturadas |
| `audits` | Registrar resultados de auditorias do framework |
| `pilots` | Planejar validação em projetos reais |
| `cli` | Especificar o futuro CLI CloudSix Engineering |

## Exemplos de busca por necessidade

- "Preciso iniciar um SaaS": leia `docs/playbooks/01-novo-projeto.md`, `docs/reference-architectures/01-saas.md`, `docs/workflows/01-feature-development.md`.
- "Preciso revisar uma PR": leia `docs/playbooks/04-code-review.md`, `docs/checklists/code-review-checklist.md`, `docs/agents/13-code-reviewer-tech-lead.md`.
- "Preciso usar IA com segurança": leia `AI_USAGE_GUIDE.md`, `docs/workflows/05-ai-assisted-development.md`, `docs/agents/16-ai-engineer.md`.
- "Preciso decidir arquitetura": leia `DECISION_FRAMEWORK.md`, `ARCHITECTURE_PRINCIPLES.md`, `docs/templates/adr-template.md`.
- "Preciso auditar o framework": use `docs/prompts/99-framework-audit-prompt.md`, `docs/checklists/documentation-checklist.md` e atualize este índice.
- "Preciso coordenar uma entrega complexa": leia `ORCHESTRATOR.md`, `meta-agents/README.md` e `quality-gates/README.md`.
- "Preciso avaliar uma entrega": use `review/README.md`, `score-system/scorecard-template.md` e os gates aplicáveis.
- "Preciso criar API, dashboard ou importador": use a receita correspondente em `recipes/`.
- "Preciso orientar uma IA por tarefa": use `prompts/`.
- "Preciso amadurecer o framework": leia `NEXT_STEPS.md`, `specialist-reviews/README.md`, `validation/README.md` e registre resultado em `audits/`.
- "Preciso evoluir a plataforma": leia `PLATFORM.md`, `intelligence-core/README.md`, `layers/README.md`, `engines/README.md` e `lifecycle/README.md`.
- "Preciso transformar regra repetitiva em governança": use `policies/README.md` e `engines/policy-engine.md`.
- "Preciso testar em projeto real": use `pilots/gsa-oficina-pilot.md` e `pilots/project-validation-template.md`.
- "Preciso planejar o CLI": leia `cli/README.md`, `cli/commands.md` e `rfc/0005/README.md`.

## Checklist

- [ ] O assunto foi localizado no diretório correto.
- [ ] O documento-raiz aplicável foi consultado antes de execução.
- [ ] O agente correto foi selecionado quando a tarefa envolve especialidade.
- [ ] O checklist correspondente foi usado antes da entrega.
- [ ] ADR foi criado quando houve decisão arquitetural relevante.
- [ ] Quality gates foram considerados quando a tarefa envolve entrega.
- [ ] Knowledge Base foi atualizada quando houve aprendizado novo.
- [ ] Validações e rodadas especializadas foram usadas quando o framework mudou.
- [ ] Layers, engines, policies e knowledge graph foram atualizados quando a plataforma mudou.

## Conclusão

Este índice deve ser atualizado sempre que novos documentos forem criados, renomeados ou reposicionados. Ele é a porta de entrada operacional do framework.
