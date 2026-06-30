# Prompt - Design de Fluxo UX

## Objetivo

Orientar desenho de jornada, estados e interação para interfaces.

## Contexto

Use para telas, dashboards, formulários e experiências públicas ou administrativas.

## Diretrizes

- Entender tarefa do usuário.
- Consultar Product Experience System quando houver interface relevante.
- Cobrir estados.
- Respeitar design system e stack.

## Prompt

```text
Use o CloudSix Engineering Framework.

Objetivo: desenhar fluxo UX claro e operacional.

Antes de desenhar:
- consulte product-experience/README.md quando houver interface relevante;
- aplique CloudSix Design Language e Interaction Rules quando aplicável;
- não avance sem critério de experiência para tela relevante.

Entregue:
- usuários e tarefas;
- jornada principal;
- estados de carregamento, vazio, erro, sucesso e permissão;
- mensagens necessárias;
- riscos de usabilidade;
- critérios de acessibilidade;
- evidências para Product Experience Gate e Visual Quality Score quando aplicável;
- dependências de backend/API.

Não invente campos, ações ou regras de negócio.
```

## Exemplos

Use para cadastro ERP, painel SaaS, ordem de serviço, CRM e site institucional.

## Checklist

- [ ] Jornada principal foi descrita.
- [ ] Product Experience foi aplicado quando aplicável.
- [ ] Estados foram cobertos.
- [ ] Dependências foram registradas.

## Conclusão

Este prompt orienta interface por tarefa, não por estética isolada.
