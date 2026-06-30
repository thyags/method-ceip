# Product Governance

## Objetivo

Definir regras de governança para produto dentro da CEIP.

## Regras mandatórias

- Toda demanda nova deve ter Idea Brief.
- Toda iniciativa relevante deve ter Discovery Brief.
- Todo produto, módulo, API ou integração relevante deve ter PRD.
- Toda feature deve ter objetivo, persona, requisito de origem e critério de aceite.
- Toda story deve pertencer a uma feature, epic ou capability.
- Todo MVP deve declarar escopo, fora de escopo, riscos e métricas.
- Todo roadmap deve declarar dependências, premissas e versões.
- Toda exceção deve passar pelo Policy Engine.

## Papéis

| Papel | Responsabilidade |
| --- | --- |
| Product Brain | Coordenar raciocínio de produto |
| Discovery Brain | Garantir entendimento do problema |
| Market Brain | Avaliar mercado e concorrência |
| Business Brain | Validar valor, regras e operação |
| Requirements Brain | Transformar descoberta em requisitos |
| Product Manager | Priorizar, recortar e tomar decisões de produto |
| Business Analyst | Detalhar regras e processos reais |

## Critérios de bloqueio

- Problema não identificado.
- Usuário não identificado.
- Escopo confunde MVP com versões futuras.
- Requisito sem origem.
- Critério de aceite não testável.
- Risco legal, financeiro ou operacional sem dono.
- Arquitetura iniciada sem PRD em iniciativa relevante.

## Relação com Policy Engine

O Policy Engine deve classificar:

- tipo de demanda;
- risco de produto;
- necessidade de PRD;
- necessidade de RFC;
- agentes obrigatórios;
- quality gates;
- aprovação humana;
- documentação em `.ceip/`.

## Checklist

- [ ] A demanda tem estágio no Product Pipeline.
- [ ] Artefatos obrigatórios existem.
- [ ] Exceções foram justificadas.
- [ ] Riscos e donos foram identificados.
- [ ] Handoff para Business Analyst/Product Manager está completo.

## Conclusão

Product Governance torna descoberta, PRD, requisitos e planejamento uma obrigação operacional, não uma preferência.
