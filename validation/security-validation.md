# Validação de Segurança

## Objetivo

Auditar se o framework orienta segurança, privacidade e governança de IA de forma suficiente.

## Contexto

O framework será usado por agentes de IA e pessoas em projetos com dados, permissões, integrações e automações. A documentação deve reduzir risco de exposição e decisões inseguras.

## Diretrizes

- Validar leis, standards, gates e reviews de segurança.
- Procurar instruções que possam incentivar exposição de dados.
- Garantir que IA seja orientada a minimizar dados e declarar limites.
- Não inserir exemplos com segredos ou dados sensíveis reais.

## Perguntas de validação

- `constitution/security-laws.md` cobre autorização, dados sensíveis, segredos, logs, entradas externas e IA?
- `SECURITY_PRINCIPLES.md` está coerente com as security laws?
- `docs/standards/08-padroes-de-seguranca.md` é acionável?
- `quality-gates/02-security-gate.md` tem critérios verificáveis?
- `review/security-review.md` define bloqueios claros?
- `docs/agents/10-security-engineer.md` tem limites e saídas suficientes?
- `docs/agents/16-ai-engineer.md` trata dados sensíveis e fallback?
- `AI_USAGE_GUIDE.md` orienta uso seguro de IA?
- Templates de PR, RFC e technical spec pedem segurança?
- Recipes de API, autenticação, importador, cache e filas consideram segurança?
- Há exemplos que sugerem expor tokens, credenciais ou dados reais?
- Risco residual aparece como conceito verificável?

## Exemplos

- Uma recipe de importador sem orientação de dados sensíveis é lacuna de segurança.
- Prompt de IA que pede "mande todo o banco" seria falha crítica.

## Checklist

- [ ] Leis de segurança foram revisadas.
- [ ] Gates e reviews de segurança são verificáveis.
- [ ] Prompts orientam minimização de dados.
- [ ] Templates pedem avaliação de segurança.
- [ ] Não há exposição de segredo ou dado sensível.

## Conclusão

Validação de segurança garante que o framework não acelere práticas inseguras.
