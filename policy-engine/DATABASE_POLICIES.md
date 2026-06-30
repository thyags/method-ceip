# Database Policies

## Objetivo

Governar mudanças em banco, dados, migrações, integridade e relatórios.

## Contexto

Dados são ativos críticos. Mudanças indevidas podem gerar perda, inconsistência e falhas operacionais.

## Diretrizes

- Mudança de schema exige Database Architect.
- Migração destrutiva exige backup, validação e rollback.
- Relatórios e integrações são consumidores.
- Dados sensíveis exigem Security Engineer.

## Políticas

- Toda migration em produção é ao menos alto risco.
- Mudança de fonte de verdade exige ADR.
- Índices devem ser guiados por consulta e volume.
- Transformações devem ter validação antes/depois.

## Exemplos

- Remover coluna exige mapear consumidores e plano de transição.

## Checklist

- [ ] Fonte de verdade foi definida.
- [ ] Consumidores foram mapeados.
- [ ] Migração tem validação.
- [ ] Rollback ou mitigação existe.

## Conclusão

Database Policies protegem integridade e histórico.
