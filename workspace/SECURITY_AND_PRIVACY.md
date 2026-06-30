# Segurança e Privacidade no CEIP Workspace

## Objetivo

Definir regras para evitar vazamento de informações sensíveis no `.ceip/`.

## Regras obrigatórias

- Não registrar senhas.
- Não registrar tokens.
- Não registrar chaves de API.
- Não registrar chaves privadas.
- Não registrar dados pessoais sensíveis sem necessidade.
- Não registrar informações confidenciais de clientes quando um resumo for suficiente.
- Usar exemplos anonimizados.
- Separar conhecimento público, interno e sensível.
- Revisar `.ceip/` antes de compartilhar o projeto.
- Definir claramente o que pode e não pode ser versionado.

## O que pode ser versionado

- Contexto técnico sem segredo.
- ADRs e RFCs sem dado sensível.
- Métricas agregadas.
- Reviews sem exposição indevida.
- Artefatos anonimizados.
- Memória de aprendizado sem identificação sensível.

## O que não deve ser versionado

- Credenciais.
- Dumps reais.
- Exports com dados pessoais.
- Screenshots com informação sensível.
- Logs de produção sem anonimização.
- Arquivos temporários de agentes.

## `.gitignore` recomendado

```gitignore
.ceip/cache/
.ceip/temp/
.ceip/workspace/temporary/
.ceip/output/exports/
```

## Checklist

- [ ] `.ceip/` foi revisado antes de commit.
- [ ] Segredos não foram registrados.
- [ ] Dados pessoais foram removidos ou anonimizados.
- [ ] Itens temporários estão ignorados.
- [ ] Artefatos sensíveis não foram versionados.

## Conclusão

Workspace útil não precisa expor segredo. Segurança e memória devem coexistir.
