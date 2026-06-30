# Architecture Laws

## Objetivo

Definir leis para preservar coerência arquitetural e evolução sustentável.

## Contexto

Arquitetura organiza responsabilidades, dependências e contratos. Estas leis reduzem decisões locais que criam custo sistêmico.

## Diretrizes

- Use estas leis com `ARCHITECTURE_PRINCIPLES.md`, `decision-trees/architecture.mmd` e ADRs.

## Leis

**LAW-ARC-001 - Arquitetura deve servir ao domínio.**

**LAW-ARC-002 - Fronteiras devem ter responsabilidade clara.**

**LAW-ARC-003 - Contratos devem ser explícitos.**

**LAW-ARC-004 - Fonte de verdade deve ser definida para dados críticos.**

**LAW-ARC-005 - Decisão estrutural exige ADR.**

**LAW-ARC-006 - Distribuição operacional exige justificativa.**

**LAW-ARC-007 - Reescrita ampla é exceção, não padrão.**

**LAW-ARC-008 - Observabilidade faz parte da arquitetura.**

## Exemplos

- Separar serviço sem capacidade operacional pode aumentar risco.
- Manter monólito modular pode ser a decisão correta quando domínio e equipe pedem simplicidade.

## Checklist

- [ ] Domínio guiou a decisão.
- [ ] Fronteiras estão claras.
- [ ] Contratos foram documentados.
- [ ] ADR existe quando necessário.
- [ ] Operação foi avaliada.

## Conclusão

Leis arquiteturais protegem a evolução do sistema contra decisões fragmentadas.
