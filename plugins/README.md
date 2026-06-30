# Engineering Marketplace

## Objetivo

Definir o modelo futuro de plugins operacionais da CEIP.

## Contexto

Plugins permitem instalar capacidades adicionais sem inflar o Core. Eles podem fornecer policies, templates, checks, prompts, recipes ou automações.

## Categorias

```text
plugins/
  quality/
  security/
  performance/
  ux/
  documentation/
```

## Regras

- Plugin não pode contrariar Constitution, Policy Engine ou Runtime.
- Plugin deve declarar compatibilidade, entradas, saídas e riscos.
- Plugin não deve exigir stack fixa sem justificativa explícita.
- Plugin deve ser opcional e removível.

## Conclusão

Engineering Marketplace é a evolução natural para escalar a CEIP sem tornar o Core pesado.
