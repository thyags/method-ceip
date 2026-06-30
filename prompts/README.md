# Prompt Library

## Objetivo

Fornecer prompts por tipo de tarefa para orientar IAs em análise, planejamento, design, debug, review, otimização e refatoração.

## Contexto

`docs/prompts` contém prompts originais para acionar agentes individuais. Esta biblioteca contém prompts por tarefa operacional, prompts de plataforma e prompts por agente em `prompts/agents/`.

## Diretrizes

- Todo prompt deve exigir identificação de stack e contexto.
- Todo prompt deve proibir invenção de regra de negócio.
- Prompts devem referenciar Constitution Engine, quality gates e documentos aplicáveis.
- Prompts de agente devem declarar missão, contexto, limites e saída esperada.

## Categorias

- `analysis`
- `planning`
- `architecture`
- `design`
- `debug`
- `optimization`
- `refactoring`
- `review`
- `agents`
- prompts raiz: `master-prompt.md`, `codex-prompt.md`, `agent-router-prompt.md`, `policy-engine-prompt.md`, `orchestrator-prompt.md`, `review-prompt.md`, `quality-gate-prompt.md`, `pilot-project-prompt.md`

## Exemplos

- Use `debug/root-cause-analysis.md` para investigar bug.
- Use `architecture/architecture-decision.md` para preparar ADR.
- Use `master-prompt.md` para iniciar uma análise CEIP completa.
- Use `agents/10-security-engineer-prompt.md` para uma revisão de segurança especializada.

## Checklist

- [ ] Prompt define objetivo.
- [ ] Prompt exige contexto.
- [ ] Prompt inclui validação.
- [ ] Prompt evita suposições.

## Conclusão

Prompt Library transforma governança em instruções reutilizáveis para qualquer IA.
