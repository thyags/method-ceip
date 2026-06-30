# Quality Gate Rules

## Objetivo

Definir regras para seleção e aprovação de Quality Gates.

## Contexto

Quality Gates são obrigatórios por impacto e risco.

## Regras

- Toda tarefa relevante passa por QA Gate e Review Gate.
- Mudança arquitetural passa por Architecture Gate.
- Mudança de banco passa por Database Gate.
- Mudança de segurança passa por Security Gate.
- Mudança visual passa por Frontend Gate.
- Mudança de performance passa por Performance Gate.
- Release ou hotfix passa por Release Gate.
- Mudança com IA ou agentes passa por AI Agent Gate.

## Exemplos

- Alteração em autenticação: Security, Backend, QA, Documentation, Review e Release.

## Checklist

- [ ] Gates foram derivados do impacto.
- [ ] Critérios bloqueantes foram avaliados.
- [ ] Evidências foram anexadas.

## Conclusão

Gates devem ser consequência do risco, não escolha opcional.
