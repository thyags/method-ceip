# Gate 3 - Performance

> Alias de compatibilidade para `performance-gate.md`. O gate oficial detalhado é o arquivo nomeado; este documento permanece para fluxos que ainda referenciam a sequência numerada.

## Objetivo

Validar se a entrega atende requisitos de performance ou não introduz degradação relevante.

## Contexto

Use em fluxos críticos, relatórios, APIs, dashboards, jobs, integrações, telas com alto volume e releases relevantes.

## Quando aplicar

Aplicar quando a mudança afetar latência, throughput, consulta, renderização, importação, relatório, processamento assíncrono ou custo operacional.

## Diretrizes

- Consulte `PERFORMANCE_PRINCIPLES.md`.
- Use `decision-trees/README.md` e `diagrams/score-approval-flow.md`.
- Meça antes e depois quando houver requisito ou risco.

## Critérios obrigatórios

- Baseline existe quando aplicável.
- Meta ou limite aceitável foi definido.
- Gargalos previsíveis foram avaliados.
- Consistência não foi sacrificada sem decisão.
- Monitoramento foi definido para fluxo crítico.

## Critérios bloqueantes

- Degradação relevante sem medição.
- Consulta crítica sem avaliação de volume.
- Otimização que quebra correção funcional.
- Fluxo crítico sem limite operacional.

## Evidências exigidas

Baseline, medição antes/depois, análise de consulta ou renderização, justificativa de trade-off e plano de monitoramento.

## Agentes responsáveis

Performance Engineer, Database Architect, Backend Engineer, Frontend UX Specialist, DevOps Engineer e QA Engineer.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Performance adequada ao risco, com medição ou justificativa explícita.

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
