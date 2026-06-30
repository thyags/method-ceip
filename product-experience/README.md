# Product Experience System

## Objetivo

Definir o Product Experience System (PXS) como a camada oficial da CEIP responsável por transformar requisitos de produto em experiência premium, clara, consistente, acessível e produtiva antes de qualquer implementação visual ou frontend.

## Contexto

O Product Intelligence System especifica o que deve ser construído. O Product Experience System define como essa solução deve ser percebida, compreendida e operada por usuários reais. Ele evita que agentes de IA ou times técnicos gerem telas funcionais, mas genéricas, inconsistentes, visualmente pobres ou desalinhadas com o padrão de produto da CloudSix.

O PXS não substitui UX, UI ou Frontend. Ele governa essas disciplinas. UX estrutura jornada e interação; UI materializa composição visual; Frontend implementa respeitando stack e componentes existentes.

## Posição no fluxo CEIP

```mermaid
flowchart LR
    A["Product Intelligence"] --> B["Product Experience System"]
    B --> C["UX"]
    C --> D["UI"]
    D --> E["Frontend"]
    E --> F["QA"]
    F --> G["Release"]
```

## Regra operacional

- Nenhuma interface relevante deve seguir para implementação sem critérios de experiência.
- Nenhuma tela deve ser aprovada apenas por funcionar tecnicamente.
- Nenhum agente frontend deve decidir identidade visual sozinho.
- Nenhum layout deve copiar produto externo, mesmo quando usar benchmarks.
- Nenhum componente deve existir apenas por estética.
- Nenhuma redução visual pode comprometer capacidade operacional.
- Toda entrega visual relevante deve passar por Product Experience Gate e Visual Quality Score.
- Toda exceção deve ser registrada pelo Policy Engine.

## Componentes

| Documento | Função |
| --- | --- |
| `EXPERIENCE_CONSTITUTION.md` | Leis fundamentais da experiência de produto |
| `CLOUDSIX_DESIGN_LANGUAGE.md` | CloudSix Design Language, métricas e vocabulário visual |
| `DESIGN_PRINCIPLES.md` | Princípios para software empresarial premium |
| `DESIGN_DNA.md` | Atributos de percepção que toda interface deve transmitir |
| `VISUAL_LANGUAGE.md` | Linguagem visual, tom, restrições e identidade agnóstica |
| `PREMIUM_UI_RULES.md` | Regras objetivas para evitar aparência genérica ou amadora |
| `LAYOUT_SYSTEM.md` | Critérios de composição, densidade, grids e agrupamento |
| `COMPONENT_SYSTEM.md` | Critérios para escolha, uso e variação de componentes |
| `INTERACTION_RULES.md` | Estados, feedback, confirmação, loading, erro e sucesso |
| `MOTION_SYSTEM.md` | Movimento funcional, moderado e orientado a feedback |
| `ACCESSIBILITY_SYSTEM.md` | Regras de acessibilidade mínimas e evidências |
| `DESIGN_REVIEW.md` | Processo de revisão especializada de experiência |
| `VISUAL_QUALITY_SCORE.md` | Critérios objetivos para pontuação visual |
| `EXPERIENCE_MEMORY.md` | Como registrar referências aprovadas do projeto |
| `engines/` | Engines operacionais de revisão, layout, interação e score |
| `benchmarks/` | Biblioteca de princípios observáveis em produtos de referência |
| `templates/` | Modelos para brief, especificação de tela, review e score |
| `checklists/` | Validações acionáveis antes de handoff e release |
| `examples/` | Exemplos de aplicação em dashboards, tabelas e formulários |
| `memory/` | Estrutura de memória de experiência reutilizável |

## Entradas

- PRD aprovado ou exceção formal.
- Requisitos funcionais e não funcionais.
- Personas, fluxos, critérios de aceite e MVP.
- Contexto do produto e domínio.
- Design system, componentes e padrões existentes.
- Screenshots, fluxos atuais e restrições de acessibilidade.
- Stack e limitações reais do projeto.

## Saídas mínimas

- Experience brief.
- Hierarquia de informação.
- Decisão de layout.
- Padrão de componentes.
- Estados de interação.
- Critérios de acessibilidade.
- Visual Quality Score.
- Evidências de Product Experience Gate.
- Handoff para UX, UI, Frontend e QA.

## Integração com CEIP Core + Workspace

O CEIP Core contém método, regras, engines e templates. O Workspace `.ceip/` deve guardar apenas contexto local do projeto:

- `.ceip/product-experience/experience-brief.md`
- `.ceip/product-experience/screen-inventory.md`
- `.ceip/product-experience/design-decisions.md`
- `.ceip/product-experience/visual-quality-score.md`
- `.ceip/product-experience/review-notes.md`
- `.ceip/product-experience/experience-memory.md`

Quando uma tela real virar referência aprovada, registre a justificativa no Workspace. Não copie telas, assets privados ou dados sensíveis para o Core.

## Checklist

- [ ] Product Intelligence foi consultado antes do PXS.
- [ ] A tela possui objetivo, usuário e tarefa principal.
- [ ] Hierarquia, densidade e ação principal foram definidos.
- [ ] Layout respeita padrões existentes e domínio do produto.
- [ ] Estados de loading, vazio, erro, sucesso, permissão e conflito foram considerados.
- [ ] Acessibilidade e responsividade foram avaliadas.
- [ ] Visual Quality Score foi calculado com evidência.
- [ ] Product Experience Gate foi aplicado antes de implementação ou release.

## Conclusão

O PXS transforma qualidade visual em governança operacional. Ele garante que a CEIP produza software com qualidade de produto, não apenas qualidade de código.
