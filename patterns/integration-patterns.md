# Integration Patterns

## Objetivo

Agrupar padrões para APIs externas, webhooks, filas, importações e sincronização.

## Padrões relacionados

- Contrato explícito.
- Idempotência.
- Retry com limite.
- Mapeamento de erro.
- Observabilidade por correlação.

## Quando usar

Em integrações com serviços externos, ERPs, CRMs, marketplaces, pagamentos e automações.

## Anti-patterns associados

- Retry infinito.
- Falha silenciosa.
- Dependência externa sem timeout.

## Checklist

- [ ] Contrato foi documentado.
- [ ] Erros foram mapeados.
- [ ] Idempotência foi considerada.
- [ ] Observabilidade foi definida.

## Conclusão

Integração confiável falha de forma previsível.
