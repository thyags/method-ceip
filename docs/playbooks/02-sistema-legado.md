# 02 - Playbook de Sistema Legado

## Objetivo

Orientar análise e evolução de sistemas legados preservando comportamento, dados e operação.

## Contexto

Legados podem ser críticos, pouco documentados e sensíveis a mudança. O objetivo inicial não é reescrever, mas entender, proteger e evoluir com segurança.

## Diretrizes

- Identificar stack, dependências, ambiente e pontos críticos.
- Mapear fluxos de negócio antes de mexer no código.
- Criar testes de caracterização quando faltar cobertura.
- Priorizar mudanças pequenas e reversíveis.
- Registrar riscos, decisões e limitações.

## Fluxo

1. Inventariar stack, módulos e ambientes.
2. Mapear fluxos críticos com Business Analyst.
3. Identificar riscos de dados com Database Architect.
4. Criar estratégia de teste com QA Engineer.
5. Planejar refatoração incremental com Refactoring Specialist.
6. Registrar ADRs para modernizações relevantes.

## Exemplos

- Antes de alterar cobrança, execute casos históricos e compare resultados.
- Antes de trocar componente de integração, preserve contrato e monitore divergência.

## Checklist

- [ ] Stack e ambiente foram identificados.
- [ ] Fluxos críticos foram mapeados.
- [ ] Testes de caracterização foram planejados.
- [ ] Mudanças foram fatiadas.
- [ ] Dados e integrações foram avaliados.
- [ ] Rollback ou mitigação existe.

## Conclusão

Legado deve ser tratado como sistema em produção com conhecimento insuficiente. A primeira entrega é reduzir incerteza.
