# Estrutura Recomendada do `.ceip/`

## Objetivo

Documentar a estrutura padrão do CEIP Workspace em projetos consumidores.

## Estrutura

```text
.ceip/
  README.md
  PROJECT.md
  STACK.md
  CONTEXT.md
  CURRENT_FOCUS.md
  KNOWN_ISSUES.md
  TECHNICAL_DEBT.md
  ARCHITECTURE_MAP.md
  QUALITY_DASHBOARD.md
  project.json

  product-intelligence/
    README.md
    idea-brief.md
    discovery-brief.md
    prd.md
    requirements-map.md
    mvp.md
    roadmap.md
    feature-map.md
    acceptance-criteria.md
    validation-notes.md

  product-experience/
    README.md
    experience-brief.md
    screen-inventory.md
    design-decisions.md
    interaction-states.md
    visual-quality-score.md
    review-notes.md
    experience-memory.md
    best-layouts/
      README.md
    best-dashboard/
      README.md
    best-table/
      README.md
    best-form/
      README.md
    best-sidebar/
      README.md

  context/
    business-context.md
    technical-context.md
    architecture-context.md
    integration-context.md
    database-context.md
    security-context.md
    ux-ui-context.md
    product-experience-context.md

  memory/
    README.md
    decisions.md
    lessons-learned.md
    mistakes.md
    patterns.md
    project-memory.md
    business-memory.md

  adr/
    README.md
    proposed/
    accepted/
    rejected/
    deprecated/

  rfc/
    README.md
    proposed/
    accepted/
    rejected/

  tasks/
    README.md
    active/
    completed/
    cancelled/

  reviews/
    README.md
    architecture/
    backend/
    frontend/
    database/
    security/
    performance/
    qa/
    documentation/

  metrics/
    README.md
    quality-score.md
    risk-score.md
    security-score.md
    performance-score.md
    maintainability-score.md
    visual-quality-score.md

  artifacts/
    README.md
    diagrams/
    reports/
    specs/
    screenshots/
    exports/

  logs/
    README.md
    decisions-log.md
    implementation-log.md
    review-log.md
    incident-log.md

  knowledge/
    README.md
    business/
    architecture/
    backend/
    frontend/
    database/
    integrations/
    security/
    performance/
    ux-ui/

  cache/
    README.md
    context-cache.md
    agent-cache.md
    policy-cache.md

  workspace/
    README.md
    planning/
    analysis/
    drafts/
    temporary/

  output/
    README.md
    final-reports/
    generated-prompts/
    implementation-plans/

  temp/
    README.md
```

## Regras

- Versione somente o que for seguro.
- Não grave segredos.
- Não copie `method-cloudsix` para `.ceip/`.
- Use `cache/`, `temp/` e `workspace/temporary/` para itens descartáveis.
- Use `product-intelligence/` para discovery, PRD, requisitos, MVP, roadmap, features, stories e critérios de aceite específicos do projeto.
- Use `product-experience/` para experience brief, decisões de layout, estados de interação, revisão visual, Visual Quality Score e memória de experiência específicos do projeto.
- Use `adr/`, `rfc/`, `memory/` e `reviews/` para histórico relevante.

## Checklist

- [ ] Arquivos principais existem.
- [ ] Product Intelligence local existe quando houver demanda de produto.
- [ ] Product Experience local existe quando houver interface relevante.
- [ ] Diretórios de contexto existem.
- [ ] ADR/RFC estão separados por status.
- [ ] Métricas e reviews têm local próprio.
- [ ] Itens temporários estão em diretórios ignoráveis.

## Conclusão

A estrutura padrão dá previsibilidade para agentes e pessoas navegarem o contexto do projeto.
