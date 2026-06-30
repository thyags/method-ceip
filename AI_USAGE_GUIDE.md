# Guia de Uso com IA

## Objetivo

Explicar como usar o CloudSix Engineering Framework com Codex, Claude Code, Gemini CLI, Cursor, Windsurf, GitHub Copilot e outros agentes de IA.

## Contexto

Ferramentas de IA podem acelerar análise, escrita, revisão, documentação e implementação, mas precisam de contexto, limites e critérios. Este guia define como fornecer instruções consistentes para evitar suposições, conteúdo genérico e mudanças arriscadas.

## Diretrizes gerais

- Sempre informe o objetivo da tarefa, o contexto do projeto e os arquivos relevantes.
- Instrua a IA a consultar `constitution/` e `ORCHESTRATOR.md` em tarefas complexas.
- Instrua a IA a consultar `PLATFORM.md`, `intelligence-core/` e `engines/` quando a tarefa envolver evolução da plataforma.
- Peça explicitamente para a IA identificar a stack antes de propor implementação.
- Referencie os documentos do framework que devem orientar a resposta.
- Exija separação entre fatos encontrados, hipóteses e decisões.
- Peça validação com checklists e testes disponíveis.
- Não peça para a IA inventar regras de negócio, telas, integrações ou dados.
- Para decisões arquiteturais, peça ADR.
- Para tarefas grandes, use dois ciclos: criação inicial e auditoria de aprofundamento.
- Para entregas relevantes, peça review, quality gates e scorecard.

## Uso por ferramenta

| Ferramenta | Uso recomendado |
| --- | --- |
| Codex | Alterações em repositório, criação de documentação, revisão técnica, validação local e execução incremental |
| Claude Code | Análise extensa, revisão de arquitetura, documentação longa e raciocínio sobre requisitos |
| Gemini CLI | Exploração de contexto, comparação de alternativas e auxílio em documentação técnica |
| Cursor | Edição assistida no fluxo de desenvolvimento, refatorações locais e navegação de código |
| Windsurf | Fluxos agentivos de implementação, leitura de base e execução guiada por tarefa |
| GitHub Copilot | Apoio pontual em código, testes, comentários e pequenas transformações |

## Prompt base para usar o framework

```text
Use o CloudSix Engineering Framework.

Antes de propor qualquer implementação:
- entenda a CEIP como plataforma de inteligência de engenharia;
- consulte PLATFORM.md quando estiver evoluindo o framework;
- consulte o Constitution Engine;
- aplique Context Engine, Thinking Engine e Policy Engine quando necessário;
- use o ORCHESTRATOR.md quando houver múltiplos agentes ou áreas;
- identifique a stack atual;
- leia os documentos aplicáveis do framework;
- não invente regra de negócio;
- justifique decisões técnicas relevantes;
- considere segurança, performance, testes, documentação e manutenção;
- prefira evolução incremental;
- crie ADR para decisão arquitetural importante;
- valide quality gates e registre evidências.

Responda em português do Brasil, com linguagem técnica, clara e objetiva.
```

## Prompt de auditoria pós-criação

```text
Revise todo o repositório cloudsix-engineering-framework.

Objetivo:
Aprofundar, padronizar e corrigir inconsistências da documentação.

Tarefas:
- Verificar se todos os documentos existem.
- Garantir que todos seguem o mesmo padrão.
- Remover conteúdo genérico ou repetitivo.
- Aprofundar seções superficiais.
- Criar links internos entre documentos.
- Melhorar o AGENTS.md.
- Melhorar o CODEX.md.
- Melhorar o CONSTITUTION.md.
- Garantir que o framework seja agnóstico de tecnologia.
- Garantir que todos os agentes respeitem o fluxo oficial.
- Garantir que todos os documentos estejam em português do Brasil.
- Adicionar exemplos práticos quando faltar.
- Adicionar checklists operacionais.
- Adicionar diagramas Mermaid quando útil.
- Atualizar INDEX.md.
- Atualizar ROADMAP.md.

Não alterar o objetivo do framework.
Não criar código de aplicação.
Não remover documentos sem justificativa.
```

## Exemplos

- Para acionar um agente específico, use o prompt correspondente em `docs/prompts`.
- Para orientar uma tarefa, use a biblioteca em `prompts`.
- Para pedir revisão de arquitetura, combine `DECISION_FRAMEWORK.md`, `ARCHITECTURE_PRINCIPLES.md` e `docs/templates/architecture-review-template.md`.
- Para modernização de legado, combine `docs/playbooks/02-sistema-legado.md`, `docs/workflows/04-legacy-modernization.md` e o Refactoring Specialist.
- Para concluir entrega relevante, combine `review`, `quality-gates` e `score-system`.
- Para auditar o framework, use `validation/` e `specialist-reviews/`.
- Para piloto em projeto real, use `pilots/gsa-oficina-pilot.md`.
- Para evoluir a plataforma, use `prompts/platform/chief-engineering-officer-platform-prompt.md`.

## Checklist

- [ ] A IA recebeu objetivo, contexto e limites.
- [ ] A IA foi instruída a identificar a stack.
- [ ] Documentos do framework foram referenciados.
- [ ] A IA foi proibida de inventar regra de negócio.
- [ ] A resposta exigiu validação e justificativa.
- [ ] Quality gates, reviews e scorecard foram pedidos quando aplicável.
- [ ] Houve auditoria quando a tarefa gerou muitos documentos.

## Conclusão

O valor da IA depende da qualidade das instruções e das validações. Este guia transforma o framework em uma interface operacional para agentes humanos e automatizados.
