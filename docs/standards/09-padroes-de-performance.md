# 09 - Padrões de Performance

## Objetivo

Definir práticas para avaliar e melhorar performance com base em evidência, metas e impacto real.

## Contexto

Performance ruim pode aparecer como tela lenta, relatório travando, integração instável, consumo excessivo, fila acumulada ou custo crescente. A solução depende de diagnóstico.

## Diretrizes

- Coletar baseline antes de otimizar.
- Definir meta aceitável por fluxo.
- Avaliar banco, backend, frontend, rede, integrações e infraestrutura.
- Evitar cache sem estratégia de invalidação.
- Planejar paginação, streaming, batch ou processamento assíncrono quando o domínio justificar.
- Validar ganho depois da alteração.

## Exemplos

- Relatório mensal pode ser pré-processado se o dado não precisa ser sempre em tempo real.
- Busca em cadastro volumoso pode exigir índice, filtro obrigatório ou mecanismo especializado conforme stack.
- Tela com muitos gráficos pode carregar progressivamente.

## Checklist

- [ ] Baseline e meta foram definidos.
- [ ] Gargalo foi localizado.
- [ ] Solução considera consistência.
- [ ] Impacto foi medido depois.
- [ ] Observabilidade permite acompanhar regressão.

## Conclusão

Performance é disciplina de medição. O framework rejeita otimização especulativa como substituto de diagnóstico.
