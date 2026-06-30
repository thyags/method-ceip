# Memory Engine

## Objetivo

Preservar decisões, aprendizados, padrões, exceções e evidências de forma reutilizável.

## Contexto

Nenhuma decisão deve depender exclusivamente da memória do modelo. O Memory Engine define onde registrar cada tipo de conhecimento.

## Diretrizes

- Decisão arquitetural vai para ADR.
- Proposta ampla vai para RFC.
- Aprendizado recorrente vai para Knowledge Base.
- Padrão vai para Pattern Library.
- Falha recorrente vai para Anti-pattern Library.
- Auditoria vai para `audits/`.

## Entradas

- Decisão.
- Review.
- Incidente.
- Piloto.
- Lacuna identificada.

## Processo

1. Classificar conhecimento.
2. Escolher destino.
3. Criar ou atualizar documento.
4. Linkar artefatos relacionados.
5. Atualizar índice quando necessário.

## Saídas

- Registro persistente.
- Links internos.
- Próxima ação de evolução.

## Exemplos

- Falha recorrente em autorização vira knowledge de segurança, policy e possível anti-pattern.

## Checklist

- [ ] Conhecimento foi classificado.
- [ ] Destino correto foi escolhido.
- [ ] Links foram criados.
- [ ] Índice foi atualizado quando necessário.

## Conclusão

Memory Engine garante que a plataforma aprenda fora da memória volátil de qualquer modelo.
