# Checklist de Banco de Dados

## Objetivo

Validar alterações em dados, schema, migrações, consultas e integridade.

## Contexto

Use antes de migrations, transformações, índices, remoções, importações, exportações e mudanças de fonte de verdade.

## Diretrizes

- Proteja integridade e histórico.
- Avalie consumidores.
- Planeje rollback ou mitigação.

## Checklist

- [ ] Banco, versão e convenções foram identificados.
- [ ] Modelo atual foi entendido.
- [ ] Fonte de verdade foi definida.
- [ ] Consumidores, relatórios e integrações foram mapeados.
- [ ] Migração é incremental quando possível.
- [ ] Backup ou restauração foi validado quando aplicável.
- [ ] Dados sensíveis foram considerados.
- [ ] Consultas críticas foram avaliadas.
- [ ] Validação antes/depois existe.
- [ ] Rollback ou mitigação foi definido.

## Exemplos

Use para criar campo obrigatório, dividir tabela, alterar status, remover coluna, migrar histórico ou criar índice.

## Conclusão

Mudança de dados exige planejamento cuidadoso porque impacto pode ser permanente.
