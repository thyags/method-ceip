# Context Engine

## Objetivo

Construir o contexto mínimo necessário antes de qualquer análise, plano, decisão ou implementação.

## Contexto

Falta de contexto é uma das principais causas de erro em agentes de IA. Este engine define o que deve ser descoberto antes de avançar.

## Diretrizes

- Identificar stack, arquitetura, domínio, restrições e risco.
- Separar fatos, hipóteses e perguntas abertas.
- Não permitir implementação quando contexto crítico estiver ausente.

## Entradas

- Tarefa solicitada.
- Repositório ou módulo alvo.
- Documentos existentes.
- Restrições conhecidas.

## Processo

1. Identificar objetivo.
2. Identificar stack e padrões locais.
3. Identificar domínio e regras confirmadas.
4. Identificar arquitetura e contratos afetados.
5. Identificar riscos de segurança, dados, performance e operação.
6. Registrar lacunas.

## Saídas

- Context brief.
- Hipóteses e perguntas abertas.
- Agentes recomendados.
- Documentos do framework aplicáveis.

## Exemplos

- Antes de criar API, identificar consumidores, autenticação, contrato existente e dados sensíveis.

## Checklist

- [ ] Stack foi identificada.
- [ ] Domínio foi descrito.
- [ ] Arquitetura foi observada.
- [ ] Riscos foram listados.
- [ ] Lacunas foram registradas.

## Conclusão

Context Engine garante que a plataforma pense com base no sistema real.
