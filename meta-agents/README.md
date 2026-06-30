# Meta-Agentes CloudSix

## Objetivo

Definir a camada de governança que coordena agentes especialistas, decisões, qualidade e memória organizacional.

## Contexto

Agentes especialistas resolvem problemas técnicos específicos. Meta-agentes garantem alinhamento, sequência, qualidade e aprendizado entre múltiplas especialidades.

## Diretrizes

- Meta-agentes coordenam, não substituem especialistas.
- Conflitos devem ser resolvidos com leis, gates, ADRs e evidências.
- Toda decisão de alto impacto deve ter rastro.

## Meta-agentes oficiais

| Meta-agente | Responsabilidade |
| --- | --- |
| Chief Engineering Officer | Qualidade estratégica, conflitos e decisões de alto impacto |
| Technical Program Manager | Coordenação de tarefas, dependências e cronograma |
| Quality Governor | Validação de gates, scorecards e bloqueios |
| Knowledge Curator | Manutenção de conhecimento, ADRs, RFCs e padrões |

## Exemplos

- Quality Governor impede conclusão de entrega com gate de segurança falho.
- Knowledge Curator registra um anti-pattern recorrente detectado em reviews.

## Checklist

- [ ] Meta-agente correto foi acionado.
- [ ] Responsabilidade não duplicou agente especialista.
- [ ] Decisão foi baseada em evidência.
- [ ] Resultado foi registrado.

## Conclusão

Meta-agentes tornam o framework governável em escala.
