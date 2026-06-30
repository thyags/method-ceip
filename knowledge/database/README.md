# Knowledge Base - Banco de Dados

## Objetivo

Registrar aprendizados sobre modelagem, migração, integridade, consultas e dados históricos.

## Contexto

Dados são críticos para operação e auditoria. Esta base ajuda a preservar qualidade de dados ao longo do tempo.

## Diretrizes

- Registrar fonte de verdade e consumidores.
- Documentar validações de migração.
- Evitar expor dados reais sensíveis.

## Conhecimento inicial

- Migração destrutiva exige backup validado ou mitigação.
- Status de domínio deve ter transições documentadas.
- Relatórios devem ser tratados como consumidores de dados.

## Exemplos

- Alterar identificador de cliente impacta integrações e histórico.
- Dividir endereço exige regra para dados incompletos.

## Checklist

- [ ] Consumidores foram considerados.
- [ ] Integridade foi protegida.
- [ ] Validações foram registradas.

## Conclusão

Conhecimento de dados deve proteger integridade, histórico e rastreabilidade.
