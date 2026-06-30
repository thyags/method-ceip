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
2. Ler `.cloudsix/method/POLICY_ENGINE.md`.
3. Ler `.cloudsix/method/ORCHESTRATOR.md`.
4. Ler `.ceip/PROJECT.md`.
5. Ler `.ceip/STACK.md`.
6. Ler `.ceip/CONTEXT.md`.
7. Ler `.ceip/CURRENT_FOCUS.md`, quando existir.
8. Classificar tarefa.
9. Classificar risco.
10. Acionar agentes obrigatórios.
11. Aplicar Quality Gates.
12. Só então propor implementação.

## Regras

- Não inventar funcionalidades.
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
- [ ] Risco foi classificado.
- [ ] Gates foram definidos.
- [ ] Aprendizados foram registrados.
