# Exemplo: Tabela Operacional

## Contexto

Tabela usada para consulta, comparação e ação recorrente em registros de negócio.

## Decisão de experiência

- Colunas priorizadas por decisão, não por estrutura técnica do banco.
- Status com cor e texto, nunca apenas cor.
- Ações frequentes explícitas; ações raras em menu contextual.
- Filtros salvos ou persistentes quando o uso for recorrente.
- Densidade ajustada para comparação sem comprometer leitura.

## Estados

- Loading por linhas ou skeleton.
- Empty state com próximo passo claro.
- Erro preservando filtros aplicados.
- Seleção múltipla com barra de ações contextual.

## Visual Quality Score esperado

Mínimo 80 em risco médio; 85 ou mais quando a tabela apoiar operação crítica.

## Checklist

- [ ] Colunas refletem decisão do usuário.
- [ ] Ações não competem entre si.
- [ ] Status são acessíveis.
- [ ] Filtros reduzem esforço.
- [ ] Densidade permite comparação.
