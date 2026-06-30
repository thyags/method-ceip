# Knowledge Base - Arquitetura

## Objetivo

Registrar aprendizados arquiteturais recorrentes em projetos CloudSix.

## Contexto

Arquitetura envolve fronteiras, contratos, dados, operação e evolução. Esta área deve capturar decisões e padrões observados em uso real.

## Diretrizes

- Registrar contexto antes da recomendação.
- Relacionar ADRs sempre que houver decisão.
- Separar padrão recomendado de exceção contextual.

## Conhecimento inicial

- Monólito modular pode ser adequado quando a equipe precisa de simplicidade operacional.
- Distribuição de serviços só se justifica com fronteiras claras, observabilidade e capacidade de operação.
- Integrações instáveis devem ser isoladas por contratos internos quando o risco justificar.

## Exemplos

- Em ERP, consistência transacional pode pesar mais que distribuição.
- Em marketplace, pagamento e logística exigem contratos explícitos.

## Checklist

- [ ] Aprendizado referencia contexto.
- [ ] ADR relacionado foi citado quando aplicável.
- [ ] Trade-offs estão explícitos.

## Conclusão

Conhecimento arquitetural deve ajudar decisões futuras sem virar dogma.
