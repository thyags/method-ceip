# Orchestrator

## Objetivo

Centralizar a coordenação operacional entre solicitações, policies, brains, engines, agents, reviews e quality gates.

## Componentes

- `agent-orchestration.md`
- `task-routing.md`
- `escalation-flow.md`
- `handoff-protocol.md`

## Fluxo

```mermaid
flowchart LR
    A["Solicitacao"] --> B["Task Routing"]
    B --> C["Agent Orchestration"]
    C --> D["Handoff"]
    D --> E["Reviews e Gates"]
    E --> F["Escalation se necessario"]
```

## Checklist

- [ ] Tarefa foi classificada.
- [ ] Agentes foram definidos.
- [ ] Handoffs foram claros.
- [ ] Escalonamento foi previsto.

## Conclusão

O Orchestrator transforma documentos da CEIP em execução coordenada.
