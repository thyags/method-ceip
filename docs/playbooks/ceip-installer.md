# Playbook: CEIP Installer

## Objetivo

Explicar como usar o CEIP Installer para configurar o Method CloudSix em projetos consumidores.

## Contexto

O CEIP Installer é uma CLI leve em Node.js que transforma a integração manual da CEIP em um wizard interativo e em comandos operacionais de Runtime. Ele cria o Workspace `.ceip/`, configura referência ao CEIP Core, gera `project.json`, arquivos principais, estrutura local de Runtime, estruturas locais de Product Intelligence, Product Experience e CloudSix Design Language, estruturas opcionais, arquivos de IA e entradas recomendadas no `.gitignore`.

## Instalação local

No repositório `method-ceip`:

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
ceip analyze
ceip plan
ceip architect
ceip review
ceip release
ceip learn
ceip version
```

Uso direto sem instalação global:

```bash
node bin/ceip.js init
node bin/ceip.js doctor
node bin/ceip.js analyze "descreva a tarefa"
node bin/ceip.js plan "descreva a feature"
node bin/ceip.js version
```

## `ceip init`

Inicia wizard interativo e pergunta:

- Nome, descrição e responsável do projeto.
- Idioma.
- Tipo de projeto.
- Ferramentas de IA.
- Forma de integração do CEIP Core.
- Se deve criar `.ceip/`, Runtime, Product Intelligence, Product Experience com CDL local, `AGENTS.md`, arquivos de IA, ADR, RFC, memória, reviews, métricas e `.gitignore`.

## Modos de integração

### Git submodule

Executa, quando possível:

```bash
git submodule add https://github.com/thyags/method-ceip.git .cloudsix/method
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
- Estrutura local de Runtime e artefatos mínimos.
- Estrutura local de Product Intelligence e artefatos mínimos.
- Estrutura local de Product Experience e artefatos mínimos.
- Estrutura local da CloudSix Design Language e CDL Compliance.
- `project.json` com governança de Product Intelligence.
- `project.json` com governança de Runtime.
- `project.json` com governança de Product Experience.
- `project.json` com governança de CloudSix Design Language.
- `AGENTS.md` orientando consulta ao Product Intelligence System.
- `AGENTS.md` orientando consulta ao CEIP Runtime.
- `AGENTS.md` orientando consulta ao Product Experience System.
- `AGENTS.md` orientando consulta à CloudSix Design Language.
- Entradas temporárias no `.gitignore`.
- Possíveis nomes de arquivos sensíveis dentro de `.ceip/`.

## Comandos de Runtime

Os comandos abaixo não chamam uma IA automaticamente. Eles montam Runtime Packs e prompts contextuais em `.ceip/runtime/` e `.ceip/output/generated-prompts/`.

| Comando | Uso |
| --- | --- |
| `ceip analyze` | Carregar contexto e identificar lacunas |
| `ceip plan` | Preparar Product Intelligence, PRD, MVP e backlog |
| `ceip architect` | Preparar decisão arquitetural e ADR |
| `ceip review` | Preparar revisão especializada |
| `ceip release` | Preparar readiness de release |
| `ceip learn` | Preparar atualização de memória, patterns e knowledge |

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
node /caminho/para/method-ceip/bin/ceip.js init
node /caminho/para/method-ceip/bin/ceip.js doctor
```

## Checklist

- [ ] `ceip version` exibe versão da CLI e Workspace.
- [ ] `ceip init` cria `.ceip/`.
- [ ] `project.json` foi gerado.
- [ ] `project.json` declara `requiresRuntime`.
- [ ] `project.json` declara `requiresProductIntelligence`.
- [ ] `project.json` declara `requiresProductExperience`.
- [ ] `project.json` declara `requiresCloudSixDesignLanguage`.
- [ ] `.ceip/product-intelligence/` foi criado quando solicitado.
- [ ] `.ceip/runtime/` foi criado.
- [ ] `.ceip/product-experience/` foi criado quando solicitado.
- [ ] `.ceip/product-experience/cloudsix-design-language.md` foi criado quando solicitado.
- [ ] `.ceip/product-experience/cdl-compliance.md` foi criado quando solicitado.
- [ ] Arquivos principais têm conteúdo útil.
- [ ] `AGENTS.md` e arquivos de IA foram criados quando solicitados.
- [ ] `.gitignore` foi atualizado quando solicitado.
- [ ] `ceip doctor` executa sem erro.
- [ ] `ceip analyze` gera Runtime Pack e prompt quando há Workspace.

## Conclusão

O CEIP Installer é o primeiro passo para transformar a CEIP em uma experiência operacional simples de adoção em projetos reais, incluindo Runtime, governança de produto e experiência.
