# Template de Revisão Arquitetural

## Objetivo

Avaliar uma solução ou sistema contra critérios de arquitetura, segurança, performance, dados, operação e evolução.

## Contexto

Use antes de decisões estruturais, modernizações, integrações críticas, novas plataformas ou mudanças com alto impacto.

## Template

```markdown
# Revisão Arquitetural - Título

## Objetivo

O que será avaliado e por quê.

## Contexto

Sistema, stack identificada, arquitetura atual, restrições e documentos relacionados.

## Diretrizes

Princípios e padrões aplicáveis.

## Visão atual

Componentes, contratos, dados, integrações e operação.

## Pontos fortes

- 

## Riscos e lacunas

| Área | Risco | Impacto | Recomendação |
| --- | --- | --- | --- |
|  |  |  |  |

## Recomendações

Priorizadas por impacto e esforço.

## ADRs necessários

- 

## Checklist

- [ ] Stack e arquitetura foram identificadas.
- [ ] Dados e contratos foram avaliados.
- [ ] Segurança e performance foram consideradas.
- [ ] Operação e rollback foram avaliados.
- [ ] Recomendações são priorizadas.

## Conclusão

Parecer arquitetural e próximos passos.
```

## Exemplos

Use para avaliar SaaS em expansão, ERP legado, CRM com integrações, marketplace ou sistema com IA.

## Checklist

- [ ] Parecer é baseado em evidência.
- [ ] Recomendações são acionáveis.
- [ ] Decisões futuras foram direcionadas para ADR.

## Conclusão

Revisão arquitetural cria clareza antes de mudanças que afetam muitos componentes.
