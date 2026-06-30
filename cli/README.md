# CloudSix Engineering CLI

## Objetivo

Especificar o futuro CLI `cloudsix-engineering`, que deve transformar o framework em uma plataforma operacional de engenharia.

## Contexto

Hoje o framework é consumido por leitura de documentos. Um CLI pode localizar contexto, montar prompts, executar validações, criar ADRs/RFCs e orientar agentes de IA com menos esforço manual.

Este diretório é uma especificação. Não contém implementação de código.

## Diretrizes

- Não criar CLI antes de validar manualmente o fluxo em projeto piloto.
- Manter o CLI agnóstico de tecnologia.
- O CLI deve ler o framework local, não depender de conhecimento embutido desatualizado.
- Comandos devem produzir saída textual auditável.
- O CLI deve evitar alterar arquivos sem confirmação explícita.

## Comandos planejados

```bash
cloudsix validate
cloudsix review
cloudsix architect
cloudsix plan
cloudsix agents backend
cloudsix agents ux
cloudsix adr create
cloudsix rfc create
cloudsix quality
```

## Capacidades esperadas

- Localizar documentação relevante.
- Montar contexto para agente certo.
- Executar perguntas de validação.
- Gerar ADRs e RFCs a partir de templates.
- Preparar prompts para Codex, Claude Code, Gemini CLI, Cursor, Windsurf e Copilot.
- Avaliar quality gates.
- Gerar scorecard de entrega.

## Exemplos

```bash
cloudsix validate --target framework
cloudsix agents backend --task "criar endpoint de pedidos"
cloudsix adr create --title "Estratégia de integração fiscal"
cloudsix quality --scope release
```

## Checklist

- [ ] Fluxos manuais foram validados em piloto.
- [ ] Comandos têm contrato claro.
- [ ] Entradas e saídas foram especificadas.
- [ ] Não há dependência de stack específica.
- [ ] Segurança e privacidade foram consideradas.

## Conclusão

O CLI deve nascer depois da validação prática, como camada operacional sobre um framework já comprovado.
