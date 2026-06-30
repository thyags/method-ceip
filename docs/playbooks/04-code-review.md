# 04 - Playbook de Code Review

## Objetivo

Padronizar revisão técnica de mudanças para detectar problemas relevantes antes da entrega.

## Contexto

Code review deve validar comportamento, risco, manutenção, testes, segurança e documentação. Ele não deve ser uma disputa estética nem um carimbo automático.

## Diretrizes

- Revisar a intenção da mudança antes do detalhe.
- Priorizar bugs, regressões e riscos.
- Usar severidade para distinguir bloqueio de melhoria.
- Validar testes e documentação.
- Chamar agentes especialistas quando a mudança exigir.

## Fluxo

1. Ler descrição, requisito e diff.
2. Confirmar se a mudança atende o objetivo.
3. Revisar contratos, dados e permissões.
4. Avaliar testes, performance e operação.
5. Registrar achados com arquivo, impacto e sugestão.
6. Decidir aprovar, solicitar ajuste ou bloquear.

## Exemplos

- Bloquear PR que altera autorização sem teste.
- Sugerir melhoria opcional para nome ruim quando não afeta risco.
- Chamar Database Architect para migration destrutiva.

## Checklist

- [ ] Objetivo da mudança está claro.
- [ ] Diff foi revisado por comportamento.
- [ ] Testes são proporcionais ao risco.
- [ ] Segurança e dados foram considerados.
- [ ] Documentação foi atualizada quando necessário.

## Conclusão

Review efetivo protege produção e melhora o padrão do time sem criar atrito desnecessário.
