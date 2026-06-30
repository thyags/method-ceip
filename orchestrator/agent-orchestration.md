# Agent Orchestration

## Objetivo

Definir como agentes trabalham juntos sem sobreposição indevida.

## Contexto

Agentes representam responsabilidades, não cargos fixos nem etapas burocráticas. A orquestração deve impedir que um agente tome decisão fora do próprio domínio e garantir que cada saída alimente a próxima etapa com contexto suficiente.

## Regras

- Business Analyst valida problema antes de solução.
- Product Manager define escopo e prioridade.
- Chief Software Architect coordena decisões estruturais.
- Especialistas executam análise do próprio domínio.
- QA, Security, Performance e Documentation validam antes da conclusão.
- Quality Governor decide bloqueios de gate e score.
- Knowledge Curator registra aprendizados quando a entrega revela padrão, anti-pattern ou decisão recorrente.

## Matriz de colaboração

| Origem | Destino | Handoff esperado |
| --- | --- | --- |
| Business Analyst | Product Manager | Problema, regras, exceções e critérios de aceite |
| Product Manager | Chief Software Architect | Escopo, prioridade, fora de escopo e métricas |
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
- [ ] Saídas esperadas foram definidas.
- [ ] Conflitos têm responsável por decisão.
- [ ] Handoffs foram registrados.
- [ ] Agentes não assumiram responsabilidade fora do domínio.
- [ ] Resultado final passa por gates.

## Conclusão

Orquestração evita que agentes decidam fora da própria responsabilidade.
