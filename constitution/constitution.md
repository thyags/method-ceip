# Constitution Engine

## Objetivo

Consolidar as leis fundamentais que todo agente, meta-agente, ferramenta de IA e pessoa deve consultar antes de executar trabalho técnico no ecossistema CloudSix.

## Contexto

O `CONSTITUTION.md` da raiz define a constituição narrativa do framework. Esta pasta transforma essa constituição em leis operacionais numeradas, fáceis de referenciar em prompts, reviews, quality gates e scorecards.

## Diretrizes

- Cada lei deve ser tratada como regra de governança, não como sugestão opcional.
- Quando uma lei não puder ser cumprida, o agente deve registrar justificativa, risco residual e aprovação necessária.
- Nenhuma ferramenta de IA deve usar estas leis para inventar requisitos ou bloquear trabalho sem evidência.

## Leis fundamentais

**LAW-001 - Nunca assumir requisitos inexistentes.** Requisitos devem vir de solicitação explícita, documento validado, comportamento observado ou confirmação do responsável.

**LAW-002 - Sempre identificar contexto.** Antes de propor solução, identifique domínio, objetivo, stack, arquitetura, restrições e padrões existentes.

**LAW-003 - Sempre preservar arquitetura existente.** Mudanças devem respeitar a arquitetura atual até que uma decisão arquitetural registrada justifique alteração.

**LAW-004 - Nunca alterar regra de negócio sem solicitação explícita.** Otimização, refatoração ou melhoria técnica não autorizam mudança funcional.

**LAW-005 - Sempre justificar trade-offs.** Decisões relevantes devem explicar alternativas, benefícios, custos, riscos e razão da escolha.

**LAW-006 - Preferir evolução incremental.** Mudanças pequenas, reversíveis e observáveis são o padrão.

**LAW-007 - Segurança, performance, testes e documentação são critérios de entrega.** Código ou documentação isoladamente não bastam.

**LAW-008 - Incerteza deve ser declarada.** Quando faltar informação, registre hipótese e pergunta aberta.

**LAW-009 - Decisão arquitetural relevante exige ADR.** Não há decisão estrutural importante sem rastro.

**LAW-010 - Qualidade deve ser verificável.** Toda entrega precisa de evidência, checklist, teste, review ou justificativa proporcional.

**LAW-011 - Produto deve preceder engenharia relevante.** Ideias, produtos, funcionalidades, módulos, APIs e integrações relevantes devem passar por Product Intelligence antes de arquitetura ou implementação.

**LAW-012 - Experiência deve preceder frontend relevante.** Interfaces, dashboards, formulários, tabelas, sites e experiências responsivas relevantes devem passar por Product Experience antes de UX/UI/Frontend ou release.

## Exemplos

- Se um agente não encontrar a stack, ele deve registrar a lacuna e propor passos de descoberta.
- Se uma refatoração mudar comportamento, ela deixa de ser refatoração e precisa de requisito.
- Se uma integração exigir fila ou cache, o trade-off deve ser documentado antes da decisão.
- Se uma tela relevante não tiver critérios de experiência ou Visual Quality Score, ela deve retornar ao Product Experience System.

## Checklist

- [ ] O agente consultou as leis antes de decidir.
- [ ] Requisitos foram confirmados.
- [ ] Stack e contexto foram identificados.
- [ ] Trade-offs foram registrados.
- [ ] ADR foi criado quando necessário.
- [ ] Product Intelligence e Product Experience foram aplicados quando obrigatórios.

## Conclusão

O Constitution Engine é o contrato operacional mínimo para qualquer execução dentro do framework.
