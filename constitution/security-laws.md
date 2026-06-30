# Security Laws

## Objetivo

Definir leis mínimas de segurança para qualquer entrega, decisão ou automação.

## Contexto

Segurança não pode depender de lembrança individual. Estas leis devem ser usadas em prompts, reviews, quality gates e incidentes.

## Diretrizes

- Aplique estas leis em APIs, dados, autenticação, autorização, IA, integrações e operação.
- Consulte `SECURITY_PRINCIPLES.md` e `docs/standards/08-padroes-de-seguranca.md`.

## Leis

**LAW-SEC-001 - Autorização sensível não vive apenas no frontend.**

**LAW-SEC-002 - Segredos nunca devem ser versionados, logados ou documentados em claro.**

**LAW-SEC-003 - Dados sensíveis devem ser minimizados.**

**LAW-SEC-004 - Entradas externas devem ser validadas.**

**LAW-SEC-005 - Logs devem diagnosticar sem vazar informação sensível.**

**LAW-SEC-006 - Integrações externas exigem autenticação, escopo e tratamento de falha.**

**LAW-SEC-007 - IA não deve receber dados sensíveis sem necessidade e controle.**

**LAW-SEC-008 - Risco residual relevante deve ser registrado.**

## Exemplos

- Uma exportação de clientes deve validar permissão e registrar auditoria.
- Um webhook deve validar origem, idempotência e payload.

## Checklist

- [ ] Dados sensíveis foram identificados.
- [ ] Autorização foi validada em camada confiável.
- [ ] Segredos estão protegidos.
- [ ] Logs não vazam dados.
- [ ] Risco residual foi documentado.

## Conclusão

Leis de segurança tornam proteção um requisito estrutural da entrega.
