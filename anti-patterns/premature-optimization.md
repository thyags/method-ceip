# Anti-pattern - Premature Optimization

## Objetivo

Identificar otimizações sem problema medido, meta ou evidência.

## Contexto

Otimização prematura pode criar cache inconsistente, filas desnecessárias, abstrações complexas e custo operacional.

## Diretrizes

- Meça antes de otimizar.
- Defina meta.
- Compare ganho com complexidade.

## Sintomas

- Cache sem estratégia de invalidação.
- Código mais complexo sem baseline.
- Otimização em fluxo pouco usado.
- Fila para operação que precisava ser síncrona.

## Exemplos

- Introduzir cache em relatório sem saber se o gargalo é consulta, rede ou renderização.

## Checklist

- [ ] Baseline existe.
- [ ] Gargalo foi localizado.
- [ ] Meta foi definida.
- [ ] Trade-offs foram registrados.

## Conclusão

Performance deve ser guiada por evidência, não por antecipação vaga.
