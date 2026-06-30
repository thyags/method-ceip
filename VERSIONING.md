# Versionamento da CEIP

## Objetivo

Definir como a CloudSix Engineering Intelligence Platform evolui por versões, tags e compatibilidade entre CEIP Core, CLI e Workspaces `.ceip/`.

## Contexto

A CEIP agora é um produto versionado. Isso exige previsibilidade para adoção em projetos reais, histórico de mudanças, critérios de compatibilidade e regras claras para quando alterar versão.

## Esquema de versão

A CEIP usa versionamento semântico:

```text
MAJOR.MINOR.PATCH
```

Release candidates usam:

```text
MAJOR.MINOR.PATCH-rc.N
```

Exemplos:

- `0.9.0-rc.2`: release candidate antes da primeira versão estável.
- `1.0.0`: primeira versão estável aprovada para adoção oficial.
- `1.1.0`: nova funcionalidade compatível.
- `1.1.1`: correção compatível.
- `2.0.0`: mudança estrutural com possível quebra de compatibilidade.

## Regras

- `MAJOR`: muda quando houver quebra de contrato, reorganização estrutural incompatível ou alteração de filosofia operacional.
- `MINOR`: muda quando houver novo módulo, comando, gate, policy, engine, profile, pack ou capacidade compatível.
- `PATCH`: muda quando houver correção, melhoria editorial, refinamento de checklist ou ajuste sem impacto de contrato.
- `rc.N`: muda quando houver candidata de release que ainda precisa de validação prática antes de versão estável.

## CEIP Core, CLI e Workspace

A CEIP possui versões relacionadas, mas não idênticas:

| Item | Onde aparece | Regra |
| --- | --- | --- |
| CEIP Core | `package.json`, `src/core/templates.js`, tags Git | Versão do produto e CLI |
| CEIP CLI | `ceip version` | Deve acompanhar o CEIP Core |
| CEIP Workspace | `WORKSPACE_VERSION` e `.ceip/project.json` | Muda quando a estrutura local `.ceip/` muda |

Alterar documentos do Core não exige mudança de `WORKSPACE_VERSION`. Alterar arquivos gerados pelo Installer, estrutura `.ceip/` ou contrato de `project.json` exige avaliar mudança de `WORKSPACE_VERSION`.

## Tags

Tags oficiais devem seguir:

```bash
git tag -a v0.9.0-rc.2 -m "CEIP v0.9.0-rc.2"
git push origin v0.9.0-rc.2
```

Não criar tag `v1.0.0` antes dos critérios de produção estarem cumpridos.

## Critérios para v1.0.0

A CEIP só deve ser promovida para `v1.0.0` quando:

- Installer estiver validado em projeto real.
- Runtime, Context Loader e Prompt Builder tiverem evidências de uso prático.
- Doctor validar Workspace completo sem ajuste manual indevido.
- Pelo menos um projeto piloto estiver documentado.
- `CHANGELOG.md`, `RELEASE_PROCESS.md`, `GOVERNANCE.md` e `RFC_PROCESS.md` estiverem atualizados.
- Não houver links internos quebrados nos documentos principais.
- Não houver recomendação de stack fixa no Core.
- A decisão de release estiver registrada em `review/` ou `audits/`.

## Exemplos

- Corrigir um link em `INDEX.md`: `PATCH`.
- Adicionar `ceip upgrade`: `MINOR`.
- Alterar a estrutura obrigatória de `.ceip/project.json`: avaliar `MINOR` do Core e nova `WORKSPACE_VERSION`.
- Renomear a plataforma ou mudar o fluxo oficial de execução: avaliar `MAJOR`.
- Publicar uma candidata antes do piloto: `rc.N`.

## Checklist

- [ ] A mudança exige versão?
- [ ] `package.json` foi atualizado quando o Core mudou?
- [ ] `CLI_VERSION` foi atualizado quando o CLI mudou?
- [ ] `WORKSPACE_VERSION` foi avaliado quando o Installer mudou?
- [ ] `CHANGELOG.md` foi atualizado?
- [ ] Tag Git será criada apenas para release fechada?

## Conclusão

Versionamento é parte da governança da CEIP. Ele evita que projetos consumidores recebam mudanças estruturais sem rastreabilidade e cria base para releases confiáveis.
