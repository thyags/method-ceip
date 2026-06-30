# Pattern - Domain-Driven Design

## Objetivo

Orientar modelagem centrada no domínio quando regras de negócio justificam investimento.

## Contexto

DDD ajuda em domínios complexos, com linguagem ubíqua, regras ricas e fronteiras claras. Pode ser excesso para CRUD simples.

## Diretrizes

- Comece por linguagem do domínio.
- Identifique bounded contexts quando houver fronteiras reais.
- Não aplique tática DDD sem entendimento do negócio.

## Exemplos

- ERP com estoque, financeiro e fiscal pode ter contextos diferentes.
- CRM com lead, oportunidade e atividade pode exigir linguagem própria.

## Checklist

- [ ] Domínio é complexo o suficiente.
- [ ] Linguagem foi validada com negócio.
- [ ] Fronteiras têm justificativa.

## Conclusão

DDD é útil quando o domínio é o centro da complexidade, não por preferência arquitetural.
