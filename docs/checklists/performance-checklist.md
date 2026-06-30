# Checklist de Performance

## Objetivo

Validar se uma mudança atende requisitos de performance ou não introduz gargalos relevantes.

## Contexto

Use em relatórios, telas com alto volume, integrações, jobs, APIs, consultas e releases com impacto operacional.

## Diretrizes

- Meça antes de otimizar.
- Defina meta.
- Valide ganho depois.

## Checklist

- [ ] Sintoma ou requisito de performance foi definido.
- [ ] Baseline foi coletado.
- [ ] Meta aceitável foi registrada.
- [ ] Volume e concorrência foram considerados.
- [ ] Gargalo foi localizado.
- [ ] Banco, backend, frontend, rede e integrações foram avaliados conforme o caso.
- [ ] Cache tem estratégia de invalidação quando usado.
- [ ] Impacto em consistência foi avaliado.
- [ ] Ganho foi medido após alteração.
- [ ] Monitoramento foi planejado.

## Exemplos

Use para relatório lento, tela pesada, fila acumulada, API instável, integração demorada ou custo crescente.

## Conclusão

Performance deve ser validada por evidência, não por percepção isolada.
