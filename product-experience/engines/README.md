# Product Experience Engines

## Objetivo

Definir os engines operacionais do Product Experience System.

## Engines

| Engine | Função |
| --- | --- |
| `cdl-compliance-engine.md` | Auditar aderência à CloudSix Design Language |
| `design-review-engine.md` | Revisar experiência antes de implementação ou release |
| `layout-intelligence-engine.md` | Decidir estrutura visual, densidade, composição e agrupamento |
| `interaction-engine.md` | Padronizar estados, feedback, confirmação e continuidade |
| `visual-quality-score-engine.md` | Calcular score visual com evidência e mínimos por risco |
| `experience-memory-engine.md` | Registrar e reutilizar padrões aprovados de experiência |

## Fluxo

```mermaid
flowchart LR
    A["PRD / Requisitos"] --> B["Layout Intelligence"]
    B --> C["Interaction Engine"]
    C --> D["CDL Compliance"]
    D --> E["Design Review"]
    E --> F["Visual Quality Score"]
    F --> G["Experience Memory"]
```

## Checklist

- [ ] O engine correto foi escolhido.
- [ ] Entradas e saídas foram registradas.
- [ ] CDL Compliance foi aplicado quando havia interface relevante.
- [ ] O resultado mantém agnosticismo de tecnologia.
- [ ] Evidências foram associadas ao score ou decisão.

## Conclusão

Engines transformam experiência em processo operacional, evitando decisões visuais soltas.
