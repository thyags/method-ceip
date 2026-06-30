# Prompt - Análise de Causa Raiz

## Objetivo

Investigar bug, incidente ou comportamento inesperado com evidência.

## Contexto

Use quando houver falha, regressão, incidente, lentidão ou erro não explicado.

## Diretrizes

- Reproduzir ou coletar evidência.
- Separar sintoma de causa.
- Propor correção mínima.

## Prompt

```text
Use o CloudSix Engineering Framework.

Objetivo: investigar causa raiz de um problema.

Faça:
- descreva comportamento esperado e atual;
- identifique evidências disponíveis;
- liste hipóteses priorizadas;
- indique dados, logs, testes ou arquivos a verificar;
- proponha menor correção segura;
- defina teste de regressão.

Não invente causa sem evidência.
Não altere regra de negócio sem validação.
```

## Exemplos

Use para bug em cálculo, erro de permissão, integração falhando ou tela lenta.

## Checklist

- [ ] Comportamento esperado foi confirmado.
- [ ] Evidências foram listadas.
- [ ] Teste de regressão foi definido.

## Conclusão

Este prompt evita correção de sintoma sem entender causa.
