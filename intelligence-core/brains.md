# Brains Especializados

## Objetivo

Detalhar os brains que compõem o Engineering Intelligence Core e orientar quando cada um deve ser ativado.

## Contexto

Brains não são agentes de execução. Eles são capacidades de raciocínio que organizam análise, políticas, memória e revisão antes de acionar agentes especialistas.

## Diretrizes

- Brain formula raciocínio; agente executa especialidade.
- Brain deve consultar policies, constitution e knowledge antes de orientar decisão.
- Quando houver conflito entre brains, o Engineering Intelligence Core aciona o Chief Engineering Officer.

## Brains

### Business Brain

Garante que toda análise respeite domínio, valor, escopo, usuários e regras confirmadas.

### Architecture Brain

Garante que toda solução respeite arquitetura atual, fronteiras, contratos, ADRs e evolução incremental.

### Security Brain

Garante que dados sensíveis, permissões, segredos, logs e abuso previsível sejam considerados.

### Performance Brain

Garante que decisões de performance sejam guiadas por baseline, meta e impacto real.

### Quality Brain

Garante que gates, scorecards, testes, critérios de aceite e evidências sejam tratados como parte da entrega.

### Knowledge Brain

Garante que decisões, patterns, anti-patterns, RFCs, ADRs e aprendizados sejam reutilizáveis.

### Planning Brain

Garante que execução seja incremental, dependências sejam explícitas e riscos sejam planejados.

### Thinking Brain

Garante que a plataforma formule problema, hipóteses, restrições e alternativas antes da solução.

### Policy Brain

Garante que regras repetitivas virem políticas e que políticas governem decisões.

### Review Brain

Garante que revisões especializadas ocorram com escopo, evidência e severidade.

### Learning Brain

Garante que pilotos, incidentes, revisões e falhas alimentem evolução da plataforma.

## Exemplos

- Se uma task pede "criar cache", Thinking Brain questiona o problema, Performance Brain exige baseline e Policy Brain aplica política de performance.
- Se uma task pede "mudar regra de aprovação", Business Brain exige validação de domínio antes de qualquer implementação.

## Checklist

- [ ] Brain correto foi ativado para o tipo de decisão.
- [ ] Brain não substituiu agente especialista.
- [ ] Policies e knowledge foram consultados.
- [ ] Conflitos foram escalados.

## Conclusão

Brains tornam a plataforma capaz de raciocinar de forma coordenada antes de executar.
