# Validação de Links e Navegação

## Objetivo

Verificar se a navegação interna do framework está consistente e sem referências quebradas.

## Contexto

O framework será usado por pessoas e IAs. Links, caminhos e referências internas precisam ser confiáveis para orientar leitura e execução.

## Diretrizes

- Validar caminhos citados em backticks quando forem arquivos ou diretórios reais.
- Validar links Markdown internos.
- Confirmar que novos diretórios aparecem no índice.
- Garantir que documentos centrais apontem para módulos operacionais.

## Perguntas de validação

- Todos os diretórios principais aparecem em `INDEX.md`?
- `README.md` aponta para `constitution/`, `ORCHESTRATOR.md`, `review/`, `quality-gates/` e `score-system/`?
- `AGENTS.md` aponta para meta-agentes quando necessário?
- `CODEX.md` orienta o uso de constitution e quality gates?
- `NEXT_STEPS.md` aponta para validation, specialist-reviews, pilots e cli?
- Existem links Markdown internos quebrados?
- Existem caminhos citados que não existem?
- A navegação principal permite começar por objetivo de tarefa?

## Exemplos

- Citar `pilots/gsa-oficina.md` quando o arquivo real é `pilots/gsa-oficina-pilot.md` é link quebrado.
- Um diretório novo sem menção no índice é problema de descoberta.

## Checklist

- [ ] Links Markdown internos foram verificados.
- [ ] Caminhos citados foram verificados.
- [ ] Índice está atualizado.
- [ ] README e ORCHESTRATOR estão conectados.

## Conclusão

Validação de links protege a experiência de navegação e o uso por agentes de IA.
