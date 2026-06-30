# Recipe - Criar Cache

## Objetivo

Orientar adoção de cache apenas quando houver necessidade medida e estratégia de consistência.

## Contexto

Cache pode melhorar performance, mas também introduz dados obsoletos, invalidação complexa e operação adicional.

## Diretrizes

- Medir gargalo antes de usar cache.
- Definir chave, TTL, invalidação e consistência.
- Avaliar segurança e isolamento de dados.
- Documentar trade-offs.

## Passos

1. Coletar baseline.
2. Confirmar gargalo e meta.
3. Definir dados cacheáveis e risco de obsolescência.
4. Projetar invalidação.
5. Implementar conforme stack existente.
6. Testar consistência e fallback.
7. Monitorar hit rate, latência e erros.

## Agentes

Performance Engineer, Backend Engineer, Database Architect, Security Engineer, DevOps Engineer, QA Engineer.

## Exemplos

- Cache de consulta pública com baixa volatilidade.
- Cache de agregados de dashboard com tolerância a atraso.

## Checklist

- [ ] Baseline existe.
- [ ] Invalidação foi definida.
- [ ] Consistência foi avaliada.
- [ ] Segurança foi considerada.
- [ ] Monitoramento foi planejado.

## Conclusão

Cache sem estratégia é dívida técnica disfarçada de otimização.
