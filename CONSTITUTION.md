# Constituição de Engenharia CloudSix

## Objetivo

Estabelecer regras fundamentais, obrigatórias e permanentes para qualquer trabalho técnico orientado por este framework.

## Contexto

Equipes humanas e agentes de IA podem acelerar entregas, mas também podem ampliar risco quando operam sem limites explícitos. Esta constituição define o que não pode ser negociado em decisões, documentação, arquitetura e qualidade.

## Artigos fundamentais

**Artigo 1 - Stack agnóstica.** Nenhum agente ou pessoa pode assumir tecnologia sem identificar a stack, a arquitetura e as convenções existentes.

**Artigo 2 - Verdade do negócio.** Nenhuma regra de negócio pode ser criada, removida ou alterada sem solicitação explícita e validação com o contexto do domínio.

**Artigo 3 - Decisão justificada.** Toda decisão técnica relevante deve registrar contexto, alternativas, trade-offs, risco e critério de escolha.

**Artigo 4 - ADR obrigatório.** Toda decisão arquitetural importante deve gerar ADR ou atualizar ADR existente.

**Artigo 5 - Segurança por padrão.** Toda alteração deve considerar autenticação, autorização, exposição de dados, validação de entrada, auditoria e abuso previsível.

**Artigo 6 - Performance mensurável.** Otimização deve ser guiada por medição, objetivo claro e avaliação de impacto.

**Artigo 7 - Testabilidade.** Código funcionando sem validação adequada não é considerado entrega completa.

**Artigo 8 - Evolução incremental.** Mudanças pequenas, reversíveis e observáveis são preferíveis a reescritas amplas, exceto quando justificadas por risco, custo ou inviabilidade técnica.

**Artigo 9 - Manutenibilidade.** Legibilidade, coesão, simplicidade e documentação fazem parte da qualidade, não são refinamentos opcionais.

**Artigo 10 - Observabilidade.** Sistemas devem permitir diagnóstico por logs, métricas, rastreamento, eventos ou mecanismos equivalentes adequados à stack.

**Artigo 11 - Responsabilidade documental.** Documentação deve acompanhar decisões, contratos, fluxos críticos, operação e mudanças relevantes.

**Artigo 12 - Limite dos agentes.** Agentes de IA devem declarar incertezas, pedir contexto quando necessário e não simular conhecimento inexistente.

**Artigo 13 - Compatibilidade.** Alterações devem avaliar impacto em usuários, integrações, dados históricos, automações e ambientes.

**Artigo 14 - Revisão técnica.** Mudanças com impacto significativo devem passar por revisão de qualidade, segurança, testes e manutenção.

**Artigo 15 - Sustentabilidade.** A solução escolhida deve equilibrar prazo, custo, risco, simplicidade, evolução futura e capacidade da equipe.

**Artigo 16 - Policy antes de exceção.** Exceções a padrões, gates, score mínimo ou fluxo oficial devem ser explícitas, justificadas, aprovadas e registradas.

**Artigo 17 - Memória responsável.** Aprendizados devem ser registrados sem segredos, credenciais, dados pessoais ou informação sensível desnecessária.

**Artigo 18 - Plataforma agnóstica.** A CEIP não deve depender de linguagem, framework, banco, provedor ou ferramenta específica para continuar útil.

**Artigo 19 - Separação Core e Workspace.** O CEIP Core deve manter o método global; o CEIP Workspace `.ceip/` deve manter somente contexto local do projeto.

**Artigo 20 - Não duplicação do Core.** Projetos consumidores não devem copiar o método inteiro para `.ceip/`; devem referenciar o Core e manter estado local separado.

**Artigo 21 - Instalação rastreável.** Quando possível, projetos consumidores devem referenciar o CEIP Core como submodule em `.cloudsix/method`, mantendo `.ceip/` apenas como workspace local.

## Diretrizes

- Em caso de conflito entre velocidade e segurança operacional, explicitar o risco antes de prosseguir.
- Em caso de ambiguidade de requisito, registrar pergunta aberta em vez de preencher lacuna com suposição.
- Em caso de dívida técnica, preferir plano incremental com proteção de comportamento existente.
- Em caso de gate falho, registrar bloqueio, correção ou aprovação excepcional antes de avançar.
- Em projeto consumidor, decisões, reviews e aprendizados específicos devem ser registrados no `.ceip/` quando aplicável.

## Exemplos

- Uma mudança de modelo de dados que afeta relatórios exige ADR, plano de migração, testes e rollback.
- Uma nova API pública exige contrato, autenticação, tratamento de erro, rate limit ou justificativa para ausência.
- Uma refatoração em legado exige teste de caracterização antes de alterar comportamento observável.

## Checklist

- [ ] A decisão respeita todos os artigos aplicáveis.
- [ ] As exceções foram justificadas e documentadas.
- [ ] Há rastreabilidade entre requisito, decisão e validação.
- [ ] A entrega pode ser revisada por outro profissional sem depender de contexto verbal.
- [ ] Exceções a policies, gates ou score mínimo foram formalizadas.
- [ ] Core e Workspace foram mantidos separados.
- [ ] O Core foi referenciado de forma rastreável quando usado em projeto consumidor.

## Conclusão

Esta constituição é o núcleo normativo do framework. Qualquer padrão, playbook, agente ou decisão deve ser compatível com estes artigos.
