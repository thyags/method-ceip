# CloudSix Engineering CLI

## Objetivo

Especificar o CLI da CEIP. O comando atual é `ceip`, fornecido pelo pacote `method-ceip`.

## Contexto

O framework agora combina leitura de documentos, Workspace local e Runtime Packs. O CLI localiza contexto, monta prompts, executa validações e orienta agentes de IA com menos esforço manual.

## Diretrizes

- Manter o CLI agnóstico de tecnologia.
- O CLI deve ler o framework local, não depender de conhecimento embutido desatualizado.
- Comandos devem produzir saída textual auditável.
- O CLI deve evitar alterar arquivos sem confirmação explícita.

## Comandos atuais

```bash
ceip init
ceip doctor
ceip analyze
ceip plan
ceip architect
ceip review
ceip release
ceip learn
ceip version
```

## Capacidades esperadas

- Criar Workspace `.ceip/`.
- Validar instalação com `doctor`.
- Gerar Runtime Packs.
- Montar contexto para agente certo.
- Preparar prompts para Codex, Claude Code, Gemini CLI, Cursor, Windsurf e Copilot.
- Avaliar quality gates.
- Preparar scorecard de entrega.

## Exemplos

```bash
ceip analyze "entender o projeto"
ceip plan "nova funcionalidade de pedidos"
ceip architect "integração fiscal"
ceip review "revisar PR de pagamentos"
```

## Checklist

- [ ] Comandos têm contrato claro.
- [ ] Entradas e saídas foram especificadas.
- [ ] Não há dependência de stack específica.
- [ ] Segurança e privacidade foram consideradas.

## Conclusão

O CLI deve nascer depois da validação prática, como camada operacional sobre um framework já comprovado.
