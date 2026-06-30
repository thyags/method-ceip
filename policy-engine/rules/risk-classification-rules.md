# Risk Classification Rules

## Objetivo

Transformar classificação de risco em regras aplicáveis.

## Contexto

Risco orienta aprovação, gates, agentes e score mínimo.

## Regras

- Se impacta produção, risco mínimo alto.
- Se envolve perda de dados, risco crítico.
- Se envolve dados sensíveis, risco mínimo alto.
- Se envolve autorização, autenticação ou segurança, risco mínimo alto.
- Se envolve pagamento, fiscal, financeiro ou legal, risco mínimo alto e possivelmente crítico.
- Se envolve documentação sem impacto funcional, risco baixo.
- Se há dúvida, classificar para cima até obter evidência.

## Exemplos

- Ajuste de texto: baixo.
- Nova coluna opcional: médio.
- Migração de dados em produção: crítico.

## Checklist

- [ ] Impactos foram listados.
- [ ] Maior risco aplicável foi escolhido.
- [ ] Justificativa foi registrada.

## Conclusão

Risco deve ser classificado antes de planejar execução.
