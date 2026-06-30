# Security Review

## Objetivo

Avaliar riscos de segurança, privacidade, autorização, segredos, logs e abuso previsível.

## Contexto

Use em qualquer mudança com dados sensíveis, autenticação, autorização, APIs, uploads, IA, exportações ou integrações.

## Diretrizes

- Use `constitution/security-laws.md`.
- Use `decision-trees/README.md` e `diagrams/score-approval-flow.md`.
- Registre risco residual.

## Entradas esperadas

Fluxos, dados sensíveis, perfis de acesso, entradas externas, integrações, logs, segredos e controles existentes.

## Bloqueios

- Autorização sensível apenas no frontend.
- Segredo exposto.
- Dado sensível sem necessidade ou controle.
- Falha de validação em entrada externa crítica.

## Exemplos

- Exportação de clientes, webhook, login, permissão administrativa, upload e automação com IA.

## Checklist

- [ ] Dados sensíveis foram identificados.
- [ ] Autorização foi validada.
- [ ] Entradas externas são tratadas.
- [ ] Segredos estão protegidos.
- [ ] Logs não vazam informação sensível.
- [ ] Risco residual foi registrado.

## Conclusão

Security review torna explícito o que pode dar errado e como o risco foi tratado.
