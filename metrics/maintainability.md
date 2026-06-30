# Métricas de Manutenibilidade

## Objetivo

Definir sinais para avaliar facilidade de evolução, leitura e manutenção.

## Contexto

Manutenibilidade não é apenas estética. Ela afeta custo, velocidade, onboarding, risco de regressão e capacidade de resposta.

## Diretrizes

- Avaliar tendência por módulo ou área crítica.
- Combinar métricas automáticas com review humano.
- Usar como gatilho para refatoração, não como punição.

## Métricas sugeridas

- Duplicação de regra de negócio.
- Complexidade por módulo ou função.
- Frequência de mudança em arquivos críticos.
- Tempo médio para revisar PR.
- Quantidade de bugs recorrentes por área.
- Cobertura de testes em fluxos críticos.

## Exemplos

- Módulo com alta mudança e baixa cobertura merece teste de caracterização.
- Arquivo com regras duplicadas deve acionar Refactoring Specialist.

## Checklist

- [ ] Área crítica foi identificada.
- [ ] Tendência foi analisada.
- [ ] Métrica foi conectada a ação.
- [ ] Refatoração tem validação.

## Conclusão

Manutenibilidade deve ser monitorada para reduzir custo futuro de mudança.
