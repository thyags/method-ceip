# ADR-0001 - Framework Stack-Agnóstico

## Objetivo

Registrar a decisão de manter o CloudSix Engineering Framework independente de tecnologia específica.

## Contexto

A CloudSix atua em projetos com stacks variadas. Assumir uma linguagem, framework, banco ou infraestrutura reduziria a utilidade do framework e poderia induzir agentes de IA a recomendações incorretas.

## Diretrizes

- Todo agente deve identificar a stack antes de recomendar implementação.
- Padrões devem ser expressos em princípios e critérios.
- Exemplos podem citar situações, mas não impor ferramenta.

## Decisão

O framework será oficialmente stack-agnóstico. Nenhum documento deve exigir Laravel, Filament, PHP, Node, React, Python, Java, .NET, Go, banco específico, nuvem específica ou arquitetura obrigatória.

## Consequências

- Documentos precisam descrever critérios antes de ferramentas.
- Agentes devem perguntar ou inspecionar antes de decidir.
- Templates devem acomodar diferentes tecnologias.
- Projetos consumidores podem adaptar padrões à própria stack.

## Exemplos

Em vez de definir "use framework X", o framework orienta "identifique padrões locais, compare alternativas e registre ADR se a decisão for estrutural".

## Checklist

- [ ] Documentos evitam tecnologia obrigatória.
- [ ] Recomendações pedem identificação da stack.
- [ ] Exemplos não viram prescrição.
- [ ] Agentes reforçam a regra.

## Conclusão

O agnosticismo de stack é uma decisão fundacional para preservar aplicabilidade real em projetos diversos.
