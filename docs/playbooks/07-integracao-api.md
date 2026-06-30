# 07 - Playbook de Integração de API

## Objetivo

Orientar criação ou revisão de integrações com APIs, webhooks, eventos, arquivos ou conectores externos.

## Contexto

Integrações são pontos de falha frequentes por instabilidade externa, contrato incompleto, autenticação, duplicidade e diferenças semânticas entre sistemas.

## Diretrizes

- Validar contrato e ambiente de teste.
- Mapear autenticação, limites, erros e versionamento.
- Definir idempotência e correlação.
- Planejar retry, timeout, fallback e monitoramento.
- Validar dados com exemplos reais.

## Fluxo

1. Levantar objetivo e sistemas envolvidos.
2. Ler documentação e contratos.
3. Mapear dados e semântica.
4. Definir fluxo nominal e de falhas.
5. Especificar testes de contrato.
6. Planejar observabilidade e suporte.

## Exemplos

- Webhook de status de pedido deve aceitar eventos fora de ordem quando a API externa permitir.
- Importação de catálogo deve registrar linhas rejeitadas e motivo.

## Checklist

- [ ] Contrato e ambiente foram validados.
- [ ] Autenticação foi definida.
- [ ] Mapeamento de dados foi revisado.
- [ ] Idempotência existe quando necessária.
- [ ] Falhas e retentativas foram planejadas.
- [ ] Observabilidade foi definida.

## Conclusão

Integração confiável é desenhada para falhar de forma controlada e recuperável.
