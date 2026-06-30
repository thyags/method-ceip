# Playbook: CEIP Installer

## Objetivo

Explicar como usar o CEIP Installer para configurar o Method CloudSix em projetos consumidores.

## Contexto

O CEIP Installer é uma CLI leve em Node.js que transforma a integração manual da CEIP em um wizard interativo. Ele cria o Workspace `.ceip/`, configura referência ao CEIP Core, gera `project.json`, arquivos principais, estruturas opcionais, arquivos de IA e entradas recomendadas no `.gitignore`.

## Instalação local

No repositório `method-cloudsix`:

```bash
npm install
node bin/ceip.js version
```

Para instalar globalmente a partir do checkout local:

```bash
npm install -g .
ceip version
```

## Comandos

```bash
ceip init
ceip doctor
ceip version
```

Uso direto sem instalação global:

```bash
node bin/ceip.js init
node bin/ceip.js doctor
node bin/ceip.js version
```

## `ceip init`

Inicia wizard interativo e pergunta:

- Nome, descrição e responsável do projeto.
- Idioma.
- Tipo de projeto.
- Ferramentas de IA.
- Forma de integração do CEIP Core.
- Se deve criar `.ceip/`, `AGENTS.md`, arquivos de IA, ADR, RFC, memória, reviews, métricas e `.gitignore`.

## Modos de integração

### Git submodule

Executa, quando possível:

```bash
git submodule add https://github.com/thyags/method-cloudsix.git .cloudsix/method
```

Se Git não estiver disponível, se o diretório não for repositório Git ou se o submodule já existir, o instalador exibe aviso e instruções manuais.

### Referência externa

Cria:

```text
.ceip/CEIP_CORE_REFERENCE.md
```

Com link para o repositório oficial.

### Cópia local mínima

Cria referência mínima em:

```text
.ceip/core-minimal/README.md
```

Não copia o CEIP Core inteiro.

## `ceip doctor`

Valida:

- `.ceip/`.
- `.ceip/project.json`.
- `AGENTS.md`.
- `.cloudsix/method` ou referência externa.
- Arquivos principais do Workspace.
- Entradas temporárias no `.gitignore`.
- Possíveis nomes de arquivos sensíveis dentro de `.ceip/`.

## Segurança

O instalador:

- Não solicita senhas.
- Não solicita tokens.
- Não registra chaves.
- Não copia arquivos sensíveis.
- Não sobrescreve arquivos existentes sem confirmação nos arquivos principais.
- Exibe aviso para revisar `.ceip/` antes de compartilhar o repositório.

## Validação manual esperada

```bash
npm install
node bin/ceip.js version
node bin/ceip.js doctor
```

Para validar `init`, execute em um repositório de teste:

```bash
node /caminho/para/method-cloudsix/bin/ceip.js init
node /caminho/para/method-cloudsix/bin/ceip.js doctor
```

## Checklist

- [ ] `ceip version` exibe versão da CLI e Workspace.
- [ ] `ceip init` cria `.ceip/`.
- [ ] `project.json` foi gerado.
- [ ] Arquivos principais têm conteúdo útil.
- [ ] `AGENTS.md` e arquivos de IA foram criados quando solicitados.
- [ ] `.gitignore` foi atualizado quando solicitado.
- [ ] `ceip doctor` executa sem erro.

## Conclusão

O CEIP Installer é o primeiro passo para transformar a CEIP em uma experiência operacional simples de adoção em projetos reais.
