# Product Intelligence Engines

## Objetivo

Definir os engines operacionais do Product Intelligence System.

## Engines oficiais

- Idea Engine.
- Discovery Engine.
- Market Engine.
- Competitor Engine.
- Business Engine.
- Requirements Engine.
- PRD Engine.
- Feature Engine.
- Epic Engine.
- Capability Engine.
- User Story Engine.
- Acceptance Criteria Engine.
- Roadmap Engine.
- MVP Engine.
- Planning Engine.
- Validation Engine.

## Fluxo resumido

```mermaid
flowchart LR
    A["Idea"] --> B["Discovery"]
    B --> C["Market / Competitor"]
    C --> D["Business"]
    D --> E["Requirements"]
    E --> F["PRD"]
    F --> G["Feature / Epic / Capability"]
    G --> H["Stories / Acceptance"]
    H --> I["MVP / Roadmap / Planning"]
    I --> J["Validation"]
```

## Checklist

- [ ] Engine correto foi selecionado.
- [ ] Entradas foram fornecidas ou lacunas foram registradas.
- [ ] Saídas são rastreáveis.
- [ ] Quality Gates foram avaliados.
- [ ] Policy Engine foi consultado quando houve risco, exceção ou avanço de etapa.
