# Database Review

## Objetivo

Avaliar mudanças de dados, schema, migração, integridade, consultas e consumidores.

## Contexto

Use em migrations, importações, exportações, índices, mudanças de modelo, relatórios e fonte de verdade.

## Diretrizes

- Use `decision-trees/README.md` e `diagrams/policy-orchestration-flow.md`.
- Consulte `constitution/architecture-laws.md` e `constitution/security-laws.md`.
- Valide impacto antes de executar mudança destrutiva.

## Entradas esperadas

Modelo atual, proposta de alteração, consumidores, volume, plano de migração, validações, backup e rollback.

## Bloqueios

- Migração destrutiva sem backup ou mitigação.
- Fonte de verdade indefinida.
- Consumidores não mapeados.
- Dados sensíveis sem tratamento.

## Exemplos

- Remover coluna, alterar status, criar índice, migrar histórico ou dividir entidade.

## Checklist

- [ ] Modelo atual foi entendido.
- [ ] Consumidores foram mapeados.
- [ ] Migração tem validação antes/depois.
- [ ] Rollback ou mitigação existe.
- [ ] Dados sensíveis foram considerados.

## Conclusão

Database review evita perda de dados e inconsistências difíceis de recuperar.
