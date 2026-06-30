# Product Intelligence Policies

## Objetivo

Definir políticas obrigatórias para uso do Product Intelligence System antes de arquitetura, engenharia ou implementação.

## Quando aplicar

- Novo produto.
- Nova funcionalidade relevante.
- Novo módulo.
- Nova API.
- Nova integração.
- Novo SaaS, ERP, CRM ou marketplace.
- Modernização de sistema legado com impacto funcional.
- Mudança de escopo médio, alto ou crítico.

## Políticas mandatórias

- Toda demanda aplicável deve passar por `product-intelligence/`.
- PRD é obrigatório para novo produto, novo módulo, nova API, nova integração ou feature relevante.
- Discovery é obrigatório quando problema, usuário, valor ou escopo não estiverem claros.
- MVP é obrigatório para produto, módulo ou iniciativa ampla.
- Feature sem critérios de aceite não pode avançar para engineering.
- Story sem feature, epic ou capability não pode ser planejada.
- Roadmap sem MVP não pode ser aprovado.
- Requisito sem origem deve permanecer como hipótese.
- Arquitetura antes de PRD exige exceção formal.

## Artefatos exigidos

| Tipo de demanda | Artefatos mínimos |
| --- | --- |
| Novo produto | Idea Brief, Discovery Brief, PRD, MVP, Roadmap, Backlog |
| Nova feature | Feature Spec, requisitos, critérios de aceite, stories |
| Novo módulo | PRD de módulo, Capability Map, MVP, Roadmap |
| Nova API | PRD/API Brief, casos de uso, critérios de contrato, riscos |
| Nova integração | PRD ou RFC, sistemas envolvidos, dados, falhas, critérios |
| Sistema legado | Discovery, inventário funcional, riscos, plano incremental |

## Exceções

Exceções só são aceitas quando:

- a demanda é corretiva, pequena e sem impacto funcional relevante;
- há incidente crítico e a prioridade é contenção;
- há hotfix com rollback claro;
- o risco de esperar é maior que o risco de agir.

Toda exceção deve registrar:

- motivo;
- risco residual;
- artefatos que serão completados depois;
- responsável pela decisão.

## Quality Gates

Aplicar `quality-gates/product-intelligence-gate.md` antes de avançar para Architecture ou Engineering.

## Checklist

- [ ] Tipo de demanda foi classificado.
- [ ] Necessidade de PIS foi avaliada.
- [ ] Artefatos mínimos foram definidos.
- [ ] Exceções foram justificadas.
- [ ] Product Intelligence Gate foi aplicado.
- [ ] Handoff para Orchestrator está completo.

## Conclusão

Product Intelligence Policies impedem que a CEIP execute software antes de entender produto.
