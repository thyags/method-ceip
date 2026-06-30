# Anti-pattern - Magic Number

## Objetivo

Identificar números, limites ou códigos sem significado explícito.

## Contexto

Em software empresarial, números mágicos podem representar regra fiscal, prazo, status, limite comercial ou configuração operacional.

## Diretrizes

- Nomeie valores com semântica de domínio.
- Documente origem quando o valor vier de regra externa.
- Evite transformar regra variável em constante rígida.

## Sintomas

- Condições com números sem explicação.
- Limites repetidos em vários pontos.
- Testes difíceis de entender.
- Mudança de regra exige busca manual.

## Exemplos

- `30` usado como prazo de vencimento sem nome ou configuração.

## Checklist

- [ ] Valor tem nome semântico.
- [ ] Origem da regra foi documentada.
- [ ] Variabilidade foi avaliada.

## Conclusão

Número mágico esconde regra de negócio e deve ser tornado explícito.
