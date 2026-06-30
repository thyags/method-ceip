# Piloto - GSA Oficina

## Objetivo

Testar o CloudSix Engineering Framework em um projeto real com backend, frontend, UX, banco de dados, APIs, regras de negócio, responsividade, relatórios e fluxos complexos.

## Contexto

GSA Oficina é sugerido como campo de provas porque representa software empresarial com operação real e múltiplas disciplinas técnicas. O objetivo não é refatorar o projeto inteiro, mas observar se o framework orienta bem a análise.

## Diretrizes

- Usar exclusivamente o CloudSix Engineering Framework como orientação.
- Não alterar código no primeiro experimento.
- Começar por análise e diagnóstico.
- Registrar onde o framework ajudou e onde faltou orientação.
- Não inventar regra de negócio do projeto.

## Prompt do experimento

```text
Utilize exclusivamente o CloudSix Engineering Framework para analisar este projeto.

Antes de propor qualquer mudança:
- consulte CONSTITUTION.md e constitution/;
- use ORCHESTRATOR.md para escolher agentes;
- identifique stack, arquitetura, padrões e restrições;
- não invente regra de negócio;
- separe fatos, hipóteses e perguntas abertas;
- indique quais documentos do framework foram úteis;
- registre lacunas do framework quando aparecerem.

Entregue:
- resumo do projeto observado;
- stack identificada;
- agentes acionados e por quê;
- riscos principais;
- documentos do framework usados;
- lacunas do framework;
- próximos passos recomendados.
```

## Critérios de observação

- Os agentes funcionaram?
- O fluxo fez sentido?
- A documentação foi suficiente?
- A IA ficou perdida?
- Faltou algum documento?
- Os quality gates foram compreensíveis?
- Os prompts ajudaram?
- As recipes foram úteis?
- O framework reduziu ou aumentou ambiguidade?

## Rodadas sugeridas

1. Análise estrutural do projeto.
2. Análise de uma feature real.
3. Análise de um bug real.
4. Análise de um relatório.
5. Análise de uma integração ou API.

## Exemplos

- Se o projeto tiver ordem de serviço, acionar Business Analyst, Product Manager, Database Architect, Backend Engineer, Frontend UX Specialist, QA Engineer e Documentation Engineer.
- Se houver relatório lento, acionar Performance Engineer e Database Architect com `recipes/criar-relatorio.md`.

## Checklist

- [ ] Nenhum código foi alterado na primeira rodada.
- [ ] Stack foi identificada.
- [ ] Agentes foram escolhidos via orquestrador.
- [ ] Lacunas do framework foram registradas.
- [ ] Aprendizados foram encaminhados para atualização.

## Conclusão

O piloto GSA Oficina deve revelar lacunas práticas do framework antes da adoção ampla.
