# Security Score

## Objetivo

Pontuar segurança de uma entrega considerando ameaças, controles, exposição e validações.

## Contexto

Falhas críticas de segurança bloqueiam a entrega independentemente da média final.

## Critérios

| Critério | Peso sugerido |
| --- | --- |
| Autenticação e autorização | 25 |
| Proteção de dados sensíveis | 25 |
| Validação de entrada | 15 |
| Gestão de segredos | 15 |
| Auditoria e logs seguros | 10 |
| Abuso previsível | 10 |

## Interpretação

- 90-100: excelente.
- 80-89: bom.
- 70-79: aceitável com ressalvas.
- 60-69: fraco.
- Abaixo de 60: bloqueado.

## Checklist

- [ ] Não há bypass de autorização conhecido.
- [ ] Dados sensíveis foram classificados.
- [ ] Segredos não foram expostos.
- [ ] Entradas externas foram validadas.
- [ ] Logs não vazam informações sensíveis.

## Conclusão

Segurança tem critérios bloqueantes próprios e não deve ser compensada por outras notas.
