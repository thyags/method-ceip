# Visual Quality Score

## Objetivo

Registrar pontuação visual e evidências de experiência para interfaces relevantes.

## Contexto

Esta métrica complementa `score-system/` e `quality-gates/product-experience-gate.md`. Ela deve ser usada quando a entrega envolver tela, fluxo visual, dashboard, formulário, tabela, site, componente composto ou experiência responsiva.

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

## Registro

```markdown
# Visual Quality Score - Entrega

Risco:
Score:
Status:

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
- [ ] Bloqueios foram tratados separadamente.
- [ ] Resultado foi registrado no Workspace quando aplicável.

## Conclusão

Visual Quality Score transforma qualidade de experiência em métrica rastreável.
