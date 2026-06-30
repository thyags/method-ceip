# Gate 1 - Arquitetura

## Objetivo

Validar se a entrega respeita a arquitetura existente ou registra decisão para alterá-la.

## Contexto

Use em qualquer mudança que afete estrutura, contratos, dados, integrações, dependências ou operação.

## Diretrizes

- Consulte `constitution/architecture-laws.md`.
- Use `review/architecture-review.md` quando houver impacto estrutural.
- Crie ADR para decisão relevante.

## Critérios de aprovação

- Arquitetura atual foi identificada.
- Fronteiras e responsabilidades foram respeitadas.
- Contratos afetados foram documentados.
- ADR existe quando necessário.
- Plano incremental foi definido.

## Exemplos

- Nova integração crítica exige arquitetura review.
- Refatoração local sem impacto estrutural pode registrar apenas evidência no PR.

## Checklist

- [ ] Arquitetura atual foi identificada.
- [ ] Contratos foram avaliados.
- [ ] ADR foi criado quando necessário.
- [ ] Risco arquitetural residual foi registrado.

## Conclusão

Este gate protege coerência estrutural antes da entrega avançar.
