# QA Review

## Objetivo

Avaliar se a entrega possui validação suficiente para o risco e o comportamento esperado.

## Contexto

Use antes de release, após bugfixes, em features, migrações, integrações, hotfixes e refatorações.

## Diretrizes

- Use `constitution/quality-laws.md`.
- Compare com `docs/checklists/qa-checklist.md`.
- Registre lacunas de cobertura.

## Entradas esperadas

Requisitos, critérios de aceite, plano de testes, evidências, riscos, dados usados e validações executadas.

## Bloqueios

- Critério de aceite crítico não testado.
- Bug reproduzido sem teste de regressão quando aplicável.
- Mudança crítica sem evidência.
- Dados de teste incompatíveis com cenário real.

## Exemplos

- Correção de cálculo, migração de dados, nova integração, workflow de aprovação ou tela crítica.

## Checklist

- [ ] Critérios de aceite foram cobertos.
- [ ] Fluxo principal e exceções foram testados.
- [ ] Evidências foram registradas.
- [ ] Regressão foi considerada.
- [ ] Riscos residuais foram documentados.

## Conclusão

QA review fecha a lacuna entre implementação feita e entrega confiável.
