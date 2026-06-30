# Anti-pattern Engine

## Objetivo

Detectar práticas recorrentes que degradam qualidade, segurança, clareza, performance ou evolução do sistema.

## Entradas

- Diffs, reviews, incidentes, bugs e relatos de manutenção.
- Catálogo em `anti-patterns/`.
- Métricas e quality gates.

## Processamento

1. Identificar sinal de anti-pattern.
2. Validar se há evidência objetiva.
3. Classificar impacto e risco.
4. Sugerir correção incremental.
5. Registrar aprendizado se o padrão se repetir.

## Saídas

- Anti-pattern detectado.
- Impacto, risco e evidência.
- Plano de correção.
- Recomendação para knowledge ou policy.

## Políticas relacionadas

- `policy-engine/RISK_POLICIES.md`
- `policy-engine/QUALITY_GATE_POLICIES.md`
- `policy-engine/DOCUMENTATION_POLICIES.md`

## Agentes envolvidos

Code Reviewer Tech Lead, Refactoring Specialist, QA Engineer, Security Engineer e Performance Engineer.

## Quality gates aplicáveis

- `quality-gates/qa-gate.md`
- `quality-gates/security-gate.md`
- `quality-gates/performance-gate.md`
- `quality-gates/documentation-gate.md`

## Exemplos

- Regra de negócio escondida em interface.
- Decisão técnica não documentada.
- Fluxo crítico sem teste.

## Checklist de validação

- [ ] Há evidência do anti-pattern.
- [ ] O impacto foi descrito.
- [ ] A correção preserva comportamento existente.
- [ ] A recomendação é incremental.
- [ ] O aprendizado foi registrado quando recorrente.

## Conclusão

O Anti-pattern Engine transforma sinais de deterioração em ações de melhoria controladas.
