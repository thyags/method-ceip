# Escalation Policies

## Objetivo

Definir quando a tarefa deve ser escalada para meta-agentes ou aprovação humana.

## Contexto

Algumas decisões excedem o escopo de um agente especialista.

## Diretrizes

- Conflito entre agentes escala para Chief Engineering Officer.
- Bloqueio de qualidade escala para Quality Governor.
- Dependência ou cronograma escala para Technical Program Manager.
- Conhecimento recorrente escala para Knowledge Curator.

## Políticas

- Risco crítico exige aprovação humana.
- Regra de negócio ambígua exige Business Analyst/Product Manager.
- Segurança crítica exige Security Engineer e Quality Governor.
- Mudança irreversível exige decisão formal.

## Exemplos

- Performance recomenda cache, Security identifica risco de dados: escalar conflito para Chief Engineering Officer.

## Checklist

- [ ] Motivo de escalonamento foi definido.
- [ ] Meta-agente correto foi acionado.
- [ ] Decisão foi registrada.

## Conclusão

Escalation Policies evitam decisão isolada em cenário de alto impacto.
