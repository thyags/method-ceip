# Backend Review

## Objetivo

Avaliar mudanças backend quanto a regra de negócio, contratos, segurança, erro, testes e manutenção.

## Contexto

Use em APIs, serviços, jobs, regras de domínio, integrações internas e correções backend.

## Diretrizes

- Verifique `constitution/engineering-laws.md`.
- Use `decision-trees/backend.mmd`.
- Compare com `docs/checklists/backend-checklist.md`.

## Entradas esperadas

Requisito, diff ou proposta, contratos, modelos de dados, regras confirmadas, testes e riscos conhecidos.

## Bloqueios

- Regra de negócio não confirmada.
- Autorização ausente em ação sensível.
- Erro crítico sem tratamento.
- Fluxo crítico sem teste ou evidência.

## Exemplos

- Endpoint novo, job assíncrono, cálculo financeiro, integração interna ou refatoração de serviço.

## Checklist

- [ ] Regra de negócio está confirmada.
- [ ] Contratos foram preservados ou documentados.
- [ ] Validações e erros estão claros.
- [ ] Testes cobrem comportamento relevante.
- [ ] Logs ajudam diagnóstico sem vazar dados.

## Conclusão

Backend review garante que a lógica central continue confiável e evolutiva.
