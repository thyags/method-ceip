# Exemplo 02 - Aplicação do Score Engine

## Objetivo

Mostrar como usar o Score Engine para decidir aprovação, ressalva ou bloqueio.

## Cenário

Entrega: alteração em endpoint interno usado por uma tela operacional crítica.

## Classificação de risco

Risco médio, porque afeta fluxo usado diariamente, mas não altera autenticação, permissão, cobrança ou migração de dados.

## Scores por dimensão

| Dimensão | Nota | Evidência |
| --- | --- | --- |
| Qualidade | 84 | Critérios de aceite atendidos e teste de regressão executado |
| Risco | 80 | Impactos mapeados e rollback simples |
| Segurança | 88 | Autorização preservada e entradas validadas |
| Performance | 74 | Sem baseline formal, mas sem consulta adicional crítica |
| Manutenibilidade | 86 | Contrato documentado e código coeso |

## Cálculo

Score consolidado com pesos padrão:

```text
(84 x 0,30) + (80 x 0,20) + (88 x 0,20) + (74 x 0,15) + (86 x 0,15) = 82,8
```

Score final arredondado: 83.

## Decisão

Como o risco é médio, o mínimo é 80. A entrega pode ser aprovada com ressalva de monitorar performance e criar baseline se o endpoint crescer em uso.

## Bloqueios avaliados

- Nenhuma falha crítica de segurança.
- Nenhum gate obrigatório falhou.
- Evidências existem para QA e backend.

## Checklist

- [ ] Risco foi definido antes do score.
- [ ] Notas têm evidência.
- [ ] Mínimo por risco foi aplicado.
- [ ] Regras não compensatórias foram avaliadas.
- [ ] Decisão final foi registrada.

## Conclusão

Score bom não é média solta; é decisão com evidência e mínimo por risco.
