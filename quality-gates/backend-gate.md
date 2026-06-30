# Backend Gate

## Objetivo

Validar regras de aplicação, contratos internos, integrações de serviço, erros, transações e testabilidade backend.

## Quando aplicar

Aplicar em APIs, serviços, jobs, regras de negócio, filas, eventos, autenticação, permissões e processamento assíncrono.

## Critérios obrigatórios

- Contratos e erros estão definidos.
- Regras de negócio não estão duplicadas sem justificativa.
- Operações críticas são testáveis.
- Logs e observabilidade existem quando necessário.

## Critérios bloqueantes

- Falha de autorização.
- Regra crítica sem teste.
- Efeito colateral sem idempotência quando aplicável.
- Erro silencioso em fluxo operacional.

## Evidências exigidas

Testes, contrato de API ou serviço, plano de erro, logs esperados e análise de impacto.

## Agentes responsáveis

Backend Engineer, API Integration Engineer, Security Engineer, QA Engineer e Code Reviewer Tech Lead.

## Checklist

- [ ] Contratos foram documentados.
- [ ] Permissões foram avaliadas.
- [ ] Fluxos críticos têm validação.
- [ ] Erros têm tratamento consistente.
- [ ] Observabilidade foi definida.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Backend correto, previsível e revisável.

## Conclusão

Backend aprovado deve proteger regra de negócio e operação.
