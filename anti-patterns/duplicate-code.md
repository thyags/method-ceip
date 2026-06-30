# Anti-pattern - Duplicate Code

## Objetivo

Identificar duplicação prejudicial, especialmente de regra de negócio.

## Contexto

Nem toda duplicação é ruim. O problema é duplicar conhecimento que precisa mudar de forma consistente.

## Diretrizes

- Diferencie duplicação acidental de semelhança temporária.
- Priorize duplicação de regra crítica.
- Evite abstração prematura para duplicação superficial.

## Sintomas

- Mesma validação em múltiplos lugares.
- Correções precisam ser replicadas manualmente.
- Fluxos parecidos divergem sem justificativa.

## Exemplos

- Cálculo de desconto em checkout, relatório e importador com fórmulas levemente diferentes.

## Checklist

- [ ] Duplicação afeta regra ou manutenção real.
- [ ] Fonte única foi definida quando necessário.
- [ ] Testes garantem equivalência.

## Conclusão

Duplicação de regra deve ser removida com cuidado; duplicação superficial pode esperar.
