# Layout System

## Objetivo

Orientar decisões de layout para telas, painéis, formulários, tabelas, dashboards e páginas de detalhe.

## Diretrizes

- Começar pela tarefa principal do usuário.
- Definir hierarquia antes de escolher componentes.
- Usar grid para alinhar leitura, ação e comparação.
- Separar áreas por função, não por decoração.
- Manter ações próximas do contexto em que são usadas.
- Preservar densidade quando a tarefa exige repetição e comparação.
- Reduzir fragmentação visual causada por cards desnecessários.

## Decisões recorrentes

| Pergunta | Critério |
| --- | --- |
| Esse card precisa existir? | Use quando houver agrupamento real, status independente ou ação própria |
| Essa tabela deveria virar cards? | Use cards quando comparação linha a linha não for prioridade |
| Esse filtro deve ser lateral? | Use lateral quando filtros forem muitos, persistentes ou combinatórios |
| Esse modal deveria existir? | Use modal para decisão curta; evite para fluxo longo |
| Esse badge ajuda? | Use quando estado precisar ser percebido rapidamente |
| Esse botão pode virar menu? | Use menu para ações secundárias ou raras |
| Esse formulário pode ser dividido? | Divida por etapas quando reduzir erro ou carga cognitiva |

## Padrões por tipo de tela

### Dashboard

Deve priorizar indicadores acionáveis, comparação, exceções e atalhos para investigação.

### Tabela operacional

Deve priorizar scan, ordenação, filtros, status, ações contextuais e densidade controlada.

### Formulário

Deve priorizar agrupamento, validação, progressão, ajuda contextual e prevenção de erro.

### Página de detalhe

Deve priorizar resumo, histórico, ações principais, dados relacionados e rastreabilidade.

## Checklist

- [ ] A tarefa principal determina o layout.
- [ ] Agrupamentos têm lógica de negócio ou operação.
- [ ] Ações estão perto do contexto.
- [ ] Layout não cria espaços mortos relevantes.
- [ ] Responsividade preserva a tarefa principal.

## Conclusão

Layout Intelligence reduz decisões visuais arbitrárias e transforma composição em ferramenta de produtividade.
