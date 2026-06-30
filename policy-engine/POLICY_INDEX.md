# Policy Index

## Objetivo

Servir como índice das políticas da CEIP.

## Contexto

O Policy Engine possui políticas por domínio. Este índice ajuda humanos e IAs a localizar rapidamente qual política consultar.

## Diretrizes

- Comece por `AGENT_ROUTING_POLICIES.md` quando a tarefa envolver execução.
- Use `RISK_POLICIES.md` antes de decidir aprovação.
- Use políticas específicas quando houver impacto técnico claro.

## Índice de políticas

| Política | Quando usar |
| --- | --- |
| `AGENT_ROUTING_POLICIES.md` | Escolher agentes por tipo de tarefa |
| `QUALITY_GATE_POLICIES.md` | Definir gates obrigatórios |
| `SECURITY_POLICIES.md` | Dados sensíveis, permissão, autenticação e abuso |
| `ARCHITECTURE_POLICIES.md` | Mudança estrutural, fronteiras e ADR |
| `DATABASE_POLICIES.md` | Banco, migração, dados e integridade |
| `API_POLICIES.md` | APIs, webhooks e integrações |
| `UX_UI_POLICIES.md` | Mudanças visuais e experiência |
| `PERFORMANCE_POLICIES.md` | Otimização, latência, volume e cache |
| `DOCUMENTATION_POLICIES.md` | Atualização documental |
| `RISK_POLICIES.md` | Classificação de risco |
| `PRODUCT_INTELLIGENCE_POLICIES.md` | Discovery, PRD, MVP, roadmap e critérios antes de arquitetura/implementação |
| `DECISION_POLICIES.md` | ADR, RFC, trade-offs e reversibilidade |
| `ESCALATION_POLICIES.md` | Quando escalar para meta-agentes ou humano |
| `APPROVAL_POLICIES.md` | Aprovação por nível de risco |

## Exemplos

- Alteração em permissões consulta Security, Risk, Approval, Agent Routing e Quality Gate policies.
- Novo produto, feature relevante, módulo, API ou integração consulta Product Intelligence, Agent Routing, Risk, Approval e Quality Gate policies.

## Checklist

- [ ] Política geral foi localizada.
- [ ] Política específica foi localizada.
- [ ] Regras em `rules/` foram consideradas.
- [ ] Exemplo aplicável foi consultado.

## Conclusão

Policy Index é a porta de entrada do Policy Engine.
