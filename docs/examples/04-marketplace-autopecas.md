# Exemplo Prático - Marketplace de Autopeças

## Objetivo

Demonstrar uso do framework em marketplace com catálogo, vendedores, pedidos, pagamento e integração logística.

## Contexto

O sistema precisa permitir cadastro de autopeças por vendedores, compra por clientes e atualização de disponibilidade. Há risco de divergência de estoque e problemas de integração.

## Diretrizes

- Definir fonte de verdade de estoque.
- Avaliar pagamento, antifraude, logística e cancelamento.
- Projetar integrações com idempotência e rastreabilidade.

## Exemplo de orquestração

1. Business Analyst mapeia jornada de vendedor e comprador.
2. Product Manager recorta MVP de catálogo e pedido.
3. Chief Software Architect define fronteiras entre catálogo, pedido e pagamento.
4. API Integration Engineer desenha integração logística.
5. Security Engineer avalia pagamento e dados pessoais.
6. Performance Engineer avalia busca e catálogo volumoso.
7. QA Engineer define testes de compra, cancelamento e estoque.

## Checklist

- [ ] Fonte de verdade de estoque foi definida.
- [ ] Contratos de integração foram mapeados.
- [ ] Pagamento e dados pessoais foram revisados.
- [ ] Busca e catálogo têm estratégia de performance.
- [ ] Pedido duplicado foi prevenido.

## Conclusão

Marketplace exige atenção especial a contratos, consistência, segurança e experiência de compra.
