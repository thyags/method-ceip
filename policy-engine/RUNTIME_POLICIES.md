# Runtime Policies

## Objetivo

Definir políticas obrigatórias para uso do CEIP Runtime, Context Loader, Task Router, Prompt Builder e Prompt Runtime.

## Quando Aplicar

- Tarefa executada com Codex, Claude Code, Cursor, Gemini CLI, Windsurf, GitHub Copilot ou outra IA.
- Análise, planejamento, arquitetura, review, release ou aprendizado usando CEIP CLI.
- Qualquer tarefa com risco médio, alto ou crítico.
- Qualquer tarefa que dependa de contexto local do Workspace.

## Políticas

### RT-001 - Runtime antes de execução assistida por IA

Toda execução assistida por IA deve passar pelo CEIP Runtime quando houver Workspace disponível.

### RT-002 - Contexto suficiente, não máximo

Context Loader deve carregar apenas fontes relevantes e seguras. Excesso de contexto aumenta ruído, custo e risco.

### RT-003 - Prompt Builder obrigatório

Prompts finais devem ser montados com tarefa, contexto, policies, agentes, gates, restrições e saída esperada.

### RT-004 - Sem segredos

Runtime não pode carregar ou registrar `.env`, tokens, chaves, credenciais ou dados sensíveis desnecessários.

### RT-005 - Governança não pode ser bypassada

Runtime não substitui Policy Engine, Orchestrator, Quality Gates, Product Intelligence ou Product Experience.

### RT-006 - Evidência local

Quando o projeto possuir `.ceip/`, Runtime Packs e prompts devem ser registrados em `.ceip/runtime/` e `.ceip/output/generated-prompts/`.

## Gates Relacionados

- `quality-gates/ai-agent-gate.md`
- `quality-gates/review-gate.md`
- `quality-gates/documentation-gate.md`
- Gates específicos por domínio impactado.

## Checklist

- [ ] Runtime foi acionado.
- [ ] Context Loader carregou fontes mínimas.
- [ ] Task Router classificou tipo e risco.
- [ ] Prompt Builder gerou prompt contextual.
- [ ] Segredos foram excluídos.
- [ ] Policies e gates foram mantidos.
- [ ] Evidência local foi registrada quando aplicável.

## Conclusão

Runtime Policies impedem que a IA opere fora da governança da CEIP.
