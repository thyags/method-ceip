# Exemplo de Workspace - NexParts

## Tipo de projeto

Marketplace ou plataforma de autopeças com catálogo, busca, integrações, pedidos e regras comerciais.

## Stack identificada

Registrar a stack somente após inspeção. Não assumir tecnologia.

## Estrutura `.ceip/` recomendada

- `context/business-context.md` para regras de catálogo, preço e disponibilidade.
- `context/integration-context.md` para fornecedores, APIs e sincronização.
- `context/performance-context.md` quando houver busca ou alto volume.
- `reviews/security/` para dados de pedido e integração externa.
- `metrics/performance-score.md` para busca e listagens.

## Exemplo de `project.json`

```json
{
  "project": {
    "name": "NexParts",
    "type": "marketplace",
    "status": "ativo"
  },
  "architecture": {
    "integrations": ["fornecedores", "catálogo", "pedidos"],
    "criticalFlows": ["busca", "cotação", "pedido"]
  }
}
```

## Exemplo de memória

```text
Contexto: sincronização de catálogo pode gerar divergência de disponibilidade.
Aprendizado: integrações precisam registrar origem, horário e falha de atualização.
Destino: .ceip/memory/project-memory.md
```

## Exemplo de ADR

```text
Título: Estratégia de sincronização de catálogo
Status: proposed
Decisão: definir contrato e fallback para divergência entre fornecedor e marketplace.
```

## Exemplo de tarefa

```text
Tipo: integração externa
Risco: alto
Agentes: API Integration Engineer, Security Engineer, Backend Engineer, QA Engineer
Gates: Security, Backend, QA, Performance, Documentation
```

## Exemplo de review

```text
Review: Performance
Escopo: busca de catálogo
Achado: falta baseline para volume esperado
Status: ressalva
```

## Consulta Core + Workspace

A IA deve consultar policies de API, segurança e performance no Core, depois ler `.ceip/context/integration-context.md` e `.ceip/metrics/performance-score.md`.

## Conclusão

NexParts evidencia o valor do Workspace para integrações e performance.
