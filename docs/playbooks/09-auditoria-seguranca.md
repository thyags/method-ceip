# 09 - Playbook de Auditoria de Segurança

## Objetivo

Conduzir auditoria de segurança proporcional ao risco da aplicação, fluxo ou mudança.

## Contexto

Auditorias podem ocorrer antes de release, depois de incidente, em preparação para integração ou em sistemas com dados sensíveis. O foco é tornar risco visível e mitigável.

## Diretrizes

- Definir escopo da auditoria.
- Identificar ativos, dados sensíveis, perfis e integrações.
- Revisar autenticação, autorização, entradas, segredos, logs e dependências.
- Priorizar achados por severidade.
- Registrar risco aceito e plano de correção.

## Fluxo

1. Definir escopo e contexto.
2. Mapear ativos e superfícies.
3. Revisar controles existentes.
4. Testar ou verificar cenários de abuso.
5. Classificar achados.
6. Propor correções e mitigação.
7. Registrar evidências.

## Exemplos

- Auditoria de exportação deve validar permissão, campos exportados, auditoria e limites.
- Auditoria de login deve revisar força de autenticação, bloqueio, mensagens de erro e logs.

## Checklist

- [ ] Escopo foi definido.
- [ ] Dados sensíveis foram identificados.
- [ ] Autorização foi revisada.
- [ ] Segredos e logs foram avaliados.
- [ ] Achados foram priorizados.
- [ ] Plano de correção existe.

## Conclusão

Auditoria de segurança deve produzir decisão acionável: corrigir, mitigar, aceitar risco ou bloquear.
