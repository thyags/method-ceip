# Recipe: Otimizar Consulta

## Objetivo

Otimizar consulta de dados com medição, segurança e controle de regressão.

## Entradas

Consulta, volume, plano de execução, tempo atual, índice existente, uso do resultado e risco.

## Passos

1. Medir o comportamento atual.
2. Acionar Database Architect e Performance Engineer.
3. Avaliar plano de execução e volume.
4. Propor índice, reescrita, paginação, cache ou materialização.
5. Medir resultado e registrar trade-offs.

## Saídas

Plano de otimização, evidência antes/depois, risco residual e atualização documental.

## Checklist

- [ ] Baseline foi medido.
- [ ] Plano de execução foi avaliado.
- [ ] Trade-offs foram registrados.
- [ ] Resultado foi medido.

## Conclusão

Consulta só está otimizada quando há evidência comparável.
