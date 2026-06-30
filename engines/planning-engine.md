# Planning Engine

## Objetivo

Converter análise em plano incremental, validável e coordenado.

## Contexto

Uma boa decisão ainda pode falhar por execução ruim. Planning Engine transforma raciocínio em etapas, dependências, agentes e gates.

## Diretrizes

- Fatiar entrega.
- Definir sequência de agentes.
- Incluir validações e gates.
- Registrar riscos e rollback.

## Entradas

- Análise do Thinking Engine.
- Context brief.
- Riscos.
- Critérios de sucesso.

## Processamento

1. Definir escopo e fora de escopo.
2. Quebrar em etapas.
3. Mapear agentes e meta-agentes.
4. Definir reviews e quality gates.
5. Definir evidências de conclusão.

## Saídas

- Plano incremental.
- Agentes acionados.
- Gates aplicáveis.
- Critérios de conclusão.

## Políticas relacionadas

- `policy-engine/AGENT_ROUTING_POLICIES.md`
- `policy-engine/QUALITY_GATE_POLICIES.md`
- `policy-engine/APPROVAL_POLICIES.md`

## Agentes envolvidos

Technical Program Manager, Product Manager, Chief Software Architect, Quality Governor e agentes técnicos selecionados.

## Quality gates aplicáveis

Todos os gates definidos no plano conforme domínio e risco.

## Exemplos

- Uma migração de banco vira etapas de inventário, ensaio, validação, deploy, monitoramento e documentação.

## Checklist

- [ ] Escopo foi definido.
- [ ] Etapas são incrementais.
- [ ] Agentes foram mapeados.
- [ ] Gates foram planejados.
- [ ] Evidências foram definidas.

## Conclusão

Planning Engine torna a execução rastreável e reduz risco de saltos grandes demais.
