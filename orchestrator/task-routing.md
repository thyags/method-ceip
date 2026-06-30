# Task Routing

## Objetivo

Roteiar demandas para agentes, gates e aprovações corretas.

## Contexto

Task Routing é a ponte entre Policy Engine e execução. Ele não substitui a matriz de `policy-engine/AGENT_ROUTING_POLICIES.md`; ele aplica a matriz a uma demanda concreta e transforma classificação em plano.

## Processo

1. Identificar tipo de tarefa.
2. Classificar risco.
3. Consultar `policy-engine/AGENT_ROUTING_POLICIES.md`.
4. Verificar Product Intelligence e Product Experience obrigatórios.
5. Selecionar agentes obrigatórios e opcionais.
6. Definir quality gates e aprovadores.

## Saída mínima

```text
Tipo de tarefa:
Risco:
Agentes obrigatórios:
Agentes opcionais:
Documentos exigidos:
Quality gates:
Aprovação:
Handoff inicial:
Critério de conclusão:
```

## Exemplos

- Integração externa: API Integration Engineer, Security Engineer, Backend Engineer, QA e Documentation Engineer.
- Mudança de banco: Database Architect, Backend Engineer, QA, DevOps e Security Engineer.
- Ajuste visual relevante: Product Experience System, Frontend UX Specialist, UI Designer e QA quando houver fluxo.

## Critérios de bloqueio

- Tipo de tarefa indefinido em demanda relevante.
- Risco não classificado.
- Agente obrigatório omitido sem justificativa.
- Gate obrigatório ausente.
- Product Experience omitido em interface relevante.
- Aprovação indefinida em risco alto ou crítico.

## Checklist

- [ ] Tipo foi identificado.
- [ ] Risco foi definido.
- [ ] Routing matrix foi consultada.
- [ ] Product Experience foi avaliado quando havia interface relevante.
- [ ] Gates foram definidos.
- [ ] Aprovação foi definida.
- [ ] Critérios de bloqueio foram avaliados.

## Conclusão

Roteamento bom reduz retrabalho e lacunas de revisão.
