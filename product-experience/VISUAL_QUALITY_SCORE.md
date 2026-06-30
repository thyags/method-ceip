# Visual Quality Score

## Objetivo

Definir critérios objetivos para pontuar qualidade visual e experiência de interface em escala de 0 a 100.

## Dimensões

| Dimensão | Peso padrão | Critério |
| --- | ---: | --- |
| Hierarquia | 15 | Prioridades visuais e ação principal são claras |
| Espaçamento | 10 | Espaços agrupam, separam e criam ritmo sem desperdício |
| Alinhamento | 10 | Grid, colunas, componentes e textos mantêm consistência |
| Consistência | 15 | Padrões visuais e interativos são reaproveitados corretamente |
| Acessibilidade | 15 | Contraste, foco, leitura, alvos e estados são adequados |
| Equilíbrio visual | 10 | Densidade, contraste e composição são proporcionais |
| Interação | 15 | Estados, feedback e confirmação reduzem erro |
| Premium feel | 10 | Interface transmite software comercial maduro e confiável |

## Escala

| Pontuação | Interpretação |
| --- | --- |
| 90-100 | Excelente, pronto para produto premium |
| 80-89 | Bom, com ajustes menores |
| 70-79 | Aceitável com ressalvas |
| 60-69 | Fraco, precisa de revisão |
| Abaixo de 60 | Bloqueado |

## Bloqueios não compensatórios

- Texto ilegível ou sobreposto.
- Ação principal ausente em fluxo operacional.
- Estado de erro ausente em operação crítica.
- Informação crítica dependente apenas de cor.
- Layout quebrado em viewport obrigatório.
- Fluxo principal impossível de concluir.
- Interface sem evidência de origem no requisito.

## Mínimos por risco

| Risco | Score mínimo |
| --- | --- |
| Crítico | 90 |
| Alto | 85 |
| Médio | 80 |
| Baixo | 70 |

## Exemplo

| Dimensão | Nota |
| --- | ---: |
| Hierarquia | 9.8 |
| Espaçamento | 9.4 |
| Alinhamento | 10 |
| Consistência | 9.7 |
| Acessibilidade | 9.2 |
| Equilíbrio visual | 9.8 |
| Interação | 9.5 |
| Premium feel | 9.7 |

Resultado: 96,4/100.

## Checklist

- [ ] Cada nota possui evidência.
- [ ] Bloqueios não compensatórios foram avaliados.
- [ ] Mínimo por risco foi aplicado.
- [ ] Resultado foi registrado no Workspace quando aplicável.
- [ ] Melhorias foram priorizadas por impacto na tarefa.

## Conclusão

Visual Quality Score reduz subjetividade e torna qualidade de produto comparável entre telas, times e projetos.
