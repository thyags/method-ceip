# Agent Orchestrator

## Objetivo

Definir como demandas devem ser encaminhadas entre Engineering Intelligence Core, brains, engines, meta-agentes, agentes especialistas, reviews, quality gates e documentação até a conclusão.

## Contexto

Os agentes especialistas resolvem partes do problema. O orquestrador define sequência, critérios de parada, escalonamento e responsabilidades para evitar lacunas entre negócio, produto, arquitetura, implementação, qualidade e conhecimento.

Em projetos consumidores, o Orchestrator deve combinar CEIP Core e CEIP Workspace: o Core define as regras e o `.ceip/` fornece contexto local, stack, foco atual, riscos, memória, ADRs, RFCs e métricas.

Quando o Core estiver instalado como submodule, seu caminho recomendado é `.cloudsix/method`.

## Diretrizes

- Toda demanda começa por entendimento de negócio quando houver impacto funcional.
- Toda demanda começa pelo Context Engine quando houver contexto insuficiente.
- Thinking Engine deve formular problema antes da solução.
- Policy Engine deve aplicar políticas antes de decisão relevante.
- Em projeto consumidor, `.ceip/PROJECT.md`, `.ceip/STACK.md` e `.ceip/CONTEXT.md` devem ser consultados antes de selecionar agentes.
- Decisão estrutural passa pelo Chief Software Architect e por ADR.
- Quality Governor valida gates antes de concluir entrega relevante.
- Knowledge Curator atualiza base de conhecimento, ADRs, RFCs e padrões quando houver aprendizado.
- Nenhum agente deve pular leis do Constitution Engine.

## Fluxo oficial

```mermaid
flowchart TD
    A["Task"] --> A1["Engineering Intelligence Core"]
    A1 --> A2["Context Engine"]
    A2 --> A2B["CEIP Workspace .ceip"]
    A2B --> A3["Thinking Engine"]
    A3 --> A4["Policy Engine"]
    A4 --> B["Meta-agente: Technical Program Manager"]
    B --> C["Business Analyst"]
    C --> D["Product Manager"]
    D --> E["Chief Software Architect"]
    E --> F{"Impacto tecnico"}
    F -->|Dados| G["Database Architect"]
    F -->|Backend| H["Backend Engineer"]
    F -->|API| I["API Integration Engineer"]
    F -->|Frontend| J["Frontend UX Specialist"]
    J --> K["UI Designer"]
    F -->|Mobile| L["Mobile Specialist"]
    F -->|IA| M["AI Engineer"]
    G --> N["Security Engineer"]
    H --> N
    I --> N
    K --> N
    L --> N
    M --> N
    N --> O["Performance Engineer"]
    O --> P["QA Engineer"]
    P --> Q["Code Reviewer Tech Lead"]
    Q --> R["Documentation Engineer"]
    R --> S["Meta-agente: Quality Governor"]
    S --> T{"Quality Gates aprovados?"}
    T -->|Nao| U["Corrigir / Mitigar / Aceitar risco"]
    U --> P
    T -->|Sim| V["Knowledge Curator"]
    V --> V1["Memory Engine"]
    V1 --> V2["Learning Brain"]
    V2 --> W["Done"]
```

## Meta-agentes

- Chief Engineering Officer: resolve conflitos estratégicos e aprova decisões de alto impacto.
- Technical Program Manager: coordena sequência, dependências, escopo e status.
- Quality Governor: valida quality gates, scorecards e bloqueios.
- Knowledge Curator: mantém conhecimento, ADRs, RFCs, patterns e anti-patterns.
- Engineering Intelligence Core: coordena Context, Thinking, Policy, Planning, Review, Quality, Memory e Learning.

## Exemplos

- Em um incidente crítico, o fluxo pode começar por DevOps Engineer e Security Engineer, mas deve retornar para pós-incidente, documentação e Knowledge Curator.
- Em uma nova integração, API Integration Engineer entra cedo, mas Security, QA, DevOps e Documentation precisam validar antes de concluir.
- Se houver regra repetitiva, Policy Brain deve criar ou atualizar política.
- Se houver decisão repetitiva, Decision Engine deve ser considerado.
- Se o projeto tiver `.ceip/`, decisões específicas devem ser registradas em `.ceip/adr/`, mudanças amplas em `.ceip/rfc/` e aprendizados em `.ceip/memory/`.

## Checklist

- [ ] A task tem objetivo e contexto.
- [ ] Context, Thinking e Policy Engines foram aplicados quando necessário.
- [ ] Meta-agente coordenador foi definido.
- [ ] CEIP Workspace foi consultado quando existente.
- [ ] Agentes especialistas foram acionados por impacto.
- [ ] Reviews necessários foram executados.
- [ ] Quality gates foram validados.
- [ ] Conhecimento gerado foi registrado.
- [ ] Memory Engine e Learning Brain foram acionados quando houve aprendizado.
- [ ] Aprendizados locais foram registrados em `.ceip/`.

## Conclusão

O orquestrador transforma agentes isolados em um sistema coordenado de engenharia.
