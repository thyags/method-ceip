# Business Laws

## Objetivo

Definir leis para proteger regras de negócio, escopo e valor durante a execução técnica.

## Contexto

Agentes e desenvolvedores podem preencher lacunas com suposições. Em software empresarial, isso altera processos, relatórios, obrigações e decisões operacionais.

## Diretrizes

- Use estas leis antes de qualquer mudança funcional.
- Consulte Business Analyst e Product Manager quando houver ambiguidade.

## Leis

**LAW-BUS-001 - Regra de negócio não deve ser inventada.**

**LAW-BUS-002 - Exceção operacional deve ser mapeada.**

**LAW-BUS-003 - Escopo e fora de escopo devem ser explícitos.**

**LAW-BUS-004 - Critério de aceite deve ser testável.**

**LAW-BUS-005 - Mudança de processo exige validação com responsável.**

**LAW-BUS-006 - Relatórios e integrações são consumidores de regra de negócio.**

**LAW-BUS-007 - Valor de negócio deve orientar prioridade.**

## Exemplos

- Alterar status de pedido pode afetar estoque, financeiro, fiscal e relatórios.
- Uma tela nova não deve adicionar campos sem origem em requisito.

## Checklist

- [ ] Regra de negócio foi confirmada.
- [ ] Exceções foram mapeadas.
- [ ] Escopo está explícito.
- [ ] Critérios de aceite são testáveis.
- [ ] Consumidores do processo foram avaliados.

## Conclusão

Leis de negócio impedem que decisões técnicas modifiquem a realidade operacional sem autorização.
