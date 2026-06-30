# Exemplo 03 - Escopo de Projeto Piloto

## Objetivo

Exemplificar como delimitar um piloto CEIP antes de aplicar o framework em projeto real.

## Projeto

GSA Oficina ou projeto equivalente com backend, frontend, banco de dados, integrações, regras de negócio e relatórios.

## Escopo permitido

- Ler documentação e estrutura do projeto.
- Identificar stack e módulos.
- Mapear fluxos críticos.
- Classificar riscos usando Policy Engine.
- Simular roteamento de agentes.
- Aplicar quality gates por amostragem.
- Produzir relatório de lacunas.

## Fora de escopo

- Alterar produção.
- Criar código de aplicação.
- Modificar regras de negócio.
- Migrar dados.
- Executar deploy.
- Assumir comportamento sem validação.

## Roteiro

1. Ler `docs/playbooks/projeto-piloto.md`.
2. Definir módulo ou fluxo piloto.
3. Executar Context Engine.
4. Executar Policy Engine.
5. Acionar Orchestrator.
6. Aplicar dois ou três gates críticos.
7. Registrar lacunas em `validation/pilot-project-validation.md`.

## Critérios de sucesso

- A CEIP orienta a análise sem explicação externa excessiva.
- Agentes e gates escolhidos fazem sentido.
- Lacunas viram ações concretas.
- Nenhuma recomendação depende de stack fixa.

## Checklist

- [ ] Escopo foi delimitado.
- [ ] Fora de escopo foi declarado.
- [ ] Riscos foram classificados.
- [ ] Gates foram aplicados por evidência.
- [ ] Lacunas foram registradas.

## Conclusão

Piloto controlado testa o método sem expor operação real.
