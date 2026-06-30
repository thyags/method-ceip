# Anti-pattern - Fat Controller

## Objetivo

Identificar controllers, handlers ou endpoints com regra de negócio excessiva.

## Contexto

O nome varia por stack, mas o problema é o mesmo: camada de entrada acumulando orquestração, validação profunda e regra de domínio.

## Diretrizes

- Preserve validação de entrada onde fizer sentido.
- Extraia regra de domínio para componente adequado da arquitetura local.
- Cubra comportamento com testes antes de mover regra crítica.

## Sintomas

- Endpoint difícil de testar.
- Regras duplicadas em múltiplas rotas.
- Tratamento de erro inconsistente.
- Mistura de autenticação, domínio, persistência e integração.

## Exemplos

- Um handler que recebe pedido, calcula imposto, atualiza financeiro e chama logística diretamente.

## Checklist

- [ ] Responsabilidades do endpoint foram separadas.
- [ ] Regra de negócio foi preservada.
- [ ] Testes protegem comportamento.

## Conclusão

Fat controller aumenta custo de mudança e deve ser tratado com refatoração incremental.
