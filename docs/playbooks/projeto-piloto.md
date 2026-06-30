# Playbook: Projeto Piloto CEIP

## Objetivo

Validar a CEIP em um projeto real controlado antes de adoção ampla.

## Projeto recomendado

GSA Oficina, por combinar backend, frontend, UX, banco de dados, APIs, regras de negócio, responsividade, relatórios e fluxos complexos.

## Entradas

- Repositório ou documentação do projeto.
- Objetivo da análise.
- Restrições de acesso.
- Critérios de sucesso do piloto.
- Lista de áreas que não podem ser alteradas.

## Processo

1. Ler `README.md`, `INDEX.md`, `CONSTITUTION.md`, `ORCHESTRATOR.md` e `POLICY_ENGINE.md`.
2. Identificar stack, arquitetura, módulos, riscos e fluxos críticos.
3. Classificar demandas com Policy Engine.
4. Acionar agentes via Orchestrator.
5. Aplicar quality gates e score engine.
6. Registrar lacunas da CEIP em `validation/pilot-project-validation.md`.
7. Atualizar `ROADMAP.md`, `knowledge/`, `memory/`, `patterns/` ou `anti-patterns/` se houver aprendizado.

## Saídas

- Relatório de uso do framework.
- Lacunas encontradas.
- Ajustes recomendados.
- Evidências de gates.
- Próximas versões sugeridas.

## Checklist

- [ ] O projeto foi analisado sem alterar produção.
- [ ] A IA não assumiu regra de negócio.
- [ ] Agentes foram úteis no fluxo real.
- [ ] Gates encontraram lacunas concretas.
- [ ] O framework foi atualizado com aprendizados.

## Conclusão

O piloto define se a CEIP funciona como plataforma operacional, não apenas como documentação.
