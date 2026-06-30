# Arquitetura de Referência - Sistema Legado

## Objetivo

Definir abordagem arquitetural para evolução de legado com proteção de comportamento.

## Contexto

Legados têm conhecimento implícito, dependências antigas, dados críticos e pouca cobertura. A arquitetura de referência prioriza mapeamento, contenção e modernização gradual.

## Diretrizes

- Inventariar módulos, jobs, integrações e dados.
- Criar testes de caracterização para fluxos críticos.
- Usar camadas de adaptação quando necessário para isolar dependências.
- Migrar por fatias com rollback.
- Registrar ADRs para cada decisão de modernização.

## Modelo conceitual

```mermaid
flowchart TD
    A["Legado existente"] --> B["Testes de caracterizacao"]
    A --> C["Camada de adaptacao"]
    C --> D["Novos modulos incrementais"]
    A --> E["Dados historicos"]
    D --> F["Observabilidade"]
    B --> G["Validacao de paridade"]
```

## Exemplos

- Encapsular integração antiga antes de substituir fornecedor.
- Criar testes para cálculo financeiro antes de refatorar módulo.

## Checklist

- [ ] Inventário foi feito.
- [ ] Fluxos críticos foram protegidos.
- [ ] Estratégia incremental foi definida.
- [ ] Dados históricos foram preservados.
- [ ] ADRs registram modernizações.

## Conclusão

Legado deve ser modernizado por redução contínua de risco, não por ruptura sem proteção.
