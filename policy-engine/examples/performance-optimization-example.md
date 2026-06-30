# Exemplo - Otimização de Performance

## Objetivo

Mostrar como governar otimização de performance.

## Contexto

Performance deve ser tratada com medição, meta, hipótese e validação posterior.

## Diretrizes

- Medir antes de otimizar.
- Evitar cache sem invalidação.
- Validar ganho depois.

## Aplicação

- Tipo: otimização de performance.
- Risco: médio ou alto.
- Agentes obrigatórios: Performance Engineer, QA Engineer.
- Agentes opcionais: Backend, Database, Frontend, DevOps.
- Documentos: baseline, plano de otimização, resultado.
- Gates: Performance, QA, Review.

## Exemplos

Relatório lento deve ser analisado por consulta, volume, payload, UX e possibilidade de pré-processamento.

## Checklist

- [ ] Baseline existe.
- [ ] Meta foi definida.
- [ ] Gargalo foi identificado.
- [ ] Ganho foi medido.

## Conclusão

Otimização sem evidência deve ser bloqueada ou tratada como hipótese.
