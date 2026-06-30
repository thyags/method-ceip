# Handoff Protocol

## Objetivo

Padronizar passagem de contexto entre agentes e fases de trabalho.

## Contexto

Handoff é obrigatório quando uma análise sai de um agente e entra em outro. Sem handoff, o próximo agente tende a repetir investigação, assumir contexto ou perder decisões já tomadas.

## Conteúdo mínimo do handoff

- Objetivo.
- Contexto observado.
- Decisões já tomadas.
- Riscos e dúvidas.
- Arquivos ou documentos relevantes.
- Próximo agente esperado.
- Evidências produzidas.

## Modelo

```text
Origem:
Destino:
Objetivo:
Fatos observados:
Hipóteses:
Decisões tomadas:
Riscos:
Pendências:
Documentos consultados:
Evidências:
Próxima ação:
```

## Critérios de qualidade

- Fatos e hipóteses estão separados.
- Decisão tem justificativa.
- Risco residual está explícito.
- Arquivos e documentos relevantes são citados.
- Próxima ação é executável.

## Checklist

- [ ] Contexto suficiente foi passado.
- [ ] Dúvidas estão explícitas.
- [ ] Não há suposição escondida.
- [ ] Saída anterior é verificável.
- [ ] Próxima ação está clara.
- [ ] Fatos e hipóteses foram separados.
- [ ] Risco residual foi declarado quando aplicável.

## Conclusão

Handoff ruim faz o próximo agente recomeçar ou assumir contexto errado.
