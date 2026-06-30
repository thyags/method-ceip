# Guia de ADR e RFC no Workspace

## Objetivo

Orientar como registrar decisões arquiteturais e propostas de mudança no `.ceip/`.

## ADR

Use ADR para decisões arquiteturais relevantes do projeto:

- Mudança de arquitetura.
- Alteração de persistência.
- Integração crítica.
- Decisão difícil de reverter.
- Escolha com trade-offs importantes.

Diretório recomendado:

```text
.ceip/adr/
  proposed/
  accepted/
  rejected/
  deprecated/
```

## RFC

Use RFC para propostas amplas antes da decisão:

- Mudança de escopo relevante.
- Nova capacidade grande.
- Alteração que envolve vários módulos.
- Decisão que precisa de consenso.

Diretório recomendado:

```text
.ceip/rfc/
  proposed/
  accepted/
  rejected/
```

## Relação com o Core

Templates globais ficam no CEIP Core. Decisões específicas do projeto ficam no Workspace.

## Checklist

- [ ] A decisão é específica do projeto.
- [ ] Contexto e alternativas foram registrados.
- [ ] Riscos e consequências foram descritos.
- [ ] Status do ADR/RFC está claro.
- [ ] Decisão reutilizável foi proposta ao Core quando aplicável.

## Conclusão

ADR e RFC no Workspace dão rastreabilidade ao projeto sem poluir o Core.
