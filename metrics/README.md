# Engineering Metrics

## Objetivo

Organizar métricas de engenharia e scores para melhoria contínua de qualidade, risco, segurança, performance e manutenção.

## Contexto

Métricas devem orientar perguntas e decisões, não virar meta cega. Este diretório define como avaliar saúde técnica sem assumir ferramentas específicas.

## Diretrizes

- Métrica precisa ter objetivo e interpretação.
- Métrica sem ação possível deve ser evitada.
- Compare tendências, não apenas valores isolados.
- Combine métrica quantitativa com review técnico.
- Use a escala 0-100 do `engines/score-engine.md`.
- Aplique mínimos por risco: crítico 90, alto 85, médio 80 e baixo 70.

## Scores oficiais

- `quality-score.md`
- `risk-score.md`
- `security-score.md`
- `performance-score.md`
- `maintainability-score.md`

## Exemplos

- Aumento de complexidade em módulo crítico pode indicar necessidade de refatoração.
- Queda de cobertura em área financeira pode bloquear release.
- Piora de latência em API crítica deve acionar performance review.

## Checklist

- [ ] Métrica tem propósito.
- [ ] Método de coleta foi definido.
- [ ] Limites e interpretação foram documentados.
- [ ] Ação recomendada existe.
- [ ] Score mínimo por risco foi considerado.

## Conclusão

Métricas úteis ajudam a decidir melhor; métricas ruins criam teatro de controle.
