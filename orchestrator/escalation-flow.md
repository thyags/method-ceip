# Escalation Flow

## Objetivo

Definir quando uma decisão deve subir para meta-agentes, liderança técnica ou aprovação formal.

## Gatilhos

- Risco crítico.
- Gate bloqueado.
- Conflito entre agentes.
- Exceção de segurança.
- Mudança estrutural sem consenso.
- Impacto em produção, dados ou cliente.

## Fluxo

```mermaid
flowchart TD
    A["Bloqueio ou conflito"] --> B{"Dominio tecnico?"}
    B -->|Sim| C["Chief Software Architect"]
    B -->|Nao| D["Product Manager"]
    C --> E{"Impacto critico?"}
    D --> E
    E -->|Sim| F["Chief Engineering Officer"]
    E -->|Nao| G["Quality Governor"]
```

## Checklist

- [ ] Gatilho foi identificado.
- [ ] Responsável correto foi acionado.
- [ ] Decisão foi registrada.
- [ ] Exceção tem prazo e justificativa.

## Conclusão

Escalonamento existe para decisões que não devem ficar implícitas.
