# Guia de Atualização Core + Workspace

## Objetivo

Explicar como atualizar o CEIP Core e manter o CEIP Workspace evoluindo junto com o projeto.

## Atualizar CEIP Core via submodule

No projeto consumidor:

```bash
cd .cloudsix/method
git pull origin main
cd ../..
git add .cloudsix/method
git commit -m "Update CEIP Core"
```

## Atualizar Workspace

O `.ceip/` deve evoluir junto com o projeto e receber atualizações de:

- Contexto.
- Decisões.
- Métricas.
- Reviews.
- Tarefas.
- Aprendizados.
- Dívida técnica.
- Artefatos.

## Atualizar Workspace com `ceip upgrade`

A partir do CEIP CLI `0.9.0-rc.5`, use `ceip upgrade` para migrar Workspaces existentes sem sobrescrever documentos já preenchidos.

Fluxo recomendado:

```bash
node .cloudsix/method/bin/ceip.js upgrade --dry-run
node .cloudsix/method/bin/ceip.js upgrade
node .cloudsix/method/bin/ceip.js doctor
```

O comando:

- cria apenas arquivos ausentes;
- preserva documentos existentes;
- atualiza `.ceip/project.json` por merge controlado;
- cria backup em `.ceip/backups/` antes de alterar metadados;
- registra relatório em `.ceip/upgrades/`;
- adiciona `.ceip/backups/` ao `.gitignore`.

## Atualizar Workspace para 1.5.0

A versão `1.5.0` adiciona o protocolo permanente de evolução do projeto.

Em Workspaces criados antes dessa versão, confira:

- `.ceip/runtime/evolution-protocol.md` existe.
- Se o arquivo não existir, use `workspace/templates/runtime-evolution-protocol-template.md` como base e adapte apenas políticas locais do projeto.
- `.ceip/project.json` informa `"ceipWorkspaceVersion": "1.5.0"`.
- `.ceip/project.json` informa `runtime.artifacts.evolutionProtocol` com o valor `.ceip/runtime/evolution-protocol.md`.
- `AGENTS.md` e arquivos de IA aplicáveis orientam checkpoint, validações, multiagentes, commit e push conforme a política do projeto.

Depois de atualizar, execute:

```bash
node .cloudsix/method/bin/ceip.js doctor
```

## Atualizar Workspace para 1.6.0

A versão `1.6.0` adiciona política de preservação, backups e histórico timestampado para artefatos gerados.

Em Workspaces criados antes dessa versão, `ceip upgrade` deve garantir:

- `.ceip/project.json` informa `"ceipWorkspaceVersion": "1.6.0"`.
- `.ceip/project.json` possui bloco `safety`.
- `.ceip/runtime/history/README.md` existe.
- `.ceip/output/generated-prompts/history/README.md` existe.
- `.gitignore` possui `.ceip/backups/`.
- `.ceip/upgrades/` registra relatório da migração.

Não atualize manualmente arquivos preenchidos pelo projeto sem backup e revisão.

## Verificar instalação depois de atualizar

Execute:

```bash
ceip doctor
```

ou:

```bash
node bin/ceip.js doctor
```

## Quando atualizar

- Após decisão arquitetural.
- Após mudança relevante de escopo.
- Após review.
- Após incidente.
- Após release.
- Após descoberta de dívida técnica.
- Após aprendizado importante.

## Checklist

- [ ] Submodule foi atualizado quando necessário.
- [ ] Mudanças no Core foram revisadas.
- [ ] `ceip upgrade --dry-run` foi executado antes da migração.
- [ ] `ceip upgrade` foi executado quando o Workspace estava desatualizado.
- [ ] `.ceip/PROJECT.md` continua correto.
- [ ] `.ceip/STACK.md` reflete a stack atual.
- [ ] `.ceip/runtime/evolution-protocol.md` existe em Workspaces 1.5.0.
- [ ] `.ceip/project.json` referencia `runtime.artifacts.evolutionProtocol`.
- [ ] `.ceip/project.json` possui bloco `safety` em Workspaces 1.6.0.
- [ ] Artefatos gerados possuem histórico timestampado.
- [ ] Métricas e dashboard foram atualizados.
- [ ] Memória recebeu aprendizados relevantes.

## Conclusão

Core e Workspace evoluem em ritmos diferentes: o Core como método oficial, o Workspace como estado vivo do projeto.
