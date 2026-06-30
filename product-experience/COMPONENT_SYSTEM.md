# Component System

## Objetivo

Definir critérios para seleção, uso e variação de componentes de interface sem impor biblioteca específica.

## Diretrizes

- Usar componentes existentes antes de criar novos.
- Escolher componente pela tarefa, não pela preferência visual.
- Documentar variações de estado e comportamento.
- Evitar componentes redundantes para resolver o mesmo problema.
- Preservar acessibilidade e responsividade.
- Registrar exceções quando um componente local não atende à experiência necessária.

## Critérios por componente

| Componente | Usar quando | Evitar quando |
| --- | --- | --- |
| Botão primário | Há uma ação dominante no contexto | Existem múltiplas ações equivalentes |
| Menu de ações | Há ações secundárias, raras ou contextuais | A ação é crítica e precisa ser explícita |
| Badge | Estado curto precisa ser escaneado | O texto vira explicação longa |
| Card | Informações formam unidade independente | A tela vira coleção de blocos soltos |
| Tabela | Comparação e operação em massa importam | Cada item exige leitura narrativa |
| Modal | Decisão curta interrompe fluxo com propósito | Processo exige múltiplas etapas |
| Drawer ou painel | Contexto complementar deve permanecer próximo | O conteúdo precisa de tela própria |
| Stepper | Sequência longa reduz erro | Etapas são artificiais ou obrigam clique extra |

## Estados obrigatórios

- default;
- hover quando aplicável;
- focus;
- disabled;
- loading;
- erro;
- sucesso;
- vazio;
- permissão negada;
- conflito ou concorrência quando aplicável.

## Checklist

- [ ] Componentes existentes foram avaliados.
- [ ] Cada componente tem propósito claro.
- [ ] Estados foram especificados.
- [ ] Componentes redundantes foram removidos.
- [ ] A escolha respeita stack e design system local.

## Conclusão

Um bom sistema de componentes reduz variação desnecessária e aumenta qualidade percebida sem travar a stack do projeto.
