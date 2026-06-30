# Guia de Artefatos do Workspace

## Objetivo

Definir como armazenar artefatos gerados durante análise, planejamento, revisão e entrega.

## Estrutura

```text
.ceip/artifacts/
  README.md
  diagrams/
  reports/
  specs/
  screenshots/
  exports/
```

## Regras

- Salvar somente artefatos úteis para auditoria ou manutenção.
- Evitar dados sensíveis.
- Revisar screenshots antes de versionar.
- Colocar exportações temporárias em local ignorável quando contiverem dados reais.
- Relacionar artefatos com tarefa, review, ADR ou RFC.

## Exemplos

- Diagrama de arquitetura.
- Relatório de auditoria.
- Especificação técnica.
- Screenshot de evidência visual sem dado sensível.
- Exportação anonimizada para diagnóstico.

## Checklist

- [ ] Artefato tem finalidade clara.
- [ ] Não contém segredo.
- [ ] Não expõe dado pessoal desnecessário.
- [ ] Está ligado a uma tarefa ou decisão.
- [ ] Pode ser versionado com segurança.

## Conclusão

Artefatos devem facilitar auditoria sem aumentar risco de exposição.
