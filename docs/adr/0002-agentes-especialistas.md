# ADR-0002 - Agentes Especialistas

## Objetivo

Registrar a decisão de organizar o framework por agentes especialistas com responsabilidades, limites e prompts próprios.

## Contexto

Tarefas de engenharia empresarial exigem múltiplas perspectivas. Um agente único tende a misturar produto, arquitetura, segurança, UX e implementação sem profundidade suficiente.

## Diretrizes

- Cada agente deve ter missão, escopo, responsabilidades, limites e checklist.
- Agentes não devem ultrapassar sua especialidade sem acionar outro papel.
- O fluxo oficial deve começar por negócio e produto quando houver requisito novo.

## Decisão

O framework adotará 18 agentes especialistas documentados em `docs/agents` e prompts correspondentes em `docs/prompts`.

## Consequências

- Demandas complexas serão orquestradas por papéis.
- Ferramentas de IA podem receber prompts específicos.
- Responsabilidades ficam explícitas e revisáveis.
- Há maior custo inicial de navegação, compensado por clareza.

## Exemplos

Uma migração de banco não deve ser decidida apenas por Backend Engineer; deve envolver Database Architect, QA Engineer, DevOps Engineer e Security Engineer quando aplicável.

## Checklist

- [ ] Todos os agentes têm escopo claro.
- [ ] Prompts respeitam a constituição.
- [ ] AGENTS.md define ordem de chamada.
- [ ] Interações entre agentes foram descritas.

## Conclusão

Agentes especialistas aumentam qualidade da decisão e reduzem risco de respostas genéricas ou incompletas.
