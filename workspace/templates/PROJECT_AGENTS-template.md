# AGENTS.md

Este projeto utiliza a CloudSix Engineering Intelligence Platform - CEIP.

## CEIP Core

O método oficial está disponível em:

```text
.cloudsix/method
```

## CEIP Workspace

O contexto local deste projeto está disponível em:

```text
.ceip
```

## Ordem obrigatória antes de qualquer tarefa

1. Ler `.cloudsix/method/CONSTITUTION.md`.
2. Ler `.cloudsix/method/runtime/README.md`.
3. Ler `.cloudsix/method/runtime/context-loader.md`.
4. Ler `.cloudsix/method/runtime/prompt-builder.md`.
5. Ler `.cloudsix/method/POLICY_ENGINE.md`.
6. Ler `.cloudsix/method/ORCHESTRATOR.md`.
7. Ler `.ceip/PROJECT.md`.
8. Ler `.ceip/STACK.md`.
9. Ler `.ceip/CONTEXT.md`.
10. Ler `.ceip/runtime/README.md`, quando existir.
11. Ler `.ceip/CURRENT_FOCUS.md`, quando existir.
12. Classificar tarefa.
13. Classificar risco.
14. Acionar agentes obrigatórios.
15. Aplicar Quality Gates.
16. Só então propor implementação.

## Regras

- Não inventar funcionalidades.
- Usar CEIP Runtime para contexto, roteamento e prompt quando houver execução assistida por IA.
- Não alterar regra de negócio sem solicitação.
- Não assumir stack.
- Preservar arquitetura existente.
- Registrar ADR quando houver decisão arquitetural.
- Registrar RFC quando houver mudança relevante de escopo.
- Atualizar `.ceip/memory/` quando houver aprendizado.
- Nunca gravar segredos no Workspace.

## Checklist

- [ ] Core foi consultado.
- [ ] Workspace foi consultado.
- [ ] Runtime foi consultado.
- [ ] Risco foi classificado.
- [ ] Gates foram definidos.
- [ ] Aprendizados foram registrados.
