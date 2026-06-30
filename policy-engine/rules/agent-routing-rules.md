# Agent Routing Rules

## Objetivo

Definir regras de roteamento de agentes.

## Contexto

O Orchestrator usa estas regras para selecionar agentes obrigatórios e opcionais.

## Regras

- Tarefa funcional aciona Business Analyst.
- Tarefa com escopo/produto aciona Product Manager.
- Mudança estrutural aciona Chief Software Architect.
- Mudança de dados aciona Database Architect.
- Mudança de backend/API aciona Backend Engineer e API Integration Engineer quando houver integração.
- Mudança visual aciona Frontend UX Specialist e UI Designer.
- Mudança de segurança aciona Security Engineer.
- Mudança de performance aciona Performance Engineer.
- Toda entrega relevante aciona QA Engineer e Code Reviewer Tech Lead.
- Mudança documental aciona Documentation Engineer.

## Exemplos

- Nova API com dados sensíveis: Backend, API Integration, Security, QA, Documentation e Code Reviewer.

## Checklist

- [ ] Impacto foi classificado.
- [ ] Agentes obrigatórios foram selecionados.
- [ ] Agentes opcionais foram justificados.
- [ ] Orquestração foi registrada.

## Conclusão

Roteamento correto evita lacunas entre especialidades.
