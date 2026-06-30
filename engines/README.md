# Engines da CEIP

## Objetivo

Definir engines responsáveis por automatizar ou estruturar decisões repetitivas da plataforma.

## Contexto

Sempre que uma decisão puder ser automatizada ou repetidamente orientada por regras, a CEIP deve criar um engine. Engines reduzem dependência de memória do modelo e aumentam consistência.

## Diretrizes

- Engine não é implementação de código neste momento; é um mecanismo operacional documentado.
- Engine deve ter entrada, processo, saída e critérios de validação.
- Engine deve consultar constitution, policies e knowledge quando aplicável.
- Se um engine virar código no futuro, seu contrato documental deve ser preservado.

## Engines iniciais

- Context Engine.
- Thinking Engine.
- Planning Engine.
- Policy Engine.
- Memory Engine.
- Evolution Engine.
- Decision Engine.

## Exemplos

- Context Engine monta o contexto mínimo antes de acionar agentes.
- Policy Engine aplica políticas e detecta regras repetitivas que devem ser formalizadas.
- Evolution Engine transforma lacunas do piloto em versão nova.

## Checklist

- [ ] Engine resolve uma decisão ou processo repetitivo.
- [ ] Entradas e saídas são claras.
- [ ] Policies aplicáveis foram definidas.
- [ ] Validação foi descrita.

## Conclusão

Engines são a ponte entre documentação e operação inteligente.
