# Prompt Builder

## Objetivo

Montar prompts dinâmicos a partir de tarefa, contexto, policies, agentes, gates e Workspace.

## Regra

Prompts fixos são ponto de partida. O Prompt Builder gera o prompt final adequado ao projeto e ao risco da tarefa.

## Entradas

- Tarefa.
- Runtime Pack.
- Context Loader.
- Task Router.
- Policies.
- Orchestrator.
- Agentes selecionados.
- Gates e score.
- Restrições do projeto.

## Estrutura Do Prompt

```text
Papel
Objetivo
Contexto carregado
Restrições
Policies obrigatórias
Agentes envolvidos
Gates obrigatórios
Saída esperada
Critérios de bloqueio
Formato de resposta
```

## Regras

- Não incluir contexto sensível desnecessário.
- Não omitir lacunas relevantes.
- Não pedir implementação antes de PRD, ADR, RFC, PXS ou gate quando obrigatórios.
- Não misturar múltiplos objetivos incompatíveis em um único prompt.
- Gerar prompt proporcional ao risco.

## Saídas

- Prompt final.
- Lista de fontes usadas.
- Lista de restrições.
- Agentes e gates.
- Evidências esperadas.

## Conclusão

Prompt Builder transforma a CEIP em uma interface operacional para qualquer IA.
