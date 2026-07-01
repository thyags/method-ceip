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
4. Ler `.cloudsix/method/runtime/task-router.md`.
5. Ler `.cloudsix/method/runtime/prompt-builder.md`.
6. Ler `.cloudsix/method/product-intelligence/README.md`.
7. Ler `.cloudsix/method/product-intelligence/PRODUCT_PIPELINE.md`.
8. Ler `.cloudsix/method/product-experience/README.md`, quando houver interface impactada.
9. Ler `.cloudsix/method/product-experience/CLOUDSIX_DESIGN_LANGUAGE.md`, quando houver interface impactada.
10. Ler `.ceip/runtime/README.md`, quando existir.
11. Ler `.ceip/runtime/context-load.md`, quando existir.
12. Ler `.ceip/runtime/task-routing.md`, quando existir.
13. Ler `.ceip/runtime/prompt-builder.md`, quando existir.
14. Ler `.ceip/runtime/execution-plan.md`, quando existir.
15. Ler `.ceip/runtime/decision-runtime.md`, quando existir.
16. Ler `.ceip/runtime/evolution-protocol.md`, quando existir.
17. Ler `.ceip/runtime/checkpoint-runtime-pack.md`, quando existir.
18. Ler `.ceip/product-experience/cloudsix-design-language.md`, quando existir e houver interface impactada.
19. Ler `.ceip/product-experience/cdl-compliance.md`, quando existir e houver interface impactada.
20. Ler `.cloudsix/method/policy-engine/PRODUCT_INTELLIGENCE_POLICIES.md`.
21. Ler `.cloudsix/method/policy-engine/PRODUCT_EXPERIENCE_POLICIES.md`, quando houver interface impactada.
22. Ler `.cloudsix/method/policy-engine/RUNTIME_POLICIES.md`.
23. Ler `.cloudsix/method/POLICY_ENGINE.md`.
24. Ler `.cloudsix/method/ORCHESTRATOR.md`.
25. Ler `.ceip/PROJECT.md`.
26. Ler `.ceip/STACK.md`.
27. Ler `.ceip/CONTEXT.md`.
28. Ler `.ceip/product-intelligence/README.md`, quando existir.
29. Ler `.ceip/product-experience/README.md`, quando existir.
30. Ler `.ceip/CURRENT_FOCUS.md`, quando existir.
31. Classificar tarefa.
32. Classificar risco.
33. Acionar agentes obrigatórios.
34. Aplicar Quality Gates.
35. Só então propor implementação.

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

## Protocolo permanente de evolução

- Seguir `.ceip/runtime/evolution-protocol.md` em toda evolução do projeto, quando existir.
- Usar multiagentes sempre que for seguro e útil, com escopo claro e sem conflito de escrita.
- Executar `ceip checkpoint "descrição da tarefa"` antes de commits relevantes; se o comando global não estiver disponível, usar `node .cloudsix/method/bin/ceip.js checkpoint "descrição da tarefa"`.
- Revisar e resolver os sinais do checkpoint antes de commitar.
- Fazer commit e push ao final de cada evolução concluída e validada, salvo instrução explícita contrária, branch protegida, bloqueio técnico ou política diferente registrada no projeto.

## Checklist

- [ ] Core foi consultado.
- [ ] Workspace foi consultado.
- [ ] Runtime foi consultado.
- [ ] Risco foi classificado.
- [ ] Gates foram definidos.
- [ ] Aprendizados foram registrados.
- [ ] Checkpoint foi executado e revisado antes de commit relevante.
