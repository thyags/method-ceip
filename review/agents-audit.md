# Auditoria dos Agentes

## Objetivo

Verificar se os agentes possuem contrato operacional completo.

## Critérios

Cada agente deve conter:

- missão;
- escopo;
- responsabilidades;
- entradas;
- saídas;
- quando acionar;
- o que pode decidir;
- o que não pode decidir;
- interação com outros agentes;
- relação com Policy Engine;
- relação com Orchestrator;
- relação com Quality Gates;
- checklist;
- anti-patterns;
- prompt operacional.

## Resultado inicial

Os 18 arquivos em `docs/agents/` tinham conteúdo útil, mas os títulos eram numerados e não cumpriam o contrato literal da auditoria. Também faltavam seções explícitas de relação com Policy Engine, Orchestrator e Quality Gates.

## Correções aplicadas

- Padronizados os títulos dos 18 agentes.
- Adicionada seção `Quando acionar`.
- Adicionadas seções `Relação com Policy Engine`, `Relação com Orchestrator` e `Relação com Quality Gates`.
- Removida numeração residual dos subtítulos operacionais.

## Validação

Contrato automatizado executado:

```text
docs/agents: files=18 violations=0
```

## Conclusão

Os agentes estão minimamente padronizados e conectados ao fluxo oficial.
