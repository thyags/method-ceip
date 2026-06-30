# Exemplo - Mudança de Segurança

## Objetivo

Mostrar como classificar e governar mudanças com impacto de segurança.

## Contexto

Segurança inclui autenticação, autorização, dados sensíveis, segredos, logs, integrações e IA.

## Diretrizes

- Risco mínimo alto.
- Acionar Security Engineer.
- Validar dados, permissões e logs.

## Aplicação

- Tipo: correção de vulnerabilidade ou mudança de segurança.
- Risco: alto ou crítico.
- Agentes obrigatórios: Security Engineer, QA Engineer, Code Reviewer.
- Agentes opcionais: DevOps, Backend, Database.
- Documentos: security review, incident report quando aplicável.
- Gates: Security, QA, Review, Release.

## Exemplos

Corrigir autorização em exportação de clientes exige teste de permissão e auditoria.

## Checklist

- [ ] Dados sensíveis foram identificados.
- [ ] Autorização foi validada.
- [ ] Logs foram revisados.
- [ ] Risco residual foi registrado.

## Conclusão

Mudança de segurança não deve avançar sem evidência.
