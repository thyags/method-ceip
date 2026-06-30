# Decision Policy

## Objetivo

Garantir que decisões relevantes sejam explicáveis, comparáveis e registradas.

## Contexto

Decisões técnicas sem contexto viram preferência pessoal e dificultam manutenção.

## Diretrizes

- Gatilho: decisão que afeta arquitetura, dados, segurança, performance, operação ou contratos.
- Regra: comparar alternativas, registrar trade-offs e avaliar reversibilidade.
- Exceção: decisão trivial pode ser registrada no PR ou documentação local.
- Validação: Decision Engine determina necessidade de ADR ou RFC.

## Exemplos

- Escolher processamento assíncrono exige explicar retry, consistência e UX.
- Reescrita de módulo exige RFC e ADR.

## Checklist

- [ ] Problema foi descrito.
- [ ] Alternativas foram comparadas.
- [ ] Trade-offs foram registrados.
- [ ] ADR/RFC foi criado quando necessário.

## Conclusão

Decision Policy torna decisões rastreáveis e defensáveis.
