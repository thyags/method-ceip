# Guia de Validação do Workspace

## Objetivo

Definir checklist para verificar se um projeto está corretamente integrado à CEIP.

## Checklist obrigatório

- [ ] `.cloudsix/method` existe ou há referência externa documentada?
- [ ] `.ceip/` existe?
- [ ] `PROJECT.md` foi preenchido?
- [ ] `STACK.md` foi preenchido?
- [ ] `CONTEXT.md` foi preenchido?
- [ ] `project.json` existe?
- [ ] O `AGENTS.md` do projeto aponta para Core + Workspace?
- [ ] Existem ADR/RFC quando aplicável?
- [ ] Existem registros de memória?
- [ ] Existem reviews?
- [ ] Existem métricas?
- [ ] Existe dashboard de qualidade?
- [ ] O `.ceip/` não contém segredos?
- [ ] O método não foi duplicado dentro do `.ceip/`?

## Validação automática com CEIP Installer

Execute:

```bash
ceip doctor
```

ou:

```bash
node bin/ceip.js doctor
```

O comando verifica presença de `.ceip/`, `project.json`, `AGENTS.md`, referência ao Core, arquivos principais, `.gitignore` e possíveis nomes de arquivos sensíveis.

## Validação por IA

Prompt recomendado:

```text
Valide a integração CEIP deste projeto.

Verifique:
- CEIP Core em .cloudsix/method ou referência externa;
- CEIP Workspace em .ceip/;
- AGENTS.md apontando para Core + Workspace;
- PROJECT.md, STACK.md, CONTEXT.md e project.json preenchidos;
- ausência de segredos;
- ADRs, RFCs, memória, reviews e métricas quando aplicável.

Não altere código de aplicação.
Liste achados por severidade.
```

## Resultado esperado

- Aprovado.
- Aprovado com ressalvas.
- Bloqueado até inicializar Workspace.
- Bloqueado por risco de segurança.

## Checklist de encerramento

- [ ] Achados foram classificados.
- [ ] Bloqueios foram registrados.
- [ ] Correções foram planejadas.
- [ ] Workspace está pronto para orientar agentes.

## Conclusão

Validação garante que Core + Workspace esteja funcionando antes de tarefas relevantes.
