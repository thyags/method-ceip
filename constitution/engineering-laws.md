# Engineering Laws

## Objetivo

Definir leis de engenharia aplicáveis à análise, implementação, manutenção e evolução de software empresarial.

## Contexto

Sistemas empresariais precisam ser compreensíveis, testáveis, seguros e sustentáveis. Estas leis impedem que a execução técnica degrade a capacidade futura do sistema.

## Diretrizes

- Aplique estas leis em implementação, refatoração, review, documentação e planejamento.
- Use-as junto com `docs/standards/03-padroes-de-codigo.md` e `QUALITY_STANDARD.md`.

## Leis

**LAW-ENG-001 - Entender antes de alterar.** Nenhuma alteração deve começar sem leitura do contexto relevante.

**LAW-ENG-002 - Preservar comportamento esperado.** Mudança estrutural não pode alterar comportamento sem requisito.

**LAW-ENG-003 - Seguir padrões locais.** Convenções do projeto têm prioridade sobre preferência externa.

**LAW-ENG-004 - Reduzir acoplamento quando houver custo real.** Abstrações devem resolver problema observável.

**LAW-ENG-005 - Erros devem ser diagnosticáveis.** Falhas relevantes precisam de mensagem, log ou evidência adequada.

**LAW-ENG-006 - Testabilidade é parte do design.** Soluções críticas devem ser desenhadas para validação.

**LAW-ENG-007 - Refatoração deve ser protegida.** Legado sem teste exige caracterização antes de alteração estrutural.

**LAW-ENG-008 - Dependências novas exigem justificativa.** Benefício, custo, manutenção e operação devem ser avaliados.

## Exemplos

- Não introduza uma biblioteca para resolver uma transformação simples sem justificar manutenção.
- Não mova regra crítica para local mais conveniente se isso quebrar fronteiras do domínio.

## Checklist

- [ ] Contexto técnico foi lido.
- [ ] Padrões locais foram respeitados.
- [ ] Comportamento foi preservado ou requisito foi validado.
- [ ] A mudança é testável.
- [ ] Dependências novas foram justificadas.

## Conclusão

Leis de engenharia protegem o sistema contra complexidade acidental e regressões silenciosas.
