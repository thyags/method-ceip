# Prompt - Plano de Refatoração

## Objetivo

Planejar refatoração incremental preservando comportamento.

## Contexto

Use em legado, duplicação, acoplamento, baixa testabilidade e modernização.

## Diretrizes

- Caracterizar comportamento.
- Separar mudança funcional de estrutural.
- Validar regressão.

## Prompt

```text
Use o CloudSix Engineering Framework.

Objetivo: planejar refatoração segura.

Entregue:
- comportamento atual a preservar;
- dívida técnica observada;
- riscos;
- testes de caracterização necessários;
- etapas pequenas de refatoração;
- critérios de parada;
- validações após cada etapa.

Não altere regra de negócio.
Não introduza abstração sem redução real de complexidade.
```

## Exemplos

Use para fat controller, god object, duplicação de regra ou preparação para integração.

## Checklist

- [ ] Comportamento foi caracterizado.
- [ ] Etapas são pequenas.
- [ ] Validação foi planejada.

## Conclusão

Este prompt trata refatoração como redução controlada de risco.
