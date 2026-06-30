# Gate 2 - Segurança

## Objetivo

Validar se riscos de segurança e privacidade foram avaliados e mitigados.

## Contexto

Use em toda mudança com dados, permissões, APIs, integrações, IA, autenticação, uploads ou ações sensíveis.

## Diretrizes

- Consulte `constitution/security-laws.md`.
- Use `review/security-review.md` quando houver risco relevante.
- Registre risco residual.

## Critérios de aprovação

- Dados sensíveis foram identificados.
- Autorização ocorre em camada confiável.
- Entradas externas são validadas.
- Segredos não são expostos.
- Logs são seguros.

## Exemplos

- Exportação de relatório com dados pessoais exige revisão de permissão e auditoria.
- Webhook exige validação de origem e idempotência.

## Checklist

- [ ] Dados sensíveis foram avaliados.
- [ ] Autorização foi verificada.
- [ ] Entradas externas foram tratadas.
- [ ] Segredos e logs foram revisados.
- [ ] Risco residual foi registrado.

## Conclusão

Este gate bloqueia entregas que ampliam risco sem controle explícito.
