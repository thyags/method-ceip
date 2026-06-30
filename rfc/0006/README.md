# RFC-0006 - CloudSix Engineering Intelligence Platform

## Objetivo

Propor a mudança conceitual do framework para CloudSix Engineering Intelligence Platform, ou CEIP.

## Contexto

O projeto evoluiu de um conjunto de documentos para um sistema operacional de engenharia com agentes, meta-agentes, constitution engine, decision trees, knowledge base, reviews, quality gates, score system, validation suite, pilots e CLI planejado.

O nome "AI Engineering Platform" descreve a tecnologia usada. "Engineering Intelligence Platform" descreve a capacidade duradoura da plataforma.

## Diretrizes

- Manter compatibilidade com o repositório atual.
- Não renomear pastas sem necessidade operacional.
- Atualizar navegação e estratégia para refletir CEIP.
- Preservar agnosticismo tecnológico.

## Proposta

Adotar CloudSix Engineering Intelligence Platform (CEIP) como nome estratégico do produto e criar os módulos:

- `PLATFORM.md`
- `intelligence-core/`
- `layers/`
- `engines/`
- `policies/`
- `knowledge-graph/`
- `lifecycle/`

## Alternativas

- Manter "Engineering Framework": simples, mas subestima a ambição operacional.
- Usar "AI Engineering Platform": comunica tecnologia, mas pode envelhecer.
- Usar "Engineering Intelligence Platform": comunica capacidade e longevidade.

## Impactos

- README e INDEX devem explicar a mudança de escopo.
- Roadmap deve incorporar layers, engines e lifecycle.
- O futuro CLI deve operar sobre a CEIP, não apenas sobre documentos.

## Exemplos

Uma decisão técnica passa pelo Context Engine, Thinking Engine, Policy Engine, Decision Engine, agentes, reviews, quality gates e Memory Engine.

## Checklist

- [ ] Nome CEIP foi registrado.
- [ ] Módulos estratégicos foram criados.
- [ ] Navegação foi atualizada.
- [ ] Agnosticismo tecnológico foi preservado.

## Conclusão

CEIP é o nome que melhor representa a plataforma como inteligência de engenharia, não apenas documentação ou ferramenta de IA.
