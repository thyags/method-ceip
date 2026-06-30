# Processo de Revisão por Especialistas

## Objetivo

Definir rodadas independentes para revisar a CEIP e entregas de projeto sem pedir que um único agente "melhore tudo".

## Contexto

Revisões especializadas reduzem superficialidade. Cada rodada tem foco limitado, critérios próprios e saída verificável.

## Rodadas

1. Arquitetura.
2. Documentação.
3. Negócio.
4. QA.
5. Code Review.
6. Segurança.
7. Performance.
8. Governança final.

## Fluxo

```mermaid
flowchart LR
    A["Entrega"] --> B["Arquitetura"]
    B --> C["Documentacao"]
    C --> D["Negocio"]
    D --> E["QA"]
    E --> F["Code Review"]
    F --> G["Seguranca"]
    G --> H["Performance"]
    H --> I["Governanca"]
```

## Checklist

- [ ] Cada rodada tem escopo próprio.
- [ ] Achados têm severidade.
- [ ] Correções foram rastreadas.
- [ ] Bloqueios foram resolvidos ou escalados.
- [ ] Resultado final atualiza knowledge ou memory quando houver aprendizado.

## Conclusão

A revisão por especialistas torna a melhoria incremental e auditável.
