# 06 - Padrões de Frontend

## Objetivo

Orientar desenvolvimento frontend com consistência, acessibilidade, responsividade, performance e manutenção.

## Contexto

Frontend em sistemas empresariais deve apoiar produtividade e reduzir erro. A stack pode variar, mas os critérios de qualidade permanecem: clareza, estados completos, contratos corretos e experiência confiável.

## Diretrizes

- Identificar framework, roteamento, estado, design system e padrões de componentes existentes.
- Implementar estados de carregamento, vazio, erro, sucesso, permissão e conflito quando aplicável.
- Manter contratos com backend explícitos.
- Garantir responsividade nos breakpoints relevantes.
- Evitar lógica de autorização apenas no cliente.
- Monitorar impacto de bundle, assets e chamadas desnecessárias.

## Exemplos

- Formulário administrativo deve preservar dados digitados em erro de validação.
- Tabela com grande volume deve considerar paginação, filtros, busca e estado vazio.
- Botão de ação destrutiva deve comunicar impacto e respeitar permissão.

## Checklist

- [ ] Stack e componentes existentes foram identificados.
- [ ] Estados de interface foram cobertos.
- [ ] Contratos de dados foram validados.
- [ ] Responsividade foi verificada.
- [ ] Acessibilidade básica foi considerada.
- [ ] Performance de carregamento foi avaliada.

## Conclusão

Frontend de qualidade transforma regras e dados em uso eficiente, seguro e compreensível.
