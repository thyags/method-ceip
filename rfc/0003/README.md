# RFC-0003 - Meta-Agentes de Governança

## Objetivo

Propor meta-agentes responsáveis por coordenação, qualidade, conhecimento e decisões estratégicas.

## Contexto

Os 18 agentes especialistas resolvem problemas específicos, mas demandas complexas exigem coordenação acima das especialidades.

## Diretrizes

- Meta-agentes coordenam, não substituem especialistas.
- Conflitos devem ser resolvidos com critérios do framework.
- Quality gates devem ser validados antes de concluir entregas.

## Proposta

Criar quatro meta-agentes: Chief Engineering Officer, Technical Program Manager, Quality Governor e Knowledge Curator.

## Alternativas

- Deixar coordenação implícita no AGENTS.md: simples, mas menos robusto.
- Criar meta-agentes formais: mais governança e rastreabilidade.

## Exemplos

Quality Governor pode bloquear entrega se segurança ou testes falharem. Knowledge Curator atualiza knowledge base, ADRs e RFCs.

## Checklist

- [ ] Meta-agentes foram documentados.
- [ ] Orquestração foi atualizada.
- [ ] Gates foram conectados.
- [ ] Responsabilidades não duplicam agentes especialistas.

## Conclusão

Meta-agentes elevam o framework de conjunto de papéis para sistema coordenado de engenharia.
