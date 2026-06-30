# Anti-pattern: Fluxo Crítico Sem Teste

## Objetivo

Detectar fluxos relevantes para negócio ou operação sem validação suficiente.

## Sinais

- Pagamento, faturamento, login, relatório ou migração sem teste.
- Bugfix em fluxo crítico sem regressão.
- Validação apenas manual e não registrada.
- Critério de aceite não verificável.

## Impacto

Aumenta risco de regressão, incidente e perda de confiança operacional.

## Correção recomendada

Criar teste automatizado quando viável, ou evidência manual estruturada quando automação ainda não existir.

## Checklist

- [ ] Fluxo crítico foi identificado.
- [ ] Critério de aceite foi definido.
- [ ] Teste ou evidência existe.
- [ ] Regressão foi avaliada.

## Conclusão

Fluxo crítico sem teste é risco operacional explícito.
