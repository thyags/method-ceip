# Rodada 4 - QA Engineer

## Objetivo

Encontrar inconsistências, lacunas verificáveis e critérios fracos no framework.

## Contexto

QA deve tratar o framework como produto: navegável, consistente, testável e auditável.

## Diretrizes

- Validar evidências, não preferência.
- Procurar contradições entre documentos.
- Verificar se perguntas de validação são objetivas.
- Não aprofundar texto fora de lacunas reais.

## Perguntas de revisão

- Existe contradição entre `CONSTITUTION.md` e `constitution/`?
- Quality gates são verificáveis?
- Score System tem critérios suficientes?
- Agentes possuem entradas, saídas, limites e interação?
- Workflows têm começo, meio, fim e critério de conclusão?
- Templates podem ser preenchidos por alguém sem contexto verbal?
- Validation suite cobre estrutura, agentes, documentação, segurança e workflows?
- Existem documentos sem checklist operacional?

## Saída esperada

- Lista de inconsistências por severidade.
- Casos de teste documental.
- Sugestões de perguntas adicionais para `validation/`.
- Bloqueios para considerar o framework v1.2 validado.

## Exemplos

- Pergunta vaga como "a documentação está boa?" deve virar critério verificável.

## Checklist

- [ ] Contradições foram buscadas.
- [ ] Critérios fracos foram identificados.
- [ ] Lacunas de validação foram registradas.
- [ ] Achados têm severidade.

## Conclusão

Esta rodada transforma documentação em artefato auditável.
