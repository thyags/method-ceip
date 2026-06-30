# Governança da CEIP

## Objetivo

Definir como a CloudSix Engineering Intelligence Platform decide, evolui, incorpora mudanças e evita complexidade desnecessária.

## Contexto

A aprovação de uma release candidate não significa fim do trabalho. Significa que a CEIP saiu de pesquisa e desenvolvimento e passou a operar como produto. A partir deste ponto, a pergunta principal deixa de ser "o que falta?" e passa a ser "como evoluir sem perder qualidade?".

## Princípios de governança

- A CEIP é produto, não coleção de documentos.
- O Core deve conter conhecimento reutilizável, não contexto de cliente.
- Workspaces `.ceip/` devem conter contexto local, memória, ADRs, RFCs, métricas e artefatos de cada projeto.
- Toda evolução deve preservar agnosticismo tecnológico.
- O Policy Engine é obrigatório para decisões relevantes.
- Runtime, Context Loader e Prompt Builder devem reduzir ambiguidade, não adicionar cerimônia sem valor.
- A plataforma deve crescer verticalmente antes de crescer horizontalmente.
- Documentação deve ser operacional, navegável e acionável.

## Critério de entrada no Core

Antes de adicionar módulo, engine, brain, pack, policy ou processo ao Core, responder:

1. Que problema real isso resolve?
2. Esse problema poderia ser resolvido reutilizando algo que já existe?
3. A mudança torna a plataforma mais simples ou mais complexa?

Se a mudança aumenta complexidade sem ganho claro, ela deve começar como:

- plugin;
- Domain Pack;
- Capability Pack;
- RFC experimental;
- artefato de Workspace;
- piloto documentado.

## Regra de crescimento vertical

Para cada novo módulo estrutural proposto, revisar e melhorar pelo menos cinco ativos existentes relacionados.

Exemplo:

- Novo módulo de Domain Packs exige revisar `INDEX.md`, `ROADMAP.md`, `ORCHESTRATOR.md`, `policy-engine/`, `validation/` e pelo menos um playbook.

Essa regra evita expansão horizontal sem consolidação.

## Papéis de decisão

| Papel | Responsabilidade |
| --- | --- |
| Product Owner CEIP | Define prioridade, versão e escopo de produto |
| Chief Engineering Officer | Aprova direção técnica e governança executiva |
| Chief Software Architect | Avalia coerência arquitetural |
| Documentation Engineer | Garante clareza, navegação e padrão textual |
| Security Engineer | Avalia privacidade, dados sensíveis e riscos |
| QA Engineer | Valida critérios objetivos e testabilidade |
| Product Manager | Avalia valor, adoção e impacto para usuários |
| Business Analyst | Avalia aplicabilidade em projetos reais |
| Code Reviewer / Tech Lead | Avalia qualidade, manutenção e consistência |

## Tipos de mudança

| Tipo | Exige RFC | Exige versão | Exige piloto |
| --- | --- | --- | --- |
| Correção editorial | Não | PATCH se publicada | Não |
| Novo checklist local | Não | PATCH ou MINOR | Não |
| Novo comando CLI | Sim | MINOR | Recomendado |
| Novo módulo Core | Sim | MINOR | Recomendado |
| Mudança no fluxo oficial | Sim | MINOR ou MAJOR | Sim |
| Mudança de Workspace | Sim | MINOR e avaliar Workspace | Sim |
| Mudança de licença ou objetivo | Sim | MAJOR | Sim |

## Política contra enciclopédia

A CEIP não deve acumular conteúdo apenas porque ele parece útil. Todo documento deve ter função clara:

- orientar decisão;
- reduzir risco;
- acelerar onboarding;
- melhorar qualidade;
- registrar conhecimento reutilizável;
- habilitar validação;
- melhorar execução assistida por IA.

Conteúdo sem função operacional deve ser removido, condensado ou mantido fora do Core.

## Exemplos

- Uma nova policy repetida em três projetos pode entrar no Core após evidência.
- Uma regra específica do GSA Oficina deve ficar no Workspace do projeto.
- Um padrão de pagamento usado em vários clientes deve começar como Capability Pack.
- Um conjunto de regras de oficina deve começar como Domain Pack.
- Uma alteração ampla no fluxo Runtime exige RFC.

## Checklist

- [ ] A mudança resolve problema real.
- [ ] Não existe documento, engine, policy ou playbook que já resolva o problema.
- [ ] O Core não recebeu contexto de cliente.
- [ ] A mudança preserva agnosticismo tecnológico.
- [ ] A complexidade adicionada tem ganho claro.
- [ ] RFC foi criada quando necessário.
- [ ] `CHANGELOG.md`, `ROADMAP.md` e `INDEX.md` foram atualizados quando aplicável.
- [ ] Validação ou piloto foi planejado quando a mudança é estrutural.

## Conclusão

Governança é o mecanismo que impede a CEIP de virar uma enciclopédia. O Core deve permanecer enxuto, coerente e útil para projetos reais.
