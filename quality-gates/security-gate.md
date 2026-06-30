# Security Gate

## Objetivo

Validar autenticação, autorização, exposição de dados, validação de entrada, auditoria e abuso previsível.

## Quando aplicar

Aplicar em qualquer alteração que toque identidade, permissões, dados sensíveis, integração externa, upload, pagamento, webhook ou operação administrativa.

## Critérios obrigatórios

- Ameaças foram mapeadas.
- Autorização foi validada no ponto correto.
- Dados sensíveis foram minimizados.
- Entradas externas têm validação.

## Critérios bloqueantes

- Bypass de autorização.
- Vazamento de dado sensível.
- Segredo em documentação ou código.
- Integração externa sem autenticação adequada.

## Evidências exigidas

Threat model simples, checklist de segurança, testes de autorização, classificação de dados e plano de resposta quando aplicável.

## Agentes responsáveis

Security Engineer, Backend Engineer, DevOps Engineer, Database Architect e QA Engineer.

## Checklist

- [ ] Autenticação foi verificada.
- [ ] Autorização foi verificada.
- [ ] Dados sensíveis foram protegidos.
- [ ] Entradas externas foram validadas.
- [ ] Logs não expõem segredos.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Nenhum risco crítico de segurança conhecido segue sem aprovação formal.

## Conclusão

Segurança é critério de bloqueio, não refinamento posterior.
