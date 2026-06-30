# Validação dos Agentes

## Objetivo

Verificar se agentes e meta-agentes têm missão, limites, entradas, saídas, responsabilidades e interação suficientes.

## Contexto

Agentes são a camada operacional do framework. Se forem vagos, qualquer IA ficará perdida ou inventará escopo.

## Diretrizes

- Validar todos os 18 agentes especialistas.
- Validar os meta-agentes.
- Verificar se cada agente respeita stack agnóstica.
- Confirmar comunicação entre agentes.

## Perguntas de validação dos agentes especialistas

- Todos possuem missão?
- Todos possuem escopo de atuação?
- Todos possuem responsabilidades?
- Todos explicam o que devem fazer?
- Todos explicam o que não devem fazer?
- Todos possuem entradas esperadas?
- Todos possuem saídas esperadas?
- Todos possuem fluxo de trabalho?
- Todos possuem critérios de qualidade?
- Todos possuem checklist de validação?
- Todos possuem interação com outros agentes?
- Todos possuem anti-patterns?
- Todos possuem prompt operacional?
- Todos proíbem assumir tecnologia sem identificar stack?
- Todos proíbem inventar regra de negócio quando aplicável?
- Todos têm limites claros para acionar outro agente?

## Perguntas de validação dos meta-agentes

- Chief Engineering Officer resolve conflitos estratégicos sem substituir especialistas?
- Technical Program Manager coordena dependências e sequência?
- Quality Governor valida gates sem criar critérios paralelos?
- Knowledge Curator mantém knowledge base, ADRs, RFCs e patterns?
- Meta-agentes estão conectados ao `ORCHESTRATOR.md`?

## Exemplos

- Um agente backend sem "entradas esperadas" pode implementar sem requisito.
- Um meta-agente que decide regra de negócio sem Business Analyst viola a constituição.

## Checklist

- [ ] 18 agentes foram verificados.
- [ ] Meta-agentes foram verificados.
- [ ] Entradas e saídas estão claras.
- [ ] Limites e anti-patterns existem.
- [ ] Orquestração está coerente.

## Conclusão

Validação de agentes garante que a execução por IA tenha papéis claros e limites fortes.
