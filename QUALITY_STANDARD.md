# Padrão de Qualidade CloudSix

## Objetivo

Definir o que significa uma entrega de software estar pronta, sustentável e aceitável dentro do padrão CloudSix.

## Contexto

Em sistemas empresariais, "funciona na minha máquina" não é suficiente. A entrega precisa preservar regras de negócio, proteger dados, ser compreensível, testável, observável e apta a evoluir.

## Diretrizes

- Requisito validado: a entrega atende uma necessidade explícita.
- Implementação coesa: responsabilidades estão nos lugares corretos para a stack identificada.
- Testes proporcionais: fluxos críticos têm cobertura compatível com risco.
- Segurança considerada: autenticação, autorização, dados sensíveis e entradas foram avaliados.
- Performance aceitável: gargalos previsíveis foram analisados e medidos quando necessário.
- Operação preparada: logs, métricas, alertas, rollback ou diagnóstico existem quando aplicável.
- Documentação atualizada: comportamento, decisão ou operação mudados foram registrados.
- Revisão realizada: mudanças relevantes passaram por análise técnica.
- Quality gates aplicados: gates obrigatórios foram executados conforme risco e domínio.
- Score mínimo respeitado: entregas críticas exigem 90, alto risco 85, médio risco 80 e baixo risco 70.

## Matriz de severidade

| Severidade | Descrição | Exemplo |
| --- | --- | --- |
| Bloqueante | Pode causar perda de dados, falha crítica, exposição ou quebra de regra essencial | Remover validação de autorização |
| Alta | Afeta usuário, operação ou manutenção de forma relevante | Migração sem rollback |
| Média | Cria risco controlável ou dívida técnica localizada | Duplicação em fluxo secundário |
| Baixa | Melhoria de clareza, consistência ou documentação | Nome ambíguo em função interna |

## Exemplos

- Uma feature com API, tela e banco deve ter validação de contrato, testes de regra, revisão de segurança e atualização de documentação.
- Um ajuste visual em site institucional deve validar responsividade, acessibilidade básica, performance percebida e SEO quando aplicável.

## Checklist

- [ ] O requisito explícito foi atendido.
- [ ] O comportamento crítico foi validado.
- [ ] Não há suposição tecnológica sem verificação.
- [ ] Não há regra de negócio inventada.
- [ ] Riscos principais foram mitigados ou registrados.
- [ ] A documentação necessária foi atualizada.
- [ ] Quality gates aplicáveis foram executados.
- [ ] Score mínimo por risco foi atendido ou exceção foi aprovada.

## Conclusão

Qualidade é um conjunto de evidências, não uma impressão. Este padrão deve orientar planejamento, execução, revisão e aceite.
