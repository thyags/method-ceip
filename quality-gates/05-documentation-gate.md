# Gate 5 - Documentação

## Objetivo

Validar se documentação relevante foi criada ou atualizada junto com a entrega.

## Contexto

Use quando a mudança altera comportamento, arquitetura, contrato, operação, decisão, playbook, prompt, gate ou padrão.

## Diretrizes

- Consulte `DOCUMENTATION_STANDARD.md`.
- Use `docs/checklists/documentation-checklist.md`.
- Atualize `INDEX.md` quando criar novo módulo relevante.

## Critérios de aprovação

- Mudanças de comportamento foram documentadas.
- ADR/RFC foi criado quando necessário.
- Links internos estão atualizados.
- Documentação está em português do Brasil.
- Conteúdo é acionável.

## Exemplos

- Nova integração exige contrato, operação e testes documentados.
- Novo gate exige atualização do índice.

## Checklist

- [ ] Documentação aplicável foi atualizada.
- [ ] Links internos foram revisados.
- [ ] ADR/RFC existe quando necessário.
- [ ] Documento segue estrutura mínima.

## Conclusão

Este gate protege a memória técnica do sistema.
