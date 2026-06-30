# Checklist de Segurança

## Objetivo

Validar controles de segurança e privacidade antes de aprovar mudanças.

## Contexto

Use em autenticação, autorização, APIs, dados sensíveis, integrações, IA, exportações, uploads, pagamentos e áreas administrativas.

## Diretrizes

- Priorize risco real e abuso previsível.
- Proteja dados e segredos.
- Registre risco residual.

## Checklist

- [ ] Dados sensíveis foram identificados.
- [ ] Autenticação é adequada.
- [ ] Autorização foi validada no servidor ou camada confiável.
- [ ] Menor privilégio foi aplicado.
- [ ] Entradas externas são validadas.
- [ ] Uploads e arquivos foram avaliados quando aplicável.
- [ ] Segredos não aparecem no código ou documentação.
- [ ] Logs evitam tokens, senhas e dados sensíveis.
- [ ] Dependências e integrações foram avaliadas.
- [ ] Risco residual foi documentado.

## Exemplos

Use para login, exportação, permissões, integração com terceiros, webhooks, automação com IA e painéis administrativos.

## Conclusão

Segurança aprovada é segurança entendida, testada e documentada.
