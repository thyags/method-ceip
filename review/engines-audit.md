# Auditoria dos Engines

## Objetivo

Verificar se engines possuem entradas, processamento, saídas, policies, gates, agentes e exemplos.

## Escopo

- `engines/`
- `product-intelligence/engines/`

## Resultado inicial

| Grupo | Arquivos | Violações |
| --- | --- | --- |
| Engines gerais | 16 | 1 |
| Engines do PIS | 16 | 0 |

## Achado corrigido

- `engines/score-engine.md` continha `Exemplo prático`, mas o contrato exigia `Exemplos`.

## Correções aplicadas

- `Score Engine` padronizado para seção `Exemplos`.

## Validação final

```text
engines: files=16 violations=0
product-intelligence/engines: files=16 violations=0
```

## Conclusão

Engines estão padronizados e acionáveis.
