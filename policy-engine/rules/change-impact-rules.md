# Change Impact Rules

## Objetivo

Definir como avaliar impacto de mudanças.

## Contexto

Impacto determina agentes, documentos, gates e aprovação.

## Regras

- Impacto funcional exige validação de requisito.
- Impacto em dados exige Database Architect.
- Impacto em segurança exige Security Engineer.
- Impacto visual exige UX/UI.
- Impacto visual relevante exige Product Experience System, Product Experience Gate e Visual Quality Score.
- Impacto em performance exige baseline.
- Impacto em operação exige DevOps e rollback.
- Impacto em arquitetura exige ADR.
- Impacto em escopo exige RFC.

## Exemplos

- Novo relatório: impacto em negócio, dados, performance e QA.
- Nova tabela operacional: impacto em experiência, dados, frontend, QA e possível performance.

## Checklist

- [ ] Impactos foram mapeados.
- [ ] Impacto visual relevante foi classificado para PXS quando aplicável.
- [ ] Agentes por impacto foram escolhidos.
- [ ] Documentos exigidos foram definidos.

## Conclusão

Impacto é o elo entre tarefa e governança.
