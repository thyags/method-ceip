# Rodada 1 - Chief Architect

## Objetivo

Revisar somente a arquitetura da documentação e a organização estrutural do framework.

## Contexto

Esta rodada não avalia estilo textual nem profundidade de conteúdo. O foco é arquitetura de informação: fronteiras entre diretórios, redundâncias, fluxo de decisão e navegabilidade técnica.

## Diretrizes

- Não reescrever documentos por linguagem.
- Não alterar regras de negócio ou padrões técnicos.
- Avaliar se módulos têm responsabilidades claras.
- Verificar se `ORCHESTRATOR.md`, `INDEX.md` e `README.md` formam uma entrada coerente.

## Perguntas de revisão

- A separação entre `docs/adr` e `adr/` está clara?
- `constitution/` complementa `CONSTITUTION.md` sem duplicação confusa?
- `review/`, `quality-gates/` e `score-system/` têm fronteiras claras?
- `prompts/` e `docs/prompts/` têm responsabilidades distintas?
- `knowledge/`, `patterns/` e `anti-patterns/` estão posicionados como memória organizacional?
- O fluxo do `ORCHESTRATOR.md` cobre meta-agentes e agentes sem criar ciclo confuso?
- Existe algum diretório sem propósito operacional?

## Saída esperada

- Achados arquiteturais por severidade.
- Propostas de reorganização quando necessário.
- ADR ou RFC recomendado quando houver decisão estrutural.
- Lista de documentos que precisam de atualização de navegação.

## Exemplos

- Se um conteúdo de validação estiver em checklists e validation, definir fronteira: checklist valida entrega; validation audita o framework.

## Checklist

- [ ] Arquitetura da informação foi revisada.
- [ ] Sobreposições foram identificadas.
- [ ] Entradas principais foram avaliadas.
- [ ] Propostas não alteram conteúdo fora de escopo.

## Conclusão

Esta rodada garante que o framework seja navegável e modular antes de aprofundar conteúdo.
