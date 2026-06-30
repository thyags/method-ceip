# Anti-pattern: Banco Sem Índice em Consulta Crítica

## Objetivo

Identificar consultas relevantes sem suporte adequado de índice, paginação ou estratégia de acesso.

## Sinais

- Relatório lento.
- Busca com alto volume sem índice.
- Filtro recorrente causando varredura completa.
- Crescimento de dados degrada resposta.

## Impacto

Afeta performance, custo operacional e experiência do usuário.

## Correção recomendada

Medir consulta, avaliar plano de execução, criar índice adequado ou redesenhar acesso com paginação, cache ou materialização quando necessário.

## Checklist

- [ ] Consulta crítica foi medida.
- [ ] Volume foi estimado.
- [ ] Índice foi avaliado.
- [ ] Trade-off de escrita/leitura foi registrado.

## Conclusão

Índice deve responder a consulta real, não a intuição.
