# 03 - Playbook de Refatoração

## Objetivo

Executar refatorações controladas que melhorem estrutura sem alterar comportamento não solicitado.

## Contexto

Refatoração sem proteção vira mudança funcional disfarçada. Em ambientes empresariais, isso pode quebrar relatórios, permissões, cálculos e integrações.

## Diretrizes

- Definir motivo da refatoração: risco, duplicação, testabilidade, legibilidade ou evolução.
- Caracterizar comportamento atual.
- Separar commits ou entregas funcionais de estruturais.
- Validar regressão.
- Evitar abstrações especulativas.

## Fluxo

1. Selecionar alvo e objetivo.
2. Identificar comportamento e testes existentes.
3. Criar testes de caracterização quando necessário.
4. Aplicar pequenas mudanças.
5. Rodar validações.
6. Atualizar documentação se a estrutura relevante mudou.

## Exemplos

- Extrair regra duplicada de cálculo após confirmar paridade em casos de teste.
- Renomear conceitos de domínio somente quando a terminologia foi validada.

## Checklist

- [ ] Objetivo da refatoração está claro.
- [ ] Comportamento atual foi protegido.
- [ ] Mudança funcional foi separada.
- [ ] Validação foi executada.
- [ ] Complexidade final diminuiu.

## Conclusão

Refatorar é investir em mudança futura com risco controlado, não reorganizar por preferência.
