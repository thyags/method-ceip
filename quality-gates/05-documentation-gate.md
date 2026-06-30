# Gate 5 - Documentação

> Alias de compatibilidade para `documentation-gate.md`. O gate oficial detalhado é o arquivo nomeado; este documento permanece para fluxos que ainda referenciam a sequência numerada.

## Objetivo

Validar se documentação relevante foi criada ou atualizada junto com a entrega.

## Contexto

Use quando a mudança altera comportamento, arquitetura, contrato, operação, decisão, playbook, prompt, gate ou padrão.

## Quando aplicar

Aplicar em mudanças de comportamento, API, banco, arquitetura, operação, agente, policy, gate, playbook, template, release ou decisão relevante.

## Diretrizes

- Consulte `DOCUMENTATION_STANDARD.md`.
- Use `docs/checklists/documentation-checklist.md`.
- Atualize `INDEX.md` quando criar novo módulo relevante.

## Critérios obrigatórios

- Mudanças de comportamento foram documentadas.
- ADR/RFC foi criado quando necessário.
- Links internos estão atualizados.
- Documentação está em português do Brasil.
- Conteúdo é acionável.

## Critérios bloqueantes

- Documento essencial ausente.
- Decisão estrutural sem ADR.
- Link quebrado em documento principal.
- Conteúdo contradiz Constituição, Policy Engine ou Orchestrator.

## Evidências exigidas

Lista de documentos atualizados, revisão de links, ADR/RFC quando aplicável e checklist documental.

## Agentes responsáveis

Documentation Engineer, Knowledge Curator, Chief Software Architect e agente especialista do domínio alterado.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Documentação suficiente para uso, revisão, manutenção e auditoria.

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
