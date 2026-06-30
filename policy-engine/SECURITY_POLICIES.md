# Security Policies

## Objetivo

Definir políticas para segurança, privacidade, autenticação, autorização e dados sensíveis.

## Contexto

Mudanças de segurança têm risco sistêmico e devem acionar governança específica.

## Diretrizes

- Autorização sensível nunca deve depender apenas do cliente.
- Segredos não podem ser registrados, logados ou versionados.
- Dados sensíveis devem ser minimizados.
- IA não deve receber dados sensíveis sem necessidade e controle.

## Políticas

- Mudança com autenticação exige Security Engineer e QA.
- Mudança com permissão exige matriz de acesso ou regra explícita.
- Mudança com dados sensíveis exige avaliação de exposição.
- Logs devem diagnosticar sem vazar dados.
- Incidente de segurança exige registro e pós-incidente.

## Exemplos

- Exportação de clientes exige permissão, auditoria e minimização de campos.

## Checklist

- [ ] Dados sensíveis foram identificados.
- [ ] Autorização foi validada.
- [ ] Segredos estão protegidos.
- [ ] Logs são seguros.
- [ ] Risco residual foi registrado.

## Conclusão

Security Policies tornam segurança obrigatória por impacto, não opcional.
