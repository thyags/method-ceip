# Policy Engine

## Objetivo

Centralizar políticas, regras, exemplos e matrizes de decisão que governam tarefas relevantes na CEIP.

## Contexto

O Policy Engine é o cérebro de governança ativa. Ele decide o que precisa acontecer antes de uma tarefa seguir para planejamento, agentes, review e quality gates.

## Diretrizes

- Consultar este diretório antes do Orchestrator em tarefas relevantes.
- Usar `POLICY_INDEX.md` para localizar políticas.
- Usar `RUNTIME_POLICIES.md` quando houver execução assistida por IA.
- Usar `rules/` para regras reutilizáveis.
- Usar `examples/` para entender aplicação prática.
- Não substituir julgamento humano em risco crítico; escalar.

## Componentes

- Policies por domínio.
- Regras operacionais.
- Exemplos por tipo de mudança.
- Matriz de roteamento de agentes.
- Classificação de risco e aprovação.

## Exemplos

- Uma nova API usa `API_POLICIES.md`, `AGENT_ROUTING_POLICIES.md`, `QUALITY_GATE_POLICIES.md` e `rules/adr-rules.md`.
- Uma execução com IA usa `RUNTIME_POLICIES.md`, `AGENT_ROUTING_POLICIES.md`, `RISK_POLICIES.md` e gates do domínio impactado.
- Um incidente usa `RISK_POLICIES.md`, `ESCALATION_POLICIES.md`, `APPROVAL_POLICIES.md` e example de production incident.

## Checklist

- [ ] Policy aplicável foi localizada.
- [ ] Regra operacional foi aplicada.
- [ ] Exemplo similar foi consultado.
- [ ] Decisão foi encaminhada ao Orchestrator.

## Conclusão

Este diretório transforma princípios em decisões operacionais consistentes.
