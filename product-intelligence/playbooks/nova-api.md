# Playbook: Nova API

## Objetivo

Especificar uma API como produto consumível, antes do contrato técnico definitivo.

## Sequência

1. Identificar consumidor da API.
2. Executar Discovery Engine para casos de uso.
3. Executar Business Engine para regras e permissões.
4. Executar Requirements Engine.
5. Criar PRD de API.
6. Definir critérios de aceite de contrato.
7. Acionar Policy Engine para segurança, dados e integrações.
8. Fazer handoff para API Integration Engineer e Architecture.

## Saídas obrigatórias

- Casos de uso.
- Requisitos funcionais e não funcionais.
- Regras de permissão.
- Critérios de aceite.
- Riscos de segurança e dados.

## Gates

- Consumidor e objetivo claros.
- Dados sensíveis mapeados.
- Idempotência, erro e versionamento considerados.

## Checklist

- [ ] API resolve caso de uso confirmado.
- [ ] Segurança foi classificada.
- [ ] Performance esperada foi registrada.
- [ ] Contrato técnico não foi definido antes do produto.
