# Gate 2 - Segurança

> Alias de compatibilidade para `security-gate.md`. O gate oficial detalhado é o arquivo nomeado; este documento permanece para fluxos que ainda referenciam a sequência numerada.

## Objetivo

Validar se riscos de segurança e privacidade foram avaliados e mitigados.

## Contexto

Use em toda mudança com dados, permissões, APIs, integrações, IA, autenticação, uploads ou ações sensíveis.

## Quando aplicar

Aplicar sempre que houver identidade, autorização, dados sensíveis, integração externa, upload, webhook, IA, operação administrativa ou exposição pública.

## Diretrizes

- Consulte `constitution/security-laws.md`.
- Use `review/security-review.md` quando houver risco relevante.
- Registre risco residual.

## Critérios obrigatórios

- Dados sensíveis foram identificados.
- Autorização ocorre em camada confiável.
- Entradas externas são validadas.
- Segredos não são expostos.
- Logs são seguros.

## Critérios bloqueantes

- Bypass de autorização.
- Segredo exposto.
- Dado sensível vazando em resposta, log ou documentação.
- Entrada externa sem validação em fluxo sensível.

## Evidências exigidas

Threat model simples, teste ou revisão de autorização, classificação de dados, revisão de logs e registro de risco residual.

## Agentes responsáveis

Security Engineer, Backend Engineer, DevOps Engineer, Database Architect e QA Engineer.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Risco de segurança identificado, mitigado ou formalmente aprovado.

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
