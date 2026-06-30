# Roadmap de Implementação do CLI

## Objetivo

Definir fases para construir o CLI `cloudsix-engineering` depois da validação manual do framework.

## Contexto

Implementar CLI cedo demais pode automatizar fluxos ainda imaturos. O roadmap exige validação manual antes de código.

## Diretrizes

- Não implementar antes do piloto.
- Começar somente com comandos de leitura e geração de contexto.
- Adicionar escrita de arquivos apenas depois de estabilizar templates.
- Manter compatibilidade com múltiplas IAs.

## Fases

### Fase CLI-0 - Validação manual

Executar GSA Oficina sem CLI e registrar tarefas repetitivas.

### Fase CLI-1 - Navegação e contexto

Comandos: `validate`, `agents`, `plan`.

### Fase CLI-2 - Artefatos

Comandos: `adr create`, `rfc create`, `quality`.

### Fase CLI-3 - Integração com IAs

Preparar prompts para Codex, Claude Code, Gemini CLI, Cursor, Windsurf e Copilot.

### Fase CLI-4 - Automação segura

Adicionar checks locais, geração de relatórios e integração opcional com CI.

## Exemplos

- Após o piloto, se toda análise começar consultando os mesmos cinco documentos, o CLI pode automatizar esse pacote de contexto.

## Checklist

- [ ] Piloto foi concluído.
- [ ] Comandos mais repetidos foram identificados.
- [ ] Escopo da primeira versão é somente leitura ou baixo risco.
- [ ] Segurança de dados foi avaliada.

## Conclusão

O CLI deve ser consequência do uso real do framework, não hipótese prematura.
