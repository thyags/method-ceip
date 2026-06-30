# Pattern - Adapter

## Objetivo

Isolar diferenças entre contrato interno e sistema externo.

## Contexto

Adapter é especialmente útil em integrações com fornecedores, APIs instáveis, formatos legados ou bibliotecas específicas.

## Diretrizes

- Defina contrato interno antes do adapter.
- Trate erros e mapeamento de dados explicitamente.
- Evite vazar detalhes externos para domínio.

## Exemplos

- Adapter de gateway de pagamento.
- Adapter de API fiscal.

## Checklist

- [ ] Contrato interno foi definido.
- [ ] Mapeamento de dados foi documentado.
- [ ] Erros externos são tratados.

## Conclusão

Adapter protege o sistema de instabilidade e detalhes externos.
