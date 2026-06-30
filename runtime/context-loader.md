# Context Loader

## Objetivo

Montar contexto suficiente, seguro e rastreável para pessoas e IAs executarem uma tarefa.

## Ordem De Carregamento

1. `CONSTITUTION.md`
2. `runtime/`
3. `POLICY_ENGINE.md`
4. `ORCHESTRATOR.md`
5. `.ceip/PROJECT.md`
6. `.ceip/STACK.md`
7. `.ceip/CONTEXT.md`
8. `.ceip/project.json`
9. Artefatos locais por domínio da tarefa.
10. Memory, ADR, RFC, reviews e métricas quando relevantes.

## Fontes Condicionais

| Condição | Fontes |
| --- | --- |
| Produto ou feature | `product-intelligence/`, `.ceip/product-intelligence/` |
| Interface | `product-experience/`, `.ceip/product-experience/` |
| Arquitetura | `docs/architecture/`, `adr/`, `.ceip/adr/` |
| Segurança | `SECURITY_PRINCIPLES.md`, `policy-engine/SECURITY_POLICIES.md` |
| Release | `quality-gates/release-gate.md`, `.ceip/metrics/` |

## Regras De Segurança

- Não carregar `.env`, tokens, chaves privadas ou arquivos sensíveis.
- Não copiar dados de cliente para prompts quando resumo seguro for suficiente.
- Não enviar contexto irrelevante para a IA.
- Registrar lacunas quando contexto essencial estiver ausente.

## Saídas

- Lista de fontes carregadas.
- Lista de lacunas.
- Resumo de contexto.
- Riscos de contexto.
- Recomendações para Prompt Builder.

## Conclusão

Context Loader é o principal mecanismo para reduzir ambiguidade e risco em execução assistida por IA.
