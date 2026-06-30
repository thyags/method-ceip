# Knowledge Base - Performance

## Objetivo

Registrar aprendizados sobre latência, consultas, payloads, filas, relatórios e custo.

## Contexto

Performance varia por domínio, volume e stack. Esta base guarda padrões de diagnóstico e soluções validadas.

## Diretrizes

- Registrar baseline e resultado quando houver otimização.
- Evitar recomendação sem contexto de medição.
- Relacionar trade-offs de consistência e complexidade.

## Conhecimento inicial

- Cache sem invalidação definida costuma criar inconsistência.
- Relatórios pesados podem precisar de pré-processamento ou mudança de UX.
- Payload excessivo pode ser gargalo tanto backend quanto frontend.

## Exemplos

- Job acumulado deve ser analisado por taxa de entrada, tempo de processamento e falhas.
- Busca lenta pode depender de índice, filtro, paginação ou mecanismo especializado conforme stack.

## Checklist

- [ ] Baseline foi registrado.
- [ ] Ganho foi medido.
- [ ] Trade-offs foram descritos.

## Conclusão

Conhecimento de performance deve ser baseado em evidência.
