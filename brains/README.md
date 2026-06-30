# Brains da CEIP

## Objetivo

Organizar os cérebros especializados que orientam raciocínio estratégico antes de acionar agentes e engines.

## Contexto

Brains não são agentes executores. Eles representam capacidades de raciocínio da plataforma: negócio, arquitetura, engenharia, segurança, performance, qualidade, conhecimento, planejamento, pensamento, políticas, revisão e aprendizado.

Brains de produto ficam em `product-intelligence/brains/` e devem ser consultados antes dos brains de negócio, arquitetura e engenharia quando a demanda nasce como ideia, produto, feature, módulo, API ou integração.

Experiência de produto é conduzida por `product-experience/` quando houver interface relevante e deve alimentar Frontend UX Specialist, UI Designer, QA e Quality Brain.

## Diretrizes

- Brain orienta decisão; agente executa especialidade.
- Brain consulta Constitution, Policy Engine, Memory e Knowledge antes de recomendar.
- Conflitos entre brains escalam para Engineering Intelligence Core.

## Brains oficiais

- Engineering Intelligence Core.
- Product Intelligence Brains, em `product-intelligence/brains/`.
- Product Experience System, em `product-experience/`.
- Business Brain.
- Architecture Brain.
- Engineering Brain.
- Security Brain.
- Performance Brain.
- Quality Brain.
- Knowledge Brain.
- Planning Brain.
- Thinking Brain.
- Policy Brain.
- Review Brain.
- Learning Brain.

## Exemplos

- Performance Brain exige baseline antes de otimização.
- Product Experience System exige critérios de experiência e Visual Quality Score antes de frontend relevante.
- Policy Brain verifica se tarefa precisa ADR, RFC ou aprovação humana.

## Checklist

- [ ] Brain correto foi identificado.
- [ ] Documentos consultados foram definidos.
- [ ] Agentes relacionados foram acionados.
- [ ] Decisões permitidas e proibidas estão claras.

## Conclusão

Brains fazem a CEIP pensar antes de executar.
