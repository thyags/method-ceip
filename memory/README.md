# Memory Layer

## Objetivo

Registrar memória operacional da CloudSix sem armazenar dados sensíveis desnecessários.

## Contexto

Memória é diferente de documentação permanente. Ela captura decisões, lições, padrões de erro e contexto útil para projetos futuros.

## Regras de segurança e privacidade

- Não registrar segredo, token, senha, chave privada ou credencial.
- Não registrar dado pessoal quando um resumo técnico for suficiente.
- Anonimizar cliente, usuário ou ambiente quando o detalhe não for necessário.
- Registrar origem, data e contexto da memória.
- Remover ou revisar memória obsoleta.

## Tipos de memória

- Negócio.
- Arquitetura.
- Decisões.
- Patterns.
- Erros.
- Lições aprendidas.
- Projetos.
- Clientes.

## Quando registrar

Registrar memória quando uma decisão, erro, solução, exceção ou lição tiver chance real de reaparecer em outro projeto ou futura manutenção. Não registrar informação apenas porque ela existe.

## Destinos

| Situação | Destino |
| --- | --- |
| Regra de negócio recorrente | `business-memory.md` |
| Decisão arquitetural recorrente | `architecture-memory.md` e ADR quando relevante |
| Erro repetido | `mistake-memory.md` e `anti-patterns/` |
| Solução reutilizável | `pattern-memory.md` e `patterns/` |
| Lição de incidente ou release | `lesson-learned-memory.md` |
| Contexto de projeto | `project-memory.md` |
| Restrição de cliente | `client-memory.md` |

## Critérios de descarte

- Informação sensível sem necessidade operacional.
- Dado pessoal substituível por resumo.
- Observação sem evidência.
- Conhecimento que já está documentado em fonte mais adequada.

## Checklist

- [ ] A memória tem utilidade futura.
- [ ] Não contém dado sensível desnecessário.
- [ ] Origem e contexto foram informados.
- [ ] Há relação com knowledge, pattern, anti-pattern, ADR ou RFC quando aplicável.
- [ ] O destino correto foi escolhido.
- [ ] Informação sensível foi minimizada.

## Conclusão

A Memory Layer cria continuidade sem comprometer privacidade.
