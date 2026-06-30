# Gate 3 - Performance

## Objetivo

Validar se a entrega atende requisitos de performance ou não introduz degradação relevante.

## Contexto

Use em fluxos críticos, relatórios, APIs, dashboards, jobs, integrações, telas com alto volume e releases relevantes.

## Diretrizes

- Consulte `PERFORMANCE_PRINCIPLES.md`.
- Use `decision-trees/performance.mmd`.
- Meça antes e depois quando houver requisito ou risco.

## Critérios de aprovação

- Baseline existe quando aplicável.
- Meta ou limite aceitável foi definido.
- Gargalos previsíveis foram avaliados.
- Consistência não foi sacrificada sem decisão.
- Monitoramento foi definido para fluxo crítico.

## Exemplos

- Relatório com alto volume exige medição ou justificativa para ausência de medição.
- Tela pública exige atenção a tempo de carregamento e assets.

## Checklist

- [ ] Baseline foi coletado quando necessário.
- [ ] Meta foi registrada.
- [ ] Impacto em volume e concorrência foi considerado.
- [ ] Regressão será monitorada.

## Conclusão

Este gate impede otimizações cegas e degradações invisíveis.
