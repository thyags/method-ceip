# Execution Pipeline

## Objetivo

Definir a sequência oficial de execução do CEIP Runtime.

## Pipeline

```mermaid
flowchart TD
    A["Receber tarefa"] --> B["Carregar contexto"]
    B --> C["Classificar tarefa"]
    C --> D["Classificar risco"]
    D --> E["Aplicar Policy Engine"]
    E --> F["Acionar Orchestrator"]
    F --> G["Montar prompt"]
    G --> H["Executar agente"]
    H --> I["Revisar"]
    I --> J["Aplicar gates"]
    J --> K["Calcular score"]
    K --> L{"Aprovado?"}
    L -->|Nao| M["Corrigir / mitigar / registrar exceção"]
    M --> F
    L -->|Sim| N["Registrar memória"]
```

## Critérios De Entrada

- Objetivo da tarefa conhecido.
- Projeto identificado.
- Workspace consultável ou exceção registrada.
- Stack e restrições verificadas quando aplicável.

## Critérios De Saída

- Plano ou entrega com evidência.
- Gates aplicáveis avaliados.
- Riscos e exceções registrados.
- Aprendizados classificados.

## Bloqueios

- Contexto insuficiente para decisão.
- Risco alto sem policy aplicável.
- Interface relevante sem Product Experience e CDL.
- Produto ou feature sem Product Intelligence quando obrigatório.
- Mudança arquitetural sem ADR quando necessário.

## Conclusão

O pipeline impede que a IA salte diretamente de tarefa para implementação.
