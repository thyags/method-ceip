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
- Executar validações em ordem: estrutura, links, contratos, coerência, profundidade e piloto.
- Gerar relatório final em `review/final-audit-report.md` quando a validação for ampla.

## Arquivos de validação

| Arquivo | Foco |
| --- | --- |
| `structural-validation.md` | Estrutura, arquivos, títulos e navegação |
| `platform-validation.md` | CEIP, Core, layers, engines, policies e lifecycle |
| `architecture-validation.md` | Arquitetura da documentação |
| `documentation-validation.md` | Linguagem, padrão e referências |
| `security-validation.md` | Segurança, privacidade e governança de IA |
| `agent-validation.md` | Agentes, meta-agentes e orquestração |
| `workflow-validation.md` | Workflows, playbooks, recipes e gates |
| `policy-validation.md` | Policies, rules, exemplos, risco, roteamento e aprovação |
| `product-intelligence-validation.md` | Product Intelligence System, discovery, PRD, MVP, roadmap e pipeline de produto |
| `product-experience-validation.md` | Product Experience System, CDL, design review, benchmarks, gate e Visual Quality Score |
| `quality-gate-validation.md` | Gates, critérios obrigatórios, bloqueios, evidências e score mínimo |
| `brain-validation.md` | Brains, responsabilidades, limites e interações |
| `engine-validation.md` | Engines, entradas, processamento, saídas, policies e gates |
| `pilot-project-validation.md` | Validação da CEIP em projeto real controlado |
| `link-validation.md` | Links internos e rotas de navegação |

## Formato de achado

```text
Severidade:
Arquivo:
Evidência:
Impacto:
Recomendação:
Correção aplicada:
```

## Ordem recomendada de auditoria

1. `structural-validation.md` para arquivos, diretórios e títulos.
2. `link-validation.md` para navegação.
3. `policy-validation.md`, `brain-validation.md`, `engine-validation.md`, `product-intelligence-validation.md` e `product-experience-validation.md` para coerência interna.
4. `quality-gate-validation.md` e métricas para acionabilidade.
5. `agent-validation.md` e `workflow-validation.md` para fluxo operacional.
6. `pilot-project-validation.md` para uso real.
7. Relatório em `review/final-audit-report.md`.

## Exemplos

- Um agente sem entradas esperadas é falha de `agent-validation`.
- Um link para diretório inexistente é falha de `link-validation`.
- Um workflow sem critério de conclusão é falha de `workflow-validation`.
- Uma feature sem PRD ou critério de aceite é falha de `product-intelligence-validation`.
- Uma interface sem PXS, Product Experience Gate ou Visual Quality Score é falha de `product-experience-validation`.

## Checklist

- [ ] Validação correta foi escolhida.
- [ ] Evidências foram registradas.
- [ ] Achados foram classificados por severidade.
- [ ] Correções foram separadas da coleta de achados.
- [ ] Validações automatizáveis foram executadas quando possível.
- [ ] Relatório final registra achados e correções.
- [ ] Índice e roadmap foram atualizados quando necessário.

## Conclusão

A suíte de validação transforma auditoria do framework em processo reproduzível.
