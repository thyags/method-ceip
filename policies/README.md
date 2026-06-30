# Policy Library

## Objetivo

Armazenar políticas operacionais da CEIP, derivadas da constituição e de regras repetitivas.

## Contexto

Toda regra repetitiva deve virar política. Políticas permitem que agentes, engines, reviews e quality gates apliquem governança de forma consistente.

## Diretrizes

- Política deve ter gatilho, regra, exceções e validação.
- Políticas devem ser agnósticas de tecnologia.
- Exceções precisam de justificativa e risco residual.
- Políticas novas devem ser propostas quando reviews, pilotos ou incidentes repetirem a mesma orientação.

## Políticas iniciais

- Requirement Policy.
- Stack Discovery Policy.
- Decision Policy.
- Documentation Policy.
- Review Policy.
- Knowledge Reuse Policy.

## Exemplos

- Se toda tarefa exige identificar stack, isso é política.
- Se toda decisão arquitetural exige ADR, isso é política.

## Checklist

- [ ] Política tem gatilho claro.
- [ ] Regra é verificável.
- [ ] Exceções são explícitas.
- [ ] Validação foi definida.

## Conclusão

Policy Library transforma governança em regras aplicáveis e reutilizáveis.
