# Agent Orchestration

## Objetivo

Definir como agentes trabalham juntos sem sobreposição indevida.

## Contexto

Agentes representam responsabilidades, não cargos fixos nem etapas burocráticas. A orquestração deve impedir que um agente tome decisão fora do próprio domínio e garantir que cada saída alimente a próxima etapa com contexto suficiente.

## Regras

- Product Intelligence valida ideia, discovery, PRD, MVP e critérios quando a demanda envolver produto.
- Product Experience valida experiência, layout, interação, acessibilidade e Visual Quality Score quando a demanda envolver interface relevante.
- Business Analyst valida problema e regra depois do PRD inicial.
- Product Manager define escopo e prioridade depois de Business Analysis.
- Policy Engine classifica tarefa, risco, documentos, gates e aprovações antes do Orchestrator.
- Orchestrator seleciona sequência, agentes e handoffs.
- Chief Software Architect coordena decisões estruturais quando a orquestração indicar impacto arquitetural.
- Especialistas executam análise do próprio domínio conforme roteamento.
- QA, Security, Performance e Documentation validam antes da conclusão.
- Quality Governor decide bloqueios de gate e score.
- Knowledge Curator registra aprendizados quando a entrega revela padrão, anti-pattern ou decisão recorrente.

## Matriz de colaboração

| Origem | Destino | Handoff esperado |
| --- | --- | --- |
| Product Intelligence System | Business Analyst | Discovery, PRD, requisitos, MVP, roadmap e critérios de aceite |
| Product Experience System | Frontend UX Specialist | Experience brief, layout, interação, acessibilidade e critérios de score visual |
| Product Experience System | UI Designer | CloudSix Design Language, regras visuais, componentes e critérios premium |
| Business Analyst | Product Manager | Problema, regras, exceções e critérios de aceite |
| Product Manager | Policy Engine | Escopo, prioridade, fora de escopo, métricas e risco percebido |
| Policy Engine | Orchestrator | Tipo de tarefa, risco, agentes, documentos, gates e aprovações |
| Orchestrator | Chief Software Architect | Sequência, impacto previsto, documentos exigidos e handoff |
| Chief Software Architect | Especialistas técnicos | Decisão estrutural, restrições e riscos |
| Especialistas técnicos | QA Engineer | Comportamento esperado, pontos de risco e evidências |
| QA Engineer | Code Reviewer Tech Lead | Resultado de testes, lacunas e regressões |
| Code Reviewer Tech Lead | Documentation Engineer | Decisões, contratos e ajustes documentais |
| Documentation Engineer | Quality Governor | Evidências finais e pendências |

## Regras de conflito

- Conflito técnico: Chief Software Architect decide ou escala.
- Conflito de escopo: Product Manager decide com evidência de negócio.
- Conflito de segurança: Security Engineer pode bloquear até aprovação formal.
- Conflito de qualidade: Quality Governor aplica gates e score mínimo.
- Conflito estratégico: Chief Engineering Officer decide exceção.

## Checklist

- [ ] Agentes obrigatórios foram acionados.
- [ ] Product Intelligence foi aplicado quando obrigatório.
- [ ] Product Experience foi aplicado quando obrigatório.
- [ ] Policy Engine classificou a tarefa antes da orquestração.
- [ ] Saídas esperadas foram definidas.
- [ ] Conflitos têm responsável por decisão.
- [ ] Handoffs foram registrados.
- [ ] Agentes não assumiram responsabilidade fora do domínio.
- [ ] Resultado final passa por gates.

## Conclusão

Orquestração evita que agentes decidam fora da própria responsabilidade.
