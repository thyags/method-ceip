# Dívida Técnica do Método

## Objetivo

Registrar dívidas técnicas da própria CEIP após a auditoria executiva RC-1.

## Curto Prazo

| Dívida | Impacto | Ação |
| --- | --- | --- |
| Workspaces antigos não possuem `.ceip/runtime/` | `ceip doctor` passa a sinalizar instalações antigas | Parcialmente mitigado por `ceip upgrade`; ampliar compatibilidade em versões futuras |
| Runtime Packs ainda são textuais | Automação é útil, mas não executa validações profundas | Evoluir `ceip audit` e `ceip score` |
| Profiles ainda são modelo conceitual | Installer não adapta fluxo por perfil | Implementar Profile Selector no `ceip init` |
| Domain Packs ainda não possuem conteúdo especializado | Projetos por domínio ainda dependem de análise manual | Criar packs piloto para ERP, SaaS e Oficina |
| Capability Packs ainda não possuem templates prontos | Capacidades recorrentes continuam espalhadas | Priorizar authentication, payments, reports e dashboards |

## Médio Prazo

| Dívida | Impacto | Ação |
| --- | --- | --- |
| Migrações avançadas ainda são limitadas | Adoção em escala exige migração por versão de origem | Evoluir `ceip upgrade` com planos por versão e políticas customizadas |
| Falta comando `ceip audit` | Auditorias amplas ainda dependem de scripts pontuais | Automatizar validação estrutural, links, runtime, gates e score |
| Prompt Builder ainda não possui seleção fina por token budget | Pode carregar contexto acima do necessário | Adicionar orçamento de contexto e priorização de fontes |
| Runtime não possui adaptadores por ferramenta de IA | Codex, Claude, Cursor e Gemini recebem prompt similar | Criar adapters por ferramenta mantendo contrato comum |
| Engineering Marketplace ainda é diretório conceitual | Plugins não são instaláveis | Definir manifesto de plugin e validação |

## Longo Prazo

| Dívida | Impacto | Ação |
| --- | --- | --- |
| CEIP Evolution ainda não é comando | Aprendizado recorrente não vira policy automaticamente | Criar `ceip evolve` para sugerir policy, brain, engine, pattern, recipe ou template |
| Knowledge Graph ainda é documental | Relações não são consultáveis por máquina | Criar índice estruturado JSON/YAML agnóstico de stack |
| Score Engine ainda depende de avaliação humana | Score não é calculado automaticamente | Criar rubricas executáveis e evidências normalizadas |
| Runtime não executa workflows completos | Plataforma ainda é assistiva, não autônoma | Evoluir execução governada após validação piloto |
| Enterprise governance ainda não possui trilha de auditoria formal | Adoção em empresas grandes pode exigir compliance adicional | Criar audit log formal e exportação de evidências |

## Dívidas Rejeitadas

| Proposta | Motivo |
| --- | --- |
| Criar stack oficial | Contraria agnosticismo tecnológico |
| Automatizar chamada direta a LLM no RC-1 | Aumenta risco antes de piloto real |
| Copiar Core para Workspaces | Viola separação Core + Workspace |
| Tornar Domain Packs obrigatórios | Aumentaria carga cognitiva antes da maturidade |

## Conclusão

A dívida remanescente não bloqueia produção inicial. Ela orienta evolução controlada após RC-1, especialmente em upgrade, auditabilidade, profiles e packs.
