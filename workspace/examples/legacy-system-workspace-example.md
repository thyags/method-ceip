# Exemplo de Workspace - Sistema Legado

## Tipo de projeto

Sistema existente com histórico, regras implícitas, baixa cobertura de testes e risco de regressão.

## Stack identificada

Registrar stack real após leitura de arquivos, scripts, dependências e ambiente. Não assumir tecnologia pelo nome do projeto.

## Estrutura `.ceip/` recomendada

- `CONTEXT.md` para contexto geral e restrições.
- `KNOWN_ISSUES.md` para problemas conhecidos.
- `TECHNICAL_DEBT.md` para dívida técnica.
- `memory/mistakes.md` para erros recorrentes.
- `reviews/qa/` para testes de caracterização.
- `adr/proposed/` para decisões de modernização.

## Exemplo de `project.json`

```json
{
  "project": {
    "name": "Sistema Legado",
    "type": "sistema legado",
    "status": "em modernização"
  },
  "governance": {
    "riskLevel": "alto",
    "requiresADRForArchitectureChanges": true
  }
}
```

## Exemplo de memória

```text
Contexto: cálculo financeiro existe em fluxo sem teste automatizado.
Aprendizado: antes de refatorar, criar teste de caracterização.
Destino: .ceip/memory/mistakes.md
```

## Exemplo de ADR

```text
Título: Estratégia incremental de modernização
Status: proposed
Decisão: modernizar por fluxo crítico, sem reescrita ampla inicial.
```

## Exemplo de tarefa

```text
Tipo: refatoração
Risco: alto
Agentes: Refactoring Specialist, QA Engineer, Code Reviewer Tech Lead, Chief Software Architect
Gates: Architecture, QA, Review, Documentation
```

## Exemplo de review

```text
Review: Code Review
Escopo: refatoração de fluxo crítico
Bloqueio: comportamento atual não caracterizado
Status: bloqueado
```

## Consulta Core + Workspace

A IA deve ler playbooks de legado no Core e consultar `.ceip/TECHNICAL_DEBT.md`, `.ceip/KNOWN_ISSUES.md` e memória local antes de propor qualquer refatoração.

## Conclusão

Em legado, o Workspace é essencial para preservar comportamento observado e reduzir risco.
