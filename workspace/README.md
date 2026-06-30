# CEIP Workspace

## Objetivo

Definir como projetos consumidores devem manter contexto local usando uma pasta `.ceip/`, sem misturar conhecimento específico de cliente com o CEIP Core.

## Contexto

O repositório `method-cloudsix` é o CEIP Core: a fonte oficial de Constituição, Policy Engine, Orchestrator, Brains, Engines, agentes, padrões, playbooks, templates, validações e governança global.

Cada projeto que usa o método deve manter seu próprio CEIP Workspace em `.ceip/`. Esse workspace guarda estado local: contexto, stack, memória, ADRs, RFCs, tarefas, reviews, métricas, artefatos, logs e configurações do projeto.

## Princípio central

```text
CEIP Core = método global reutilizável
CEIP Workspace = contexto local do projeto
```

Nunca copie o CEIP Core inteiro para `.ceip/`. O workspace deve conter somente informações específicas do projeto consumidor.

## Documentos

| Documento | Uso |
| --- | --- |
| `WORKSPACE_ARCHITECTURE.md` | Arquitetura Core + Workspace |
| `CEIP_CORE_VS_WORKSPACE.md` | Diferenças entre Core e Workspace |
| `INSTALLATION_GUIDE.md` | Instalação por submodule ou referência externa |
| `INITIALIZATION_FLOW.md` | Passo a passo para criar `.ceip/` |
| `WORKSPACE_STRUCTURE.md` | Estrutura recomendada do workspace |
| `PROJECT_CONTEXT_GUIDE.md` | Como registrar contexto do projeto |
| `MEMORY_GUIDE.md` | Como registrar memória local |
| `ADR_RFC_GUIDE.md` | Como registrar decisões e propostas |
| `TASK_MANAGEMENT_GUIDE.md` | Como organizar tarefas |
| `ARTIFACTS_GUIDE.md` | Como armazenar artefatos |
| `METRICS_GUIDE.md` | Como registrar métricas |
| `REVIEWS_GUIDE.md` | Como registrar reviews |
| `SECURITY_AND_PRIVACY.md` | O que pode ou não ser armazenado |
| `UPDATE_GUIDE.md` | Como atualizar Core e Workspace |
| `VALIDATION_GUIDE.md` | Como validar integração |

## Fluxo obrigatório

```mermaid
flowchart TD
    A["Solicitação do usuário"] --> B["Consultar CEIP Core"]
    B --> C["Consultar CEIP Workspace"]
    C --> D["Classificar tarefa"]
    D --> E["Classificar risco"]
    E --> F["Acionar Policy Engine"]
    F --> G["Acionar Orchestrator"]
    G --> H["Selecionar agentes"]
    H --> I["Executar análise"]
    I --> J["Planejar implementação"]
    J --> K["Aplicar Quality Gates"]
    K --> L["Registrar aprendizados no Workspace"]
```

## Checklist

- [ ] O projeto tem CEIP Core acessível em `.cloudsix/method` ou referência externa.
- [ ] O projeto tem workspace local em `.ceip/`.
- [ ] O workspace não duplica o CEIP Core.
- [ ] O `AGENTS.md` do projeto aponta para Core + Workspace.
- [ ] Aprendizados específicos do projeto ficam em `.ceip/`.
- [ ] Melhorias globais retornam para o repositório `method-cloudsix`.

## Conclusão

O CEIP Workspace transforma a CEIP em um sistema operacional de engenharia por projeto, mantendo o Core limpo, reutilizável e versionado.
