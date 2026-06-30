# ADRs Depreciados

## Objetivo

Armazenar decisões que já foram aceitas, mas foram substituídas, revogadas ou deixaram de ser recomendadas.

## Contexto

Arquitetura evolui. Manter decisões depreciadas preserva histórico e ajuda entender por que o sistema chegou ao estado atual.

## Diretrizes

- Indique qual decisão substitui a anterior.
- Explique por que a decisão foi depreciada.
- Registre impacto em sistemas que ainda dependem dela.

## Exemplos

- Estratégia antiga de integração substituída por contrato versionado.
- Modelo de autenticação substituído por abordagem mais segura.

## Checklist

- [ ] Decisão substituta foi referenciada.
- [ ] Motivo da depreciação foi registrado.
- [ ] Impacto em sistemas existentes foi avaliado.
- [ ] Plano de transição existe quando necessário.

## Conclusão

ADRs depreciados ajudam a manter evolução arquitetural rastreável.
