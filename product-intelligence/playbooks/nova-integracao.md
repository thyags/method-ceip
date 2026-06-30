# Playbook: Nova Integração

## Objetivo

Especificar uma integração externa ou interna antes de decisão arquitetural.

## Sequência

1. Mapear objetivo da integração.
2. Identificar sistemas envolvidos.
3. Executar Discovery Engine.
4. Executar Business Engine para regras, eventos e exceções.
5. Executar Requirements Engine.
6. Criar PRD ou RFC conforme escopo.
7. Definir critérios de aceite, falhas e reconciliação.
8. Acionar Policy Engine.

## Saídas obrigatórias

- Objetivo da integração.
- Sistemas envolvidos.
- Dados trocados.
- Regras de negócio.
- Critérios de aceite.
- Riscos e dependências.

## Gates

- Sistema de origem e destino identificados.
- Dono da integração definido.
- Falhas e reprocessamento considerados.

## Checklist

- [ ] Integração tem valor claro.
- [ ] Dados sensíveis foram mapeados.
- [ ] Dependências externas foram registradas.
- [ ] API Integration Engineer recebeu handoff.
