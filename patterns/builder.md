# Pattern - Builder

## Objetivo

Organizar construção passo a passo de objetos, documentos, payloads ou estruturas complexas.

## Contexto

Builder ajuda quando há muitos campos opcionais, combinações ou validações de criação.

## Diretrizes

- Use quando melhora legibilidade.
- Evite esconder validação obrigatória.
- Mantenha estado intermediário controlado.

## Exemplos

- Montar payload de integração com campos condicionais.
- Construir relatório com filtros e agrupamentos.

## Checklist

- [ ] Construção é complexa o bastante.
- [ ] Validações obrigatórias são explícitas.
- [ ] Resultado final é consistente.

## Conclusão

Builder melhora clareza em construções complexas, mas é excesso para estruturas simples.
