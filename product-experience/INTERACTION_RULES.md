# Interaction Rules

## Objetivo

Padronizar regras de interação para feedback, estados, erros, confirmações, carregamento e continuidade de fluxo.

## Estados obrigatórios

### Loading

Use indicador proporcional ao tempo e ao impacto. Skeleton é adequado quando preserva estrutura e reduz sensação de espera.

### Empty state

Deve explicar o estado, orientar próximo passo e evitar tom genérico. Não deve inventar ação não prevista.

### Erro

Deve informar o que ocorreu, o impacto e a ação possível. Erros críticos devem preservar dados preenchidos.

### Sucesso

Deve confirmar resultado e indicar próximo passo quando necessário. Evite notificações excessivas.

### Disabled

Deve ter motivo compreensível quando a indisponibilidade afetar fluxo principal.

### Confirmação

Ações destrutivas, irreversíveis ou financeiras exigem confirmação proporcional ao risco.

### Permissão

Quando o usuário não puder agir, a interface deve explicar limite sem expor regra sensível.

## Regras

- Feedback deve acontecer perto da ação.
- Ações críticas não devem depender apenas de cor.
- Fluxos longos devem preservar progresso.
- Mensagens devem ser específicas e acionáveis.
- Estados devem ser consistentes entre telas.
- Hover não deve ser o único meio de descobrir ação.

## Checklist

- [ ] Loading, vazio, erro e sucesso foram definidos.
- [ ] Ações críticas têm confirmação proporcional.
- [ ] Feedback aparece no contexto correto.
- [ ] Mensagens orientam ação possível.
- [ ] Fluxo preserva dados e progresso quando há erro.

## Conclusão

Interação de qualidade reduz fricção, erro operacional e sensação de sistema inacabado.
