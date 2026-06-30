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

A partir do CEIP Installer v0.2.0, o wizard também cria `.ceip/product-intelligence/` quando solicitado e atualiza `project.json` com governança de Product Intelligence.

### Instalação manual

Dentro do projeto consumidor:

```bash
git submodule add https://github.com/thyags/method-cloudsix.git .cloudsix/method
git commit -m "Add CEIP Core as submodule"
```

Alternativa via SSH:

```bash
git submodule add git@github.com:thyags/method-cloudsix.git .cloudsix/method
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
https://github.com/thyags/method-cloudsix
```

Mesmo nesse caso, o projeto deve criar `.ceip/` para manter contexto local.

## Recomendação

Use submodule sempre que possível. Referência externa é aceitável para leitura e auditoria, mas reduz rastreabilidade da versão do método usada pelo projeto.

## Checklist

- [ ] `.cloudsix/method` existe ou há referência externa documentada.
- [ ] `.ceip/` foi criado.
- [ ] `AGENTS.md` do projeto aponta para Core + Workspace.
- [ ] Templates iniciais foram copiados e preenchidos.
- [ ] `.gitignore` foi revisado para itens sensíveis.

## Conclusão

Instalação correta separa método global de estado local e evita cópia manual do Core.
