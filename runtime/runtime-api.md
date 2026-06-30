# Runtime API

## Objetivo

Definir o contrato operacional para CLI, automações futuras e integrações que utilizem o CEIP Runtime.

## Comandos

| Comando | Função |
| --- | --- |
| `ceip analyze` | Montar contexto e diagnóstico inicial |
| `ceip plan` | Montar prompt e rota de Product Intelligence |
| `ceip architect` | Montar prompt e rota de arquitetura |
| `ceip review` | Montar prompt e rota de revisão |
| `ceip release` | Montar prompt e rota de release |
| `ceip learn` | Montar prompt e rota de aprendizado |

## Artefatos Gerados

- `.ceip/runtime/<comando>-runtime-pack.md`
- `.ceip/output/generated-prompts/<comando>-prompt.md`

## Contrato De Saída

Todo comando deve informar:

- tarefa;
- fontes carregadas;
- fontes ausentes;
- classificação;
- risco;
- agentes;
- gates;
- prompt final;
- próximos passos.

## Limites

- O Runtime API não chama LLM automaticamente.
- O Runtime API não executa deploy.
- O Runtime API não altera código de aplicação.
- O Runtime API não substitui revisão humana em risco alto ou crítico.

## Conclusão

Runtime API prepara a CEIP para automação sem abrir mão de governança.
