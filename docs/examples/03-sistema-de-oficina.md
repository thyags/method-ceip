# Exemplo Prático - Sistema de Oficina

## Objetivo

Exemplificar uso do framework em sistema administrativo para oficina mecânica.

## Contexto

A oficina quer criar ordem de serviço com checklist do veículo, peças, mão de obra, aprovação do cliente e histórico. O uso pode ocorrer em balcão e dispositivo móvel.

## Diretrizes

- Validar fluxo real da oficina antes de desenhar formulário.
- Considerar mobile, câmera e uso com rede instável quando aplicável.
- Separar orçamento, aprovação e execução.

## Exemplo de orquestração

1. Business Analyst mapeia atendimento, diagnóstico, orçamento, aprovação e entrega.
2. Product Manager define incremento: criar ordem com itens e status.
3. Mobile Specialist avalia uso em tablet ou celular.
4. UI Designer define interface de checklist operacional.
5. Database Architect modela histórico de status.
6. QA Engineer cria casos com cancelamento e alteração de peças.

## Checklist

- [ ] Etapas da ordem de serviço foram confirmadas.
- [ ] Status e transições foram definidos.
- [ ] Uso móvel foi avaliado.
- [ ] Histórico e auditoria foram considerados.
- [ ] Aprovação do cliente tem evidência.

## Conclusão

Sistemas de oficina exigem fluxo operacional simples, rastreável e adaptado ao ambiente físico.
