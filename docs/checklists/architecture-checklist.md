# Checklist de Arquitetura

## Objetivo

Validar decisões arquiteturais antes de implementação, revisão ou ADR.

## Contexto

Use quando a mudança afetar módulos, contratos, dados, integrações, operação, segurança ou evolução de longo prazo.

## Diretrizes

- Avalie contexto real antes da solução.
- Use critérios explícitos.
- Registre decisão importante em ADR.

## Checklist

- [ ] A stack e a arquitetura atual foram identificadas.
- [ ] O problema arquitetural está claro.
- [ ] Alternativas foram comparadas.
- [ ] Fronteiras e responsabilidades estão definidas.
- [ ] Contratos entre componentes foram descritos.
- [ ] Dados e fonte de verdade foram avaliados.
- [ ] Segurança foi considerada.
- [ ] Performance foi considerada.
- [ ] Operação, observabilidade e rollback foram avaliados.
- [ ] ADR foi criado ou atualizado.

## Exemplos

Use antes de separar módulo, criar integração crítica, alterar modelo de dados ou introduzir infraestrutura nova.

## Conclusão

Arquitetura deve ser revisável por critérios, não por preferência.
