# Exemplo 01 - Roteamento por Policy Engine

## Objetivo

Demonstrar como classificar uma demanda e acionar agentes, gates e aprovações usando a CEIP.

## Cenário

Solicitação: criar integração externa para consulta de status de pagamento em um sistema empresarial existente.

## Classificação

| Campo | Decisão |
| --- | --- |
| Tipo de tarefa | Integração externa |
| Risco | Alto |
| Motivo do risco | Envolve API externa, autenticação, dados financeiros e impacto operacional |
| Policy principal | `policy-engine/AGENT_ROUTING_POLICIES.md` |
| Policies complementares | `policy-engine/API_POLICIES.md`, `policy-engine/SECURITY_POLICIES.md`, `policy-engine/RISK_POLICIES.md`, `policy-engine/APPROVAL_POLICIES.md` |

## Agentes

| Tipo | Agentes |
| --- | --- |
| Obrigatórios | API Integration Engineer, Security Engineer, Backend Engineer, QA Engineer, DevOps Engineer |
| Opcionais | Chief Software Architect, Documentation Engineer, Performance Engineer |

## Gates

- `quality-gates/backend-gate.md`
- `quality-gates/security-gate.md`
- `quality-gates/qa-gate.md`
- `quality-gates/performance-gate.md` quando houver volume relevante
- `quality-gates/documentation-gate.md`
- `quality-gates/release-gate.md`

## Evidências esperadas

- Contrato da API.
- Estratégia de autenticação.
- Mapeamento de erros.
- Idempotência ou justificativa.
- Plano de retry e timeout.
- Testes de contrato ou evidência manual.
- Plano de monitoramento.

## Resultado

A tarefa não deve seguir diretamente para implementação. O Orchestrator deve montar plano com handoff entre API Integration Engineer, Security Engineer, Backend Engineer, QA Engineer e DevOps Engineer.

## Checklist

- [ ] Tipo de tarefa foi localizado na matriz de roteamento.
- [ ] Risco foi justificado.
- [ ] Agentes obrigatórios foram listados.
- [ ] Gates foram definidos.
- [ ] Evidências foram exigidas.

## Conclusão

O Policy Engine transforma uma demanda ampla em fluxo operacional verificável.
