# Rubrica de Pontuação

## Objetivo

Definir critérios para notas de 0 a 10 em cada área avaliada pelo Score System.

## Contexto

Notas sem rubrica viram opinião. Esta rubrica orienta avaliação por evidência.

## Diretrizes

- Use 0 a 10 por área.
- Considere 8 como entrega sólida, não perfeita.
- Use 10 apenas quando houver evidência forte e baixo risco residual.
- Registre bloqueios separadamente da nota.

## Escala geral

| Nota | Interpretação |
| --- | --- |
| 0-3 | Insuficiente, risco alto ou ausência de evidência |
| 4-5 | Parcial, lacunas relevantes |
| 6-7 | Aceitável com riscos ou melhorias necessárias |
| 8-9 | Sólido, evidenciado e sustentável |
| 10 | Excelente, completo e com risco residual baixo |

## Critérios por área

- Arquitetura: fronteiras, contratos, ADR, compatibilidade e evolução.
- Segurança: dados sensíveis, autorização, segredos, logs e abuso previsível.
- Performance: baseline, meta, gargalo, validação e monitoramento.
- UX / Product Experience: clareza, estados, acessibilidade, responsividade, hierarquia, interação, consistência visual e premium feel.
- Testes: cobertura de risco, regressão, dados e evidências.
- Documentação: contexto, decisão, exemplos, links e manutenção.
- Manutenibilidade: simplicidade, coesão, padrões locais e legibilidade.
- Operação: deploy, rollback, observabilidade, suporte e incidentes.

## Exemplos

- Testes 7.5: fluxo principal e regressões cobertos, mas sem automação em bordas secundárias.
- Segurança 10: autorização validada, dados minimizados, logs seguros e risco residual baixo.

## Checklist

- [ ] Nota tem evidência.
- [ ] Critério aplicado está claro.
- [ ] Bloqueios foram tratados separadamente.
- [ ] Recomendações de melhoria foram registradas.
- [ ] Product Experience Gate foi considerado quando a entrega envolveu interface.

## Conclusão

A rubrica transforma pontuação em linguagem comum de qualidade.
