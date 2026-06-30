# Prompt - Diagnóstico de Performance

## Objetivo

Orientar investigação de performance com baseline, meta e gargalo.

## Contexto

Use em telas lentas, APIs, relatórios, filas, integrações e custo crescente.

## Diretrizes

- Medir antes de otimizar.
- Comparar alternativas.
- Validar ganho depois.

## Prompt

```text
Use o CloudSix Engineering Framework.
Consulte decision-trees/performance.mmd.

Objetivo: diagnosticar performance com evidência.

Entregue:
- sintoma e impacto;
- métrica e baseline necessários;
- hipóteses de gargalo;
- dados a coletar;
- alternativas de otimização;
- trade-offs de consistência e complexidade;
- plano de validação.

Não recomende cache, fila ou reescrita sem diagnóstico.
```

## Exemplos

Use para relatório lento, busca volumosa, tela pesada ou job acumulado.

## Checklist

- [ ] Baseline foi solicitado ou coletado.
- [ ] Gargalos foram priorizados.
- [ ] Validação foi definida.

## Conclusão

Este prompt mantém otimização orientada por medição.
