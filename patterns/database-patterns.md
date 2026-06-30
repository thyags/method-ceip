# Database Patterns

## Objetivo

Agrupar padrões de modelagem, migração, integridade, consulta e auditoria.

## Padrões relacionados

- Migrações reversíveis quando possível.
- Índices orientados por consulta.
- Chaves e restrições explícitas.
- Histórico para dados críticos.
- Backups antes de mudança destrutiva.

## Quando usar

Em schema, migração, relatórios, importações, auditoria e performance de consulta.

## Anti-patterns associados

- Banco sem índice em consulta crítica.
- Campo sem significado de domínio.
- Migração destrutiva sem rollback.

## Checklist

- [ ] Integridade foi protegida.
- [ ] Volume foi considerado.
- [ ] Rollback foi planejado.

## Conclusão

Mudanças de dados exigem rastreabilidade e cuidado operacional.
