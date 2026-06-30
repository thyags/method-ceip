# Agent Routing Policies

## Objetivo

Definir quais agentes devem ser acionados por tipo de tarefa, risco e impacto.

## Contexto

O Orchestrator depende desta política para decidir ordem de atuação, documentos exigidos, quality gates e aprovação.

## Diretrizes

- Risco alto ou crítico exige agentes especialistas.
- Mudanças funcionais começam por Business Analyst e Product Manager.
- Mudanças estruturais passam por Chief Software Architect.
- Mudanças de segurança acionam Security Engineer.
- Mudanças de dados acionam Database Architect.

## Matriz de roteamento

| Tipo de tarefa | Risco | Agentes obrigatórios | Agentes opcionais | Documentos exigidos | Quality Gates | Aprovação |
| --- | --- | --- | --- | --- | --- | --- |
| Nova funcionalidade | Médio | Business Analyst, Product Manager, Chief Software Architect, QA Engineer | Frontend UX Specialist, UI Designer, Backend Engineer, Security Engineer | RFC se grande, spec, checklist | Business, QA, Review | Técnica |
| Correção de bug | Baixo/Médio | QA Engineer, Code Reviewer Tech Lead | Backend Engineer, Frontend UX Specialist | Evidência, teste regressão | QA, Review | Simples |
| Hotfix | Alto/Crítico | DevOps Engineer, QA Engineer, Code Reviewer Tech Lead | Security Engineer, Backend Engineer | Incidente, rollback | Release, QA, Review | Humana se crítico |
| Alteração de banco | Alto/Crítico | Database Architect, QA Engineer, DevOps Engineer | Security Engineer, Performance Engineer | ADR/RFC, migration plan | Database, QA, Release | Humana se produção |
| Nova API | Médio/Alto | Backend Engineer, API Integration Engineer, Security Engineer, QA Engineer | Chief Software Architect | Spec contrato | Backend, Security, QA | Técnica |
| Integração externa | Alto | API Integration Engineer, Security Engineer, QA Engineer, DevOps Engineer | Chief Software Architect | RFC/ADR, contrato | Security, QA, Release | Técnica/Humana |
| Alteração visual | Baixo/Médio | Frontend UX Specialist, UI Designer, QA Engineer | Documentation Engineer | Critério UX | Frontend, QA | Simples |
| Refatoração | Médio/Alto | Refactoring Specialist, QA Engineer, Code Reviewer Tech Lead | Chief Software Architect | Plano refatoração | QA, Review | Técnica |
| Otimização performance | Médio/Alto | Performance Engineer, QA Engineer | Backend Engineer, Database Architect | Baseline, plano | Performance, QA | Técnica |
| Correção vulnerabilidade | Alto/Crítico | Security Engineer, QA Engineer, Code Reviewer Tech Lead | DevOps Engineer | Security review | Security, QA, Release | Humana se crítico |
| Deploy | Médio/Alto | DevOps Engineer, QA Engineer | Security Engineer | Release notes, rollback | Release, QA | Técnica |
| Migração | Alto/Crítico | Chief Software Architect, Database Architect, DevOps Engineer, QA Engineer | Security Engineer | RFC/ADR, rollback | Database, Release | Humana |
| Incidente | Alto/Crítico | DevOps Engineer, Security Engineer, QA Engineer | Backend Engineer, Database Architect | Incident report | Release, Security | Humana se crítico |
| Mudança regra negócio | Médio/Alto | Business Analyst, Product Manager, QA Engineer | Chief Software Architect | User story, critérios | Business, QA | Produto |
| Sistema legado | Alto | Chief Software Architect, Refactoring Specialist, QA Engineer | Database Architect | Plano legado | Architecture, QA | Técnica |
| Novo projeto | Médio/Alto | Business Analyst, Product Manager, Chief Software Architect, QA Engineer | Todos por impacto | RFC, ADRs iniciais | Architecture, QA | Estratégica |
| Mudança arquitetura | Alto/Crítico | Chief Software Architect, QA Engineer, DevOps Engineer | Security Engineer, Performance Engineer | ADR/RFC | Architecture, Review | Humana se crítico |
| Alteração autenticação | Alto/Crítico | Security Engineer, Backend Engineer, QA Engineer | DevOps Engineer, Frontend UX Specialist | Security spec | Security, QA | Humana se crítico |
| Alteração permissões | Alto | Security Engineer, Backend Engineer, QA Engineer | Business Analyst | Matriz permissões | Security, QA | Técnica/Humana |
| Dados sensíveis | Alto/Crítico | Security Engineer, Database Architect, QA Engineer | Business Analyst | Data impact | Security, Database | Humana se crítico |
| Alteração financeira | Alto/Crítico | Business Analyst, Backend Engineer, Database Architect, QA Engineer | Security Engineer | Critérios, testes históricos | Business, QA, Security | Humana |
| Alteração mobile | Médio | Mobile Specialist, Frontend UX Specialist, UI Designer, QA Engineer | Backend Engineer | Spec mobile | Frontend, QA | Técnica |
| Relatórios | Médio/Alto | Business Analyst, Database Architect, QA Engineer | Performance Engineer | Definição métrica | Database, QA | Técnica |
| Dashboards | Médio | Product Manager, Frontend UX Specialist, Database Architect, QA Engineer | Performance Engineer | Definição métricas | Frontend, Performance | Técnica |
| Infraestrutura | Alto/Crítico | DevOps Engineer, Security Engineer, QA Engineer | Chief Software Architect | Plano deploy/rollback | Release, Security | Humana se crítico |

## Exemplos

- Nova API externa de pagamento: integração externa, risco crítico, exige Security, API Integration, QA, DevOps, ADR/RFC e aprovação humana.

## Checklist

- [ ] Tipo de tarefa foi localizado na matriz.
- [ ] Risco foi confirmado.
- [ ] Agentes obrigatórios foram acionados.
- [ ] Documentos e gates foram definidos.

## Conclusão

Esta matriz é a base para roteamento operacional do Orchestrator.
