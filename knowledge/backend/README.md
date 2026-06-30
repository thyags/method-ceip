# Knowledge Base - Backend

## Objetivo

Registrar aprendizados sobre regras de aplicação, serviços, APIs internas, jobs e erros.

## Contexto

Backend concentra comportamento crítico. Esta base registra práticas observadas para reduzir regressões e duplicação.

## Diretrizes

- Priorizar regras de domínio e contratos.
- Registrar casos de erro relevantes.
- Relacionar testes e incidentes quando houver.

## Conhecimento inicial

- Erros de domínio devem ser distinguíveis de falhas técnicas.
- Jobs devem ser idempotentes quando puderem ser reexecutados.
- Regras críticas não devem ser duplicadas entre endpoints, jobs e importadores.

## Exemplos

- Processamento de pedido deve evitar cobrança duplicada em retry.
- Importador deve registrar item rejeitado e motivo.

## Checklist

- [ ] Aprendizado é aplicável a backend.
- [ ] Comportamento esperado foi descrito.
- [ ] Risco de regressão foi considerado.

## Conclusão

Conhecimento backend deve proteger comportamento e manutenção.
