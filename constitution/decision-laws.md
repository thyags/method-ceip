# Decision Laws

## Objetivo

Definir leis para tomada de decisão técnica, arquitetural e operacional.

## Contexto

Decisões sem critérios viram preferência pessoal. Estas leis criam disciplina para comparar alternativas e registrar escolhas.

## Diretrizes

- Use estas leis junto com `DECISION_FRAMEWORK.md`.
- Para decisões estruturais, crie ADR em `adr/proposed` ou `adr/accepted`.

## Leis

**LAW-DEC-001 - Toda decisão começa pelo problema.** Solução sem problema explícito deve ser rejeitada.

**LAW-DEC-002 - Alternativas devem ser comparadas.** Decisão relevante exige pelo menos duas opções ou justificativa para opção única.

**LAW-DEC-003 - Trade-offs devem ser escritos.** Custo, risco e benefício precisam estar claros.

**LAW-DEC-004 - Reversibilidade deve ser avaliada.** Decisões difíceis de desfazer exigem rigor maior.

**LAW-DEC-005 - Critério de escolha deve ser explícito.** Preferência não é critério.

**LAW-DEC-006 - Decisão crítica sem evidência deve ser proposta, não aceita.**

**LAW-DEC-007 - Decisão aceita deve ter plano de validação.**

## Exemplos

- Escolher processamento assíncrono exige comparar experiência do usuário, consistência, operação e rastreabilidade.
- Escolher tecnologia nova exige avaliar equipe, suporte, custo, segurança e migração.

## Checklist

- [ ] Problema foi descrito.
- [ ] Alternativas foram comparadas.
- [ ] Trade-offs foram registrados.
- [ ] Reversibilidade foi avaliada.
- [ ] Plano de validação existe.

## Conclusão

Decisão boa é rastreável, comparável e revisável.
