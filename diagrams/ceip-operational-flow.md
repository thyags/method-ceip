# Diagrama - Fluxo Operacional CEIP

## Objetivo

Representar o fluxo completo de uma demanda dentro da CEIP.

## Diagrama

```mermaid
flowchart TD
    A["Solicitação"] --> B["Engineering Intelligence Core"]
    B --> C["Context Engine"]
    C --> D["Thinking Engine"]
    D --> E["Policy Engine"]
    E --> F{"Risco e tipo definidos?"}
    F -->|Não| C
    F -->|Sim| G["Orchestrator"]
    G --> H["Agentes especialistas"]
    H --> I["Review Engine"]
    I --> J["Quality Gates"]
    J --> K["Score Engine"]
    K --> L{"Aprovado?"}
    L -->|Não| M["Correção, mitigação ou exceção"]
    M --> G
    L -->|Sim| N["Memory Engine"]
    N --> O["Knowledge / Patterns / Anti-patterns"]
    O --> P["Evolution Engine"]
```

## Uso

Use este diagrama em onboarding, auditoria e explicação do fluxo oficial.

## Checklist

- [ ] Policy Engine aparece antes do Orchestrator.
- [ ] Reviews, gates e score aparecem antes da conclusão.
- [ ] Aprendizado retorna para memória e evolução.

## Conclusão

O fluxo mostra a CEIP como plataforma operacional, não como coleção de documentos.
