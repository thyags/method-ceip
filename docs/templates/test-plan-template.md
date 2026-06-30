# Template de Plano de Testes

## Objetivo

Definir escopo, estratégia, cenários, dados e evidências de teste para uma entrega.

## Contexto

Use para features, correções críticas, migrações, integrações, releases e refatorações com risco de regressão.

## Template

```markdown
# Plano de Testes - Título

## Objetivo

Comportamento ou risco que será validado.

## Contexto

Requisito, mudança, stack, ambiente e dependências.

## Diretrizes

Priorizar risco, regra de negócio, permissões, dados e contratos.

## Escopo de teste

- Incluído:
- Excluído:

## Cenários

| ID | Cenário | Tipo | Dados | Resultado esperado |
| --- | --- | --- | --- | --- |
| CT-001 |  |  |  |  |

## Dados de teste

Origem, preparação, anonimização e limitações.

## Evidências

Logs, screenshots, relatórios, comandos, resultados ou observações.

## Riscos residuais

O que não foi coberto e por quê.

## Checklist

- [ ] Critérios de aceite foram cobertos.
- [ ] Fluxo principal foi testado.
- [ ] Exceções foram testadas.
- [ ] Permissões foram testadas.

## Conclusão

Resultado final e recomendação de aceite.
```

## Exemplos

Use para validar alteração de relatório, integração, login, pagamento, cadastro crítico ou migração de dados.

## Checklist

- [ ] Plano cobre riscos principais.
- [ ] Dados são representativos.
- [ ] Evidências serão registradas.

## Conclusão

Plano de testes transforma qualidade em validação executável.
