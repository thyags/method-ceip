# Roadmap da CloudSix Engineering Intelligence Platform

## Objetivo

Definir a evolução planejada da CEIP por versões, mantendo clareza sobre fundação, agents, brains, engines, policies, playbooks, templates, checklists, arquiteturas de referência e módulos de governança operacional.

## Contexto

Um framework de engenharia precisa evoluir com uso real. O roadmap organiza incrementos sem transformar a documentação em um projeto fechado ou dependente de uma tecnologia específica.

## Status Atual

**v0.9.0-rc.1 - Release Candidate 1**

CEIP está em Release Candidate com Core + Workspace, Runtime, Context Loader, Prompt Builder, Product Intelligence, Product Experience, CDL, Installer, Doctor, Validation Suite e CLI operacional inicial.

## Versões planejadas

| Versão | Nome | Escopo |
| --- | --- | --- |
| v0.9 RC-1 | Runtime Foundation | Runtime, Context Loader, Task Router, Prompt Builder, Runtime API, comandos CLI e auditoria executiva |
| v0.9 RC-2 | Pilot Hardening | Teste em projeto real, ajustes de DX/AIX, redução de carga cognitiva e correções de onboarding |
| v1.0 | Production Baseline | Plataforma aprovada para adoção oficial, com installer, doctor, runtime, gates e relatórios estabilizados |
| v1.1 | Profiles | CEIP Profiles, Team Profiles e Maturity Levels aplicados no Installer |
| v1.2 | Domain Packs | Packs para ERP, CRM, SaaS, marketplace, oficina, construção, frotas, saúde e educação |
| v1.3 | Capability Packs | Packs para autenticação, pagamentos, relatórios, dashboards, notificações, busca, analytics, billing e multi-tenancy |
| v1.4 | Engineering Marketplace | Plugins opcionais de quality, security, performance, UX e documentação |
| v1.5 | CEIP Upgrade | Comando `ceip upgrade` para migrar Workspaces antigos para versões novas |
| v1.6 | CEIP Audit | Comando `ceip audit` com validações estruturais, links, runtime, gates e score |
| v2.0 | Engineering OS | Evolução contínua com CEIP Evolution, aprendizado recorrente e automação governada |

## Critérios de evolução

- Toda nova versão deve preservar o caráter agnóstico de tecnologia.
- Mudanças estruturais devem atualizar `INDEX.md`, `README.md` e documentos relacionados.
- Novos padrões devem incluir objetivo, contexto, diretrizes, exemplos, checklist e conclusão.
- Novas decisões estruturais devem gerar ADR.
- Conteúdo adicionado deve ser útil em software empresarial real, não apenas descritivo.
- Novos módulos operacionais devem se conectar a `ORCHESTRATOR.md`, `orchestrator/`, `INDEX.md`, quality gates e constitution.
- Novos módulos dinâmicos devem se conectar a `runtime/`, `policy-engine/RUNTIME_POLICIES.md`, `ceip doctor` e Workspace.
- Novos módulos estratégicos devem declarar brain, engine, policy, memory ou relação no Knowledge Graph.
- Novos módulos de produto devem conectar `product-intelligence/`, Policy Engine, Product Intelligence Gate, AGENTS e Orchestrator.
- Novos módulos de experiência devem conectar `product-experience/`, Product Experience Gate, Visual Quality Score, UX/UI agents, AGENTS e Orchestrator.
- Toda versão a partir da v1.3 deve considerar `policy-engine/`, `review/`, `validation/` e `metrics/`.
- Evoluções de Workspace devem preservar a separação entre Core global e `.ceip/` local.
- A arquitetura Core + Workspace deve manter `.cloudsix/method` como caminho recomendado para submodule e `.ceip/` como estado local do projeto.
- Evoluções de Runtime devem priorizar segurança de contexto, baixa carga cognitiva e prompts proporcionais ao risco.

## Ciclo recomendado

```mermaid
flowchart LR
    A["Criar"] --> B["Auditar"]
    B --> C["Aprofundar"]
    C --> D["Padronizar"]
    D --> E["Validar em projeto real"]
    E --> F["Registrar ajustes"]
    F --> B
```

## Exemplos

- Ao adicionar um novo tipo de arquitetura de referência, criar documento em `docs/reference-architectures`, atualizar `INDEX.md` e avaliar se um ADR é necessário.
- Ao ajustar um agente, atualizar também o prompt equivalente em `docs/prompts`.
- Ao criar novo playbook, adicionar checklist mínimo ou referenciar checklist existente.
- Ao adicionar nova recipe, relacionar agentes, gates e validações.
- Ao identificar aprendizado recorrente, registrar em `knowledge` e avaliar se deve virar standard.
- Ao mudar a estrutura do framework, atualizar `validation/` e registrar achado em `audits/` quando aplicável.
- Ao validar em projeto real, registrar resultado em `pilots/`.
- Ao identificar decisão repetitiva, criar ou atualizar engine.
- Ao identificar regra repetitiva, criar ou atualizar policy.
- Ao identificar ideia, produto ou funcionalidade relevante, iniciar por `product-intelligence/` antes de arquitetura.
- Ao identificar interface, fluxo visual ou frontend relevante, iniciar por `product-experience/` antes de UX/UI/Frontend.
- Ao identificar execução assistida por IA, iniciar por `runtime/` e gerar Runtime Pack quando houver Workspace.

## Checklist

- [ ] A versão tem escopo claro.
- [ ] A mudança mantém agnosticismo tecnológico.
- [ ] Documentos de navegação foram atualizados.
- [ ] Há exemplo prático quando aplicável.
- [ ] Há checklist operacional.
- [ ] Decisões estruturais foram registradas.
- [ ] Módulos operacionais foram conectados ao índice e ao orquestrador.
- [ ] Módulos dinâmicos foram conectados ao Runtime e ao Doctor.
- [ ] Suíte de validação e rodadas especializadas foram atualizadas.
- [ ] Módulos novos foram conectados ao Engineering Intelligence Core.
- [ ] Demandas de produto foram conectadas ao Product Intelligence System.
- [ ] Demandas de experiência foram conectadas ao Product Experience System.

## Conclusão

O roadmap orienta evolução contínua sem perder coerência. O framework deve amadurecer a partir de uso real, auditorias recorrentes e decisões documentadas.
