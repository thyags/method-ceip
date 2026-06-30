# Risk Engine

## Objetivo

Classificar risco técnico, operacional, de negócio, segurança, dados e experiência antes da execução.

## Entradas

- Descrição da mudança.
- Impacto em usuários, dados, integrações, segurança e operação.
- Histórico de incidentes e dependências.

## Processamento

1. Classificar risco como baixo, médio, alto ou crítico.
2. Identificar dimensões de impacto.
3. Definir evidências, gates e aprovações.
4. Encaminhar exceções ao Approval Engine.

## Saídas

- Classificação de risco.
- Motivos da classificação.
- Controles obrigatórios.
- Aprovações necessárias.

## Políticas relacionadas

- `policy-engine/RISK_POLICIES.md`
- `policy-engine/APPROVAL_POLICIES.md`
- `policy-engine/rules/risk-classification-rules.md`

## Agentes envolvidos

Product Manager, Chief Software Architect, Security Engineer, QA Engineer, DevOps Engineer e Quality Governor.

## Quality gates aplicáveis

Gates definidos conforme impacto e risco.

## Exemplos

- Alteração visual isolada: baixo risco.
- Migração de dados com rollback incerto: alto ou crítico.
- Mudança em autenticação: alto por padrão.

## Checklist de validação

- [ ] Impactos foram mapeados.
- [ ] Risco foi justificado.
- [ ] Gates e aprovações refletem o risco.
- [ ] Risco residual foi declarado.
- [ ] Mudança crítica tem plano de rollback.

## Conclusão

Risco deve ser classificado antes da solução, não depois.
