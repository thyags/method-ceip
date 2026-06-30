# Métricas de Performance

## Objetivo

Definir métricas para acompanhar latência, capacidade, custo e experiência operacional.

## Contexto

Performance deve ser avaliada por fluxo crítico, com baseline, meta e tendência.

## Diretrizes

- Defina métrica por jornada ou endpoint crítico.
- Compare baseline antes e depois de mudanças.
- Relacione degradação a releases ou volume.

## Métricas sugeridas

- Latência média e percentis relevantes.
- Taxa de erro.
- Tempo de carregamento de tela.
- Tempo de geração de relatório.
- Tamanho de payload.
- Tempo de fila ou job.
- Custo por volume processado quando aplicável.

## Exemplos

- Relatório financeiro acima do limite definido aciona performance review.
- Crescimento de payload em tela crítica exige revisão frontend/backend.

## Checklist

- [ ] Baseline existe.
- [ ] Meta foi definida.
- [ ] Métrica está ligada a experiência ou operação.
- [ ] Regressão aciona ação.

## Conclusão

Performance mensurada permite evolução sem depender de percepção subjetiva.
