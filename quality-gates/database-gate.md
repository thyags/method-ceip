# Database Gate

## Objetivo

Validar modelagem, migração, integridade, desempenho, histórico, consistência e recuperação de dados.

## Quando aplicar

Aplicar em alteração de schema, índices, migração, carga, relatórios, auditoria, permissões e retenção.

## Critérios obrigatórios

- Modelo preserva integridade e significado do domínio.
- Migração tem plano de execução e rollback.
- Índices e consultas críticas foram avaliados.
- Dados sensíveis têm proteção adequada.

## Critérios bloqueantes

- Migração destrutiva sem backup ou rollback.
- Perda de histórico sem decisão explícita.
- Campo sensível exposto sem controle.
- Consulta crítica sem avaliação de performance.

## Evidências exigidas

Modelo lógico, script ou plano de migração, rollback, estimativa de volume, plano de teste e análise de consultas críticas.

## Agentes responsáveis

Database Architect, Backend Engineer, Security Engineer, Performance Engineer, DevOps Engineer e QA Engineer.

## Checklist

- [ ] Integridade foi avaliada.
- [ ] Migração foi planejada.
- [ ] Rollback existe ou exceção foi aprovada.
- [ ] Índices foram avaliados.
- [ ] Dados sensíveis foram classificados.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Mudança de dados segura, rastreável e reversível quando possível.

## Conclusão

Banco de dados concentra risco operacional; mudanças exigem disciplina.
