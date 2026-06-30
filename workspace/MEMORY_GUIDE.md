# Guia de Memória do Workspace

## Objetivo

Definir como registrar memória específica do projeto em `.ceip/memory/`.

## Conteúdo recomendado

| Arquivo | Uso |
| --- | --- |
| `decisions.md` | Decisões relevantes e seus motivos |
| `lessons-learned.md` | Lições aprendidas |
| `mistakes.md` | Erros e recorrências |
| `patterns.md` | Padrões locais que funcionaram |
| `project-memory.md` | Memória geral do projeto |
| `business-memory.md` | Memória de negócio validada |

## Regras

- Registrar somente memória útil para manutenção futura.
- Não registrar dado sensível desnecessário.
- Anonimizar quando possível.
- Transformar aprendizado recorrente em proposta para o CEIP Core quando fizer sentido.
- Relacionar memória com ADR, RFC, tarefa ou review quando aplicável.

## Exemplo

```text
Data:
Origem:
Contexto:
Aprendizado:
Impacto:
Documento relacionado:
Deve virar melhoria no Core? Sim/Não
```

## Checklist

- [ ] A memória tem origem.
- [ ] O contexto está claro.
- [ ] Não há segredo ou dado sensível desnecessário.
- [ ] Há ação ou utilidade futura.
- [ ] O Core deve ser atualizado se o aprendizado for reutilizável.

## Conclusão

Memória local preserva histórico do projeto sem contaminar o método global.
