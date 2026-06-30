# Frontend Gate

## Objetivo

Validar experiência, acessibilidade, estados de interface, responsividade, integração com dados e consistência visual, em alinhamento com Product Experience System quando houver interface relevante.

## Quando aplicar

Aplicar em telas, componentes, formulários, dashboards, fluxos de navegação e alterações visuais relevantes.

Quando a mudança for visualmente relevante, aplicar também `product-experience/README.md`, `product-experience/VISUAL_QUALITY_SCORE.md` e `quality-gates/product-experience-gate.md`.

## Critérios obrigatórios

- Estados de carregamento, erro, vazio e sucesso foram considerados.
- Critérios do Product Experience System foram considerados quando aplicáveis.
- Interface é responsiva nos breakpoints necessários.
- Acessibilidade básica foi avaliada.
- Textos, ações e feedbacks estão claros.

## Critérios bloqueantes

- Fluxo principal impossível de concluir.
- Texto ilegível ou conteúdo sobreposto.
- Ação destrutiva sem confirmação quando necessário.
- Estado de erro ausente em operação crítica.

## Evidências exigidas

Screenshots, critérios de UX, testes manuais ou automatizados e mapeamento de estados.

Quando houver interface relevante, incluir Visual Quality Score e evidências do Product Experience Gate.

## Agentes responsáveis

Frontend UX Specialist, UI Designer, QA Engineer, Performance Engineer e Code Reviewer Tech Lead.

## Checklist

- [ ] Estados principais foram cobertos.
- [ ] Product Experience Gate foi avaliado quando aplicável.
- [ ] Layout funciona em mobile e desktop.
- [ ] Ações críticas têm feedback.
- [ ] Componentes seguem padrão local.
- [ ] Integração com API foi validada.
- [ ] Visual Quality Score foi calculado quando aplicável.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Interface utilizável, consistente e pronta para operação real.

## Conclusão

Frontend é parte do produto, não apenas apresentação.
