# Roadmap do CloudSix Engineering Framework

## Objetivo

Definir a evolução planejada do framework por versões, mantendo clareza sobre fundação, agentes, playbooks, templates, checklists, arquiteturas de referência e módulos de governança operacional.

## Contexto

Um framework de engenharia precisa evoluir com uso real. O roadmap organiza incrementos sem transformar a documentação em um projeto fechado ou dependente de uma tecnologia específica.

## Versões planejadas

| Versão | Nome | Escopo |
| --- | --- | --- |
| v1.0 | Fundação | Constituição, manifesto, princípios, decisão, qualidade, segurança, performance, arquitetura, documentação, índice e guia de uso com IA |
| v1.1 | Agentes | Perfis completos dos 18 agentes, prompts individuais e fluxo oficial de orquestração |
| v1.2 | Playbooks | Procedimentos operacionais para novo projeto, legado, refatoração, review, release, incidente, integração, migração, auditoria e performance |
| v1.3 | Templates | Modelos de ADR, RFC, PR, user story, especificação técnica, teste, release notes, incidente e revisão arquitetural |
| v1.4 | Checklists | Checklists por disciplina para validação operacional e revisão técnica |
| v2.0 | Arquiteturas de referência | Modelos para SaaS, ERP, CRM, marketplace, sistema legado, site institucional e sistema com IA |
| v2.1 | Constitution Engine | Leis operacionais por domínio para orientar humanos e IAs |
| v2.2 | Decision Trees e Reviews | Fluxogramas Mermaid, review engine e ADR/RFC repositories |
| v2.3 | Quality Operating System | Quality gates, score system, métricas e orquestrador |
| v2.4 | Knowledge Libraries | Knowledge base, patterns, anti-patterns, prompt library e recipes |
| v3.0 | Meta-Agentes | Governança com CEO Técnico, Technical Program Manager, Quality Governor e Knowledge Curator |

## Critérios de evolução

- Toda nova versão deve preservar o caráter agnóstico de tecnologia.
- Mudanças estruturais devem atualizar `INDEX.md`, `README.md` e documentos relacionados.
- Novos padrões devem incluir objetivo, contexto, diretrizes, exemplos, checklist e conclusão.
- Novas decisões estruturais devem gerar ADR.
- Conteúdo adicionado deve ser útil em software empresarial real, não apenas descritivo.
- Novos módulos operacionais devem se conectar a `ORCHESTRATOR.md`, `INDEX.md`, quality gates e constitution.

## Ciclo recomendado

```mermaid
flowchart LR
    A["Criar"] --> B["Auditar"]
    B --> C["Aprofundar"]
    C --> D["Padronizar"]
    D --> E["Validar em projeto real"]
    E --> F["Registrar ajustes"]
    F --> B
```

## Exemplos

- Ao adicionar um novo tipo de arquitetura de referência, criar documento em `docs/reference-architectures`, atualizar `INDEX.md` e avaliar se um ADR é necessário.
- Ao ajustar um agente, atualizar também o prompt equivalente em `docs/prompts`.
- Ao criar novo playbook, adicionar checklist mínimo ou referenciar checklist existente.
- Ao adicionar nova recipe, relacionar agentes, gates e validações.
- Ao identificar aprendizado recorrente, registrar em `knowledge` e avaliar se deve virar standard.

## Checklist

- [ ] A versão tem escopo claro.
- [ ] A mudança mantém agnosticismo tecnológico.
- [ ] Documentos de navegação foram atualizados.
- [ ] Há exemplo prático quando aplicável.
- [ ] Há checklist operacional.
- [ ] Decisões estruturais foram registradas.
- [ ] Módulos operacionais foram conectados ao índice e ao orquestrador.

## Conclusão

O roadmap orienta evolução contínua sem perder coerência. O framework deve amadurecer a partir de uso real, auditorias recorrentes e decisões documentadas.
