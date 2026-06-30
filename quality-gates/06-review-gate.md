# Gate 6 - Review

## Objetivo

Validar se a entrega passou por revisão adequada ao risco.

## Contexto

Review é o último gate antes de considerar a entrega concluída, salvo exceções formalizadas em hotfix.

## Diretrizes

- Use `review/README.md`.
- Reviews devem ser objetivos e baseados em evidência.
- Achados bloqueantes devem ser resolvidos ou aceitos formalmente.

## Critérios de aprovação

- Review técnico foi realizado.
- Agentes especialistas foram acionados quando necessário.
- Achados foram classificados por severidade.
- Bloqueios foram resolvidos.
- Scorecard foi preenchido quando aplicável.

## Exemplos

- Mudança de banco exige database review.
- Fluxo com dados sensíveis exige security review.

## Checklist

- [ ] Review adequado ao risco foi executado.
- [ ] Achados têm severidade.
- [ ] Bloqueios foram tratados.
- [ ] Scorecard foi atualizado quando necessário.

## Conclusão

Este gate impede que entregas avancem sem análise crítica proporcional ao impacto.
