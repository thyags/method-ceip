# Experience Memory

## Objetivo

Definir como registrar padrões de experiência aprovados para reutilização controlada em projetos CloudSix.

## Contexto

Quando uma tela, fluxo, tabela, formulário ou dashboard atinge alto padrão de qualidade, a CEIP deve preservar o aprendizado. A memória de experiência não é galeria estética; é biblioteca de decisões que explicam por que uma solução funcionou.

## O que registrar

- Tipo de tela ou fluxo.
- Problema resolvido.
- Contexto de uso.
- Decisão de layout.
- Componentes usados.
- Estados relevantes.
- Evidência de qualidade.
- Visual Quality Score.
- Limitações e condições de reutilização.

## O que não registrar

- Dados sensíveis.
- Screenshots com informação privada.
- Identidade visual de cliente sem autorização.
- Layout copiado de produto externo.
- Decisão sem justificativa.

## Estrutura recomendada no Workspace

```text
.ceip/product-experience/
├── experience-memory.md
├── best-layouts/
├── best-dashboard/
├── best-table/
├── best-form/
└── best-sidebar/
```

## Checklist

- [ ] O padrão registrado teve score alto ou justificativa forte.
- [ ] Não há dados sensíveis.
- [ ] A decisão explica contexto e trade-off.
- [ ] A reutilização tem limites claros.
- [ ] O registro aponta para artefatos locais, não para cópia do Core.

## Conclusão

Experience Memory permite que a CEIP aprenda qualidade de produto a partir de projetos reais sem misturar contexto de cliente ao Core.
