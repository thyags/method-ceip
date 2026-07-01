# Protocolo de Evolução CEIP

## Objetivo

Definir regras permanentes para cada evolução deste projeto, garantindo que o CEIP Core seja seguido com rastreabilidade, revisão, validação e sincronização do Workspace local.

## Regras obrigatórias por etapa

1. Carregar o contexto CEIP antes de planejar ou implementar:
   - `AGENTS.md` e arquivos de IA aplicáveis.
   - `.cloudsix/method/CONSTITUTION.md`.
   - `.cloudsix/method/runtime/`.
   - `.cloudsix/method/POLICY_ENGINE.md`.
   - `.cloudsix/method/ORCHESTRATOR.md`.
   - `.ceip/PROJECT.md`, `.ceip/STACK.md`, `.ceip/CONTEXT.md` e `.ceip/CURRENT_FOCUS.md`.
2. Classificar tarefa, risco, policies, gates e necessidade de ADR/RFC antes de editar.
3. Usar multiagentes sempre que for seguro e útil:
   - Explorers para análise paralela, revisão de CEIP, segurança, arquitetura, frontend, backend, produto, experiência ou QA.
   - Workers somente quando houver escopo de escrita isolado e baixo risco de conflito.
   - Não usar multiagentes para tarefas triviais ou quando a paralelização aumentar risco.
4. Antes de concluir cada corte, executar `ceip checkpoint "descrição da tarefa"` ou, quando o comando global não estiver disponível, `node .cloudsix/method/bin/ceip.js checkpoint "descrição da tarefa"`.
5. Revisar os sinais do checkpoint e atualizar artefatos atrasados antes do commit.
6. Executar validações proporcionais ao risco:
   - `git diff --check` sempre.
   - `node .cloudsix/method/bin/ceip.js doctor` para mudanças de governança CEIP.
   - Testes backend/frontend/e2e quando houver código ou interface impactados.
   - Smoke de produção quando houver deploy, infra ou comportamento publicado.
7. Registrar decisões, runtime packs, reviews, known issues, technical debt, quality dashboard ou memória quando houver impacto relevante.
8. Não usar `--force` em comandos CEIP sem necessidade explícita; quando usado, revisar backup em `.ceip/backups/`.
9. Fazer commit e push ao final de cada evolução concluída e validada, salvo instrução explícita contrária, branch protegida, bloqueio técnico ou política diferente registrada no projeto.

## Critérios de bloqueio

- Não commitar se o checkpoint apontar artefato atrasado sem revisão explícita.
- Não commitar se houver validação obrigatória falhando.
- Não commitar segredo, `.env`, token, chave ou dado sensível.
- Não sobrescrever artefato atual sem `--force` e backup.
- Não fazer push de mudança incompleta sem registrar bloqueio ou exceção CEIP.

## Resultado esperado

Cada evolução deve terminar com:

- Workspace CEIP sincronizado.
- Evidências de validação registradas ou informadas.
- Commit local criado quando permitido.
- Push para o remoto concluído quando permitido.
