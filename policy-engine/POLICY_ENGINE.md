# Policy Engine Operacional

## Objetivo

Consolidar o funcionamento operacional do Policy Engine dentro do diretório `policy-engine/`.

## Contexto

O documento raiz `POLICY_ENGINE.md` apresenta a visão geral. Este arquivo serve como ponto de entrada interno para rules, examples e policies específicas.

## Processo oficial

1. Classificar tipo de tarefa.
2. Classificar risco.
3. Verificar se a demanda exige Product Intelligence System.
4. Verificar se a demanda exige Product Experience System.
5. Consultar routing matrix.
6. Aplicar policies do domínio.
7. Definir quality gates.
8. Definir aprovações.
9. Registrar exceções e escalonamentos.

## Documentos principais

- `POLICY_INDEX.md`
- `AGENT_ROUTING_POLICIES.md`
- `RISK_POLICIES.md`
- `PRODUCT_INTELLIGENCE_POLICIES.md`
- `PRODUCT_EXPERIENCE_POLICIES.md`
- `APPROVAL_POLICIES.md`
- `QUALITY_GATE_POLICIES.md`
- `rules/`
- `examples/`

## Checklist

- [ ] Tarefa foi classificada.
- [ ] Risco foi definido.
- [ ] Necessidade de PIS, PRD, MVP e critérios de aceite foi avaliada.
- [ ] Necessidade de PXS, Product Experience Gate e Visual Quality Score foi avaliada.
- [ ] Policies aplicáveis foram citadas.
- [ ] Gates e aprovações foram definidos.
- [ ] Exceções foram registradas.

## Conclusão

O Policy Engine deve ser consultado antes de decisões com impacto técnico, operacional ou de negócio.
