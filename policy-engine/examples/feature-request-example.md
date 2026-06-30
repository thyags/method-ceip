# Exemplo - Nova Funcionalidade

## Objetivo

Mostrar como o Policy Engine classifica uma nova funcionalidade.

## Contexto

Uma nova funcionalidade pode afetar produto, negócio, arquitetura, frontend, backend, dados, segurança e QA.

## Diretrizes

- Começar por requisito e escopo.
- Classificar risco conforme impacto.
- Acionar agentes por domínio afetado.

## Aplicação

- Tipo: nova funcionalidade.
- Risco padrão: médio.
- Agentes obrigatórios: Product Intelligence System, Business Analyst, Product Manager, Chief Software Architect, QA Engineer, Code Reviewer.
- Agentes por impacto: Backend, UX/UI, Database, Security, Performance.
- Documentos: user story, technical spec, checklist, ADR/RFC se estrutural.
- Gates: Business, Architecture quando necessário, QA, Documentation, Review.

## Exemplos

Feature SaaS com nova tela e API exige UX, Backend, Security, QA e Documentation.

## Checklist

- [ ] Requisito foi confirmado.
- [ ] Escopo e fora de escopo foram definidos.
- [ ] Agentes foram roteados.
- [ ] Gates foram definidos.

## Conclusão

Nova funcionalidade só avança depois de contexto, escopo, risco e agentes definidos.
