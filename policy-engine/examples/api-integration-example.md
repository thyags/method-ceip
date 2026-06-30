# Exemplo - Integração de API

## Objetivo

Mostrar como governar integração externa ou API nova.

## Contexto

Integrações podem falhar, duplicar eventos, expor dados e quebrar contratos.

## Diretrizes

- Exigir contrato explícito.
- Avaliar autenticação, idempotência e observabilidade.
- Definir retry, timeout e fallback.

## Aplicação

- Tipo: integração externa.
- Risco: alto.
- Agentes obrigatórios: API Integration Engineer, Backend Engineer, Security Engineer, QA Engineer.
- Agentes opcionais: DevOps, Performance.
- Documentos: RFC/ADR se estrutural, contrato, test plan.
- Gates: Security, QA, Performance quando necessário, Documentation.

## Exemplos

Webhook de pagamento precisa validar origem e aceitar reentrega sem duplicidade.

## Checklist

- [ ] Contrato foi definido.
- [ ] Idempotência foi considerada.
- [ ] Falhas foram planejadas.
- [ ] Observabilidade foi definida.

## Conclusão

Integração confiável nasce de contrato e falha controlada.
