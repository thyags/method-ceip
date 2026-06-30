# Frontend Review

## Objetivo

Avaliar mudanças frontend quanto a UX, acessibilidade, estados, contratos, responsividade e performance.

## Contexto

Use em telas, componentes, dashboards, formulários, sites e fluxos responsivos.

## Diretrizes

- Use `decision-trees/frontend.mmd`.
- Compare com `docs/checklists/frontend-checklist.md`.
- Valide que segurança crítica não depende apenas do cliente.

## Entradas esperadas

Fluxo UX, requisitos, design system, componentes existentes, contrato de dados, telas afetadas e critérios de aceite.

## Bloqueios

- Ação sensível sem validação de permissão confiável.
- Estados críticos ausentes.
- Layout quebrado em viewport relevante.
- Formulário que perde dados sem necessidade em erro recuperável.

## Exemplos

- Listagem administrativa, dashboard SaaS, formulário ERP, página institucional ou fluxo mobile.

## Checklist

- [ ] Jornada principal está clara.
- [ ] Estados de loading, erro, vazio e sucesso existem.
- [ ] Layout é responsivo.
- [ ] Acessibilidade básica foi verificada.
- [ ] Contrato com backend foi validado.

## Conclusão

Frontend review protege experiência, clareza e confiabilidade da interface.
