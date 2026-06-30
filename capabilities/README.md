# Capability Packs

## Objetivo

Definir o modelo de extensão por capacidade técnica ou funcional recorrente.

## Exemplos

```text
capabilities/
  authentication/
  payments/
  reports/
  dashboards/
  notifications/
  search/
  analytics/
  billing/
  multi-tenancy/
```

## Conteúdo De Um Pack

- objetivo da capacidade;
- riscos recorrentes;
- padrões de arquitetura;
- policies relacionadas;
- gates;
- checklists;
- templates;
- prompts;
- recipes.

## Regras

- Capability Pack deve respeitar stack existente.
- Capability Pack não deve impor fornecedor ou biblioteca.
- Capability Pack deve declarar riscos de segurança, dados, performance e operação.

## Conclusão

Capability Packs reduzem retrabalho em capacidades repetidas sem transformar a CEIP em stack fixa.
