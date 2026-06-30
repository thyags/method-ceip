# Validação do CEIP Runtime

## Objetivo

Auditar se Runtime, Context Loader, Task Router, Prompt Builder, Decision Runtime, Prompt Runtime e Runtime API estão completos, coerentes e acionáveis.

## Perguntas Estruturais

- Existe `runtime/README.md`?
- Existe `runtime/execution-pipeline.md`?
- Existe `runtime/task-router.md`?
- Existe `runtime/context-loader.md`?
- Existe `runtime/prompt-builder.md`?
- Existe `runtime/decision-runtime.md`?
- Existe `runtime/prompt-runtime.md`?
- Existe `runtime/runtime-api.md`?
- O Installer cria `.ceip/runtime/`?
- O `ceip doctor` valida Runtime local?

## Perguntas De Coerência

- Runtime consulta Constitution, Policy Engine e Orchestrator?
- Runtime preserva Product Intelligence antes de engenharia?
- Runtime preserva Product Experience antes de frontend?
- Context Loader diferencia fontes obrigatórias e condicionais?
- Prompt Builder evita contexto sensível ou excessivo?
- Task Router classifica tipo, risco, agentes e gates?
- Decision Runtime define quando registrar ADR, RFC ou exceção?

## Perguntas De Acionabilidade

- Uma IA consegue usar o Runtime sem instrução externa?
- Os comandos `ceip analyze`, `ceip plan`, `ceip architect`, `ceip review`, `ceip release` e `ceip learn` geram saída útil?
- Runtime Packs são gravados no Workspace quando existe `.ceip/`?
- Prompts gerados incluem contexto, policies, agentes, gates e saída esperada?

## Perguntas De Risco

- Runtime impede execução sem contexto mínimo?
- Runtime evita carregar segredos?
- Runtime mantém rastreabilidade?
- Runtime impede bypass de Policy Engine e Quality Gates?

## Checklist

- [ ] Estrutura completa.
- [ ] CLI conectado.
- [ ] Workspace conectado.
- [ ] Policy Engine conectado.
- [ ] Orchestrator conectado.
- [ ] Segurança de contexto preservada.
- [ ] Prompts gerados são úteis e proporcionais.

## Conclusão

Runtime Validation garante que a CEIP seja uma plataforma operacional, não apenas uma biblioteca de documentos.
