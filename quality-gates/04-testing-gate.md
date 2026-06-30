# Gate 4 - Testes

## Objetivo

Validar se há evidência suficiente de que a entrega atende comportamento esperado e não causa regressão crítica.

## Contexto

Use em toda entrega funcional, bugfix, hotfix, migração, integração e refatoração.

## Diretrizes

- Consulte `constitution/quality-laws.md`.
- Use `review/qa-review.md`.
- Teste proporcionalmente ao risco.

## Critérios de aprovação

- Critérios de aceite foram validados.
- Fluxo principal foi testado.
- Exceções relevantes foram cobertas.
- Regressões críticas foram consideradas.
- Evidências foram registradas.

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
