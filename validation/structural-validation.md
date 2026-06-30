# Validação Estrutural

## Objetivo

Verificar se a estrutura do repositório está completa, navegável e sem falhas formais.

## Contexto

Esta validação corresponde à Fase 1 do amadurecimento: revisar forma e presença, sem avaliar profundidade do conteúdo.

## Diretrizes

- Não reescrever conteúdo nesta etapa.
- Confirmar existência de arquivos e diretórios.
- Verificar documentos vazios, títulos e estrutura mínima.
- Registrar achados sem corrigir imediatamente quando estiver em auditoria formal.

## Perguntas de validação

- O repositório possui `README.md`, `INDEX.md`, `ROADMAP.md`, `AGENTS.md`, `CODEX.md`, `CONSTITUTION.md` e `ORCHESTRATOR.md`?
- Todos os diretórios principais existem?
- Existem documentos vazios?
- Todos os Markdown possuem título de nível 1?
- Todos os Markdown possuem objetivo, contexto, checklist e conclusão?
- Os diretórios novos estão referenciados no `INDEX.md`?
- O `README.md` explica como começar?
- O `ORCHESTRATOR.md` explica fluxo de agentes e meta-agentes?
- Existem diretórios vazios fora de `.git`?
- Existem arquivos duplicados com responsabilidades conflitantes?
- A branch Git está limpa depois da validação?

## Exemplos

- `validation/` existir sem estar no índice é falha de navegação.
- Um arquivo `.md` sem título é falha estrutural.

## Checklist

- [ ] Arquivos obrigatórios existem.
- [ ] Diretórios obrigatórios existem.
- [ ] Documentos não estão vazios.
- [ ] Títulos seguem padrão.
- [ ] Navegação principal está atualizada.
- [ ] Git está sem pendências inesperadas.

## Conclusão

Validação estrutural garante que o framework esteja completo o suficiente para revisões especializadas.
