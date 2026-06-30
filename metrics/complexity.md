# Métricas de Complexidade

## Objetivo

Definir sinais para identificar complexidade acidental ou risco estrutural.

## Contexto

Complexidade pode ser essencial ao domínio ou criada pela implementação. A métrica deve ajudar a distinguir as duas.

## Diretrizes

- Não trate complexidade como erro automático.
- Avalie se a complexidade representa regra real ou solução acidental.
- Use complexidade como gatilho para análise, review e refatoração.

## Métricas sugeridas

- Número de responsabilidades por módulo.
- Profundidade de dependências.
- Quantidade de condicionais em regra crítica.
- Número de integrações por fluxo.
- Volume de estados e transições.
- Dificuldade de testar comportamento isolado.

## Exemplos

- Muitos estados em pedido podem ser complexidade de domínio; documente transições.
- Muitas dependências em serviço simples pode indicar acoplamento acidental.

## Checklist

- [ ] Complexidade foi classificada como essencial ou acidental.
- [ ] Impacto em teste e manutenção foi avaliado.
- [ ] Redução incremental foi proposta quando necessário.

## Conclusão

Complexidade deve ser explicada, encapsulada e validada.
