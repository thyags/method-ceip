# Métricas de Segurança

## Objetivo

Definir métricas para acompanhar risco, controles e resposta a falhas de segurança.

## Contexto

Segurança precisa ser monitorada continuamente, especialmente em sistemas com dados sensíveis, integrações, permissões e IA.

## Diretrizes

- Métricas devem preservar privacidade.
- Achados críticos devem ter prazo e responsável.
- Risco aceito precisa ser revisado periodicamente.

## Métricas sugeridas

- Achados por severidade.
- Tempo médio para corrigir vulnerabilidades críticas.
- Percentual de rotas/ações críticas com teste de autorização.
- Exposição de segredos detectada.
- Eventos de acesso indevido.
- Riscos residuais aceitos e vencidos.

## Exemplos

- Muitas falhas de autorização em review indicam necessidade de padrão backend mais forte.
- Riscos aceitos vencidos devem voltar ao backlog de segurança.

## Checklist

- [ ] Achados têm severidade.
- [ ] Correções têm responsável.
- [ ] Riscos aceitos são revisitados.
- [ ] Métricas não expõem dados sensíveis.

## Conclusão

Métricas de segurança mantêm risco visível depois da entrega.
