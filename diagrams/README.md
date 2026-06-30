# Diagrams

## Objetivo

Concentrar diagramas Mermaid da CEIP.

## Diagramas principais

- Fluxo do Engineering Intelligence Core em `brains/engineering-intelligence-core.md`.
- Orquestração de agentes em `AGENTS.md`.
- Fluxo de governança em `orchestrator/`.

## Diagrama base

```mermaid
flowchart LR
    A["Solicitacao"] --> B["Brains"]
    B --> C["Engines"]
    C --> D["Policies"]
    D --> E["Agents"]
    E --> F["Reviews"]
    F --> G["Quality Gates"]
    G --> H["Memory e Knowledge"]
```

## Checklist

- [ ] Diagrama tem legenda suficiente.
- [ ] Nós apontam conceitos existentes.
- [ ] Fluxo não contradiz Orchestrator.

## Conclusão

Diagramas devem esclarecer fluxo, não decorar documentação.
