# Decision Runtime

## Objetivo

Definir como o Runtime decide, bloqueia, escala ou registra exceções.

## Quando Usar

- Tarefa de risco médio, alto ou crítico.
- Mudança arquitetural.
- Decisão de produto com escopo relevante.
- Interface relevante.
- Release.
- Conflito entre agentes, policies ou prioridades.

## Processo

1. Identificar decisão.
2. Carregar contexto.
3. Listar alternativas.
4. Aplicar policies.
5. Avaliar risco.
6. Definir gate ou aprovação.
7. Registrar ADR, RFC ou exceção quando aplicável.

## Critérios

- Impacto em cliente.
- Reversibilidade.
- Segurança.
- Performance.
- Manutenibilidade.
- Experiência do usuário.
- Custo operacional.
- Risco de aprendizado incorreto pela IA.

## Saídas

- Decisão.
- Justificativa.
- Alternativas rejeitadas.
- Riscos aceitos.
- Registro local.

## Conclusão

Decision Runtime reduz decisões implícitas e torna a execução auditável.
