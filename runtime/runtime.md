# Runtime

## Objetivo

Definir o contrato central de execução da CEIP.

## Contrato

Toda tarefa relevante deve passar por:

1. Entrada de tarefa.
2. Context Loader.
3. Task Router.
4. Policy Engine.
5. Orchestrator.
6. Prompt Builder.
7. Agente ou LLM.
8. Review.
9. Quality Gates.
10. Score.
11. Memory e Learning.

## Entradas

- Tarefa do usuário.
- CEIP Core.
- CEIP Workspace.
- Stack detectada.
- Histórico local.
- Policies aplicáveis.
- Risco.

## Saídas

- Runtime Pack.
- Prompt final.
- Agentes recomendados.
- Gates obrigatórios.
- Plano de execução.
- Evidências e aprendizados.

## Princípios

- Contexto suficiente é melhor que contexto volumoso.
- Execução deve ser rastreável.
- Automação não pode ignorar governança.
- Prompt fixo não substitui montagem contextual.
- Decisões de alto impacto exigem justificativa e registro.

## Conclusão

Runtime é o contrato operacional que conecta método, workspace, IA e qualidade.
