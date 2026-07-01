# Especificação de Comandos do CLI

## Objetivo

Definir comandos atuais e planejados do CLI `ceip`.

## Contexto

Comandos precisam ter propósito, entradas, saídas e limites bem definidos.

## Diretrizes

- Comandos devem ser pequenos e previsíveis.
- Saídas devem indicar documentos consultados.
- Alterações em arquivos devem exigir confirmação.
- Comandos devem funcionar sem assumir stack do projeto.

## Comandos

### `ceip init`

Objetivo: inicializar Core + Workspace em projeto consumidor.

Saída esperada: `.ceip/`, `project.json`, Runtime, PIS/PXS locais, arquivos de IA e `.gitignore`.

### `ceip doctor`

Objetivo: validar instalação CEIP.

Saída esperada: checks de Core, Workspace, Runtime, PIS, PXS, CDL, AGENTS, `.gitignore` e segurança.

### `ceip checkpoint`

Objetivo: avançar o Workspace CEIP de forma governada com base no estado real do Git.

Entrada esperada: descrição curta da tarefa atual.

Exemplo:

```bash
ceip checkpoint "implementar login real por host"
```

Saída esperada:

- `.ceip/runtime/checkpoint-runtime-pack.md`
- `.ceip/reviews/<timestamp>-ceip-checkpoint.md`
- `.ceip/output/generated-prompts/checkpoint-prompt.md`
- nova entrada em `.ceip/logs/implementation-log.md`

Limite: o comando aponta artefatos possivelmente atrasados, mas não inventa status de PRD, gate, dívida técnica ou qualidade sem evidência. A atualização semântica desses documentos deve ser feita por pessoa ou agente usando o checkpoint como insumo.

### `ceip analyze`

Objetivo: montar Runtime Pack para análise inicial.

Saída esperada: contexto carregado, lacunas, rota, agentes, gates e prompt.

### `ceip plan`

Objetivo: montar Runtime Pack para Product Intelligence.

Saída esperada: prompt para PRD, MVP, roadmap, stories e critérios de aceite.

### `ceip architect`

Objetivo: montar Runtime Pack para decisão arquitetural.

Saída esperada: prompt para alternativas, trade-offs, riscos e ADR.

### `ceip review`

Objetivo: montar Runtime Pack para revisão especializada.

Saída esperada: prompt para achados por severidade, gates e evidências.

### `ceip release`

Objetivo: montar Runtime Pack para readiness de release.

Saída esperada: prompt para gates, score, riscos, rollback e decisão.

### `ceip learn`

Objetivo: montar Runtime Pack para aprendizado e evolução do método.

Saída esperada: prompt para memory, patterns, policies, recipes ou templates.

## Comandos futuros

### `ceip audit`

Objetivo: executar suíte de validação do framework ou de um projeto.

Saída esperada: achados por severidade, documentos verificados e próximos passos.

### `ceip agents <agent>`

Objetivo: preparar prompt e documentação para um agente específico.

Saída esperada: missão, entradas, saídas, limites e prompt operacional.

### `ceip adr create`

Objetivo: criar ADR a partir do template.

Saída esperada: arquivo em `adr/proposed` ou rascunho textual.

### `ceip rfc create`

Objetivo: criar RFC numerada.

Saída esperada: pasta `rfc/NNNN` com template preenchível.

### `ceip quality`

Objetivo: avaliar quality gates e scorecard.

Saída esperada: gates aprovados, bloqueios, nota e evidências faltantes.

## Exemplos

- `ceip analyze "entender o projeto"`
- `ceip checkpoint "implementar autenticação por host"`
- `ceip plan "novo módulo de contratos"`
- `ceip review "validar migração"`

## Checklist

- [ ] Cada comando tem objetivo único.
- [ ] Entradas foram definidas.
- [ ] Saídas são auditáveis.
- [ ] Limites estão claros.

## Conclusão

Comandos bem especificados evitam um CLI amplo demais e difícil de adotar.
