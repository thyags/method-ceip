# Princípios de Engenharia

## Objetivo

Definir princípios técnicos para orientar análise, implementação, revisão, operação e evolução de sistemas empresariais.

## Contexto

Sistemas SaaS, ERP, CRM, administrativos e integrações costumam acumular regras de negócio, exceções, automações e dependências externas. Princípios claros reduzem decisões casuísticas e ajudam agentes a agir de forma consistente.

## Diretrizes

### 1. Compreensão antes de alteração

Nenhuma mudança deve começar pela implementação. Primeiro identifique problema, stack, fluxo atual, dados envolvidos, integrações e impacto esperado.

### 2. Simplicidade deliberada

Use a solução mais simples que atenda aos requisitos atuais e preserve evolução provável. Simplicidade não significa ausência de design; significa remover complexidade sem perder responsabilidade.

### 3. Coesão e fronteiras

Módulos, serviços, telas e integrações devem ter responsabilidades claras. Misturar domínio, infraestrutura, apresentação e regras de integração aumenta custo de mudança.

### 4. Contratos explícitos

APIs, eventos, jobs, importações, exportações e interfaces devem ter contratos compreensíveis, versionáveis quando necessário e testáveis.

### 5. Qualidade verificável

Toda entrega deve ter critérios de aceite, testes ou validações equivalentes, além de evidência de que riscos principais foram considerados.

### 6. Operação como parte do design

Deploy, rollback, logs, métricas, alertas, suporte e diagnóstico devem ser pensados junto com a solução, especialmente em fluxos críticos.

### 7. Governança antes de exceção

Quando uma entrega descumpre gate, policy ou score mínimo, a exceção deve ser explícita, aprovada e temporária. Silenciar risco é pior do que expor limitação.

### 8. Aprendizado reutilizável

Incidentes, decisões repetidas, correções recorrentes e padrões úteis devem alimentar `memory/`, `knowledge/`, `patterns/`, `anti-patterns/` ou `recipes/`.

## Exemplos

- Antes de criar uma fila, avalie volume, latência aceitável, idempotência, retentativas e operação.
- Antes de alterar um relatório financeiro, caracterize os cálculos atuais e valide dados históricos.
- Antes de introduzir cache, defina invalidação, consistência e risco de dados obsoletos.

## Checklist

- [ ] O problema foi entendido no contexto do negócio.
- [ ] A solução respeita fronteiras do sistema.
- [ ] Os contratos relevantes estão explícitos.
- [ ] A entrega é testável e operável.
- [ ] A complexidade adicionada foi justificada.
- [ ] Policies, gates e scores aplicáveis foram considerados.
- [ ] Aprendizados relevantes foram registrados.

## Conclusão

Princípios de engenharia são filtros de decisão. Eles devem ser aplicados antes, durante e depois da implementação para proteger a qualidade de longo prazo.
