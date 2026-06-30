# Auditoria do CEIP Installer

## Objetivo

Auditar se o CEIP Installer está coerente com a CEIP atual.

## Achado inicial crítico

O installer v0.1.0 criava um Workspace válido para a versão anterior, mas não refletia o Product Intelligence System nem o Product Experience System. `ceip doctor` aprovava uma instalação sem PIS, PRD, MVP, roadmap, critérios de aceite, PXS, Product Experience Gate ou Visual Quality Score.

## Correções aplicadas

- `package.json` atualizado para `0.3.0`.
- `CLI_VERSION` atualizado para `0.3.0`.
- `WORKSPACE_VERSION` atualizado para `1.2.0`.
- Wizard passou a perguntar se deve criar estrutura de Product Intelligence.
- Wizard passou a perguntar se deve criar estrutura de Product Experience.
- `.ceip/product-intelligence/` passou a ser criada com artefatos mínimos.
- `.ceip/product-experience/` passou a ser criada com artefatos mínimos.
- `project.json` passou a incluir governança e artefatos de Product Intelligence.
- `project.json` passou a incluir governança e artefatos de Product Experience.
- Arquivos `AGENTS.md`, `CODEX.md` etc. passaram a orientar consulta ao PIS.
- Arquivos `AGENTS.md`, `CODEX.md` etc. passaram a orientar consulta ao PXS.
- `CEIP_CORE_REFERENCE.md` passou a mencionar Product Intelligence.
- `CEIP_CORE_REFERENCE.md` passou a mencionar Product Experience.
- `ceip doctor` passou a validar PIS, PXS, `project.json` e `AGENTS.md`.
- Documentação do installer atualizada.

## Validação manual

Foi executada instalação em repositório temporário:

```text
node bin/ceip.js init
node bin/ceip.js doctor
```

Resultado:

```text
Resultado: aprovado
```

## Conclusão

O CEIP Installer está coerente com as funcionalidades atuais do Method CloudSix.
