# Pattern Engine

## Objetivo

Recomendar padrões adequados ao contexto e impedir aplicação automática de soluções fora de lugar.

## Entradas

- Problema técnico ou de produto.
- Restrições do projeto.
- Catálogo em `patterns/`.
- Anti-patterns conhecidos.

## Processamento

1. Identificar forças e restrições do problema.
2. Consultar padrões aplicáveis.
3. Verificar anti-patterns relacionados.
4. Propor padrão com limites de uso.
5. Indicar alternativa quando o padrão não se aplica.

## Saídas

- Padrão recomendado.
- Justificativa e trade-offs.
- Riscos de uso incorreto.
- Documentos de apoio.

## Políticas relacionadas

- `policy-engine/ARCHITECTURE_POLICIES.md`
- `policy-engine/DECISION_POLICIES.md`

## Agentes envolvidos

Chief Software Architect, Backend Engineer, Frontend UX Specialist, Database Architect, Security Engineer e Performance Engineer.

## Quality gates aplicáveis

- `quality-gates/architecture-gate.md`
- Gate específico do domínio afetado.

## Exemplos

- Repository pode ser útil para isolar persistência, mas não deve esconder regras de negócio complexas.
- CQRS pode ajudar leituras pesadas, mas não deve ser adotado sem necessidade operacional.

## Checklist de validação

- [ ] O problema real foi descrito.
- [ ] O padrão resolve uma força concreta.
- [ ] Anti-patterns relacionados foram consultados.
- [ ] Trade-offs foram registrados.
- [ ] A decisão pode virar ADR se estrutural.

## Conclusão

Padrões são instrumentos, não metas.
