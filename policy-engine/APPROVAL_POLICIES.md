# Approval Policies

## Objetivo

Definir aprovação exigida por nível de risco.

## Contexto

Nem toda tarefa precisa de aprovação formal, mas mudanças de alto risco ou críticas não podem avançar apenas por decisão de agente.

## Diretrizes

- Baixo risco pode seguir com revisão simples.
- Médio risco exige checklist e revisão técnica.
- Alto risco exige especialista, QA, Code Review, documentação e ADR/RFC quando aplicável.
- Crítico exige planejamento formal, aprovação humana, rollback, testes, monitoramento, comunicação e documentação.

## Regras por risco

| Risco | Aprovação mínima |
| --- | --- |
| Baixo | Revisor simples ou self-review documentado |
| Médio | Revisão técnica e checklist aplicável |
| Alto | Especialista, QA, Code Reviewer e Quality Governor |
| Crítico | Aprovação humana explícita e plano formal |

## Exemplos

- Hotfix crítico em produção exige aprovação humana e monitoramento pós-deploy.
- Mudança visual isolada pode seguir com frontend checklist.

## Checklist

- [ ] Risco foi classificado.
- [ ] Aprovação mínima foi definida.
- [ ] Exceções foram justificadas.
- [ ] Aprovação humana foi exigida quando necessário.

## Conclusão

Approval Policies evitam que agentes avancem sozinhos em mudanças de risco relevante.
