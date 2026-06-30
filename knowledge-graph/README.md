# Knowledge Graph

## Objetivo

Definir o modelo conceitual do grafo de conhecimento da CEIP.

## Contexto

A Knowledge Base armazena conteúdo. O Knowledge Graph define relações entre leis, políticas, agentes, engines, gates, ADRs, RFCs, patterns, anti-patterns, recipes e aprendizados.

## Diretrizes

- Relacionar artefatos por tipo de decisão e domínio.
- Usar o grafo para explicar por que uma recomendação existe.
- Atualizar relações quando novos módulos forem criados.
- Não depender de ferramenta específica de grafo nesta fase.

## Entidades

| Entidade | Exemplo |
| --- | --- |
| Law | `LAW-001` |
| Policy | `Stack Discovery Policy` |
| Engine | `Context Engine` |
| Product Artifact | `PRD`, `MVP`, `Roadmap`, `Feature`, `Story` |
| Experience Artifact | `Experience Brief`, `Screen Spec`, `Visual Quality Score`, `Design Review` |
| Agent | `Backend Engineer` |
| Gate | `Security Gate` |
| Review | `Security Review` |
| ADR | `ADR-0001` |
| RFC | `RFC-0005` |
| Pattern | `Adapter` |
| Anti-pattern | `Tight Coupling` |
| Recipe | `Criar API` |
| Learning | Lição de piloto |

## Relações

```mermaid
flowchart LR
    A["Law"] --> B["Policy"]
    B --> C["Product Intelligence"]
    C --> D["Product Experience"]
    D --> E["Engine"]
    E --> F["Agent"]
    F --> G["Review"]
    G --> H["Quality Gate"]
    H --> I["Scorecard"]
    I --> J["Learning"]
    J --> K["Knowledge"]
    K --> B
```

## Exemplos

- `Stack Discovery Policy` deriva de `LAW-002`, é aplicada pelo `Context Engine` e validada em `validation/structural-validation.md`.
- `Product Intelligence Policy` deriva do Artigo 22 da Constituição, é aplicada por `product-intelligence/`, validada por `quality-gates/product-intelligence-gate.md` e auditada em `validation/product-intelligence-validation.md`.
- `Product Experience Policy` deriva da Experience Constitution, é aplicada por `product-experience/`, validada por `quality-gates/product-experience-gate.md` e auditada em `validation/product-experience-validation.md`.
- `Adapter Pattern` pode ser recomendado pelo `Architecture Brain` em integrações externas e revisado por `architecture-review.md`.

## Checklist

- [ ] Artefato novo tem relações claras.
- [ ] Policy relacionada foi identificada.
- [ ] Agente ou engine consumidor foi identificado.
- [ ] Aprendizado pode ser rastreado.

## Conclusão

Knowledge Graph permite que a CEIP explique recomendações por relações, não por memória implícita.
