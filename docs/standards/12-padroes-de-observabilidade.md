# 12 - Padrões de Observabilidade

## Objetivo

Definir critérios para diagnosticar comportamento de sistemas em produção ou ambientes equivalentes.

## Contexto

Sem observabilidade, incidentes viram investigação manual e demorada. Logs, métricas, traces, auditoria e eventos devem ser escolhidos conforme stack, criticidade e operação.

## Diretrizes

- Registrar eventos relevantes para diagnóstico, auditoria e suporte.
- Evitar logs com dados sensíveis, segredos ou payloads excessivos.
- Definir correlação entre requisições, jobs, integrações e eventos.
- Criar métricas para fluxos críticos, erros, latência e volume.
- Definir alertas acionáveis, com responsável e resposta esperada.
- Documentar dashboards, consultas ou rotinas operacionais quando aplicável.

## Exemplos

- Integração de pagamento deve registrar correlação, status, tentativa e erro sem gravar credenciais.
- Job de importação deve expor quantidade processada, rejeitada e motivo de falha.
- API crítica deve medir latência, taxa de erro e volume.

## Checklist

- [ ] Eventos críticos são rastreáveis.
- [ ] Logs não expõem dados sensíveis.
- [ ] Há correlação entre componentes.
- [ ] Métricas importantes foram definidas.
- [ ] Alertas são acionáveis.
- [ ] Operação sabe como diagnosticar falhas.

## Conclusão

Observabilidade transforma falhas em informação útil e reduz tempo de recuperação.
