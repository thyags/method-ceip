# Policy Engine Operacional

## Objetivo

Consolidar o funcionamento operacional do Policy Engine dentro do diretório `policy-engine/`.

## Contexto

O documento raiz `POLICY_ENGINE.md` apresenta a visão geral. Este arquivo serve como ponto de entrada interno para rules, examples e policies específicas.

## Processo oficial

1. Classificar tipo de tarefa.
2. Classificar risco.
3. Consultar routing matrix.
4. Aplicar policies do domínio.
5. Definir quality gates.
6. Definir aprovações.
7. Registrar exceções e escalonamentos.

## Documentos principais

- `POLICY_INDEX.md`
- `AGENT_ROUTING_POLICIES.md`
- `RISK_POLICIES.md`
- `APPROVAL_POLICIES.md`
- `QUALITY_GATE_POLICIES.md`
- `rules/`
- `examples/`

## Checklist

- [ ] Tarefa foi classificada.
- [ ] Risco foi definido.
- [ ] Policies aplicáveis foram citadas.
- [ ] Gates e aprovações foram definidos.
- [ ] Exceções foram registradas.

## Conclusão

O Policy Engine deve ser consultado antes de decisões com impacto técnico, operacional ou de negócio.
