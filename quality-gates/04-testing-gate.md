# Gate 4 - Testes

> Alias de compatibilidade para `qa-gate.md`. O gate oficial detalhado é o arquivo nomeado; este documento permanece para fluxos que ainda referenciam a sequência numerada.

## Objetivo

Validar se há evidência suficiente de que a entrega atende comportamento esperado e não causa regressão crítica.

## Contexto

Use em toda entrega funcional, bugfix, hotfix, migração, integração e refatoração.

## Quando aplicar

Aplicar em features, correções, refatorações, integrações, migrações, releases e qualquer fluxo crítico de negócio.

## Diretrizes

- Consulte `constitution/quality-laws.md`.
- Use `review/qa-review.md`.
- Teste proporcionalmente ao risco.

## Critérios obrigatórios

- Critérios de aceite foram validados.
- Fluxo principal foi testado.
- Exceções relevantes foram cobertas.
- Regressões críticas foram consideradas.
- Evidências foram registradas.

## Critérios bloqueantes

- Critério de aceite principal não validado.
- Fluxo crítico sem teste ou evidência.
- Bugfix sem regressão ou justificativa.
- Falha conhecida sem decisão explícita.

## Evidências exigidas

Plano de teste, cenários principais e negativos, resultado de execução, evidência manual ou automatizada e limitações conhecidas.

## Agentes responsáveis

QA Engineer, Business Analyst, Product Manager, Code Reviewer Tech Lead e agentes técnicos envolvidos.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Entrega funcionalmente verificável e protegida contra regressões proporcionais ao risco.

## Exemplos

- Bug corrigido deve ter teste ou evidência que o reproduz e valida a correção.
- Refatoração deve provar preservação de comportamento.

## Checklist

- [ ] Critérios de aceite foram cobertos.
- [ ] Testes automatizados ou validações manuais foram registrados.
- [ ] Dados de teste são representativos.
- [ ] Riscos residuais foram documentados.

## Conclusão

Este gate exige evidência de qualidade, não apenas confiança.
