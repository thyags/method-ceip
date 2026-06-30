# Performance Gate

## Objetivo

Validar latência, throughput, consumo, escalabilidade, consultas, renderização e gargalos relevantes.

## Quando aplicar

Aplicar em fluxos críticos, consultas pesadas, dashboards, importações, relatórios, integrações, jobs e páginas de alto tráfego.

## Critérios obrigatórios

- Métrica alvo foi definida.
- Gargalos prováveis foram avaliados.
- Otimização foi baseada em medição.
- Impacto em custo e complexidade foi considerado.

## Critérios bloqueantes

- Fluxo crítico com degradação não medida.
- Consulta de alto volume sem índice ou paginação quando necessário.
- Otimização que quebra correção funcional.
- Ausência de limite em processamento potencialmente explosivo.

## Evidências exigidas

Medições antes/depois, análise de consulta, teste de carga quando aplicável e plano de monitoramento.

## Agentes responsáveis

Performance Engineer, Backend Engineer, Database Architect, Frontend UX Specialist, DevOps Engineer e QA Engineer.

## Checklist

- [ ] Objetivo de performance foi definido.
- [ ] Medição foi realizada.
- [ ] Gargalos foram priorizados.
- [ ] Trade-offs foram registrados.
- [ ] Monitoramento foi planejado.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Performance adequada ao contexto, comprovada por evidência.

## Conclusão

Performance sem medição é palpite.
