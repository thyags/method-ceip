# Suíte de Validação do Framework

## Objetivo

Fornecer perguntas estruturadas para auditar o CloudSix Engineering Framework de forma repetível por humanos ou agentes de IA.

## Contexto

Esta suíte valida o framework em si. Ela é diferente de `quality-gates/`, que valida entregas de projetos consumidores. Aqui o alvo é a qualidade, consistência e utilidade do próprio repositório.

## Diretrizes

- Validar por evidência, não por impressão.
- Registrar achados por severidade.
- Não alterar conteúdo durante a coleta de achados.
- Separar falhas estruturais de melhorias de profundidade.
- Usar esta suíte antes de versões de maturidade.

## Arquivos de validação

| Arquivo | Foco |
| --- | --- |
| `structural-validation.md` | Estrutura, arquivos, títulos e navegação |
| `architecture-validation.md` | Arquitetura da documentação |
| `documentation-validation.md` | Linguagem, padrão e referências |
| `security-validation.md` | Segurança, privacidade e governança de IA |
| `agent-validation.md` | Agentes, meta-agentes e orquestração |
| `workflow-validation.md` | Workflows, playbooks, recipes e gates |
| `link-validation.md` | Links internos e rotas de navegação |

## Formato de achado

```text
Severidade:
Arquivo:
Evidência:
Impacto:
Recomendação:
```

## Exemplos

- Um agente sem entradas esperadas é falha de `agent-validation`.
- Um link para diretório inexistente é falha de `link-validation`.
- Um workflow sem critério de conclusão é falha de `workflow-validation`.

## Checklist

- [ ] Validação correta foi escolhida.
- [ ] Evidências foram registradas.
- [ ] Achados foram classificados por severidade.
- [ ] Correções foram separadas da coleta de achados.
- [ ] Índice e roadmap foram atualizados quando necessário.

## Conclusão

A suíte de validação transforma auditoria do framework em processo reproduzível.
