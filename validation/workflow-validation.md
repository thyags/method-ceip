# Validação de Workflows

## Objetivo

Auditar workflows, playbooks, recipes e quality gates quanto a sequência, critérios e aplicabilidade.

## Contexto

Fluxos operacionais precisam orientar execução real. Se forem genéricos, agentes não saberão quando iniciar, parar ou escalar.

## Diretrizes

- Validar se cada fluxo tem entrada, etapas e saída.
- Verificar se agents e gates aparecem no momento correto.
- Confirmar que não há tecnologia assumida.
- Avaliar aplicabilidade a projetos empresariais.

## Perguntas de validação

- Cada workflow tem começo, meio e fim?
- Cada workflow define critérios de conclusão?
- Playbooks cobrem situações recorrentes da CloudSix?
- Recipes possuem passos práticos sem criar código específico?
- Quality gates têm critérios de aprovação verificáveis?
- Workflows citam agentes apropriados?
- Hotfix diferencia urgência de governança reduzida?
- Modernização de legado preserva comportamento?
- AI-assisted development limita suposições da IA?
- Agent orchestration está coerente com `ORCHESTRATOR.md`?
- Playbooks de incidente, release e migração tratam rollback?
- Fluxos consideram documentação e knowledge base ao final?

## Exemplos

- Um workflow de bugfix sem reprodução ou evidência é incompleto.
- Uma recipe de cache sem invalidação é risco operacional.

## Checklist

- [ ] Workflows têm critérios de conclusão.
- [ ] Playbooks são executáveis.
- [ ] Recipes são práticas e agnósticas.
- [ ] Quality gates são verificáveis.
- [ ] Orquestração está consistente.

## Conclusão

Validação de workflows garante que o framework oriente ação, não apenas intenção.
