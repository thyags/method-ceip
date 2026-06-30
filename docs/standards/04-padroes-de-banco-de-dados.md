# 04 - Padrões de Banco de Dados

## Objetivo

Orientar decisões de modelagem, migração, integridade e performance de dados sem impor banco específico.

## Contexto

Bancos relacionais, documentais, chave-valor, busca, filas persistentes e storage analítico têm capacidades diferentes. A escolha e a modelagem devem responder ao domínio e aos requisitos de consistência.

## Diretrizes

- Identificar tecnologia, versão, convenções, volume, consultas críticas e política de backup.
- Definir fonte de verdade para cada dado.
- Preservar integridade, histórico e auditabilidade quando o domínio exigir.
- Planejar migrações reversíveis ou mitigáveis.
- Validar impacto em relatórios, integrações e jobs.
- Medir antes de criar índices, caches ou estruturas auxiliares.

## Exemplos

- Campo de status deve ter semântica de transição e estados válidos documentados.
- Migração de CPF/CNPJ, e-mail ou identificadores fiscais exige validação, normalização e estratégia para dados inválidos existentes.
- Remoção de coluna exige confirmar consumidores, exportações e relatórios.

## Checklist

- [ ] Tecnologia e convenções foram identificadas.
- [ ] Fonte de verdade está clara.
- [ ] Migração tem plano de validação.
- [ ] Impacto em consumidores foi avaliado.
- [ ] Backup, rollback ou mitigação foi planejado.

## Conclusão

Dados são ativos operacionais. Mudanças de dados exigem mais rigor que mudanças puramente visuais.
