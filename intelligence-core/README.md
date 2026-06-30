# Engineering Intelligence Core

## Objetivo

Definir o cérebro central da CEIP, responsável por coordenar todos os brains, engines, políticas, agentes, memória, revisões e ciclos de evolução.

## Contexto

Agentes especialistas resolvem partes do trabalho. O Engineering Intelligence Core existe acima deles para garantir coerência entre contexto, análise, planejamento, políticas, revisão, qualidade, conhecimento e aprendizado.

## Diretrizes

- Nenhuma decisão relevante deve ocorrer fora do Core.
- O Core deve consultar a constituição, políticas, contexto, memória e gates antes de concluir uma decisão.
- Brains especializados orientam raciocínio por domínio, mas não substituem agentes especialistas.
- Engines operacionalizam decisões repetitivas e reduzem dependência da memória do modelo.

## Brains oficiais

| Brain | Responsabilidade |
| --- | --- |
| Business Brain | Entender domínio, regras, processos e valor |
| Architecture Brain | Preservar arquitetura, fronteiras e evolução |
| Security Brain | Avaliar risco, privacidade, permissões e abuso |
| Performance Brain | Avaliar latência, volume, custo e gargalos |
| Quality Brain | Governar gates, score, testes e critérios de aceite |
| Knowledge Brain | Preservar memória, patterns, anti-patterns e ADRs |
| Planning Brain | Fatiar execução, dependências e roadmap |
| Thinking Brain | Estruturar raciocínio antes de solução |
| Policy Brain | Aplicar políticas e converter regras recorrentes |
| Review Brain | Coordenar revisões especializadas |
| Learning Brain | Transformar pilotos, incidentes e reviews em evolução |

## Fluxo do Core

```mermaid
flowchart LR
    A["Task"] --> B["Context Engine"]
    B --> C["Thinking Brain"]
    C --> D["Policy Brain"]
    D --> E["Planning Brain"]
    E --> F["Specialist Agents"]
    F --> G["Review Brain"]
    G --> H["Quality Brain"]
    H --> I["Learning Brain"]
    I --> J["Knowledge Brain"]
```

## Exemplos

- Uma nova integração passa por Context Engine, Thinking Brain, Policy Brain, API Integration Engineer, Security Brain, Review Brain e Quality Brain.
- Uma lacuna encontrada no piloto GSA Oficina passa pelo Learning Brain e vira atualização em policies, knowledge, validation ou recipes.

## Checklist

- [ ] Contexto foi construído antes da análise.
- [ ] Thinking Brain estruturou o problema antes da solução.
- [ ] Policy Brain aplicou políticas relevantes.
- [ ] Planning Brain fatiou a execução.
- [ ] Review e Quality Brain validaram a entrega.
- [ ] Learning Brain registrou aprendizado reutilizável.

## Conclusão

O Engineering Intelligence Core é a diferença entre um conjunto de documentos e uma plataforma de inteligência de engenharia.
