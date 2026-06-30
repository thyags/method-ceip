# Architecture Policies

## Objetivo

Governar decisões estruturais, fronteiras, contratos e evolução arquitetural.

## Contexto

Arquitetura da aplicação e da plataforma deve ser explicável por ADR, RFC ou decision engine.

## Diretrizes

- Mudança estrutural relevante exige ADR.
- Reescrita ampla exige RFC.
- Fronteiras devem ter responsabilidade clara.
- Evolução incremental é padrão.

## Políticas

- Nova dependência estrutural exige justificativa.
- Mudança de contrato público exige compatibilidade ou plano de migração.
- Distribuição operacional exige observabilidade e capacidade de operação.
- Decisão irreversível exige revisão arquitetural.

## Exemplos

- Separar módulo em serviço exige ADR, rollback, observabilidade e plano de transição.

## Checklist

- [ ] Impacto arquitetural foi identificado.
- [ ] Alternativas foram comparadas.
- [ ] ADR/RFC foi criado quando necessário.
- [ ] Plano incremental existe.

## Conclusão

Architecture Policies impedem mudanças estruturais sem explicação.
