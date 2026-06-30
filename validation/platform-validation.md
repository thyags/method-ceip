# Validação da Plataforma CEIP

## Objetivo

Validar se a CloudSix Engineering Intelligence Platform está organizada como plataforma de inteligência de engenharia, e não apenas como coleção de documentos.

## Contexto

A CEIP introduz Engineering Intelligence Core, Runtime, brains, layers, engines, policies, knowledge graph e lifecycle. Esta validação verifica se esses elementos estão conectados e coerentes.

## Diretrizes

- Validar missão da plataforma antes de validar arquivos isolados.
- Verificar se cada módulo novo possui responsabilidade clara.
- Confirmar que decisões podem ser explicadas por contexto, policies, engines e memória.
- Garantir que nenhum módulo dependa exclusivamente da memória do modelo.

## Perguntas de validação

- `PLATFORM.md` define claramente a CEIP?
- `intelligence-core/README.md` explica o Core e sua relação com brains?
- `intelligence-core/brains.md` diferencia brains de agentes?
- `layers/README.md` classifica os módulos da plataforma por camada?
- `runtime/README.md` transforma a CEIP em execução operacional?
- Runtime está conectado a Context Loader, Task Router, Prompt Builder, Policy Engine e Orchestrator?
- `engines/README.md` explica quando criar engines?
- Context Engine, Thinking Engine, Planning Engine, Policy Engine, Memory Engine, Evolution Engine e Decision Engine possuem entrada, processo e saída?
- `policies/README.md` define gatilho, regra, exceção e validação como padrão?
- As policies iniciais cobrem requisitos, descoberta de stack, decisão, documentação, review e reuso de conhecimento?
- `knowledge-graph/README.md` relaciona leis, policies, agents, gates, ADRs, RFCs, patterns e aprendizados?
- `lifecycle/README.md` define ciclo de evolução contínua?
- `ORCHESTRATOR.md` começa pelo Engineering Intelligence Core?
- O prompt de Chief Engineering Officer orienta a IA a projetar produto, não arquivos?
- O roadmap inclui a evolução para Engineering Intelligence Core?
- O roadmap inclui Runtime, Profiles, Domain Packs e Capability Packs?

## Exemplos

- Se um novo módulo não pertence a uma layer, a arquitetura da plataforma está incompleta.
- Se uma regra repetitiva aparece em três documentos e não existe policy, o Policy Engine deve ser acionado.
- Se uma decisão não consegue apontar ADR, RFC, policy ou contexto, ela não está suficientemente explicável.

## Checklist

- [ ] CEIP está descrita como plataforma.
- [ ] Runtime torna a plataforma dinâmica.
- [ ] Core, brains, engines e layers estão conectados.
- [ ] Policies existem para regras repetitivas.
- [ ] Knowledge Graph permite rastrear decisões.
- [ ] Lifecycle orienta evolução contínua.
- [ ] Orchestrator usa o Core antes dos agentes.

## Conclusão

Esta validação confirma se a CEIP possui arquitetura de plataforma, não apenas documentos bem organizados.
