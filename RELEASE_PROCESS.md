# Processo de Release da CEIP

## Objetivo

Definir como preparar, validar, publicar e manter releases da CloudSix Engineering Intelligence Platform.

## Contexto

A CEIP passou de pesquisa e desenvolvimento para produto. Releases precisam ser previsíveis, auditáveis e reversíveis, sem transformar o Core em uma enciclopédia instável.

## Modelo de branches

| Branch | Função |
| --- | --- |
| `main` | Linha publicada e pronta para consumo. Tags oficiais partem daqui. |
| `develop` | Integração de mudanças aprovadas para a próxima versão. |
| `feature/*` | Trabalho isolado em melhoria específica. |
| `release/*` | Estabilização de uma versão candidata. |
| `hotfix/*` | Correção urgente a partir de `main`. |

Enquanto a CEIP estiver em `0.x`, `main` pode conter release candidates. A partir de `v1.0.0`, `main` deve representar apenas versões estáveis ou release candidates formalmente fechadas.

## Fluxo de release

1. Definir escopo da versão em `ROADMAP.md`.
2. Registrar mudanças em `CHANGELOG.md`.
3. Confirmar compatibilidade em `VERSIONING.md`.
4. Validar se a mudança exige RFC em `RFC_PROCESS.md`.
5. Atualizar documentos de navegação, especialmente `README.md` e `INDEX.md`.
6. Executar validações locais.
7. Criar commit de release.
8. Criar tag anotada.
9. Publicar tag no GitHub.
10. Criar GitHub Release com resumo do `CHANGELOG.md`.

## Validações mínimas

```bash
node bin/ceip.js version
node --check bin/ceip.js
node --check src/cli/doctor.js
node --check src/core/templates.js
node --check src/core/writer.js
npm install --dry-run
npm pack --dry-run
git diff --check
```

Para mudanças em Runtime, CLI ou Installer, também executar comandos representativos:

```bash
node bin/ceip.js doctor
node bin/ceip.js analyze "validar release"
```

Quando o repositório não estiver dentro de um Workspace `.ceip/`, `doctor` pode indicar ausência de workspace local. Isso não bloqueia release do Core se o Installer tiver sido validado em diretório de teste.

## Gates de release

- **Governance Gate**: versão, changelog, roadmap e processo de release atualizados.
- **Documentation Gate**: documentos têm H1, links internos válidos e linguagem em português do Brasil.
- **Runtime Gate**: comandos runtime continuam gerando Runtime Packs quando aplicável.
- **Installer Gate**: `ceip init` cria Workspace coerente com `WORKSPACE_VERSION`.
- **Policy Gate**: novas capacidades respeitam Constituição e Policy Engine.
- **No Encyclopedia Gate**: novo módulo só entra no Core se resolver problema real e não duplicar capacidade existente.

## Critério para publicar RC

Uma versão RC pode ser publicada quando:

- O escopo está fechado.
- A documentação de navegação foi atualizada.
- O changelog descreve mudanças e validações esperadas.
- O pacote consegue ser gerado com `npm pack --dry-run`.
- A branch está limpa antes da tag.

## Critério para publicar v1.0.0

Além dos critérios de RC:

- Um projeto piloto real foi executado e documentado.
- Lacunas críticas do piloto foram corrigidas ou registradas.
- Installer, Runtime e Doctor foram validados no fluxo Core + Workspace.
- O Review Board aprovou a promoção.
- Não há dívida técnica bloqueante em `review/technical-debt-method.md`.

## Exemplos

- `v0.9.0-rc.2`: release candidate de governança de produto e release readiness.
- `v0.9.0-rc.3`: release candidate de piloto real e ajustes de onboarding.
- `v1.0.0`: baseline estável para adoção oficial.

## Checklist

- [ ] Escopo da release está claro.
- [ ] `CHANGELOG.md` foi atualizado.
- [ ] `VERSIONING.md` foi respeitado.
- [ ] `ROADMAP.md` reflete o status atual.
- [ ] `README.md` e `INDEX.md` apontam para documentos novos.
- [ ] Validações locais foram executadas.
- [ ] Tag anotada será criada a partir de `main`.
- [ ] GitHub Release será criado com notas objetivas.

## Conclusão

Release da CEIP é decisão de produto e governança, não apenas comando Git. Cada versão deve aumentar confiança, adoção e clareza operacional.
