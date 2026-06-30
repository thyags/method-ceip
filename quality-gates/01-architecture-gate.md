# Gate 1 - Arquitetura

> Alias de compatibilidade para `architecture-gate.md`. O gate oficial detalhado é o arquivo nomeado; este documento permanece para fluxos que ainda referenciam a sequência numerada.

## Objetivo

Validar se a entrega respeita a arquitetura existente ou registra decisão para alterá-la.

## Contexto

Use em qualquer mudança que afete estrutura, contratos, dados, integrações, dependências ou operação.

## Quando aplicar

Aplicar quando houver decisão estrutural, mudança de módulo, contrato, integração, persistência, deploy, autenticação ou fronteira de domínio.

## Diretrizes

- Consulte `constitution/architecture-laws.md`.
- Use `review/architecture-review.md` quando houver impacto estrutural.
- Crie ADR para decisão relevante.

## Critérios obrigatórios

- Arquitetura atual foi identificada.
- Fronteiras e responsabilidades foram respeitadas.
- Contratos afetados foram documentados.
- ADR existe quando necessário.
- Plano incremental foi definido.

## Critérios bloqueantes

- Decisão arquitetural relevante sem ADR.
- Quebra de contrato sem plano de compatibilidade.
- Mudança estrutural sem análise de impacto.
- Acoplamento entre domínios sem justificativa.

## Evidências exigidas

ADR, diagrama, análise de impacto, plano incremental, rollback quando aplicável e link para review arquitetural.

## Agentes responsáveis

Chief Software Architect, Database Architect, Backend Engineer, DevOps Engineer e Security Engineer conforme impacto.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Arquitetura preservada ou alteração estrutural justificada, documentada e validável.

## Exemplos

- Nova integração crítica exige arquitetura review.
- Refatoração local sem impacto estrutural pode registrar apenas evidência no PR.

## Checklist

- [ ] Arquitetura atual foi identificada.
- [ ] Contratos foram avaliados.
- [ ] ADR foi criado quando necessário.
- [ ] Risco arquitetural residual foi registrado.

## Conclusão

Este gate protege coerência estrutural antes da entrega avançar.
