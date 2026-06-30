# Decision Engine

## Objetivo

Garantir que decisões importantes possam ser explicadas, auditadas e reproduzidas pela plataforma.

## Contexto

Toda decisão arquitetural, técnica ou operacional relevante deve ser governada por contexto, políticas, alternativas, trade-offs e evidências.

## Diretrizes

- Toda decisão começa com contexto.
- Toda decisão relevante compara alternativas.
- Toda decisão difícil de reverter exige ADR.
- Toda decisão deve indicar políticas aplicadas.

## Entradas

- Context brief.
- Alternativas.
- Policies.
- Riscos.
- Restrições.

## Processo

1. Validar contexto.
2. Identificar policies aplicáveis.
3. Comparar alternativas.
4. Avaliar reversibilidade.
5. Selecionar decisão recomendada.
6. Registrar ADR/RFC se necessário.

## Saídas

- Decisão explicada.
- Alternativas rejeitadas.
- Trade-offs.
- ADR/RFC quando aplicável.

## Exemplos

- Escolher fila em vez de chamada síncrona deve explicar latência, UX, consistência, retry, idempotência e operação.

## Checklist

- [ ] Contexto foi validado.
- [ ] Policies foram aplicadas.
- [ ] Alternativas foram comparadas.
- [ ] Reversibilidade foi avaliada.
- [ ] Registro persistente foi criado quando necessário.

## Conclusão

Decision Engine permite que a plataforma explique por que uma decisão foi tomada.
