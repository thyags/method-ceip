# Especificação de Comandos do CLI

## Objetivo

Definir comandos previstos para o futuro `cloudsix-engineering`.

## Contexto

Antes de implementar qualquer CLI, os comandos precisam ter propósito, entradas, saídas e limites bem definidos.

## Diretrizes

- Comandos devem ser pequenos e previsíveis.
- Saídas devem indicar documentos consultados.
- Alterações em arquivos devem exigir confirmação.
- Comandos devem funcionar sem assumir stack do projeto.

## Comandos

### `cloudsix validate`

Objetivo: executar suíte de validação do framework ou de um projeto.

Saída esperada: achados por severidade, documentos verificados e próximos passos.

### `cloudsix review`

Objetivo: orientar revisão especializada usando `review/` e `specialist-reviews/`.

Saída esperada: checklist de revisão, prompts e formato de achados.

### `cloudsix architect`

Objetivo: montar contexto para decisão arquitetural.

Saída esperada: decision tree aplicável, documentos de arquitetura e template de ADR.

### `cloudsix plan`

Objetivo: criar plano incremental usando prompts, playbooks e recipes.

Saída esperada: etapas, agentes, gates e validações.

### `cloudsix agents <agent>`

Objetivo: preparar prompt e documentação para um agente específico.

Saída esperada: missão, entradas, saídas, limites e prompt operacional.

### `cloudsix adr create`

Objetivo: criar ADR a partir do template.

Saída esperada: arquivo em `adr/proposed` ou rascunho textual.

### `cloudsix rfc create`

Objetivo: criar RFC numerada.

Saída esperada: pasta `rfc/NNNN` com template preenchível.

### `cloudsix quality`

Objetivo: avaliar quality gates e scorecard.

Saída esperada: gates aprovados, bloqueios, nota e evidências faltantes.

## Exemplos

- `cloudsix validate --framework`
- `cloudsix review --type security`
- `cloudsix agents qa --task "validar migração"`

## Checklist

- [ ] Cada comando tem objetivo único.
- [ ] Entradas foram definidas.
- [ ] Saídas são auditáveis.
- [ ] Limites estão claros.

## Conclusão

Comandos bem especificados evitam um CLI amplo demais e difícil de adotar.
