# Product Intelligence System

## Objetivo

Definir o Product Intelligence System (PIS) como a porta de entrada oficial da CEIP para transformar ideias, solicitações de clientes, oportunidades e funcionalidades em produto especificado antes de qualquer arquitetura ou implementação.

## Contexto

A CEIP já organiza engenharia, políticas, agentes, quality gates e aprendizado. O PIS adiciona a camada anterior: descoberta de produto. Ele evita que uma IA, pessoa ou agente técnico comece por backend, arquitetura, tela ou banco de dados quando ainda faltam problema, público, valor, requisitos, critérios de aceite, MVP e roadmap.

## Posição no fluxo CEIP

```mermaid
flowchart LR
    A["Ideia"] --> B["Discovery"]
    B --> C["Product Intelligence System"]
    C --> D["Business Analysis"]
    D --> E["Product Management"]
    E --> F["Architecture"]
    F --> G["Policy Engine"]
    G --> H["Engineering"]
    H --> I["Quality"]
    I --> J["Release"]
    J --> K["Learning"]
```

## Regra operacional

- Nenhum projeto novo deve iniciar diretamente por arquitetura.
- Nenhuma funcionalidade deve iniciar diretamente por implementação.
- Nenhuma arquitetura deve ser criada antes de haver PRD ou justificativa formal de exceção.
- Nenhuma feature deve avançar sem critérios de aceite.
- Nenhuma story deve existir sem estar ligada a feature, epic ou capability.
- Nenhum roadmap deve ser publicado sem MVP, premissas, riscos e dependências.
- Toda exceção deve passar pelo Policy Engine e registrar justificativa.

## Componentes

| Área | Função |
| --- | --- |
| `PRODUCT_INTELLIGENCE.md` | Visão operacional do sistema |
| `PRODUCT_PIPELINE.md` | Fluxo obrigatório da ideia ao planejamento |
| `DISCOVERY_FRAMEWORK.md` | Método de descoberta por perguntas |
| `PRODUCT_GOVERNANCE.md` | Regras de governança de produto |
| `PRODUCT_DECISION_FRAMEWORK.md` | Decisões, trade-offs e critérios |
| `IDEA_LIFECYCLE.md` | Ciclo de vida da ideia |
| `brains/` | Brains estratégicos de produto, mercado, descoberta e requisitos |
| `engines/` | Engines operacionais do pipeline de produto |
| `templates/` | Modelos reutilizáveis para PRD, discovery, stories, roadmap e afins |
| `playbooks/` | Procedimentos para novo produto, API, integração, SaaS, ERP, CRM e outros |
| `recipes/` | Receitas rápidas para saídas recorrentes |
| `examples/` | Exemplos por domínio |

## Entradas aceitas

- Ideia inicial sem estrutura.
- Pedido de cliente.
- Nova funcionalidade.
- Novo módulo.
- Nova API.
- Nova integração.
- Modernização de sistema legado.
- Oportunidade de mercado.
- Problema operacional recorrente.

## Saídas mínimas

- Ideia classificada.
- Discovery respondido ou lacunas registradas.
- Problema, público, valor e hipóteses.
- Requisitos funcionais e não funcionais.
- Regras de negócio.
- PRD.
- Features, epics, capabilities e user stories.
- Critérios de aceite.
- MVP e roadmap.
- Riscos, premissas, dependências e métricas.
- Handoff para Business Analyst, Product Manager e Architecture.

## Integração com CEIP Core + Workspace

Em projeto consumidor, o PIS deve registrar artefatos locais em `.ceip/` quando disponível:

- `.ceip/context/business-context.md`
- `.ceip/tasks/active/`
- `.ceip/artifacts/specs/`
- `.ceip/logs/decisions-log.md`
- `.ceip/memory/project-memory.md`

O CEIP Core continua sendo a fonte do método. O `.ceip/` guarda apenas contexto e artefatos do projeto.

## Checklist

- [ ] A ideia foi registrada antes de qualquer solução.
- [ ] O problema foi validado ou marcado como hipótese.
- [ ] Usuários, stakeholders e personas foram identificados.
- [ ] Requisitos foram derivados do discovery.
- [ ] PRD foi criado antes da arquitetura.
- [ ] MVP foi definido antes do roadmap.
- [ ] Critérios de aceite existem antes das stories irem para engenharia.
- [ ] Policy Engine foi acionado para classificar risco e exceções.

## Conclusão

O Product Intelligence System transforma a CEIP em uma plataforma que pensa produto antes de pensar software. Ele reduz ambiguidade, retrabalho e implementação prematura.
