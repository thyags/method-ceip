# Exemplo Prático - Sistema SaaS

## Objetivo

Demonstrar aplicação do framework em uma nova funcionalidade SaaS multiusuário.

## Contexto

O produto precisa permitir que administradores configurem notificações automáticas por evento. Há usuários com permissões diferentes e integrações externas de envio.

## Diretrizes

- Confirmar perfis e permissões antes de desenhar telas.
- Definir eventos suportados sem inventar gatilhos.
- Avaliar limites, falhas e observabilidade da integração de envio.

## Exemplo de orquestração

1. Product Manager define valor e escopo inicial.
2. Business Analyst confirma eventos e regras.
3. Frontend UX Specialist desenha fluxo de configuração.
4. Backend Engineer define serviço de regras.
5. API Integration Engineer avalia provedor de envio.
6. Security Engineer revisa permissões e dados.
7. QA Engineer cria matriz de cenários.

## Checklist

- [ ] Eventos são requisitos confirmados.
- [ ] Permissões foram mapeadas.
- [ ] Falhas de envio têm tratamento.
- [ ] Tela tem estados de erro e vazio.
- [ ] Logs permitem rastrear notificação.

## Conclusão

Em SaaS, a mesma feature precisa atender experiência, permissão, operação e integração.
