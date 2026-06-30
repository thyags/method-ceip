# Exemplo - Refatoração de Legado

## Objetivo

Mostrar como governar refatoração em sistema legado.

## Contexto

Legado costuma ter regras implícitas, testes escassos e risco de regressão.

## Diretrizes

- Preservar comportamento.
- Criar testes de caracterização.
- Refatorar incrementalmente.

## Aplicação

- Tipo: refatoração.
- Risco: médio ou alto.
- Agentes obrigatórios: Refactoring Specialist, QA Engineer, Code Reviewer.
- Agentes opcionais: Chief Architect, Database Architect.
- Documentos: plano de refatoração, testes de caracterização.
- Gates: QA, Review, Documentation; Architecture se estrutural.

## Exemplos

Extrair regra de cálculo financeiro exige casos históricos antes de mudar estrutura.

## Checklist

- [ ] Comportamento atual foi caracterizado.
- [ ] Mudança funcional foi separada.
- [ ] Testes protegem regressão.
- [ ] Refatoração foi fatiada.

## Conclusão

Refatoração de legado é redução controlada de risco, não reescrita por preferência.
