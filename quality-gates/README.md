# Quality Gates

## Objetivo

Definir os gates obrigatórios que uma entrega deve atravessar antes de ser considerada pronta.

## Contexto

Quality gates funcionam como controle final de governança. Eles conectam constituição, reviews, checklists, scorecards e evidências.

## Diretrizes

- Gate falhado exige correção, mitigação ou aceite formal de risco.
- Gate não substitui julgamento técnico.
- Hotfix pode ter gate reduzido, mas exige follow-up.
- Quality Governor deve validar gates em entregas relevantes.

## Gates oficiais

1. Arquitetura.
2. Segurança.
3. Performance.
4. Testes.
5. Documentação.
6. Review.

## Fluxo

```mermaid
flowchart LR
    A["Entrega"] --> B["Gate 1: Arquitetura"]
    B --> C["Gate 2: Seguranca"]
    C --> D["Gate 3: Performance"]
    D --> E["Gate 4: Testes"]
    E --> F["Gate 5: Documentacao"]
    F --> G["Gate 6: Review"]
    G --> H["Done"]
```

## Exemplos

- Uma mudança visual simples pode passar por gates reduzidos, mas ainda precisa de review e documentação quando alterar comportamento.
- Uma migração de dados passa por todos os gates.

## Checklist

- [ ] Todos os gates aplicáveis foram avaliados.
- [ ] Bloqueios foram tratados.
- [ ] Riscos aceitos têm justificativa.
- [ ] Scorecard foi preenchido quando necessário.

## Conclusão

Quality gates impedem que uma entrega avance apenas porque "funcionou" localmente.
