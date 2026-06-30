# RFC-0002 - Score System para Entregas

## Objetivo

Propor um sistema de pontuação para avaliar entregas de engenharia de forma consistente.

## Contexto

Checklists validam presença de critérios, mas não expressam maturidade relativa da entrega. Um scorecard ajuda agentes e equipes a identificar onde melhorar.

## Diretrizes

- Pontuação não substitui review.
- Critério bloqueante pode impedir aceite mesmo com nota alta.
- Evidência deve acompanhar nota.

## Proposta

Criar score de 0 a 100 com áreas: arquitetura, segurança, performance, UX, testes, documentação, manutenção e operação.

## Alternativas

- Apenas checklist: simples, mas pouco comparável.
- Score numérico com evidência: melhor para melhoria contínua, exige disciplina.

## Exemplos

Uma entrega pode ter 89/100, mas ser bloqueada por falha crítica de segurança.

## Checklist

- [ ] Rubrica foi criada.
- [ ] Template de scorecard existe.
- [ ] Critérios bloqueantes foram definidos.
- [ ] Gates foram relacionados.

## Conclusão

O Score System transforma qualidade em avaliação comparável sem remover julgamento técnico.
