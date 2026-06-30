# AI Agent Gate

## Objetivo

Validar uso de agentes de IA com contexto correto, limites explícitos, rastreabilidade e proteção contra suposições.

## Quando aplicar

Aplicar em prompts, automações com IA, geração de documentação, análise de código, decisões assistidas e uso do framework por agentes.

## Critérios obrigatórios

- Agente tem missão, entradas, saídas e limites.
- Contexto fornecido é suficiente.
- Restrições e políticas foram declaradas.
- Saída exige validação humana ou gate quando houver risco.

## Critérios bloqueantes

- Agente autorizado a inventar requisito.
- Prompt sem limites para dados sensíveis.
- Decisão crítica delegada à IA sem aprovação.
- Falta de evidência para conclusão técnica.

## Evidências exigidas

Prompt usado, documentos consultados, políticas aplicadas, resultado gerado e revisão humana quando necessária.

## Agentes responsáveis

AI Engineer, Documentation Engineer, Quality Governor, Security Engineer e especialista do domínio.

## Checklist

- [ ] Missão do agente está clara.
- [ ] Entradas e saídas estão definidas.
- [ ] Limites estão explícitos.
- [ ] Policies foram consultadas.
- [ ] Resultado foi revisado.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

IA usada como acelerador controlado, sem substituir governança.

## Conclusão

Agentes de IA precisam de limites tão claros quanto qualquer processo técnico.
