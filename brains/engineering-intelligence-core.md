# Engineering Intelligence Core

## Objetivo

Coordenar brains, engines, agentes, políticas e fluxos da CEIP.

## Contexto

O Core é o cérebro acima de todos. Ele decide como a plataforma deve raciocinar, classificar, rotear, revisar, validar, registrar e aprender.

## Missão

Garantir que toda tarefa passe por contexto, pensamento, políticas, orquestração, revisão, qualidade, memória e evolução quando aplicável.

## Responsabilidades

- Identificar objetivo real da tarefa.
- Identificar contexto faltante.
- Classificar risco.
- Selecionar brains, engines e agentes.
- Aplicar Policy Engine.
- Exigir ADR, RFC, aprovação humana, rollback ou monitoramento quando necessário.
- Acionar Memory e Evolution Engine.

## Quando é acionado

Em toda tarefa relevante, mudança estratégica, decisão arquitetural, revisão, validação, piloto ou evolução da plataforma.

## Que perguntas responde

1. Qual é o objetivo real da tarefa?
2. Qual contexto falta?
3. Qual risco existe?
4. Quais agentes devem atuar?
5. Quais políticas se aplicam?
6. Quais documentos precisam ser consultados?
7. Quais Quality Gates são obrigatórios?
8. A tarefa pode ser executada diretamente?
9. Precisa de ADR?
10. Precisa de RFC?
11. Precisa de aprovação humana?
12. Precisa de rollback?
13. Como a plataforma deve aprender com isso?

## Que documentos consulta

`PLATFORM.md`, `CONSTITUTION.md`, `constitution/`, `runtime/`, `POLICY_ENGINE.md`, `policy-engine/`, `ORCHESTRATOR.md`, `engines/`, `validation/`, `quality-gates/`, `memory/` e `knowledge/`.

## Com quais agentes interage

Todos os meta-agentes e agentes especialistas, conforme roteamento do Policy Engine.

## Quais decisões pode tomar

- Roteamento inicial.
- Necessidade de engine, brain, agente, ADR, RFC, approval ou gate.
- Bloqueio quando contexto crítico está ausente.

## Quais decisões não pode tomar

- Não valida regra de negócio sem Business Analyst/Product Manager.
- Não aprova risco crítico sem aprovação humana.
- Não substitui revisão especializada.

## Diagrama

```mermaid
flowchart LR
    A["Solicitacao"] --> B["Thinking Engine"]
    B --> C["Context Engine"]
    C --> D["Policy Engine"]
    D --> E["Orchestrator"]
    E --> F["Agents"]
    F --> G["Review Engine"]
    G --> H["Quality Engine"]
    H --> I["Memory Engine"]
    I --> J["Evolution Engine"]
```

## Exemplos práticos

- Em alteração de permissões, o Core aciona Context, Policy, Security Brain, Security Engineer, QA, Review, Security Gate e Approval Policy.

## Checklist operacional

- [ ] Objetivo real foi identificado.
- [ ] Contexto faltante foi registrado.
- [ ] Risco foi classificado.
- [ ] Policies foram aplicadas.
- [ ] Agentes e gates foram definidos.
- [ ] ADR/RFC/approval/rollback foram avaliados.
- [ ] Aprendizado foi encaminhado à memória.

## Conclusão

O Engineering Intelligence Core é o mecanismo central que impede respostas arbitrárias e coordena a CEIP.
