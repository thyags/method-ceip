# Exemplo - Incidente de Produção

## Objetivo

Mostrar como o Policy Engine governa incidentes.

## Contexto

Incidentes exigem contenção, comunicação, diagnóstico, recuperação, registro e aprendizado.

## Diretrizes

- Classificar severidade.
- Conter impacto antes de solução definitiva.
- Registrar linha do tempo e lições aprendidas.

## Aplicação

- Tipo: incidente.
- Risco: alto ou crítico.
- Agentes obrigatórios: DevOps Engineer, QA Engineer, Code Reviewer.
- Agentes por impacto: Security, Backend, Database, Performance.
- Documentos: incident report, rollback, postmortem.
- Gates: Release, Security quando aplicável, QA, Documentation.

## Exemplos

Falha em integração fiscal exige contenção, fila/reprocessamento quando aplicável e comunicação operacional.

## Checklist

- [ ] Severidade foi definida.
- [ ] Contenção foi executada.
- [ ] Diagnóstico foi registrado.
- [ ] Pós-incidente foi planejado.

## Conclusão

Incidente é fonte obrigatória de aprendizado para Memory e Evolution Engine.
