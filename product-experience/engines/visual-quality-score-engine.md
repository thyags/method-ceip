# Visual Quality Score Engine

## Objetivo

Calcular o Visual Quality Score de interfaces com critérios comparáveis, evidência e mínimos por risco.

## Entradas

- Resultado do Design Review.
- Screenshots, protótipo ou implementação.
- Critérios de experiência.
- Classificação de risco.
- Evidências de acessibilidade e responsividade.

## Dimensões

- Hierarquia.
- Espaçamento.
- Alinhamento.
- Consistência.
- Acessibilidade.
- Equilíbrio visual.
- Interação.
- Premium feel.

## Processamento

1. Atribuir nota de 0 a 10 para cada dimensão aplicável.
2. Converter a nota ponderada para 0 a 100.
3. Avaliar bloqueios não compensatórios.
4. Aplicar mínimo por risco.
5. Registrar evidência e recomendação.

## Saídas

- Score por dimensão.
- Score consolidado.
- Status: aprovado, aprovado com ressalvas ou bloqueado.
- Lista de ajustes por prioridade.

## Checklist

- [ ] Todas as notas têm evidência.
- [ ] Bloqueios não compensatórios foram avaliados.
- [ ] Mínimo por risco foi aplicado.
- [ ] Resultado foi registrado.
- [ ] Recomendações são acionáveis.

## Conclusão

Visual Quality Score Engine transforma qualidade visual em métrica operacional.
