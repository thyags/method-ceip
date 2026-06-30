# Exemplo: Formulário Crítico

## Contexto

Formulário para cadastro, edição ou aprovação de informação relevante ao negócio.

## Decisão de experiência

- Campos agrupados por significado operacional.
- Validação próxima ao campo e antes de perda de dados.
- Ajuda contextual para regras pouco óbvias.
- Salvar rascunho quando o fluxo for longo ou crítico.
- Confirmação proporcional para ações irreversíveis.

## Estados

- Loading apenas no envio ou em campos dependentes.
- Erro preservando entradas preenchidas.
- Sucesso com próximo passo.
- Conflito quando outro usuário alterar o mesmo registro.

## Visual Quality Score esperado

Mínimo 85 quando houver impacto financeiro, jurídico, operacional ou de dados sensíveis.

## Checklist

- [ ] Campos têm ordem lógica.
- [ ] Regras estão claras.
- [ ] Erros preservam dados.
- [ ] Ação principal é inequívoca.
- [ ] Confirmações são proporcionais ao risco.
