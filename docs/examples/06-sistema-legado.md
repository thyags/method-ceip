# Exemplo Prático - Sistema Legado

## Objetivo

Demonstrar uso do framework para evoluir sistema legado sem reescrita precipitada.

## Contexto

Um sistema administrativo antigo precisa receber nova integração fiscal. Há pouca documentação, testes escassos e medo de quebrar relatórios existentes.

## Diretrizes

- Inventariar stack e dependências.
- Caracterizar comportamento antes de alterar.
- Fazer integração por fatias.
- Registrar decisões e riscos.

## Exemplo de orquestração

1. Business Analyst mapeia fluxo fiscal atual.
2. Chief Software Architect avalia ponto de integração.
3. Refactoring Specialist propõe proteção com testes de caracterização.
4. API Integration Engineer define contrato fiscal.
5. Database Architect revisa impacto em dados históricos.
6. QA Engineer cria plano com casos reais.
7. DevOps Engineer planeja deploy e rollback.

## Checklist

- [ ] Stack e dependências foram inventariadas.
- [ ] Fluxo atual foi documentado.
- [ ] Testes de caracterização foram definidos.
- [ ] Integração tem contrato e idempotência.
- [ ] Rollback foi planejado.

## Conclusão

Em legado, o primeiro avanço técnico é reduzir incerteza e criar proteção para mudanças futuras.
