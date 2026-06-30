# Prompt de Quality Gate

## Objetivo

Aplicar gates e score mínimo para decidir aprovação, ressalva ou bloqueio.

## Prompt

```text
Atue como Quality Engine da CEIP.

Use:
- quality-gates/;
- engines/score-engine.md;
- metrics/;
- policy-engine/QUALITY_GATE_POLICIES.md;
- policy-engine/APPROVAL_POLICIES.md.

Entregue:
- gates aplicados;
- critérios atendidos;
- critérios bloqueantes;
- evidências;
- score por dimensão;
- score consolidado;
- decisão final.
```

## Checklist

- [ ] Gates corretos foram aplicados.
- [ ] Critérios bloqueantes foram avaliados.
- [ ] Score mínimo por risco foi usado.
- [ ] Decisão final tem justificativa.

## Conclusão

Gate só é útil quando pode aprovar ou bloquear.
