# API Policies

## Objetivo

Governar APIs, webhooks, contratos e integrações externas.

## Contexto

APIs conectam sistemas e podem gerar efeitos duplicados, exposição de dados ou quebra de compatibilidade.

## Diretrizes

- Contrato deve ser explícito.
- Autenticação e autorização devem ser avaliadas.
- Idempotência é obrigatória quando há retry ou reentrega.
- Erros devem ser previsíveis.

## Políticas

- Nova API exige Backend/API Integration e Security quando houver dados sensíveis.
- Integração externa exige timeout, retry e observabilidade.
- Webhook exige validação de origem e idempotência.
- Contrato público exige versionamento ou compatibilidade.

## Exemplos

- Webhook de pagamento não pode processar duplicidade como evento novo.

## Checklist

- [ ] Contrato foi definido.
- [ ] Segurança foi avaliada.
- [ ] Erros foram documentados.
- [ ] Idempotência foi considerada.

## Conclusão

API Policies tornam integrações previsíveis e auditáveis.
