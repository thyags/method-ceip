# Review Policy

## Objetivo

Definir quando revisões especializadas são obrigatórias.

## Contexto

Nem toda entrega exige todas as revisões, mas entregas relevantes precisam de análise proporcional ao risco.

## Diretrizes

- Gatilho: mudança com impacto em arquitetura, segurança, dados, UX, performance, operação ou qualidade.
- Regra: escolher review especializado adequado.
- Exceção: hotfix pode reduzir escopo, mas exige follow-up.
- Validação: Quality Governor confirma gates e reviews.

## Exemplos

- Migração de banco exige database review e QA review.
- Ação sensível exige security review.

## Checklist

- [ ] Impacto da mudança foi classificado.
- [ ] Reviews necessários foram escolhidos.
- [ ] Achados foram priorizados.
- [ ] Bloqueios foram resolvidos ou aceitos formalmente.

## Conclusão

Review Policy evita que entregas avancem sem revisão proporcional.
