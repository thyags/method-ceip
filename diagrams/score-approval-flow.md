# Diagrama - Score e Aprovação

## Objetivo

Representar como scores, gates e aprovação formal se combinam.

## Diagrama

```mermaid
flowchart TD
    A["Evidências"] --> B["Quality Gates"]
    B --> C{"Critério bloqueante?"}
    C -->|Sim| D["Bloqueado"]
    C -->|Não| E["Score Engine"]
    E --> F["Aplicar mínimo por risco"]
    F --> G{"Mínimo atingido?"}
    G -->|Sim| H["Aprovado ou aprovado com ressalvas"]
    G -->|Não| I["Approval Engine"]
    I --> J{"Exceção aprovada?"}
    J -->|Sim| K["Aprovado com exceção registrada"]
    J -->|Não| D
```

## Checklist

- [ ] Bloqueios de gate foram avaliados antes da média.
- [ ] Mínimo por risco foi aplicado.
- [ ] Exceção foi formalizada quando necessária.

## Conclusão

Score ajuda decisão, mas não compensa bloqueio crítico.
