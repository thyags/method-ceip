# Anti-pattern: Regra de Negócio Escondida

## Objetivo

Identificar regras de negócio implementadas sem documentação, teste ou validação explícita.

## Sinais

- Condição importante escondida em componente, consulta ou serviço.
- Regra não aparece em requisito, critério de aceite ou documentação.
- Alteração causa regressão porque ninguém conhece o comportamento.

## Impacto

Gera comportamento imprevisível, dependência de conhecimento informal e alto risco de regressão.

## Correção recomendada

Documentar a regra, validar com Business Analyst, cobrir com teste e mover a regra para local coerente com a arquitetura.

## Checklist

- [ ] Regra foi identificada.
- [ ] Origem foi confirmada.
- [ ] Teste protege comportamento.
- [ ] Documentação foi atualizada.

## Conclusão

Regra escondida é dívida de negócio e de engenharia ao mesmo tempo.
