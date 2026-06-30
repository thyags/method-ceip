# 08 - Playbook de Migração de Banco

## Objetivo

Planejar e executar migrações de dados ou schema com proteção de integridade, operação e rollback.

## Contexto

Migrações podem alterar estruturas, transformar dados, popular campos, remover entidades ou mudar fonte de verdade. Erros podem ser caros e difíceis de corrigir.

## Diretrizes

- Identificar banco, volume, dependências, backups e padrões de migration.
- Evitar mudanças destrutivas sem fase de transição.
- Ensaiar migração em ambiente representativo.
- Validar dados antes e depois.
- Planejar rollback ou mitigação.

## Fluxo

1. Mapear schema atual e consumidores.
2. Definir mudança e impacto.
3. Criar plano de migração incremental.
4. Preparar backup e rollback.
5. Executar ensaio e validar.
6. Executar em produção com monitoramento.
7. Registrar resultado.

## Exemplos

- Dividir campo de endereço em múltiplos campos exige regra de transformação e tratamento de dados incompletos.
- Remover tabela exige confirmar que relatórios, jobs e integrações não dependem dela.

## Checklist

- [ ] Consumidores foram mapeados.
- [ ] Backup foi validado.
- [ ] Migração foi ensaiada.
- [ ] Validações antes/depois existem.
- [ ] Rollback ou mitigação foi definido.
- [ ] Janela operacional foi planejada.

## Conclusão

Migração de banco deve ser tratada como mudança de alta responsabilidade, mesmo quando o diff parece pequeno.
