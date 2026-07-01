# Guia de Instalação Core + Workspace

## Objetivo

Explicar como instalar o CEIP Core e criar o CEIP Workspace em projetos consumidores.

## Opção 1 - Git Submodule

Esta é a opção recomendada.

### Instalação guiada com CEIP Installer

Quando o CEIP Core estiver disponível localmente ou instalado como pacote, use:

```bash
node bin/ceip.js init
```

ou, após instalação global local:

```bash
npm install -g .
ceip init
```

O wizard cria `.ceip/`, configura referências, gera `project.json`, arquivos principais, estruturas opcionais e arquivos de IA conforme as respostas.

A partir do CEIP Installer v0.9.0-rc.1, mantido em v0.9.0-rc.5, o wizard também cria `.ceip/runtime/`, `.ceip/product-intelligence/` e `.ceip/product-experience/` com CloudSix Design Language local quando solicitado e atualiza `project.json` com governança de Runtime, Product Intelligence, Product Experience e CDL.

A partir da v0.9.0-rc.3, use `ceip checkpoint "descrição da tarefa"` antes de commits relevantes para registrar Runtime Pack, review, prompt e implementation log com base nas mudanças reais do Git.

A partir da v0.9.0-rc.4, novos Workspaces também recebem `.ceip/runtime/evolution-protocol.md`, que torna checkpoint, validações, multiagentes, commit e push parte do protocolo operacional do projeto.

A partir da v0.9.0-rc.5, novos Workspaces recebem política `safety`, histórico de Runtime/Prompt e `.ceip/backups/` no `.gitignore`. Para Workspaces existentes, use `ceip upgrade` em vez de rodar `init` como migração.

### Instalação manual

Dentro do projeto consumidor:

```bash
git submodule add https://github.com/thyags/method-ceip.git .cloudsix/method
git commit -m "Add CEIP Core as submodule"
```

Alternativa via SSH:

```bash
git submodule add git@github.com:thyags/method-ceip.git .cloudsix/method
git commit -m "Add CEIP Core as submodule"
```

Depois crie o Workspace:

```bash
mkdir -p .ceip
```

Copie os templates necessários de:

```text
.cloudsix/method/workspace/templates/
```

## Opção 2 - Referência externa

Quando o projeto não puder usar submodule, ele pode referenciar o método por link:

```text
https://github.com/thyags/method-ceip
```

Mesmo nesse caso, o projeto deve criar `.ceip/` para manter contexto local.

## Recomendação

Use submodule sempre que possível. Referência externa é aceitável para leitura e auditoria, mas reduz rastreabilidade da versão do método usada pelo projeto.

## Checklist

- [ ] `.cloudsix/method` existe ou há referência externa documentada.
- [ ] `.ceip/` foi criado.
- [ ] `AGENTS.md` do projeto aponta para Core + Workspace.
- [ ] `.ceip/runtime/evolution-protocol.md` existe e está alinhado com a política do projeto.
- [ ] Workspaces antigos foram migrados com `ceip upgrade --dry-run` e `ceip upgrade`.
- [ ] Templates iniciais foram copiados e preenchidos.
- [ ] `.gitignore` foi revisado para itens sensíveis.

## Conclusão

Instalação correta separa método global de estado local e evita cópia manual do Core.
