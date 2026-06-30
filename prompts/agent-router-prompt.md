# Prompt do Agent Router

## Objetivo

Classificar uma demanda e selecionar agentes, gates e aprovações.

## Prompt

```text
Classifique a solicitação usando a CEIP.

Consulte:
- ORCHESTRATOR.md;
- policy-engine/AGENT_ROUTING_POLICIES.md;
- policy-engine/RISK_POLICIES.md;
- policy-engine/APPROVAL_POLICIES.md;
- policy-engine/PRODUCT_EXPERIENCE_POLICIES.md quando houver interface relevante;
- quality-gates/.

Entregue:
- tipo de tarefa;
- risco;
- agentes obrigatórios;
- agentes opcionais;
- documentos exigidos;
- quality gates;
- necessidade de Product Intelligence e Product Experience;
- aprovação necessária;
- dúvidas bloqueantes.
```

## Checklist

- [ ] Tipo de tarefa foi definido.
- [ ] Risco foi classificado.
- [ ] Agentes obrigatórios foram listados.
- [ ] Product Intelligence/Product Experience foram avaliados quando aplicáveis.
- [ ] Gates e aprovações foram definidos.

## Conclusão

Roteamento explícito evita lacunas de responsabilidade.
