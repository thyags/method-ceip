# 10 - Playbook de Otimização de Performance

## Objetivo

Orientar otimização de performance com diagnóstico, meta, intervenção controlada e validação de resultado.

## Contexto

Lentidão pode ter origem em consulta, renderização, payload, infraestrutura, rede, integração, concorrência ou regra de negócio. Otimizar sem medir desperdiça tempo e pode criar complexidade.

## Diretrizes

- Definir métrica e cenário antes de agir.
- Coletar baseline.
- Localizar gargalo com evidência.
- Comparar alternativas.
- Validar ganho e regressão.
- Documentar limites e próximos passos.

## Fluxo

1. Registrar sintoma e impacto.
2. Definir métrica e meta.
3. Coletar baseline.
4. Diagnosticar causa provável.
5. Implementar menor intervenção viável.
6. Medir novamente.
7. Monitorar em produção.

## Exemplos

- Se relatório demora 40 segundos, defina meta, avalie consulta, volume, índices, agregação e possibilidade de pré-processamento.
- Se tela demora a abrir, avalie payload, chamadas paralelas, renderização, cache e assets.

## Checklist

- [ ] Sintoma e impacto foram descritos.
- [ ] Baseline foi coletado.
- [ ] Meta foi definida.
- [ ] Gargalo foi localizado.
- [ ] Ganho foi validado.
- [ ] Risco de regressão foi avaliado.

## Conclusão

Otimização profissional troca achismo por evidência e melhora o sistema sem criar complexidade desnecessária.
