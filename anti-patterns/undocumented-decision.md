# Anti-pattern: Decisão Não Documentada

## Objetivo

Detectar decisões técnicas relevantes sem registro de contexto, alternativas e trade-offs.

## Sinais

- Arquitetura difícil de explicar.
- Mudança estrutural sem ADR.
- Discussões recorrentes sobre decisão já tomada.
- Dependência de memória individual.

## Impacto

Aumenta retrabalho, enfraquece manutenção e reduz capacidade de auditoria.

## Correção recomendada

Criar ADR ou RFC, registrar contexto, alternativas, decisão, consequências e data.

## Checklist

- [ ] Decisão relevante foi identificada.
- [ ] ADR ou RFC foi criado.
- [ ] Alternativas foram registradas.
- [ ] Risco residual foi declarado.

## Conclusão

Decisão não documentada tende a ser reaberta sem novo contexto.
