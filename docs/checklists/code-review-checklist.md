# Checklist de Code Review

## Objetivo

Guiar revisão técnica objetiva, priorizada e orientada a risco.

## Contexto

Use por revisores humanos, agentes de IA e tech leads antes de aprovar mudanças.

## Diretrizes

- Foque achados com impacto.
- Diferencie bloqueio de sugestão.
- Peça evidência quando faltar validação.

## Checklist

- [ ] Objetivo da mudança está claro.
- [ ] Diff corresponde ao escopo.
- [ ] Não há regra de negócio inventada.
- [ ] Padrões locais foram respeitados.
- [ ] Contratos afetados foram avaliados.
- [ ] Dados e migrações foram revisados quando aplicável.
- [ ] Segurança foi considerada.
- [ ] Performance foi considerada.
- [ ] Testes são proporcionais ao risco.
- [ ] Documentação foi atualizada quando necessário.

## Exemplos

Use para PRs de feature, bugfix, refatoração, migração, integração e alteração de infraestrutura.

## Conclusão

Code review deve melhorar confiança na mudança e reduzir risco para produção.
