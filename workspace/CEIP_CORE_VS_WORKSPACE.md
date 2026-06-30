# CEIP Core vs CEIP Workspace

## Objetivo

Explicar de forma direta o que pertence ao CEIP Core e o que pertence ao CEIP Workspace.

## Comparativo

| Critério | CEIP Core | CEIP Workspace |
| --- | --- | --- |
| Local | Repositório `method-ceip` | Pasta `.ceip/` no projeto consumidor |
| Natureza | Método global | Estado local do projeto |
| Versionamento | Produto oficial CloudSix | Versionado junto do projeto, quando seguro |
| Conteúdo | Constituição, policies, agents, engines, gates e padrões | Contexto, memória, ADRs, RFCs, tarefas, métricas e reviews |
| Atualização | Controlada no repositório oficial | Evolui junto com o projeto |
| Sensibilidade | Não deve conter dados de cliente | Pode conter contexto do projeto, respeitando privacidade |
| Reutilização | Reutilizável em vários projetos | Específico de um projeto |

## O que fica no Core

- Regras de governança.
- Prompts globais.
- Templates reutilizáveis.
- Quality gates.
- Engines e brains.
- Padrões e anti-patterns gerais.
- Validation suite global.

## O que fica no Workspace

- `PROJECT.md`, `STACK.md` e `CONTEXT.md`.
- ADRs e RFCs do projeto.
- Memória do projeto.
- Dívida técnica.
- Métricas e dashboards.
- Reviews e logs.
- Artefatos produzidos durante análise.

## O que nunca deve acontecer

- Copiar todo o Core para `.ceip/`.
- Registrar segredo no Core.
- Registrar segredo versionado no Workspace.
- Colocar regra global apenas em um Workspace.
- Tratar `.ceip/` como substituto de `AGENTS.md`.

## Checklist

- [ ] O projeto consegue atualizar o Core sem apagar `.ceip/`.
- [ ] `.ceip/` não duplica o método.
- [ ] O Core não contém dados do cliente.
- [ ] O Workspace contém contexto suficiente para orientar IA e pessoas.

## Conclusão

A separação Core vs Workspace protege o método global e aumenta a qualidade da execução local.
