# Visual Quality Score

## Objetivo

Registrar pontuação visual e evidências de experiência para interfaces relevantes.

## Contexto

Esta métrica complementa `score-system/` e `quality-gates/product-experience-gate.md`. Ela deve ser usada quando a entrega envolver tela, fluxo visual, dashboard, formulário, tabela, site, componente composto ou experiência responsiva.

O score deve considerar a CloudSix Design Language. Em projetos com Workspace, consulte `.ceip/product-experience/cloudsix-design-language.md` e registre aderência em `.ceip/product-experience/cdl-compliance.md`.

## Dimensões

| Dimensão | Peso |
| --- | ---: |
| Hierarquia | 15 |
| Espaçamento | 10 |
| Alinhamento | 10 |
| Consistência | 15 |
| Acessibilidade | 15 |
| Equilíbrio visual | 10 |
| Interação | 15 |
| Premium feel | 10 |

## Relação Com CDL

| Dimensão | Como a CDL influencia |
| --- | --- |
| Hierarquia | Prioridade, contexto e próxima ação precisam ser evidentes |
| Consistência | Componentes, cores, estados e densidade seguem padrão local |
| Acessibilidade | Contraste, foco e comunicação não dependem só de cor |
| Interação | Estados e feedbacks são claros e proporcionais ao risco |
| Premium feel | A interface transmite confiança, precisão e maturidade |

## Registro

```markdown
# Visual Quality Score - Entrega

Risco:
Score:
Status:
CDL local:
CDL compliance:

| Dimensão | Nota | Evidência |
| --- | ---: | --- |
| Hierarquia | | |
| Espaçamento | | |
| Alinhamento | | |
| Consistência | | |
| Acessibilidade | | |
| Equilíbrio visual | | |
| Interação | | |
| Premium feel | | |

Bloqueios:

Melhorias:
```

## Checklist

- [ ] Score visual foi calculado.
- [ ] Cada nota tem evidência.
- [ ] Mínimo por risco foi aplicado.
- [ ] CDL local e conformidade CDL foram consultadas quando aplicável.
- [ ] Bloqueios foram tratados separadamente.
- [ ] Resultado foi registrado no Workspace quando aplicável.

## Conclusão

Visual Quality Score transforma qualidade de experiência em métrica rastreável.
