# 06 - Playbook de Incidente de Produção

## Objetivo

Orientar resposta a incidentes de produção com contenção, comunicação, diagnóstico, recuperação e aprendizado.

## Contexto

Incidentes podem envolver indisponibilidade, erro funcional, perda de dados, lentidão, integração quebrada ou exposição de informação. A resposta deve priorizar impacto ao usuário e segurança operacional.

## Diretrizes

- Classificar severidade e impacto.
- Conter dano antes de buscar solução definitiva.
- Comunicar status de forma objetiva.
- Registrar linha do tempo, ações e evidências.
- Fazer pós-incidente com causa raiz e prevenção.

## Fluxo

1. Declarar incidente e responsável.
2. Classificar severidade.
3. Conter impacto: rollback, feature flag, bloqueio, mitigação ou escala.
4. Diagnosticar com logs, métricas e mudanças recentes.
5. Recuperar serviço.
6. Validar normalização.
7. Produzir relatório de incidente.

## Exemplos

- Integração externa fora do ar: pausar consumo, enfileirar eventos e comunicar atraso.
- Erro de permissão: bloquear rota afetada, auditar acesso e corrigir autorização.

## Checklist

- [ ] Severidade foi classificada.
- [ ] Responsável foi definido.
- [ ] Impacto foi contido.
- [ ] Comunicação foi feita.
- [ ] Evidências foram registradas.
- [ ] Pós-incidente foi planejado.

## Conclusão

Incidente bem conduzido reduz dano imediato e transforma falha em melhoria operacional.
