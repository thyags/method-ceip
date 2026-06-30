# 10 - Padrões de Testes

## Objetivo

Orientar estratégia de testes proporcional ao risco, ao domínio e à stack do projeto.

## Contexto

Nem todo comportamento exige o mesmo tipo de teste. Fluxos críticos, regras financeiras, permissões, integrações e migrações demandam validação mais forte que ajustes cosméticos.

## Diretrizes

- Identificar ferramentas e práticas de teste existentes.
- Conectar teste a requisito, risco ou regressão.
- Cobrir caminho principal, exceções e permissões relevantes.
- Usar testes de caracterização antes de refatorar legado.
- Evitar automação frágil que não valida comportamento importante.
- Registrar o que foi validado manualmente quando automação não for viável.

## Exemplos

- Cálculo financeiro deve ter casos com bordas e dados históricos.
- API pública deve ter testes de contrato e erro.
- Migração de dados deve ter validação antes/depois e amostra representativa.

## Checklist

- [ ] Ferramentas de teste foram identificadas.
- [ ] Cenários críticos foram cobertos.
- [ ] Erros e permissões foram testados.
- [ ] Dados de teste são representativos.
- [ ] Lacunas de teste foram registradas.

## Conclusão

Testes são evidência de confiança. A cobertura deve seguir risco, não apenas métrica numérica.
