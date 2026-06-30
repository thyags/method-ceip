# Prompt Library

## Objetivo

Fornecer prompts por tipo de tarefa para orientar IAs em análise, planejamento, design, debug, review, otimização e refatoração.

## Contexto

`docs/prompts` contém prompts para acionar agentes individuais. Esta biblioteca contém prompts por tarefa operacional.

## Diretrizes

- Todo prompt deve exigir identificação de stack e contexto.
- Todo prompt deve proibir invenção de regra de negócio.
- Prompts devem referenciar Constitution Engine, quality gates e documentos aplicáveis.

## Categorias

- `analysis`
- `planning`
- `architecture`
- `design`
- `debug`
- `optimization`
- `refactoring`
- `review`

## Exemplos

- Use `debug/root-cause-analysis.md` para investigar bug.
- Use `architecture/architecture-decision.md` para preparar ADR.

## Checklist

- [ ] Prompt define objetivo.
- [ ] Prompt exige contexto.
- [ ] Prompt inclui validação.
- [ ] Prompt evita suposições.

## Conclusão

Prompt Library transforma governança em instruções reutilizáveis para qualquer IA.
