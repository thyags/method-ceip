# Modelo de Contexto do CLI

## Objetivo

Definir quais informações o CLI deve coletar antes de montar prompts, validações ou artefatos.

## Contexto

O maior risco de IA assistida é falta de contexto. O CLI deve estruturar contexto antes de chamar agentes ou produzir documentos.

## Diretrizes

- Coletar apenas o necessário.
- Nunca coletar segredos.
- Separar contexto do framework e contexto do projeto.
- Declarar lacunas quando informação não existir.

## Contexto mínimo

| Categoria | Perguntas |
| --- | --- |
| Objetivo | Qual tarefa será feita? Qual resultado esperado? |
| Projeto | Qual repositório, módulo ou área será analisada? |
| Stack | Quais linguagens, frameworks, bancos e ferramentas existem? |
| Arquitetura | Quais módulos, contratos e integrações são afetados? |
| Negócio | Quais regras e usuários estão envolvidos? |
| Risco | Há dados sensíveis, performance crítica, migração ou impacto operacional? |
| Validação | Quais testes, checklists ou gates se aplicam? |
| Documentação | Quais ADRs, RFCs, standards ou recipes devem ser usados? |

## Exemplos

Para `cloudsix agents backend`, o CLI deve localizar agente backend, prompt correspondente, standards de backend, security gate e QA checklist.

## Checklist

- [ ] Objetivo foi coletado.
- [ ] Stack foi identificada ou lacuna registrada.
- [ ] Regras de negócio não foram inventadas.
- [ ] Riscos foram classificados.
- [ ] Documentos aplicáveis foram listados.

## Conclusão

Modelo de contexto é o que transforma o CLI em ferramenta de governança, não apenas atalho de arquivos.
