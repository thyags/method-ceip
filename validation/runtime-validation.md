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
- Existe `runtime/evolution-protocol.md` no Workspace?
- Existe `runtime/prompt-runtime.md`?
- Existe `runtime/runtime-api.md`?
- O Installer cria `.ceip/runtime/`?
- O Installer cria `.ceip/runtime/history/`?
- O Installer cria `.ceip/output/generated-prompts/history/`?
- O `ceip doctor` valida Runtime local?

## Perguntas De Coerência

- Runtime consulta Constitution, Policy Engine e Orchestrator?
- Runtime preserva Product Intelligence antes de engenharia?
- Runtime preserva Product Experience antes de frontend?
- Context Loader diferencia fontes obrigatórias e condicionais?
- Prompt Builder evita contexto sensível ou excessivo?
- Task Router classifica tipo, risco, agentes e gates?
- Decision Runtime define quando registrar ADR, RFC ou exceção?
- Evolution Protocol define checkpoint, validações, multiagentes, commit e push com exceções explícitas?
- A política `safety` define preservação de arquivos existentes, backup e histórico?

## Perguntas De Acionabilidade

- Uma IA consegue usar o Runtime sem instrução externa?
- Os comandos `ceip analyze`, `ceip plan`, `ceip architect`, `ceip review`, `ceip release` e `ceip learn` geram saída útil?
- O comando `ceip checkpoint` gera Runtime Pack, review, prompt e log de implementação a partir do Git?
- Runtime Packs são gravados no Workspace quando existe `.ceip/`?
- Runtime Packs preservam histórico timestampado?
- Arquivos atuais só são sobrescritos com `--force`?
- Sobrescritas criam backup antes da substituição?
- Prompts gerados incluem contexto, policies, agentes, gates e saída esperada?

## Perguntas De Risco

- Runtime impede execução sem contexto mínimo?
- Runtime evita carregar segredos?
- Runtime mantém rastreabilidade?
- Runtime evita perda de dados do usuário durante reexecuções?
- Runtime impede bypass de Policy Engine e Quality Gates?

## Checklist

- [ ] Estrutura completa.
- [ ] CLI conectado.
- [ ] Workspace conectado.
- [ ] Policy Engine conectado.
- [ ] Orchestrator conectado.
- [ ] Segurança de contexto preservada.
- [ ] Prompts gerados são úteis e proporcionais.
- [ ] Protocolo de evolução local está presente e acionável.
- [ ] Segurança de escrita, backups e histórico estão validados.

## Conclusão

Runtime Validation garante que a CEIP seja uma plataforma operacional, não apenas uma biblioteca de documentos.
