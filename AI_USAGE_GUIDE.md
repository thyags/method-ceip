# Guia de Uso com IA

## Objetivo

Explicar como usar a CloudSix Engineering Intelligence Platform com Codex, Claude Code, Gemini CLI, Cursor, Windsurf, GitHub Copilot e outros agentes de IA.

## Contexto

Ferramentas de IA podem acelerar análise, escrita, revisão, documentação e implementação, mas precisam de contexto, limites e critérios. Este guia define como fornecer instruções consistentes para evitar suposições, conteúdo genérico e mudanças arriscadas.

Em projetos consumidores, a IA deve tratar `.cloudsix/method` como CEIP Core quando o método estiver instalado por submodule, e `.ceip/` como CEIP Workspace local do projeto.

## Diretrizes gerais

- Sempre informe o objetivo da tarefa, o contexto do projeto e os arquivos relevantes.
- Quando o projeto consumidor usar submodule, instrua a IA a consultar `.cloudsix/method/MANUAL_DE_USO.md`.
- Instrua a IA a consultar `.ceip/` quando o projeto possuir CEIP Workspace.
- Instrua a IA a consultar `constitution/` e `ORCHESTRATOR.md` em tarefas complexas.
- Instrua a IA a consultar `product-intelligence/` antes de arquitetura ou implementação quando a tarefa envolver ideia, produto, feature, módulo, API ou integração relevante.
- Instrua a IA a consultar `product-experience/` antes de UX/UI/Frontend quando a tarefa envolver tela, dashboard, formulário, tabela, site, componente composto ou experiência responsiva relevante.
- Instrua a IA a consultar `PLATFORM.md`, `brains/`, `engines/`, `policy-engine/` e `orchestrator/` quando a tarefa envolver evolução da plataforma.
- Peça explicitamente para a IA identificar a stack antes de propor implementação.
- Referencie os documentos do framework que devem orientar a resposta.
- Exija separação entre fatos encontrados, hipóteses e decisões.
- Peça validação com checklists e testes disponíveis.
- Não peça para a IA inventar regras de negócio, telas, integrações ou dados.
- Não peça para a IA remover, omitir ou alterar avisos de direitos autorais da CEIP.
- Para decisões arquiteturais, peça ADR.
- Para tarefas grandes, use dois ciclos: criação inicial e auditoria de aprofundamento.
- Para entregas relevantes, peça review, quality gates, score engine, evidências e decisão de aprovação.

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
- se este projeto usar submodule, consulte .cloudsix/method/MANUAL_DE_USO.md;
- se este projeto tiver CEIP Workspace, consulte .ceip/PROJECT.md, .ceip/STACK.md e .ceip/CONTEXT.md;
- consulte PLATFORM.md quando estiver evoluindo o framework;
- consulte product-intelligence/ quando a demanda envolver ideia, produto, feature, módulo, API ou integração relevante;
- consulte product-experience/ quando a demanda envolver interface, dashboard, formulário, tabela, site ou experiência responsiva relevante;
- consulte o Constitution Engine;
- aplique Context Engine, Thinking Engine e Policy Engine quando necessário;
- use o ORCHESTRATOR.md quando houver múltiplos agentes ou áreas;
- use policy-engine/ para roteamento, risco e aprovação;
- use prompts/agents quando precisar acionar um agente específico;
- use quality-gates/ e metrics/ para decidir aprovação;
- identifique a stack atual;
- leia os documentos aplicáveis do framework;
- não invente regra de negócio;
- não avance para arquitetura ou implementação de produto relevante sem PRD, MVP, roadmap e critérios de aceite, salvo exceção formal;
- não avance para UX/UI/Frontend ou release de interface relevante sem Product Experience, Product Experience Gate e Visual Quality Score, salvo exceção formal;
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

- Para integrar a CEIP em um projeto consumidor, siga `MANUAL_DE_USO.md`.
- Para criar Workspace local, siga `workspace/INSTALLATION_GUIDE.md` e `workspace/INITIALIZATION_FLOW.md`.
- Para configuração guiada, use o CEIP Installer com `node bin/ceip.js init`, `ceip init` ou `npx method-ceip init` quando o pacote estiver disponível.
- Para transformar ideia em produto especificado, use `product-intelligence/README.md`, `product-intelligence/playbooks/novo-produto.md` e `product-intelligence/templates/prd-template.md`.
- Para transformar requisito em interface premium, use `product-experience/README.md`, `product-experience/CLOUDSIX_DESIGN_LANGUAGE.md`, `product-experience/DESIGN_REVIEW.md` e `product-experience/VISUAL_QUALITY_SCORE.md`.
- Para acionar um agente específico, use o prompt correspondente em `prompts/agents` ou `docs/prompts`.
- Para orientar uma tarefa, use a biblioteca em `prompts`.
- Para pedir revisão de arquitetura, combine `DECISION_FRAMEWORK.md`, `ARCHITECTURE_PRINCIPLES.md` e `docs/templates/architecture-review-template.md`.
- Para modernização de legado, combine `docs/playbooks/02-sistema-legado.md`, `docs/workflows/04-legacy-modernization.md` e o Refactoring Specialist.
- Para concluir entrega relevante, combine `review`, `quality-gates`, `engines/score-engine.md`, `metrics/` e `score-system`.
- Para auditar o framework, use `validation/` e `specialist-reviews/`.
- Para piloto em projeto real, use `docs/playbooks/projeto-piloto.md`, `validation/pilot-project-validation.md` e `pilots/gsa-oficina-pilot.md`.
- Para evoluir a plataforma, use `prompts/platform/chief-engineering-officer-platform-prompt.md`.

## Checklist

- [ ] A IA recebeu objetivo, contexto e limites.
- [ ] A IA foi instruída a identificar a stack.
- [ ] Documentos do framework foram referenciados.
- [ ] Product Intelligence System foi referenciado quando a tarefa envolveu produto ou feature relevante.
- [ ] Product Experience System foi referenciado quando a tarefa envolveu interface relevante.
- [ ] Workspace `.ceip/` foi consultado quando existente.
- [ ] A IA foi proibida de inventar regra de negócio.
- [ ] A resposta exigiu validação e justificativa.
- [ ] Quality gates, reviews e scorecard foram pedidos quando aplicável.
- [ ] Visual Quality Score foi pedido quando havia tela, dashboard, formulário, tabela ou site relevante.
- [ ] Houve auditoria quando a tarefa gerou muitos documentos.

## Conclusão

O valor da IA depende da qualidade das instruções e das validações. Este guia transforma o framework em uma interface operacional para agentes humanos e automatizados.
