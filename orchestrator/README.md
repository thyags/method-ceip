# Orchestrator

## Objetivo

Centralizar a coordenação operacional entre solicitações, policies, brains, engines, agents, reviews e quality gates.

## Contexto

O Orchestrator não decide sozinho. Ele recebe a classificação do `POLICY_ENGINE.md`, consulta `policy-engine/AGENT_ROUTING_POLICIES.md`, usa `engines/orchestrator-engine.md` para montar a sequência e só libera conclusão depois de `review/`, `quality-gates/` e `engines/score-engine.md` quando aplicável.

## Componentes

- `agent-orchestration.md`
- `task-routing.md`
- `escalation-flow.md`
- `handoff-protocol.md`

## Entradas obrigatórias

- Objetivo da solicitação.
- Contexto do projeto ou artefato.
- Classificação de tipo de tarefa pelo Policy Engine.
- Classificação de risco.
- Agentes obrigatórios e opcionais.
- Gates e aprovações exigidos.

## Saídas obrigatórias

- Sequência de agentes.
- Handoffs entre agentes.
- Reviews especializados.
- Quality gates aplicáveis.
- Evidências esperadas.
- Critério de encerramento ou escalonamento.

## Fluxo

```mermaid
flowchart LR
    A["Solicitacao"] --> B["Task Routing"]
    B --> C["Agent Orchestration"]
    C --> D["Handoff"]
    D --> E["Reviews e Gates"]
    E --> F["Escalation se necessario"]
```

## Regras de coordenação

- Nenhuma demanda de risco médio, alto ou crítico deve pular o Policy Engine.
- O primeiro agente não técnico deve confirmar problema e escopo quando houver impacto funcional.
- O primeiro agente técnico deve respeitar a arquitetura existente antes de propor mudança.
- Handoff incompleto bloqueia a próxima etapa.
- Gate falho retorna para correção, mitigação ou aprovação formal.

## Exemplo operacional

Uma integração externa de pagamento entra como risco alto. O Orchestrator seleciona API Integration Engineer, Security Engineer, Backend Engineer, QA Engineer, DevOps Engineer e Documentation Engineer; exige contrato, idempotência, autenticação, plano de erro, security gate, QA gate, release gate e aprovação técnica ou humana conforme impacto em produção.

## Checklist

- [ ] Tarefa foi classificada.
- [ ] Policy Engine foi consultado.
- [ ] Agentes foram definidos.
- [ ] Handoffs foram claros.
- [ ] Reviews e gates foram definidos.
- [ ] Escalonamento foi previsto.

## Conclusão

O Orchestrator transforma documentos da CEIP em execução coordenada.
