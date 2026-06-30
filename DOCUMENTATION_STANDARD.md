# Padrão de Documentação

## Objetivo

Definir como documentação técnica deve ser escrita, organizada e mantida em projetos CloudSix.

## Contexto

Documentação útil reduz dependência de memória, acelera onboarding, permite revisão assíncrona e melhora colaboração com agentes de IA. Documentação ruim cria falsa segurança e desatualização.

## Diretrizes

- Escrever em português do Brasil, com linguagem técnica, clara e objetiva.
- Declarar objetivo, contexto, decisão ou procedimento e critérios de validação.
- Diferenciar fato, decisão, hipótese e exemplo.
- Evitar texto genérico que não ajude alguém a executar ou decidir.
- Atualizar documentação junto com mudanças de comportamento, arquitetura, contrato ou operação.
- Usar diagramas Mermaid quando eles reduzirem ambiguidade.
- Preferir documentos pequenos e conectados a documentos longos sem estrutura.

## Estrutura mínima recomendada

Todo documento deve conter:

- Título.
- Objetivo.
- Contexto.
- Diretrizes ou procedimento.
- Exemplos quando aplicável.
- Checklist.
- Conclusão.

## Exemplos

- Um ADR deve explicar por que a decisão foi tomada, não apenas qual solução foi escolhida.
- Um playbook deve permitir execução por alguém que não participou da decisão original.
- Um checklist deve conter perguntas verificáveis, não intenções vagas.

## Checklist

- [ ] O documento informa quando deve ser usado.
- [ ] Há contexto suficiente para evitar interpretação errada.
- [ ] As diretrizes são acionáveis.
- [ ] Exemplos ajudam aplicação real.
- [ ] O checklist permite validação.
- [ ] Links e referências internas estão atualizados.

## Conclusão

Documentação é parte do sistema de engenharia. Ela deve ser tratada com o mesmo cuidado aplicado a contratos, testes e decisões técnicas.
