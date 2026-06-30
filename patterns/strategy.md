# Pattern - Strategy

## Objetivo

Encapsular variações de algoritmo ou regra que podem ser escolhidas por contexto.

## Contexto

Strategy é útil para regras de preço, frete, imposto, desconto ou validação que variam por cliente, plano ou cenário.

## Diretrizes

- Use quando há variações explícitas e previsíveis.
- Evite strategy para dois `if` simples sem evolução provável.
- Mantenha critérios de escolha claros.

## Exemplos

- Estratégias de cálculo de frete por transportadora.
- Estratégias de desconto por tipo de campanha.

## Checklist

- [ ] Variações foram confirmadas.
- [ ] Critério de seleção está claro.
- [ ] Testes cobrem estratégias principais.

## Conclusão

Strategy reduz condicionais complexas quando variação é parte do domínio.
