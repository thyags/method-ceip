# Gestão de Riscos

## Objetivo

Orientar a identificação, avaliação, mitigação e comunicação de riscos técnicos e operacionais.

## Contexto

Risco aparece em segurança, dados, performance, disponibilidade, integração, dependências externas, prazos, conhecimento concentrado e mudanças de domínio. Ignorar risco não acelera entrega; apenas transfere custo para produção.

## Diretrizes

- Descrever risco como evento, causa, impacto e probabilidade.
- Avaliar risco antes de decidir arquitetura ou release.
- Definir mitigação proporcional ao impacto.
- Registrar risco aceito explicitamente, com responsável.
- Reavaliar riscos depois de incidentes, mudanças críticas e novas dependências.

## Matriz de risco

| Probabilidade / Impacto | Baixo | Médio | Alto |
| --- | --- | --- | --- |
| Baixa | Monitorar | Mitigar se barato | Plano preventivo |
| Média | Mitigar localmente | Priorizar mitigação | Bloquear até plano |
| Alta | Corrigir no fluxo | Bloquear release se relevante | Escalar imediatamente |

## Exemplos

- Risco: integração de pagamento sem idempotência pode cobrar duas vezes. Mitigação: chave idempotente, teste de retentativa e monitoramento.
- Risco: migração de dados sem backup validado. Mitigação: ensaio em ambiente representativo e plano de restauração.

## Checklist

- [ ] Riscos principais foram listados.
- [ ] Cada risco tem impacto e probabilidade.
- [ ] Mitigações foram associadas a responsáveis.
- [ ] Riscos aceitos foram explicitamente registrados.
- [ ] Há plano de monitoramento quando aplicável.

## Conclusão

Gestão de risco permite decidir com maturidade. Nem todo risco bloqueia entrega, mas todo risco relevante deve ser visível.
