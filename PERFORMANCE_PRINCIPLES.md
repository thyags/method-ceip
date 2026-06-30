# Princípios de Performance

## Objetivo

Orientar decisões de performance com foco em medição, experiência do usuário e sustentabilidade operacional.

## Contexto

Performance em software empresarial envolve latência de telas, consultas, relatórios, filas, integrações, processamento em lote, carregamento móvel e custo de infraestrutura. Otimização sem diagnóstico pode aumentar complexidade e esconder o gargalo real.

## Diretrizes

- Definir objetivo de performance antes de otimizar.
- Medir comportamento atual com dados representativos.
- Priorizar gargalos que afetam usuário, custo ou disponibilidade.
- Avaliar consistência e invalidação antes de usar cache.
- Considerar volume de dados, concorrência, paginação, índices, payloads e chamadas externas.
- Validar impacto depois da mudança.
- Evitar micro-otimização sem efeito perceptível ou operacional.

## Exemplos

- Relatório lento pode exigir paginação, materialização, índice, processamento assíncrono ou mudança de UX; a escolha depende da medição.
- Tela SaaS com muitos cards pode precisar reduzir payload, carregar sob demanda e preservar acessibilidade.
- Integração com terceiro pode precisar timeout, retentativa, circuito de proteção e fila.

## Checklist

- [ ] Existe métrica atual.
- [ ] Existe meta ou limite aceitável.
- [ ] O gargalo foi localizado.
- [ ] A solução considera consistência de dados.
- [ ] O impacto foi validado depois da alteração.
- [ ] A complexidade adicionada é justificada.

## Conclusão

Performance boa é resultado de medição, desenho adequado e operação consciente. A melhor otimização é aquela que resolve um gargalo real sem fragilizar o sistema.
