# Playbook: Projeto Piloto CEIP

## Objetivo

Validar a CEIP em um projeto real controlado antes de adoção ampla.

## Projeto recomendado

GSA Oficina, por combinar backend, frontend, UX, banco de dados, APIs, regras de negócio, responsividade, relatórios e fluxos complexos.

## Princípios do piloto

- Não alterar produção.
- Não modificar código sem autorização explícita.
- Não inventar regra de negócio.
- Não assumir stack sem inspeção.
- Tratar a CEIP como única fonte de método.
- Registrar lacunas do framework, não apenas lacunas do projeto.

## Entradas

- Repositório ou documentação do projeto.
- Objetivo da análise.
- Restrições de acesso.
- Critérios de sucesso do piloto.
- Lista de áreas que não podem ser alteradas.

## Processo

1. Preparação: definir objetivo, escopo, repositório, áreas bloqueadas e responsáveis.
2. Leitura CEIP: ler `README.md`, `INDEX.md`, `CONSTITUTION.md`, `ORCHESTRATOR.md` e `POLICY_ENGINE.md`.
3. Descoberta: identificar stack, arquitetura, módulos, riscos, fluxos críticos e lacunas de contexto.
4. Policy: classificar demandas com `policy-engine/AGENT_ROUTING_POLICIES.md` e `policy-engine/RISK_POLICIES.md`.
5. Orquestração: acionar agentes via `orchestrator/` e documentar handoffs.
6. Validação: aplicar `quality-gates/`, `engines/score-engine.md` e reviews necessários.
7. Aprendizado: registrar lacunas da CEIP em `validation/pilot-project-validation.md`.
8. Evolução: atualizar `ROADMAP.md`, `knowledge/`, `memory/`, `patterns/` ou `anti-patterns/` se houver aprendizado.

## Saídas

- Relatório de uso do framework.
- Lacunas encontradas.
- Ajustes recomendados.
- Evidências de gates.
- Próximas versões sugeridas.

## Critérios de sucesso

- A IA localiza os documentos corretos sem orientação manual excessiva.
- O Policy Engine classifica risco e agentes de forma útil.
- O Orchestrator produz sequência executável.
- Quality gates identificam lacunas concretas.
- O Score Engine gera decisão compreensível.
- O piloto revela melhorias para a CEIP.

## Critérios de falha

- A IA fica perdida entre documentos duplicados.
- Agentes têm papéis sobrepostos sem handoff claro.
- Gates não conseguem aprovar ou bloquear.
- O framework exige tecnologia específica.
- O relatório final não gera ação concreta.

## Checklist

- [ ] O projeto foi analisado sem alterar produção.
- [ ] A IA não assumiu regra de negócio.
- [ ] Agentes foram úteis no fluxo real.
- [ ] Gates encontraram lacunas concretas.
- [ ] O framework foi atualizado com aprendizados.
- [ ] Resultado foi registrado em relatório auditável.

## Conclusão

O piloto define se a CEIP funciona como plataforma operacional, não apenas como documentação.
