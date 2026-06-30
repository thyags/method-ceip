# Exemplo de Workspace - CloudSix Frotas

## Tipo de projeto

Sistema de gestão de frotas com veículos, motoristas, manutenção, alertas, relatórios e integrações operacionais.

## Stack identificada

Preencher `.ceip/STACK.md` com evidências do repositório.

## Estrutura `.ceip/` recomendada

- `context/business-context.md` para regras de frota e manutenção.
- `context/security-context.md` para permissões e dados operacionais.
- `context/integration-context.md` para rastreadores, APIs ou importações.
- `reviews/database/` para histórico e relatórios.
- `metrics/risk-score.md` para fluxos críticos.

## Exemplo de `project.json`

```json
{
  "project": {
    "name": "CloudSix Frotas",
    "type": "sistema de gestão",
    "status": "ativo"
  },
  "architecture": {
    "criticalFlows": ["manutenção", "alertas", "relatórios"]
  }
}
```

## Exemplo de memória

```text
Contexto: alertas operacionais dependem de dados atualizados.
Aprendizado: mudanças em integração devem validar atraso, duplicidade e falha.
Destino: .ceip/memory/lessons-learned.md
```

## Exemplo de ADR

```text
Título: Política de histórico de manutenção
Status: accepted
Decisão: preservar histórico para auditoria operacional.
```

## Exemplo de tarefa

```text
Tipo: relatório operacional
Risco: médio
Agentes: Business Analyst, Database Architect, QA Engineer, Performance Engineer
Gates: Business, Database, Performance, QA
```

## Exemplo de review

```text
Review: Database
Escopo: relatório de manutenção
Achado: índice necessário para consulta recorrente
Status: ação criada em tasks/active
```

## Consulta Core + Workspace

A IA deve consultar o Core para gates e policies, depois ler contexto de negócio, integração e banco no Workspace.

## Conclusão

CloudSix Frotas mostra como o Workspace preserva histórico operacional e decisões de dados.
