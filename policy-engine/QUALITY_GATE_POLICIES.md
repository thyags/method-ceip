# Quality Gate Policies

## Objetivo

Definir quais quality gates devem ser aplicados por impacto e risco.

## Contexto

Gates impedem que entregas avancem sem evidências mínimas. O conjunto de gates depende da natureza da mudança.

## Diretrizes

- Toda entrega relevante passa por QA e Review Gate.
- Segurança, banco, performance e arquitetura entram por impacto.
- Gate falho bloqueia, exige mitigação ou aceite formal.

## Políticas

| Impacto | Gates obrigatórios |
| --- | --- |
| Arquitetura | Architecture, Documentation, Review |
| Negócio | Business, QA, Documentation |
| Backend/API | Backend, Security, QA, Review |
| Frontend/UX | Frontend, UX/UI, QA |
| Banco | Database, Security, QA, Release |
| Segurança | Security, QA, Review, Release |
| Performance | Performance, QA, Review |
| Release | Release, QA, Documentation |
| IA/agentes | AI Agent, Security, Documentation, Review |

## Exemplos

- Alteração de autenticação aciona Security, Backend, QA, Documentation e Review.

## Checklist

- [ ] Impactos foram classificados.
- [ ] Gates obrigatórios foram selecionados.
- [ ] Evidências foram definidas.
- [ ] Gate falho tem decisão registrada.

## Conclusão

Quality Gate Policies convertem impacto em validação obrigatória.
