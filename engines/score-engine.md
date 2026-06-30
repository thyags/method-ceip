# Score Engine

## Objetivo

Pontuar entregas, decisões e artefatos em escala de 0 a 100 para orientar aprovação, bloqueio e melhoria contínua.

## Entradas

- Critérios dos quality gates.
- Métricas em `metrics/`.
- Resultado de reviews.
- Classificação de risco.

## Processamento

1. Selecionar dimensões aplicáveis: qualidade, risco, segurança, performance e manutenibilidade.
2. Atribuir nota de 0 a 100 para cada dimensão.
3. Aplicar mínimos por risco.
4. Bloquear quando houver critério crítico não atendido, mesmo com média alta.
5. Registrar justificativa e evidência.

## Método de cálculo

O score consolidado deve usar apenas dimensões aplicáveis à entrega. Quando todas as dimensões se aplicarem, use pesos padrão:

| Dimensão | Peso padrão |
| --- | --- |
| Qualidade | 30 |
| Risco | 20 |
| Segurança | 20 |
| Performance | 15 |
| Manutenibilidade | 15 |

Quando uma dimensão não se aplicar, redistribua o peso proporcionalmente entre as dimensões restantes e registre a justificativa.

## Regras não compensatórias

- Falha crítica de segurança bloqueia a entrega mesmo com score consolidado alto.
- Falha em critério obrigatório de gate bloqueia até correção ou aprovação excepcional.
- Ausência de evidência reduz a nota da dimensão correspondente para no máximo 60.
- Risco crítico sem rollback ou contingência deve ser tratado como bloqueio, salvo exceção formal.

## Saídas

- Score por dimensão.
- Score consolidado.
- Status: aprovado, aprovado com ressalvas ou bloqueado.
- Recomendação de melhoria.

## Políticas relacionadas

- `policy-engine/QUALITY_GATE_POLICIES.md`
- `policy-engine/RISK_POLICIES.md`
- `policy-engine/APPROVAL_POLICIES.md`

## Agentes envolvidos

Quality Governor, QA Engineer, Security Engineer, Performance Engineer, Code Reviewer Tech Lead e Documentation Engineer.

## Quality gates aplicáveis

Todos os gates aplicáveis ao tipo de entrega.

## Escala oficial

| Pontuação | Interpretação |
| --- | --- |
| 90-100 | Excelente |
| 80-89 | Bom |
| 70-79 | Aceitável com ressalvas |
| 60-69 | Fraco |
| Abaixo de 60 | Bloqueado |

## Mínimos por risco

| Risco | Score mínimo |
| --- | --- |
| Crítico | 90 |
| Alto | 85 |
| Médio | 80 |
| Baixo | 70 |

## Fluxo

```mermaid
flowchart LR
    A["Evidencias"] --> B["Notas por dimensao"]
    B --> C["Minimo por risco"]
    C --> D{"Atingiu?"}
    D -->|Sim| E["Aprovar"]
    D -->|Nao| F["Bloquear ou pedir correcao"]
```

## Exemplo prático

Mudança de API com risco alto:

| Dimensão | Nota | Evidência |
| --- | --- | --- |
| Qualidade | 86 | Critérios de aceite e testes de contrato |
| Risco | 82 | Impacto mapeado, mas rollback parcial |
| Segurança | 90 | Autorização e validação revisadas |
| Performance | 78 | Baseline existe, monitoramento pendente |
| Manutenibilidade | 84 | Contratos documentados |

Score consolidado: 84. Como o risco é alto, o mínimo é 85. Resultado: bloqueado até melhorar performance, rollback ou risco residual.

## Checklist de validação

- [ ] A classificação de risco foi definida antes do score.
- [ ] Cada nota tem evidência.
- [ ] Critérios bloqueantes foram avaliados separadamente.
- [ ] O mínimo por risco foi aplicado.
- [ ] O score final foi registrado.
- [ ] Regras não compensatórias foram avaliadas.

## Conclusão

O Score Engine reduz subjetividade sem substituir julgamento técnico.
