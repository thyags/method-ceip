# Exemplo: Dashboard Operacional

## Contexto

Dashboard para acompanhamento diário de operação, com indicadores, exceções e atalhos para investigação.

## Decisão de experiência

- Indicadores principais no topo com comparação e estado.
- Exceções críticas logo abaixo, antes de gráficos decorativos.
- Filtros persistentes quando o usuário alterna unidade, período ou responsável.
- Ações contextuais próximas de alertas e listas.
- Gráficos usados apenas quando ajudam comparação ou tendência.

## Estados

- Loading com skeleton preservando estrutura.
- Empty state orientando configuração ou período sem dados.
- Erro com opção de tentar novamente e contexto do impacto.
- Permissão limitada sem expor dados restritos.

## Visual Quality Score esperado

Mínimo 85 quando o dashboard orientar decisão operacional de risco médio ou alto.

## Checklist

- [ ] Indicadores são acionáveis.
- [ ] Exceções aparecem antes de decoração.
- [ ] Filtros correspondem ao uso real.
- [ ] Ações estão próximas do contexto.
- [ ] Dados densos continuam legíveis.
