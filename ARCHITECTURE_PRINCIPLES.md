# Princípios de Arquitetura

## Objetivo

Definir princípios para decisões arquiteturais em projetos CloudSix, sem impor tecnologia específica.

## Contexto

Arquitetura organiza responsabilidades, fronteiras, contratos, dependências e evolução. Em sistemas empresariais, escolhas arquiteturais afetam manutenção, segurança, performance, dados e capacidade de entrega por anos.

## Diretrizes

- Arquitetura deve servir ao domínio, não ao modismo técnico.
- Fronteiras devem reduzir acoplamento e deixar contratos explícitos.
- Decisões difíceis de reverter exigem ADR.
- Dependências externas devem ser isoladas por contratos internos quando o risco justificar.
- Módulos críticos devem ser testáveis e observáveis.
- Dados e regras de negócio devem ter fonte de verdade clara.
- Reescritas exigem justificativa robusta, plano incremental e estratégia de paridade.

## Critérios arquiteturais

| Critério | Pergunta |
| --- | --- |
| Coesão | Cada componente tem responsabilidade clara? |
| Acoplamento | A mudança local exige alterações em muitos lugares? |
| Evolução | A solução suporta mudanças prováveis do domínio? |
| Operação | Falhas podem ser diagnosticadas? |
| Segurança | Fronteiras protegem dados e ações sensíveis? |
| Custo | O benefício compensa complexidade e manutenção? |

## Exemplos

- Separar integração externa pode ser correto quando o contrato é instável ou há risco operacional.
- Manter um monólito modular pode ser melhor que distribuir serviços quando a equipe e o domínio ainda não justificam complexidade operacional.
- Criar evento de domínio exige pensar em consistência, reprocessamento, idempotência e versionamento.

## Checklist

- [ ] A decisão parte do domínio e do problema.
- [ ] Alternativas foram comparadas.
- [ ] Fronteiras e contratos estão claros.
- [ ] Riscos de operação, dados e segurança foram avaliados.
- [ ] ADR foi criado quando necessário.

## Conclusão

Boa arquitetura reduz custo de mudança sem antecipar complexidade desnecessária. Ela deve ser explícita, revisável e conectada ao negócio.
