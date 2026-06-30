# 01 - Playbook de Novo Projeto

## Objetivo

Orientar a abertura de um novo projeto de software empresarial com escopo claro, decisões rastreáveis e base técnica sustentável.

## Contexto

Novos projetos costumam sofrer com pressa por implementação antes de entendimento do domínio, critérios de sucesso e arquitetura mínima. Este playbook organiza a fundação sem assumir stack.

## Diretrizes

- Começar por problema de negócio, usuários e processo.
- Começar pelo Product Intelligence System para discovery, PRD, MVP e roadmap.
- Definir escopo inicial e fora de escopo.
- Identificar restrições técnicas, legais, operacionais e de prazo.
- Escolher stack somente após critérios explícitos.
- Criar ADRs para decisões estruturais.

## Fluxo

1. Acionar `product-intelligence/playbooks/novo-produto.md`.
2. Gerar Idea Brief, Discovery Brief, PRD, MVP, Roadmap e backlog inicial.
3. Acionar Business Analyst para mapear domínio.
4. Acionar Product Manager para priorizar MVP.
5. Acionar Chief Software Architect para opções técnicas.
6. Acionar Security, Performance, QA e DevOps para riscos iniciais.
7. Criar templates de especificação, ADR e plano de testes.
8. Definir checklist de release inicial.

## Exemplos

- Um SaaS administrativo deve iniciar por personas, permissões, entidades principais, relatórios críticos e integrações.
- Um site institucional deve iniciar por público, conteúdo, SEO, performance e manutenção.

## Checklist

- [ ] Problema e público foram definidos.
- [ ] PIS foi executado ou exceção formal foi registrada.
- [ ] PRD, MVP e roadmap iniciais existem.
- [ ] MVP e fora de escopo foram registrados.
- [ ] Critérios de escolha técnica foram documentados.
- [ ] ADRs iniciais foram criados.
- [ ] Estratégia de testes e release existe.
- [ ] Segurança e operação foram consideradas.

## Conclusão

Novo projeto profissional começa com clareza de decisão, não com pressa de ferramenta.
