# Processo de Revisão por Especialistas

## Objetivo

Definir rodadas independentes para revisar a CEIP e entregas de projeto sem pedir que um único agente "melhore tudo".

## Contexto

Revisões especializadas reduzem superficialidade. Cada rodada tem foco limitado, critérios próprios e saída verificável.

## Comitê

| Papel | Responsabilidade na auditoria |
| --- | --- |
| Chief Engineering Officer | Coerência estratégica, governança e exceções |
| Chief Software Architect | Arquitetura da plataforma, dependências e decisões |
| Documentation Engineer | Linguagem, navegação, links e padronização |
| Security Engineer | Privacidade, segurança, dados sensíveis e IA |
| QA Engineer | Verificabilidade, validação e critérios bloqueantes |
| Performance Engineer | Eficiência operacional e critérios de performance |
| Product Manager | Valor, roadmap, adoção e escopo |
| Business Analyst | Aderência a projetos reais e regras de negócio |
| Code Reviewer / Tech Lead | Qualidade técnica documental, manutenção e consistência |

## Rodadas

1. Arquitetura.
2. Documentação.
3. Negócio.
4. QA.
5. Code Review.
6. Segurança.
7. Performance.
8. Governança final.

## Saída de cada rodada

Cada rodada deve produzir achados no formato:

```text
Severidade:
Arquivo:
Evidência:
Impacto:
Recomendação:
Status:
```

## Critérios de severidade

| Severidade | Critério |
| --- | --- |
| Bloqueante | Contradição, link quebrado central, risco de segurança, gate impossível de aplicar ou desalinhamento com a Constituição |
| Alta | Documento central superficial, fluxo obrigatório ambíguo ou política incompleta |
| Média | Exemplo ausente, nomenclatura inconsistente ou checklist fraco |
| Baixa | Melhoria de clareza, link útil ou ajuste de linguagem |

## Fluxo

```mermaid
flowchart LR
    A["Entrega"] --> B["Arquitetura"]
    B --> C["Documentacao"]
    C --> D["Negocio"]
    D --> E["QA"]
    E --> F["Code Review"]
    F --> G["Seguranca"]
    G --> H["Performance"]
    H --> I["Governanca"]
```

## Checklist

- [ ] Cada rodada tem escopo próprio.
- [ ] Achados têm severidade.
- [ ] Correções foram rastreadas.
- [ ] Bloqueios foram resolvidos ou escalados.
- [ ] Resultado final atualiza knowledge ou memory quando houver aprendizado.
- [ ] Relatório final foi criado em `review/final-audit-report.md`.

## Conclusão

A revisão por especialistas torna a melhoria incremental e auditável.
