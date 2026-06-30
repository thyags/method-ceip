# 01 - Workflow de Feature Development

## Objetivo

Definir fluxo para desenvolver novas funcionalidades com análise, implementação, revisão, testes e documentação.

## Contexto

Features empresariais podem afetar usuários, permissões, dados, integrações e operação. O fluxo evita implementação antes de escopo e validação.

## Diretrizes

- Começar por requisito e valor.
- Começar por Product Intelligence quando a feature alterar produto, módulo, API ou integração.
- Aplicar Product Experience quando a feature incluir tela, dashboard, formulário, tabela ou experiência responsiva.
- Identificar stack e padrões locais antes de implementar.
- Fatiar entrega em incremento pequeno.
- Validar com checklists antes de release.

## Fluxo

```mermaid
flowchart LR
    A["Requisito"] --> B["Product Intelligence"]
    B --> C["Business Analyst"]
    C --> D["Product Manager"]
    D --> E["Policy Engine"]
    E --> F{"Interface impactada?"}
    F -->|Sim| G["Product Experience"]
    F -->|Nao| H["Arquitetura tecnica"]
    G --> H
    H --> I["Implementacao"]
    I --> J["QA"]
    J --> K["Code Review"]
    K --> L["Documentacao"]
    L --> M["Release"]
```

## Exemplos

Feature SaaS com nova tela deve passar por Product Intelligence, Product Experience, UX, UI, backend, segurança, QA e review antes de release.

## Checklist

- [ ] Requisito e critérios de aceite existem.
- [ ] Product Intelligence foi aplicado quando obrigatório.
- [ ] Product Experience foi aplicado quando havia interface relevante.
- [ ] Stack foi identificada.
- [ ] Impactos foram avaliados.
- [ ] Testes foram executados.
- [ ] Documentação foi atualizada.
- [ ] Release foi planejada.
- [ ] Product Experience Gate e Visual Quality Score foram considerados quando aplicável.

## Conclusão

Feature pronta é aquela que entrega valor sem criar risco invisível.
