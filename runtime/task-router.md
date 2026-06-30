# Task Router

## Objetivo

Classificar tarefas e determinar quais módulos da CEIP devem ser acionados.

## Classificações

| Tipo | Sinais | Rota |
| --- | --- | --- |
| Produto | ideia, feature, módulo, API, integração, MVP, PRD | Product Intelligence |
| Experiência | tela, dashboard, formulário, UI, UX, site, frontend | Product Experience e CDL |
| Arquitetura | decisão estrutural, integração crítica, banco, escala | Architect e ADR |
| Implementação | código, ajuste, refatoração, bugfix | Agente especialista e gates |
| Review | PR, auditoria, risco, qualidade | Review Process |
| Release | deploy, versão, produção, rollback | Release Gate |
| Learning | padrão recorrente, erro repetido, melhoria de método | Memory e Knowledge |

## Risco Inicial

- Baixo: alteração local, reversível e sem impacto sensível.
- Médio: fluxo de usuário, módulo interno ou integração simples.
- Alto: segurança, dados, pagamento, produção, migração ou cliente crítico.
- Crítico: incidente, vazamento, perda financeira, indisponibilidade ou compliance.

## Saídas

- Tipo de tarefa.
- Risco inicial.
- Agentes recomendados.
- Policies obrigatórias.
- Gates obrigatórios.
- Necessidade de PRD, ADR, RFC ou exceção formal.

## Checklist

- [ ] A tarefa foi classificada.
- [ ] O risco foi definido.
- [ ] Product Intelligence foi exigido quando aplicável.
- [ ] Product Experience foi exigido quando aplicável.
- [ ] Agentes e gates foram selecionados.

## Conclusão

Task Router transforma intenção solta em fluxo CEIP executável.
