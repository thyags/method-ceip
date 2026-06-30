# Pattern - CQRS

## Objetivo

Separar modelos de comando e consulta quando leitura e escrita possuem necessidades muito diferentes.

## Contexto

CQRS pode ajudar em relatórios, dashboards, alto volume de leitura ou modelos derivados. Também pode adicionar complexidade operacional e consistência eventual.

## Diretrizes

- Use somente com necessidade clara.
- Defina consistência e sincronização.
- Documente latência aceitável entre escrita e leitura.

## Exemplos

- Dashboard de marketplace com agregados derivados de pedidos.
- Relatório operacional com pré-processamento.

## Checklist

- [ ] Leitura e escrita têm requisitos diferentes.
- [ ] Consistência eventual é aceitável.
- [ ] Operação e reprocessamento foram planejados.

## Conclusão

CQRS resolve assimetria real entre escrita e leitura; sem isso, pode ser complexidade desnecessária.
