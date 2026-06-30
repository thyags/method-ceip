# Release Gate

## Objetivo

Validar prontidão de entrega para produção ou ambiente equivalente.

## Quando aplicar

Aplicar em releases, hotfixes, migrações, alterações críticas, integrações externas e mudanças com impacto operacional.

## Critérios obrigatórios

- Escopo da release está claro.
- Testes e regressões foram executados.
- Rollback ou plano de contingência existe.
- Monitoramento e comunicação foram definidos.

## Critérios bloqueantes

- Mudança crítica sem rollback.
- Falha de segurança aberta sem exceção formal.
- Migração sem backup quando necessário.
- Critério de aceite principal não validado.

## Evidências exigidas

Notas de release, plano de deploy, resultado de testes, plano de rollback, checklist de monitoramento e aprovadores.

## Agentes responsáveis

DevOps Engineer, QA Engineer, Product Manager, Security Engineer, Backend Engineer e Quality Governor.

## Checklist

- [ ] Escopo foi congelado.
- [ ] Testes passaram.
- [ ] Rollback foi validado.
- [ ] Monitoramento está pronto.
- [ ] Comunicação foi preparada.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Release com risco conhecido, evidências e plano de resposta.

## Conclusão

Release é decisão operacional, não apenas deploy.
