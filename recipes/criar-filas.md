# Recipe - Criar Filas

## Objetivo

Orientar uso de filas, jobs ou processamento assíncrono com idempotência, retry e observabilidade.

## Contexto

Filas ajudam com latência, resiliência e processamento pesado, mas adicionam consistência eventual e operação.

## Diretrizes

- Confirmar se processamento assíncrono é adequado.
- Definir idempotência, retry, DLQ ou equivalente quando aplicável.
- Monitorar backlog e falhas.
- Documentar experiência do usuário.

## Passos

1. Confirmar problema: latência, volume, retry ou isolamento.
2. Definir evento, payload e consumidor.
3. Projetar idempotência e tratamento de duplicidade.
4. Definir retry, falha definitiva e reprocessamento.
5. Implementar conforme stack.
6. Testar sucesso, falha e reprocessamento.
7. Monitorar fila, tempo e erros.

## Agentes

Chief Software Architect, Backend Engineer, API Integration Engineer, DevOps Engineer, QA Engineer, Performance Engineer.

## Exemplos

- Envio de notificações.
- Processamento de importação.

## Checklist

- [ ] Assincronia foi justificada.
- [ ] Idempotência foi definida.
- [ ] Retry e reprocessamento existem.
- [ ] Monitoramento foi planejado.
- [ ] UX considera processamento pendente.

## Conclusão

Fila é decisão operacional, não apenas detalhe de implementação.
