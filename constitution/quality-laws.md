# Quality Laws

## Objetivo

Definir leis de qualidade que determinam quando uma entrega pode ser considerada pronta.

## Contexto

Qualidade precisa ser verificável. Estas leis conectam testes, revisão, documentação, segurança, performance, experiência e manutenção.

## Diretrizes

- Use estas leis junto com `quality-gates/README.md` e `score-system/scoring-rubric.md`.
- Uma exceção deve ter justificativa e responsável.

## Leis

**LAW-QUA-001 - Entrega sem validação não está pronta.**

**LAW-QUA-002 - Fluxo crítico exige teste ou evidência equivalente.**

**LAW-QUA-003 - Review deve priorizar risco, não estética.**

**LAW-QUA-004 - Documentação deve acompanhar mudança relevante.**

**LAW-QUA-005 - Regressão conhecida bloqueia release até decisão explícita.**

**LAW-QUA-006 - Quality gate falhado exige correção, mitigação ou aceite formal.**

**LAW-QUA-007 - Métricas de qualidade devem orientar melhoria contínua.**

**LAW-QUA-008 - Interface relevante exige qualidade visual verificável.**

Product Experience Gate e Visual Quality Score devem ser aplicados quando a entrega envolver interface relevante.

## Exemplos

- Um hotfix pode ter validação reduzida, mas precisa de follow-up registrado.
- Uma PR sem teste em regra financeira crítica deve ser bloqueada ou ter justificativa formal.
- Uma tela operacional com texto sobreposto ou ação principal ambígua deve ser bloqueada pelo Product Experience Gate.

## Checklist

- [ ] Critérios de aceite foram validados.
- [ ] Testes ou evidências existem.
- [ ] Review foi realizado.
- [ ] Documentação foi atualizada.
- [ ] Gates foram avaliados.
- [ ] Product Experience Gate foi avaliado quando havia interface relevante.

## Conclusão

Qualidade é uma decisão operacional baseada em evidência.
