# Architecture Review

## Objetivo

Avaliar se uma entrega preserva coerência arquitetural, fronteiras, contratos e evolução sustentável.

## Contexto

Use quando a mudança afetar módulos, integração, dados, operação, stack, fronteiras ou decisões difíceis de reverter.

## Diretrizes

- Verifique `constitution/architecture-laws.md`.
- Use `decision-trees/README.md` e `diagrams/ceip-operational-flow.md`.
- Exija ADR para decisão estrutural.

## Entradas esperadas

Requisito, stack identificada, arquitetura atual, proposta, alternativas, contratos, dados afetados e ADRs relacionados.

## Bloqueios

- Decisão estrutural sem ADR.
- Nova tecnologia sem justificativa.
- Fronteira sem responsabilidade clara.
- Reescrita ampla sem plano incremental.

## Exemplos

- Separação de módulo, nova camada de integração, alteração de tenancy ou mudança em fluxo crítico.

## Checklist

- [ ] Domínio e problema foram entendidos.
- [ ] Arquitetura atual foi identificada.
- [ ] Alternativas foram comparadas.
- [ ] ADR foi criado quando necessário.
- [ ] Operação e observabilidade foram avaliadas.

## Conclusão

Architecture review protege o sistema contra decisões locais com impacto sistêmico.
