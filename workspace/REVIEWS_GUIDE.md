# Guia de Reviews no Workspace

## Objetivo

Definir como registrar revisões específicas do projeto em `.ceip/reviews/`.

## Estrutura

```text
.ceip/reviews/
  README.md
  architecture/
  backend/
  frontend/
  database/
  security/
  performance/
  qa/
  documentation/
```

## Quando registrar review

- Mudança com risco médio, alto ou crítico.
- Alteração de arquitetura, dados, segurança ou performance.
- Revisão de release.
- Auditoria de documentação.
- Resultado de quality gate.

## Conteúdo mínimo

- Escopo.
- Evidências.
- Achados por severidade.
- Bloqueios.
- Recomendações.
- Decisão final.
- Próximas ações.

## Checklist

- [ ] Review tem escopo claro.
- [ ] Achados têm severidade.
- [ ] Bloqueios foram tratados.
- [ ] Evidências foram anexadas ou referenciadas.
- [ ] Resultado alimenta métricas, memória ou tarefas.

## Conclusão

Reviews locais preservam o histórico de qualidade do projeto.
