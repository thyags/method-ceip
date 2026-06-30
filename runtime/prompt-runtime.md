# Prompt Runtime

## Objetivo

Definir como prompts gerados devem ser usados com Codex, Claude Code, Cursor, Gemini CLI, Windsurf, GitHub Copilot e outras IAs.

## Regras

- A IA deve receber o menor contexto suficiente para cumprir a tarefa.
- A IA deve declarar lacunas antes de assumir requisitos.
- A IA deve respeitar `AGENTS.md`, `CODEX.md` ou arquivo equivalente da ferramenta.
- A IA deve registrar decisões relevantes no Workspace.
- A IA não deve executar mudanças destrutivas sem aprovação explícita.
- A IA não deve expor dados sensíveis em prompts ou relatórios.

## Fluxo

1. Runtime gera Prompt Pack.
2. Pessoa ou ferramenta revisa o contexto.
3. Prompt é enviado à IA.
4. IA executa dentro do fluxo CEIP.
5. Review e gates validam resultado.
6. Memory registra aprendizado.

## Conclusão

Prompt Runtime protege a experiência da IA contra ambiguidade, excesso de contexto e bypass de governança.
