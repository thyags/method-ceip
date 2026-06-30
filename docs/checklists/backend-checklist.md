# Checklist de Backend

## Objetivo

Validar mudanças backend quanto a regra de negócio, contratos, segurança, testes e manutenção.

## Contexto

Use em serviços, casos de uso, jobs, filas, APIs internas, regras de domínio e integrações.

## Diretrizes

- Respeite stack e padrões existentes.
- Preserve regras confirmadas.
- Garanta validações e erros previsíveis.

## Checklist

- [ ] Stack, framework e arquitetura local foram identificados.
- [ ] Regra de negócio está confirmada.
- [ ] Responsabilidades estão coesas.
- [ ] Contratos de entrada e saída foram definidos.
- [ ] Autorização foi validada em camada confiável.
- [ ] Entradas externas são validadas.
- [ ] Erros relevantes são tratados e diagnosticáveis.
- [ ] Testes cobrem fluxo principal e exceções.
- [ ] Logs não expõem dados sensíveis.
- [ ] Documentação foi atualizada quando necessário.

## Exemplos

Use para endpoint, job de processamento, alteração de cálculo, serviço de domínio ou integração interna.

## Conclusão

Backend confiável combina regra correta, contrato claro e validação proporcional ao risco.
