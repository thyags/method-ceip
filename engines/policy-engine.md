# Policy Engine

## Objetivo

Aplicar políticas existentes e identificar regras repetitivas que devem virar novas políticas.

## Contexto

Políticas tornam regras reutilizáveis e independentes da memória do modelo. O Policy Engine conecta constitution, policies, quality gates e reviews.

## Diretrizes

- Toda regra repetitiva deve ser formalizada.
- Políticas devem ter gatilho, regra, exceção e validação.
- Exceções devem registrar risco residual.

## Entradas

- Context brief.
- Tipo de tarefa.
- Policies existentes.
- Leis da constitution.

## Processamento

1. Identificar políticas aplicáveis.
2. Aplicar regras obrigatórias.
3. Detectar lacunas de política.
4. Registrar exceções e riscos.
5. Recomendar nova policy quando necessário.

## Saídas

- Policies aplicadas.
- Bloqueios ou exceções.
- Recomendações de novas policies.

## Políticas relacionadas

- `policy-engine/POLICY_INDEX.md`
- `policy-engine/AGENT_ROUTING_POLICIES.md`
- `policy-engine/QUALITY_GATE_POLICIES.md`
- `policy-engine/APPROVAL_POLICIES.md`

## Agentes envolvidos

Policy Brain, Quality Governor, Chief Software Architect, Security Engineer e agente especialista do domínio.

## Quality gates aplicáveis

Gates definidos por `policy-engine/QUALITY_GATE_POLICIES.md` conforme tipo de tarefa.

## Exemplos

- Se toda API precisa contrato, autenticação e erro previsível, isso deve estar em API policy.

## Checklist

- [ ] Policies aplicáveis foram identificadas.
- [ ] Exceções foram justificadas.
- [ ] Regras repetitivas foram capturadas.
- [ ] Risco residual foi registrado.

## Conclusão

Policy Engine transforma governança em mecanismo aplicável.
