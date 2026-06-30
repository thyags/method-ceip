# Lifecycle da CEIP

## Objetivo

Definir o ciclo contínuo de evolução da CloudSix Engineering Intelligence Platform.

## Contexto

A CEIP deve evoluir como produto. Construir, revisar e validar uma vez não basta. Toda evolução deve passar por ciclo de maturidade com aprendizado e nova versão.

Para projetos consumidores, a CEIP também adota o ciclo operacional Business -> Product -> Experience -> Engineering -> Quality -> Release -> Learning. O Product Intelligence System ocupa a etapa Product e impede que ideias avancem diretamente para engenharia. O Product Experience System ocupa a etapa Experience quando há interface impactada e impede que telas avancem diretamente para frontend sem qualidade de produto.

## Diretrizes

- Não interferir durante implementação em andamento.
- Após construção, revisar estrutura antes de conteúdo.
- Revisões especializadas devem ocorrer em rodadas separadas.
- Validação deve preceder piloto.
- Lições aprendidas devem atualizar framework e roadmap.

## Ciclo oficial

```mermaid
flowchart TD
    A["Planejamento"] --> B["Construcao"]
    B --> C["Auto Revisao"]
    C --> D["Revisao Especializada"]
    D --> E["Validacao"]
    E --> F["Projeto Piloto"]
    F --> G["Licoes Aprendidas"]
    G --> H["Atualizacao do Framework"]
    H --> I["Nova Versao"]
    I --> A
```

## Ciclo operacional de projetos

```mermaid
flowchart LR
    A["Business"] --> B["Product Intelligence"]
    B --> C["Product Experience"]
    C --> D["Engineering"]
    D --> E["Quality"]
    E --> F["Release"]
    F --> G["Learning"]
    G --> A
```

## Critérios por etapa

| Etapa | Critério de saída |
| --- | --- |
| Planejamento | Escopo, restrições e objetivo definidos |
| Construção | Artefatos criados sem interrupção |
| Auto Revisão | Estrutura validada |
| Revisão Especializada | Rodadas por especialista concluídas |
| Validação | Suíte `validation/` executada |
| Projeto Piloto | Projeto real analisado |
| Lições Aprendidas | Lacunas registradas |
| Atualização do Framework | Módulos ajustados |
| Nova Versão | Roadmap e changelog atualizados |

## Exemplos

- A criação do CLI só deve avançar depois do piloto indicar quais comandos reduzem fricção real.
- Uma ideia de produto deve passar por Product Intelligence antes de arquitetura.
- Uma interface relevante deve passar por Product Experience antes de UX/UI/Frontend.
- Uma lacuna de policy encontrada em review deve passar por atualização do Policy Engine.

## Checklist

- [ ] Etapa atual foi identificada.
- [ ] Critério de saída foi cumprido.
- [ ] Lições foram registradas.
- [ ] Nova versão foi planejada quando necessário.

## Conclusão

Lifecycle impede evolução aleatória e mantém a CEIP em melhoria contínua controlada.
