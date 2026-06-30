# Performance Policies

## Objetivo

Governar otimizações, métricas, baseline, cache, filas e gargalos.

## Contexto

Performance deve ser guiada por evidência. Otimização especulativa pode aumentar risco.

## Diretrizes

- Medir antes de otimizar.
- Definir meta e baseline.
- Cache exige estratégia de invalidação.
- Filas exigem idempotência e observabilidade.

## Políticas

- Otimização de alto impacto exige Performance Engineer.
- Performance crítica exige monitoramento pós-deploy.
- Mudança que aumenta payload ou consulta deve avaliar impacto.

## Exemplos

- Relatório lento deve passar por baseline, hipótese, intervenção e medição posterior.

## Checklist

- [ ] Baseline existe.
- [ ] Meta foi definida.
- [ ] Gargalo foi identificado.
- [ ] Ganho será medido.

## Conclusão

Performance Policies evitam otimização sem diagnóstico.
