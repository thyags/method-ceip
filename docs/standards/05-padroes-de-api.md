# 05 - Padrões de API

## Objetivo

Definir critérios para APIs e integrações com contratos claros, erros previsíveis, segurança e evolução controlada.

## Contexto

APIs conectam sistemas, canais e automações. Quebras de contrato podem afetar clientes, parceiros, rotinas internas, webhooks e relatórios.

## Diretrizes

- Identificar estilo existente: REST, GraphQL, RPC, eventos, arquivos, webhooks ou outro.
- Documentar contrato de entrada, saída, erro, autenticação e versionamento quando aplicável.
- Validar autorização no backend ou camada confiável equivalente.
- Definir idempotência em operações que podem ser repetidas.
- Usar códigos, mensagens e payloads de erro consistentes com o projeto.
- Registrar limites, paginação, ordenação, filtros e compatibilidade.

## Exemplos

- Webhook de pedido deve aceitar reentrega sem criar pedido duplicado.
- Endpoint de listagem com alto volume deve ter paginação ou limite justificado.
- Erro de validação deve apontar campo e causa sem expor detalhe interno sensível.

## Checklist

- [ ] Contrato foi definido.
- [ ] Autenticação e autorização foram avaliadas.
- [ ] Erros são previsíveis.
- [ ] Idempotência foi considerada.
- [ ] Compatibilidade e versionamento foram avaliados.
- [ ] Testes de contrato foram planejados.

## Conclusão

API de qualidade é contrato operacional. Ela deve ser segura, previsível e evolutiva.
