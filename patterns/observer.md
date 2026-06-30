# Pattern - Observer

## Objetivo

Permitir reação a eventos sem acoplamento direto entre produtor e consumidores.

## Contexto

Observer pode ser útil para notificações, auditoria, atualizações derivadas e automações. Deve ser usado com cuidado quando ordem e consistência importam.

## Diretrizes

- Defina evento e payload.
- Considere idempotência.
- Documente ordem, falha e reprocessamento.

## Exemplos

- Evento de pedido aprovado dispara notificação e auditoria.

## Checklist

- [ ] Evento tem semântica clara.
- [ ] Consumidores são idempotentes quando necessário.
- [ ] Falhas são observáveis.

## Conclusão

Observer reduz acoplamento, mas exige disciplina em consistência e diagnóstico.
