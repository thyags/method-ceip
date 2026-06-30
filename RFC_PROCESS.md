# Processo de RFC da CEIP

## Objetivo

Definir como propor, revisar, aprovar, rejeitar ou adiar mudanças relevantes na CloudSix Engineering Intelligence Platform.

## Contexto

RFC é o mecanismo público de governança para mudanças que afetam fluxo, arquitetura, módulos, comandos, políticas, runtime, workspace, versionamento ou adoção da CEIP.

Nem toda alteração precisa de RFC. O objetivo é evitar decisões grandes sem análise, não bloquear melhorias pequenas.

## Quando criar RFC

Crie RFC para:

- Novo módulo Core.
- Novo comando CLI.
- Mudança no fluxo oficial.
- Mudança em Runtime, Context Loader ou Prompt Builder.
- Mudança em Installer ou estrutura `.ceip/`.
- Novo Domain Pack ou Capability Pack oficial.
- Nova policy obrigatória.
- Nova regra de versionamento.
- Alteração de licença, nome, objetivo ou governança.

Não precisa de RFC para:

- Correção de typo.
- Link interno quebrado.
- Exemplo adicional que não muda regra.
- Refinamento editorial de documento existente.
- Checklist complementar sem alterar fluxo oficial.

## Estados

| Estado | Significado |
| --- | --- |
| Proposed | RFC criada e aguardando análise |
| In Review | Em revisão por especialistas |
| Accepted | Aprovada para implementação |
| Rejected | Rejeitada com justificativa |
| Deferred | Adiada por falta de evidência ou prioridade |
| Implemented | Implementada e ligada a release |
| Deprecated | Substituída por decisão posterior |

## Fluxo

1. Criar RFC usando `docs/templates/rfc-template.md`.
2. Salvar em `rfc/proposed/` ou em novo diretório numerado quando houver decisão de manter histórico detalhado.
3. Descrever problema real, alternativas e impactos.
4. Avaliar pelos papéis definidos em `GOVERNANCE.md`.
5. Registrar decisão.
6. Se aprovada, implementar em branch `feature/*` ou `release/*`.
7. Atualizar `CHANGELOG.md`, `ROADMAP.md`, `INDEX.md`, `README.md` e documentos impactados.
8. Marcar RFC como implementada ou mover para status adequado.

## Critérios de aprovação

- Problema é real e relevante.
- Proposta preserva agnosticismo tecnológico.
- Alternativas foram avaliadas.
- Impactos em Core, Workspace, Runtime, Policy Engine, Orchestrator e Validation Suite foram considerados.
- Complexidade adicionada é proporcional ao valor.
- Há plano incremental e reversível.

## Exemplos

- `ceip upgrade`: exige RFC porque altera atualização de Workspaces.
- Novo Domain Pack `workshop`: exige RFC porque cria conhecimento oficial de domínio.
- Ajuste de texto em `README.md`: não exige RFC.
- Mudança de `main/develop/release` para outro modelo de branches: exige RFC.

## Checklist

- [ ] Usei `docs/templates/rfc-template.md`.
- [ ] Expliquei o problema antes da solução.
- [ ] Avaliei alternativa de reutilizar módulo existente.
- [ ] Listei impactos em Core e Workspace.
- [ ] Avaliei se é plugin, Domain Pack ou Capability Pack antes de virar Core.
- [ ] Defini critérios de aceite.
- [ ] Planejei documentação e validação.

## Conclusão

RFC protege a CEIP contra crescimento impulsivo. Mudanças grandes devem ser discutidas com evidência antes de entrar no Core.
