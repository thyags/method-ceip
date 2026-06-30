# Gate 6 - Review

> Alias de compatibilidade para `review/README.md` e `review/specialist-review-process.md`. O gate oficial de qualidade final é composto por Review Engine, Quality Gates e Score Engine.

## Objetivo

Validar se a entrega passou por revisão adequada ao risco.

## Contexto

Review é o último gate antes de considerar a entrega concluída, salvo exceções formalizadas em hotfix.

## Quando aplicar

Aplicar em toda entrega com risco médio, alto ou crítico, e em mudanças documentais estruturais da CEIP.

## Diretrizes

- Use `review/README.md`.
- Reviews devem ser objetivos e baseados em evidência.
- Achados bloqueantes devem ser resolvidos ou aceitos formalmente.

## Critérios obrigatórios

- Review técnico foi realizado.
- Agentes especialistas foram acionados quando necessário.
- Achados foram classificados por severidade.
- Bloqueios foram resolvidos.
- Scorecard foi preenchido quando aplicável.

## Critérios bloqueantes

- Achado bloqueante aberto.
- Review realizado por papel inadequado ao risco.
- Ausência de evidência para aprovação.
- Exceção sem aprovador.

## Evidências exigidas

Parecer de review, lista de achados, status de bloqueios, scorecard ou justificativa de dispensa.

## Agentes responsáveis

Code Reviewer Tech Lead, QA Engineer, Security Engineer, Performance Engineer, Documentation Engineer e Quality Governor conforme risco.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Entrega revisada por especialistas adequados e sem bloqueios não tratados.

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
