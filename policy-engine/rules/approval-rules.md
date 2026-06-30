# Approval Rules

## Objetivo

Detalhar regras de aprovação por risco.

## Contexto

Aprovação evita que agentes avancem em mudanças críticas sem responsabilidade explícita.

## Regras

- Baixo risco: revisão simples.
- Médio risco: checklist e revisão técnica.
- Alto risco: especialista, QA, Code Review e documentação.
- Crítico: aprovação humana, rollback, testes, monitoramento e comunicação.

## Exemplos

- Hotfix de segurança em produção exige aprovação humana antes de deploy.

## Checklist

- [ ] Nível de risco foi definido.
- [ ] Aprovação mínima foi aplicada.
- [ ] Exceções foram registradas.

## Conclusão

Aprovação deve ser proporcional ao risco.
