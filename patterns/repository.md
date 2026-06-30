# Pattern - Repository

## Objetivo

Isolar acesso a dados ou coleções de entidades quando isso reduz acoplamento e melhora testabilidade.

## Contexto

Repository pode ajudar em domínios ricos ou persistência complexa, mas pode ser excesso em CRUD simples.

## Diretrizes

- Use quando acesso a dados precisa de contrato claro.
- Evite duplicar recursos nativos da stack sem benefício.
- Não esconda consultas críticas a ponto de perder performance.

## Exemplos

- Repositório de pedidos com consultas de domínio reutilizadas por serviços e relatórios.

## Checklist

- [ ] Há problema real de acoplamento ou testabilidade.
- [ ] Contrato do repositório é claro.
- [ ] Performance das consultas foi considerada.

## Conclusão

Repository é útil quando representa fronteira de domínio ou persistência, não como camada obrigatória.
