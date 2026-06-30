# Design Review Engine

## Objetivo

Avaliar se uma interface está pronta para UX detalhado, UI, frontend, QA ou release.

## Entradas

- PRD, requisitos ou exceção formal.
- Critérios de aceite.
- Screenshots, wireframes ou especificação de tela.
- Design system, componentes e padrões existentes.
- Parecer de CDL Compliance quando houver interface relevante.
- Classificação de risco do Policy Engine.

## Processamento

1. Confirmar objetivo da tela.
2. Identificar usuário, tarefa principal e contexto de uso.
3. Avaliar hierarquia, ação principal e densidade.
4. Avaliar layout, componentes, estados e acessibilidade.
5. Verificar se a interface respeita a CloudSix Design Language e a conformidade CDL.
6. Listar bloqueios e melhorias.
7. Encaminhar para Visual Quality Score.

## Critérios bloqueantes

- Tela sem objetivo identificável.
- Ação principal ausente em fluxo operacional.
- Estados críticos não especificados.
- Acessibilidade básica ignorada.
- Layout quebra em viewport obrigatório.
- Interface contradiz requisito ou regra de negócio.
- CDL local ausente quando obrigatória.

## Saídas

- Parecer de design review.
- Lista de bloqueios.
- Recomendações priorizadas.
- Parecer de conformidade CDL.
- Handoff para UX, UI, Frontend ou QA.

## Checklist

- [ ] Objetivo e usuário foram identificados.
- [ ] Ação principal está clara.
- [ ] Estados críticos foram avaliados.
- [ ] CDL Compliance foi avaliado quando aplicável.
- [ ] Acessibilidade básica foi considerada.
- [ ] Bloqueios foram separados de melhorias.

## Conclusão

O Design Review Engine impede que telas tecnicamente funcionais avancem com experiência fraca.
