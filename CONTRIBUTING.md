# Contribuindo com a CEIP

## Objetivo

Definir como propor, revisar e incorporar mudanças na CloudSix Engineering Intelligence Platform sem perder coerência, qualidade ou foco operacional.

## Contexto

O repositório é público para consulta e integração autorizada, mas a CEIP continua sendo propriedade da CloudSix Sistemas e Tecnologia Ltda. Contribuições, sugestões e discussões devem respeitar a licença, o propósito da plataforma e o processo de governança.

## Escopo aceito

São contribuições adequadas:

- Correções de links, títulos, typos e navegação.
- Melhoria de clareza em documentos existentes.
- Exemplos práticos que preservem agnosticismo tecnológico.
- Checklists acionáveis.
- Ajustes no Installer, Runtime ou Doctor com validação.
- RFCs para mudanças estruturais.
- Relatórios de uso em projetos piloto.

Não são contribuições adequadas:

- Código de aplicação de cliente.
- Recomendação de stack fixa como regra global.
- Conteúdo genérico sem uso operacional.
- Duplicação de módulos existentes.
- Inclusão de dados sensíveis, credenciais, nomes de clientes sem autorização ou contexto confidencial.
- Mudança de objetivo da CEIP sem RFC aprovada.

## Fluxo de contribuição

1. Verifique `INDEX.md` para localizar o documento certo.
2. Leia `GOVERNANCE.md` antes de propor mudança estrutural.
3. Para mudança pequena, abra branch `feature/<tema>`.
4. Para mudança relevante, crie RFC conforme `RFC_PROCESS.md`.
5. Atualize `CHANGELOG.md` quando houver impacto de produto.
6. Atualize `README.md`, `INDEX.md` e `ROADMAP.md` quando a navegação ou versão mudar.
7. Execute validações mínimas antes de solicitar revisão.

## Critérios mínimos de revisão

- A mudança resolve um problema real.
- A mudança não duplica capacidade já existente.
- A linguagem está em português do Brasil.
- A CEIP permanece agnóstica de tecnologia.
- O Core não recebe contexto específico de cliente.
- O conteúdo tem objetivo, contexto, diretrizes, exemplos, checklist e conclusão quando for documento operacional.
- Quality gates, Policy Engine, Runtime ou Orchestrator foram atualizados quando aplicável.

## Convenções

Branches:

```text
feature/nome-curto
release/v0.9.0-rc.3
hotfix/nome-curto
```

Commits:

```text
Add release governance docs
Update CEIP roadmap for pilot readiness
Fix runtime validation links
```

Evite commits vagos como:

```text
update
fix
docs
```

## Exemplos

- Ajustar texto de `README.md`: branch `feature/readme-clarity`, sem RFC.
- Adicionar novo Domain Pack: RFC obrigatória antes de entrar no Core.
- Adicionar checklist a um playbook existente: sem RFC se não alterar fluxo oficial.
- Alterar fluxo oficial da CEIP: RFC obrigatória e revisão de governança.

## Checklist

- [ ] Li `GOVERNANCE.md`.
- [ ] Avaliei se a mudança exige RFC.
- [ ] Preservei agnosticismo tecnológico.
- [ ] Atualizei navegação quando necessário.
- [ ] Atualizei changelog quando necessário.
- [ ] Não inseri dado sensível.
- [ ] Executei validações aplicáveis.

## Conclusão

Contribuir com a CEIP exige disciplina de produto. A plataforma deve crescer com evidência, não por acúmulo de ideias isoladas.
