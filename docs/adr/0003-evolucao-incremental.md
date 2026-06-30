# ADR-0003 - Evolução Incremental

## Objetivo

Registrar a preferência do framework por evolução incremental em vez de reescritas amplas.

## Contexto

Sistemas empresariais acumulam comportamento crítico, regras implícitas e dependências externas. Reescritas amplas frequentemente falham por falta de paridade, prazo, custo e validação.

## Diretrizes

- Preferir mudanças pequenas, reversíveis e testáveis.
- Criar testes de caracterização em legados.
- Usar reescrita apenas com justificativa robusta e plano de transição.
- Separar refatoração de mudança funcional.

## Decisão

O framework adotará evolução incremental como padrão. Reescrita total é exceção e exige ADR, análise de risco, plano de paridade, estratégia de migração e critérios de sucesso.

## Consequências

- Playbooks priorizam fatiamento.
- Agentes devem justificar qualquer proposta de reescrita.
- Modernização de legado começa por entendimento e proteção.
- Releases devem ser menores e observáveis.

## Exemplos

Antes de substituir um módulo financeiro, caracterize cálculos atuais, crie testes e migre fluxo por fluxo.

## Checklist

- [ ] Mudança foi fatiada.
- [ ] Reversibilidade foi avaliada.
- [ ] Testes protegem comportamento.
- [ ] Reescrita tem justificativa quando proposta.

## Conclusão

Evolução incremental reduz risco e preserva valor existente enquanto melhora a capacidade de mudança.
