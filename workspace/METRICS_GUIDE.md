# Guia de Métricas do Workspace

## Objetivo

Orientar registro de métricas locais em `.ceip/metrics/`.

## Métricas recomendadas

- `quality-score.md`
- `risk-score.md`
- `security-score.md`
- `performance-score.md`
- `maintainability-score.md`

## Regras

- Métrica deve ter evidência.
- Métrica deve orientar ação.
- Score deve seguir `engines/score-engine.md` do Core.
- Risco define score mínimo.
- Critério bloqueante não deve ser compensado por média alta.

## Quality Dashboard

Use `.ceip/QUALITY_DASHBOARD.md` para consolidar:

- Último score.
- Riscos conhecidos.
- Gates pendentes.
- Dívida técnica.
- Reviews recentes.
- Próximas ações.

## Checklist

- [ ] Score tem data.
- [ ] Score tem evidência.
- [ ] Risco foi classificado.
- [ ] Gate bloqueante foi tratado.
- [ ] Dashboard foi atualizado.

## Conclusão

Métricas locais ajudam a acompanhar evolução real do projeto consumidor.
