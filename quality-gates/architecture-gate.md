# Architecture Gate

## Objetivo

Validar coerência arquitetural, acoplamento, compatibilidade, evolução e necessidade de ADR.

## Quando aplicar

Aplicar em decisões estruturais, integrações, mudanças de módulo, fronteiras de domínio, persistência, autenticação, filas e infraestrutura.

## Critérios obrigatórios

- Contexto e alternativas foram avaliados.
- Impactos em módulos e integrações foram mapeados.
- Trade-offs estão explícitos.
- ADR existe quando a decisão é relevante.

## Critérios bloqueantes

- Solução estrutural sem justificativa.
- Acoplamento indevido entre domínios.
- Quebra de compatibilidade sem plano.
- Decisão relevante sem ADR.

## Evidências exigidas

Diagrama, ADR, análise de impacto, plano de migração e estratégia de rollback quando necessário.

## Agentes responsáveis

Chief Software Architect, Database Architect, Backend Engineer, DevOps Engineer e Security Engineer conforme impacto.

## Checklist

- [ ] Alternativas foram comparadas.
- [ ] Fronteiras foram respeitadas.
- [ ] Riscos foram classificados.
- [ ] ADR foi criado ou atualizado.
- [ ] Rollback foi considerado.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Arquitetura coerente, justificada e evolutiva.

## Conclusão

Arquitetura aprovada precisa ser compreensível por quem vai mantê-la.
