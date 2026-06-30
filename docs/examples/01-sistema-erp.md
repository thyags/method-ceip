# Exemplo Prático - Sistema ERP

## Objetivo

Demonstrar uso do framework em uma alteração de ERP envolvendo pedido, estoque, financeiro e relatórios.

## Contexto

Um cliente solicita que pedidos aprovados reservem estoque automaticamente e gerem previsão financeira. A stack ainda não foi identificada e o ERP possui integrações com faturamento e relatórios gerenciais.

## Diretrizes

- Não alterar regra de estoque sem validação de negócio.
- Mapear impactos em financeiro, relatórios e integrações.
- Registrar decisão arquitetural se houver mudança estrutural de fluxo.

## Exemplo de orquestração

1. Business Analyst mapeia processo de pedido, reserva, cancelamento e exceções.
2. Product Manager define MVP: reserva apenas para pedidos aprovados.
3. Chief Software Architect avalia impacto no fluxo atual.
4. Database Architect avalia entidades de estoque e histórico.
5. Backend Engineer propõe regras e validações.
6. QA Engineer define cenários de estoque, cancelamento e concorrência.
7. Code Reviewer Tech Lead revisa riscos.

## Checklist

- [ ] Stack do ERP foi identificada.
- [ ] Regras de reserva foram confirmadas.
- [ ] Relatórios afetados foram mapeados.
- [ ] Concorrência e consistência de estoque foram avaliadas.
- [ ] Testes cobrem aprovação, cancelamento e erro.

## Conclusão

Em ERP, mudança pequena pode atravessar módulos críticos. O framework força análise de domínio antes de implementação.
