# Recipe - Criar Autenticação

## Objetivo

Orientar criação ou revisão de autenticação com segurança, UX e operação.

## Contexto

Autenticação protege acesso ao sistema e pode envolver login, recuperação, sessão, MFA, SSO ou integração externa.

## Diretrizes

- Identificar requisitos de segurança e usuários.
- Não armazenar segredo de forma insegura.
- Avaliar mensagens de erro, bloqueio e auditoria.
- Registrar decisão arquitetural quando estrutural.

## Passos

1. Confirmar perfis e requisitos de acesso.
2. Identificar stack e mecanismos existentes.
3. Definir fluxo de login, recuperação e sessão.
4. Avaliar proteção contra abuso.
5. Definir logs seguros e auditoria.
6. Testar sucesso, erro, expiração e bloqueio.
7. Documentar operação e suporte.

## Agentes

Security Engineer, Backend Engineer, Frontend UX Specialist, QA Engineer, DevOps Engineer, Documentation Engineer.

## Exemplos

- Login administrativo.
- Integração com provedor de identidade.

## Checklist

- [ ] Requisitos de acesso foram definidos.
- [ ] Segredos estão protegidos.
- [ ] Erros não vazam informação sensível.
- [ ] Sessão e expiração foram tratadas.
- [ ] Testes cobrem fluxos críticos.

## Conclusão

Autenticação deve ser segura, operável e compreensível para usuários.
