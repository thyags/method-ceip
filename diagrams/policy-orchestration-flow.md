# Diagrama - Policy Engine e Orchestrator

## Objetivo

Detalhar a relação obrigatória entre Policy Engine e Orchestrator.

## Diagrama

```mermaid
flowchart LR
    A["Demanda"] --> B["Classificar tipo"]
    B --> C["Classificar risco"]
    C --> D["Selecionar policies"]
    D --> E["Definir agentes obrigatórios"]
    E --> F["Definir gates"]
    F --> G["Definir aprovação"]
    G --> H["Orchestrator"]
    H --> I["Sequência de agentes"]
    I --> J["Handoffs"]
    J --> K["Reviews"]
    K --> L["Quality Gates"]
    L --> M["Score / Approval"]
```

## Regras

- O Orchestrator não deve iniciar execução relevante sem classificação de risco.
- Agentes obrigatórios vêm da matriz de roteamento.
- Gates e aprovações vêm das policies.
- Handoffs devem preservar contexto e evidência.

## Checklist

- [ ] Tipo e risco foram definidos.
- [ ] Policies foram aplicadas.
- [ ] Orchestrator recebeu entradas suficientes.
- [ ] Aprovação foi definida antes da conclusão.

## Conclusão

Policy Engine decide restrições; Orchestrator coordena execução.
