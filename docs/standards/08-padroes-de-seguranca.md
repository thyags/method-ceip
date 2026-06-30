# 08 - Padrões de Segurança

## Objetivo

Estabelecer controles mínimos de segurança para mudanças em sistemas CloudSix, sem depender de tecnologia específica.

## Contexto

Segurança envolve pessoas, processos, software, infraestrutura e integrações. Cada mudança deve avaliar exposição de dados, permissões e abuso previsível.

## Diretrizes

- Validar autenticação e autorização em camada confiável.
- Aplicar menor privilégio em usuários, serviços e integrações.
- Validar entradas externas e tratar erros sem vazar informação sensível.
- Proteger segredos fora do código e da documentação.
- Registrar eventos críticos com logs seguros.
- Avaliar dependências, permissões administrativas e dados pessoais.
- Revisar fluxos de pagamento, autenticação, autorização, exportação e dados sensíveis.

## Exemplos

- Exportação de clientes deve validar permissão, registrar auditoria e limitar campos sensíveis.
- Integração externa deve proteger token, timeout, escopo e rotação de credenciais.
- IA que processa dados internos deve receber apenas o mínimo necessário.

## Checklist

- [ ] Autenticação e autorização foram revisadas.
- [ ] Menor privilégio foi aplicado.
- [ ] Entradas externas são validadas.
- [ ] Segredos estão protegidos.
- [ ] Logs evitam dados sensíveis.
- [ ] Risco residual foi documentado.

## Conclusão

Segurança deve ser um padrão de projeto, não uma etapa opcional no fim da entrega.
