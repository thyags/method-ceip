# ADR-0004 - Documentação como Produto

## Objetivo

Registrar a decisão de tratar documentação como parte essencial do produto de engenharia.

## Contexto

Documentação desatualizada ou superficial aumenta dependência de memória, reduz qualidade de IA assistida e dificulta manutenção. Em ambientes com agentes, documentação vira contexto operacional.

## Diretrizes

- Documentos devem ter objetivo, contexto, diretrizes, exemplos, checklist e conclusão.
- Decisões relevantes devem ter ADR.
- Índice e roadmap devem acompanhar evolução.
- Documentação deve ser útil para execução e decisão, não apenas descritiva.

## Decisão

O framework tratará documentação como artefato de engenharia obrigatório. Mudanças que afetam comportamento, arquitetura, contratos, operação ou decisão devem atualizar documentação.

## Consequências

- PRs devem indicar documentação atualizada ou justificar ausência.
- Agentes devem produzir saídas documentáveis.
- O repositório deve ser navegável e auditável.
- Há custo adicional de escrita, compensado por redução de ambiguidade.

## Exemplos

Uma nova integração deve gerar especificação, contrato, checklist de teste e, se estrutural, ADR.

## Checklist

- [ ] Documento tem estrutura mínima.
- [ ] Decisão relevante foi registrada.
- [ ] Links internos foram atualizados.
- [ ] Conteúdo ajuda execução real.

## Conclusão

Documentação como produto transforma conhecimento em ativo reutilizável para pessoas e agentes de IA.
