# Exemplo - Alteração de Banco

## Objetivo

Mostrar como o Policy Engine trata mudança de banco de dados.

## Contexto

Mudanças de banco podem causar perda de dados, inconsistência, quebra de relatórios e indisponibilidade.

## Diretrizes

- Classificar como alto ou crítico.
- Acionar Database Architect.
- Exigir plano de migração, validação e rollback.

## Aplicação

- Tipo: alteração de banco.
- Risco: alto; crítico se produção, migração destrutiva ou dados sensíveis.
- Agentes obrigatórios: Database Architect, QA Engineer, DevOps Engineer, Code Reviewer.
- Agentes opcionais: Security Engineer, Performance Engineer.
- Documentos: ADR/RFC quando estrutural, migration plan, rollback plan.
- Gates: Database, QA, Release, Documentation.

## Exemplos

Remover coluna em tabela usada por relatório exige mapear consumidores e plano de transição.

## Checklist

- [ ] Consumidores foram mapeados.
- [ ] Backup/rollback existe.
- [ ] Validação antes/depois existe.
- [ ] Gate de banco foi aplicado.

## Conclusão

Banco exige governança forte mesmo quando a alteração parece pequena.
