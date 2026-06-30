# Validação de Arquitetura

## Objetivo

Avaliar se a arquitetura da documentação é coerente, modular e sustentável.

## Contexto

O framework possui múltiplas camadas: documentos-raiz, docs, constitution, decision trees, review, quality gates, score system, knowledge base, recipes e meta-agentes. A arquitetura documental precisa ter fronteiras claras.

## Diretrizes

- Validar responsabilidades de diretórios.
- Procurar sobreposição confusa.
- Garantir que decisões estruturais tenham ADR ou RFC.
- Avaliar se a navegação parte do geral para o específico.

## Perguntas de validação

- `CONSTITUTION.md` e `constitution/` têm papéis distintos?
- `docs/adr` e `adr/` têm papéis distintos?
- `docs/prompts` e `prompts/` têm papéis distintos?
- `docs/checklists`, `validation/` e `quality-gates/` têm fronteiras claras?
- `review/` complementa `quality-gates/` sem duplicação indevida?
- `score-system/` depende de evidência e não substitui gates?
- `knowledge/` é memória organizacional, não standard paralelo?
- `patterns/` e `anti-patterns/` têm critérios de uso?
- `recipes/` orienta execução sem virar implementação específica?
- `ORCHESTRATOR.md` conecta agentes, meta-agentes, reviews e gates?
- O framework continua agnóstico de tecnologia?
- Há algum módulo sem dono conceitual?

## Exemplos

- Se `validation/agent-validation.md` validar entregas de projetos em vez do framework, há confusão de fronteira.
- Se `knowledge/` contém regra obrigatória, talvez ela deva virar standard ou law.

## Checklist

- [ ] Fronteiras de diretórios estão claras.
- [ ] Camadas do framework estão conectadas.
- [ ] Não há duplicação confusa.
- [ ] Decisões estruturais foram registradas.
- [ ] Agnosticismo tecnológico foi preservado.

## Conclusão

Validação de arquitetura protege o framework contra crescimento desordenado.
