# Risk Score

## Objetivo

Quantificar risco residual para orientar gates, aprovações e prioridade de correção.

## Contexto

O Risk Score não substitui a classificação baixo, médio, alto ou crítico; ele ajuda a comparar riscos dentro da mesma classe.

## Critérios

| Critério | Peso sugerido |
| --- | --- |
| Impacto em usuários | 20 |
| Impacto em dados | 20 |
| Impacto em segurança | 20 |
| Reversibilidade | 15 |
| Observabilidade | 10 |
| Complexidade da mudança | 10 |
| Histórico de incidentes | 5 |

## Interpretação

- 90-100: risco muito controlado.
- 80-89: risco controlado.
- 70-79: risco aceitável com ressalvas.
- 60-69: risco fraco para avanço.
- Abaixo de 60: risco bloqueante.

## Checklist

- [ ] Impactos foram avaliados.
- [ ] Plano de rollback foi considerado.
- [ ] Risco residual foi declarado.
- [ ] Aprovações refletem a classe de risco.

## Conclusão

Risco controlado precisa de evidência operacional.
