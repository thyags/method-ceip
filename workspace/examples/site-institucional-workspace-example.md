# Exemplo de Workspace - Site Institucional

## Tipo de projeto

Site institucional com conteúdo, SEO, performance, acessibilidade, formulário de contato e integrações simples.

## Stack identificada

Registrar stack em `.ceip/STACK.md` após inspeção do projeto.

## Estrutura `.ceip/` recomendada

- `context/ux-ui-context.md` para páginas, estados e responsividade.
- `context/security-context.md` para formulários e proteção contra abuso.
- `metrics/performance-score.md` para carregamento.
- `reviews/frontend/` para revisão visual.
- `reviews/documentation/` para conteúdo e SEO técnico.

## Exemplo de `project.json`

```json
{
  "project": {
    "name": "Site Institucional",
    "type": "site institucional",
    "status": "ativo"
  },
  "architecture": {
    "criticalFlows": ["contato", "captura de lead"]
  }
}
```

## Exemplo de memória

```text
Contexto: formulário de contato recebe spam quando não há validação adequada.
Aprendizado: alterações em formulário exigem security gate e evidência de validação.
Destino: .ceip/memory/lessons-learned.md
```

## Exemplo de ADR

```text
Título: Estratégia para formulários públicos
Status: proposed
Decisão: validar entrada, registrar abuso previsível e evitar exposição de dados.
```

## Exemplo de tarefa

```text
Tipo: alteração visual
Risco: baixo/médio
Agentes: Frontend UX Specialist, UI Designer, QA Engineer, SEO Marketing Engineer
Gates: Frontend, QA, Performance, Documentation
```

## Exemplo de review

```text
Review: Frontend
Escopo: primeira dobra e formulário
Achado: estado de erro ausente
Status: correção necessária
```

## Consulta Core + Workspace

A IA deve consultar padrões de frontend, UX/UI, segurança e performance no Core, depois ler contexto UX/UI e métricas locais no Workspace.

## Conclusão

Mesmo projetos simples se beneficiam de contexto local, especialmente para performance, SEO, acessibilidade e formulários.
