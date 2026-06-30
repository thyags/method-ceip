# Recipe - Criar CRUD

## Objetivo

Orientar criação de cadastro com regras, permissões, validações e manutenção.

## Contexto

CRUD parece simples, mas pode envolver regra de domínio, histórico, validação, duplicidade, auditoria e integrações.

## Diretrizes

- Confirmar entidade, campos e regras.
- Identificar permissões.
- Validar dados e estados.
- Não criar campos por suposição.

## Passos

1. Confirmar objetivo do cadastro.
2. Mapear campos, obrigatoriedade e validações.
3. Definir permissões de criar, ler, editar e excluir.
4. Avaliar histórico, auditoria e exclusão lógica quando aplicável.
5. Definir telas, estados e mensagens.
6. Criar testes de validação e permissão.
7. Documentar regras.

## Agentes

Business Analyst, Product Manager, Database Architect, Backend Engineer, Frontend UX Specialist, Security Engineer, QA Engineer.

## Exemplos

- Cadastro de cliente.
- Cadastro de peça.

## Checklist

- [ ] Campos foram confirmados.
- [ ] Permissões foram definidas.
- [ ] Validações existem.
- [ ] Exclusão foi analisada.
- [ ] Testes cobrem regras.

## Conclusão

CRUD profissional respeita domínio e segurança, mesmo quando a interface é simples.
