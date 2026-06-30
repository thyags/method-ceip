# Requirement Policy

## Objetivo

Impedir que agentes inventem requisitos, regras de negócio ou comportamento não solicitado.

## Contexto

Software empresarial depende de regras de negócio corretas. Preencher lacunas com suposição pode alterar operação real.

## Diretrizes

- Gatilho: qualquer tarefa funcional ou mudança de comportamento.
- Regra: requisito deve estar explícito, observado ou confirmado.
- Exceção: hipótese pode ser registrada, mas não implementada como fato.
- Validação: Business Analyst ou Product Manager confirma escopo quando houver ambiguidade.

## Exemplos

- Campo novo em cadastro não deve ser criado apenas porque parece útil.
- Mudança de status de pedido exige validação de processo.

## Checklist

- [ ] Requisito foi confirmado.
- [ ] Hipóteses foram separadas.
- [ ] Fora de escopo foi declarado.
- [ ] Regra de negócio não foi inventada.

## Conclusão

Requirement Policy protege o domínio contra suposições de agentes.
