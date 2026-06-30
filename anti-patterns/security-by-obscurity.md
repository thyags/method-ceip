# Anti-pattern: Segurança por Obscuridade

## Objetivo

Detectar soluções que dependem de segredo implícito, rota escondida ou comportamento não documentado como controle de segurança.

## Sinais

- Endpoint "protegido" apenas por URL difícil.
- Permissão validada apenas no frontend.
- Ausência de controle porque "ninguém sabe acessar".
- Segredo compartilhado fora de mecanismo apropriado.

## Impacto

Cria falsa sensação de segurança e risco alto de exposição.

## Correção recomendada

Implementar autenticação, autorização, validação e auditoria no ponto correto.

## Checklist

- [ ] Controle real foi definido.
- [ ] Autorização foi validada no backend.
- [ ] Segredos foram protegidos.
- [ ] Logs e auditoria foram avaliados.

## Conclusão

O que depende de invisibilidade não é controle de segurança confiável.
