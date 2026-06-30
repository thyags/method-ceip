# Pattern - Factory

## Objetivo

Centralizar criação de objetos ou estruturas quando a construção tem regra, variação ou complexidade.

## Contexto

Factories evitam espalhar lógica de criação. Em casos simples, podem ser abstração desnecessária.

## Diretrizes

- Use quando criação exige validação ou variantes.
- Nomeie factory com linguagem do domínio.
- Teste combinações críticas de criação.

## Exemplos

- Criar ordem de serviço com itens, status inicial e auditoria.

## Checklist

- [ ] Construção tem regra real.
- [ ] Factory reduz duplicação.
- [ ] Variantes são explícitas.

## Conclusão

Factory melhora consistência quando criação deixou de ser trivial.
