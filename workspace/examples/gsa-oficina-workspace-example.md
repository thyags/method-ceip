# Exemplo de Workspace - GSA Oficina

## Tipo de projeto

Sistema operacional para oficina, com backend, frontend, banco de dados, APIs, relatórios, regras de negócio e fluxos responsivos.

## Stack identificada

Registrar em `.ceip/STACK.md` somente após inspeção real do projeto.

```text
Linguagens:
Frameworks:
Banco de dados:
Frontend:
Backend:
Infraestrutura:
Testes:
Observabilidade:
```

## Estrutura `.ceip/` recomendada

- `context/business-context.md` para fluxo de atendimento, ordens de serviço e financeiro.
- `context/database-context.md` para entidades críticas.
- `adr/` para decisões de arquitetura.
- `tasks/active/` para melhorias em andamento.
- `reviews/qa/` para fluxos críticos.
- `metrics/quality-score.md` para acompanhamento.

## Exemplo de `project.json`

```json
{
  "project": {
    "name": "GSA Oficina",
    "type": "sistema operacional",
    "status": "ativo"
  },
  "governance": {
    "riskLevel": "alto",
    "requiresPolicyEngine": true,
    "requiresQualityGates": true
  }
}
```

## Exemplo de memória

```text
Contexto: fluxo de ordem de serviço depende de status operacional.
Aprendizado: mudanças em status exigem validação de relatórios e permissões.
Destino: .ceip/memory/business-memory.md
```

## Exemplo de ADR

```text
Título: Padronizar estados de ordem de serviço
Status: proposed
Contexto: múltiplos fluxos dependem do mesmo status.
Decisão: centralizar definição e validação dos estados.
Consequência: exige regressão em relatórios.
```

## Exemplo de tarefa

```text
Tipo: mudança de regra de negócio
Risco: alto
Agentes: Business Analyst, Product Manager, Backend Engineer, QA Engineer
Gates: Business, Backend, QA, Documentation
```

## Exemplo de review

```text
Review: QA
Escopo: fluxo de abertura e fechamento de ordem de serviço
Bloqueio: relatório financeiro não validado
Status: bloqueado até evidência
```

## Consulta Core + Workspace

Antes de implementar, a IA deve ler `.cloudsix/method/runtime/README.md`, `.cloudsix/method/POLICY_ENGINE.md`, `.cloudsix/method/ORCHESTRATOR.md`, `.ceip/PROJECT.md`, `.ceip/STACK.md`, `.ceip/CONTEXT.md`, `.ceip/runtime/README.md` e os contextos de negócio e banco.

## Conclusão

GSA Oficina é um bom piloto porque força validação de regras, dados, UX, relatórios e qualidade.
