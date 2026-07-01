# Changelog

## Objetivo

Registrar mudanças relevantes da CloudSix Engineering Intelligence Platform por versão, com rastreabilidade suficiente para adoção, auditoria e rollback.

## Contexto

A CEIP passou a ser tratada como produto. Toda versão precisa comunicar o que mudou, qual impacto existe para projetos consumidores e quais validações foram executadas antes da publicação.

O formato segue uma variação pragmática de changelog por versão, mantendo linguagem objetiva e foco em adoção operacional.

## Unreleased

### Planejado

- Validação em projeto piloto real.
- Refinamento do Runtime, Doctor e Installer a partir de uso prático.
- Preparação dos critérios finais de promoção para `v1.0.0`.

## v0.9.0-rc.5 - 2026-07-01

### Adicionado

- Comando `ceip upgrade` para migração não destrutiva de Workspaces existentes.
- Camada comum de artefatos seguros para comandos CEIP.
- Histórico timestampado para Runtime Packs em `.ceip/runtime/history/`.
- Histórico timestampado para prompts em `.ceip/output/generated-prompts/history/`.
- Backups automáticos em `.ceip/backups/` antes de sobrescritas com `--force`.
- Metadados `safety` no `.ceip/project.json`.

### Alterado

- CEIP CLI atualizado para `0.9.0-rc.5`.
- CEIP Workspace atualizado para `1.6.0`.
- `ceip checkpoint` e comandos Runtime preservam arquivos atuais quando já existem.
- `--force` passa a ser obrigatório para sobrescrever artefatos atuais gerados pelo CEIP.
- `ceip doctor` passa a validar metadados `safety` e diretórios de histórico.
- `.gitignore` recomendado passa a incluir `.ceip/backups/`.

### Validação esperada

- `ceip upgrade --dry-run` não deve alterar arquivos.
- `ceip upgrade` deve criar apenas arquivos ausentes e fazer merge seguro em `.ceip/project.json` com backup prévio.
- `ceip analyze` e `ceip checkpoint` devem criar histórico timestampado.
- Reexecução de comandos Runtime sem `--force` deve preservar o arquivo atual.
- Execução com `--force` deve criar backup antes de sobrescrever o arquivo atual.

## v0.9.0-rc.4 - 2026-07-01

### Adicionado

- `runtime/evolution-protocol.md` como artefato padrão de novos Workspaces.
- `workspace/templates/runtime-evolution-protocol-template.md` para migração manual de Workspaces existentes.
- Protocolo permanente de evolução nos arquivos de IA gerados pelo Installer.
- Referência a `evolution-protocol.md` e `checkpoint-runtime-pack.md` na ordem obrigatória de consulta.
- `evolutionProtocol` em `project.json` como artefato oficial do Runtime local.

### Alterado

- CEIP CLI atualizado para `0.9.0-rc.4`.
- CEIP Workspace atualizado para `1.5.0`.
- `ceip doctor` passa a validar `.ceip/runtime/evolution-protocol.md` e `runtime.artifacts.evolutionProtocol` em Workspaces atualizados.
- Templates de Workspace passam a orientar multiagentes, checkpoint, validações, commit e push com exceções explícitas.
- `workspace/UPDATE_GUIDE.md` documenta a migração manual de Workspaces antigos para `1.5.0`.

### Validação esperada

- `ceip init` deve criar `.ceip/runtime/evolution-protocol.md`.
- `AGENTS.md` e `CODEX.md` gerados devem referenciar o protocolo de evolução.
- `ceip doctor` deve aprovar Workspaces 1.5.0.
- O protocolo deve ser genérico e aplicável a qualquer projeto consumidor.

## v0.9.0-rc.3 - 2026-07-01

### Adicionado

- Comando `ceip checkpoint` para gerar checkpoint governado do Workspace a partir do estado real do Git.
- Geração automática de `.ceip/runtime/checkpoint-runtime-pack.md`.
- Geração automática de relatório em `.ceip/reviews/<timestamp>-ceip-checkpoint.md`.
- Geração automática de prompt em `.ceip/output/generated-prompts/checkpoint-prompt.md`.
- Atualização automática de `.ceip/logs/implementation-log.md` com evidências do checkpoint.
- Detecção de artefatos possivelmente atrasados em `TECHNICAL_DEBT`, `KNOWN_ISSUES`, `QUALITY_DASHBOARD` e runtime packs.

### Alterado

- CLI atualizado para `0.9.0-rc.3`.
- Documentação do CLI atualizada com o fluxo de checkpoint antes de commits relevantes.
- README reposicionado com branding explícito da CEIP como produto e `method-ceip` como repositório/pacote.
- Adicionado bloco "Comece em 3 minutos" com validação do CLI e instalação em projeto consumidor.
- Aviso de licença e uso autorizado tornado visível no início do README.
- Descrição do pacote ajustada para refletir Core, CLI, Runtime e Installer.

### Validação esperada

- `ceip checkpoint --dry-run` deve imprimir checkpoint sem alterar arquivos.
- `ceip checkpoint "tarefa"` deve escrever Runtime Pack, review, prompt e entrada de log quando `.ceip/` existir.
- O comando deve apontar documentos atrasados sem inventar status sem evidência.

## v0.9.0-rc.2 - 2026-06-30

### Adicionado

- Disciplina de produto para evolução da CEIP.
- `VERSIONING.md` com regras de versionamento semântico, tags e compatibilidade Core + Workspace.
- `RELEASE_PROCESS.md` com fluxo de branches, gates, release candidates e promoção para versão estável.
- `CONTRIBUTING.md` com regras para contribuição, escopo permitido e critérios mínimos de revisão.
- `GOVERNANCE.md` com modelo de decisão, papéis, entrada de módulos no Core e disciplina contra complexidade desnecessária.
- `RFC_PROCESS.md` com processo público de proposta, revisão e aprovação de mudanças relevantes.

### Alterado

- `ROADMAP.md` atualizado para refletir `v0.9.0-rc.2` como Release Candidate de governança de produto.
- `INDEX.md` atualizado com documentos de produto, release, governança e contribuição.
- `README.md` atualizado para indicar que a CEIP deve evoluir como produto versionado.
- `NEXT_STEPS.md` atualizado para o ciclo RC-2, piloto e promoção para `v1.0.0`.
- CLI atualizado para reportar `0.9.0-rc.2`.

### Validação esperada

- Documentos-raiz devem continuar em português do Brasil.
- Links internos devem permanecer válidos.
- `ceip version` deve reportar `CEIP CLI 0.9.0-rc.2`.
- `npm pack --dry-run` deve incluir os novos documentos de governança.

## v0.9.0-rc.1 - 2026-06-30

### Adicionado

- CEIP Runtime.
- Context Loader.
- Task Router.
- Prompt Builder.
- Runtime API.
- Runtime policies.
- Comandos CLI `analyze`, `plan`, `architect`, `review`, `release` e `learn`.
- Estrutura local `.ceip/runtime/` criada pelo Installer.
- Validação `runtime-validation.md`.
- Relatórios de Release Candidate e dívida técnica do método.

### Alterado

- Installer atualizado para criar Runtime, Product Intelligence, Product Experience e CloudSix Design Language no Workspace.
- `README.md`, `INDEX.md`, `ROADMAP.md`, `AGENTS.md`, `CODEX.md`, `CONSTITUTION.md`, `POLICY_ENGINE.md` e `ORCHESTRATOR.md` conectados ao Runtime.
- Workspace atualizado para versão `1.4.0`.

## Diretrizes

- Toda versão publicada deve ter entrada neste arquivo.
- Mudança sem impacto operacional pode entrar em `Unreleased` até a próxima versão.
- Mudança que altera fluxo, installer, runtime, policy, workspace, gates ou governança deve ter versão explícita.
- Versões RC devem declarar o foco de validação.
- Versões estáveis devem declarar critérios de aprovação e validações executadas.

## Checklist

- [ ] A versão tem data.
- [ ] Mudanças foram separadas entre adicionado, alterado, corrigido, removido ou validação.
- [ ] Impactos para projetos consumidores foram descritos quando aplicável.
- [ ] `VERSIONING.md` foi respeitado.
- [ ] `RELEASE_PROCESS.md` foi seguido.

## Conclusão

O changelog protege a CEIP contra evolução invisível. Cada mudança relevante deve poder ser compreendida por quem instala, audita ou atualiza a plataforma.
