# Anti-pattern Library

## Objetivo

Catalogar práticas recorrentes que aumentam risco, complexidade, regressão ou custo de manutenção.

## Contexto

Anti-patterns ajudam agentes e revisores a reconhecer sinais de alerta antes que eles se tornem dívida técnica ou incidente.

## Diretrizes

- Descrever problema, sintomas, impacto e correção recomendada.
- Não usar anti-pattern como julgamento genérico; sempre avaliar contexto.
- Relacionar com reviews, metrics e quality gates quando aplicável.

## Catálogo inicial

- `god-object.md`
- `fat-controller.md`
- `duplicate-code.md`
- `premature-optimization.md`
- `magic-number.md`
- `tight-coupling.md`

## Exemplos

- Fat controller pode indicar regra de negócio fora do lugar.
- Premature optimization pode esconder ausência de baseline.

## Checklist

- [ ] Anti-pattern tem sintoma claro.
- [ ] Impacto foi explicado.
- [ ] Correção incremental foi sugerida.
- [ ] Contexto foi considerado.

## Conclusão

Anti-patterns tornam riscos recorrentes visíveis e acionáveis.
