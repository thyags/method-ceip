# Domain Packs

## Objetivo

Definir o modelo de extensão por domínio de negócio para a CEIP.

## Contexto

Projetos de ERP, CRM, SaaS, marketplace, oficina, construção, frotas, saúde e educação possuem vocabulário, riscos, fluxos e padrões recorrentes. Domain Packs permitem adicionar conhecimento especializado sem contaminar o Core com regras específicas de cliente.

## Estrutura Recomendada

```text
domains/
  erp/
  crm/
  saas/
  marketplace/
  workshop/
  construction/
  fleet/
  health/
  education/
```

## Conteúdo De Um Pack

- contexto do domínio;
- entidades comuns;
- fluxos recorrentes;
- riscos;
- checklists;
- templates;
- prompts;
- recipes;
- anti-patterns.

## Regras

- Domain Pack não substitui Product Intelligence.
- Domain Pack não deve armazenar dados de cliente.
- Domain Pack deve permanecer agnóstico de tecnologia.
- Domain Pack deve declarar quando é obrigatório, recomendado ou opcional.

## Conclusão

Domain Packs permitem que a CEIP escale para vários tipos de negócio sem perder clareza do Core.
