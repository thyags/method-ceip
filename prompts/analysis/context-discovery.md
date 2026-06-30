# Prompt - Descoberta de Contexto

## Objetivo

Orientar uma IA a descobrir contexto antes de propor solução.

## Contexto

Use no início de qualquer tarefa técnica ou funcional com informações incompletas.

## Diretrizes

- Identificar stack, domínio, arquitetura e restrições.
- Separar fatos, hipóteses e perguntas.
- Não implementar.

## Prompt

```text
Use o CloudSix Engineering Framework.
Consulte o Constitution Engine antes de responder.

Objetivo: descobrir contexto suficiente para orientar a próxima decisão.

Faça:
- identifique stack, arquitetura, padrões locais e documentos relevantes;
- descreva domínio, usuários, regras confirmadas e restrições;
- separe fatos, hipóteses e perguntas abertas;
- indique riscos iniciais;
- recomende próximos agentes ou documentos.

Não faça:
- não invente regra de negócio;
- não proponha implementação ainda;
- não assuma tecnologia não verificada.
```

## Exemplos

Use antes de feature nova, legado desconhecido, bug sem reprodução ou integração.

## Checklist

- [ ] Stack foi identificada ou lacuna registrada.
- [ ] Fatos e hipóteses foram separados.
- [ ] Próximos passos foram indicados.

## Conclusão

Este prompt impede que a IA pule análise para solução.
