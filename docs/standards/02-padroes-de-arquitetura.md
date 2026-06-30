# 02 - Padrões de Arquitetura

## Objetivo

Definir critérios arquiteturais comuns para orientar estrutura, fronteiras, contratos e evolução de sistemas.

## Contexto

Arquitetura deve refletir domínio, operação, equipe e restrições. O framework não impõe monólito, microsserviços, camadas, eventos ou qualquer padrão específico; ele exige justificativa.

## Diretrizes

- Definir fronteiras por responsabilidade de negócio e risco de mudança.
- Tornar contratos explícitos entre módulos, sistemas e integrações.
- Preservar fonte de verdade para dados e regras críticas.
- Usar ADR para decisões estruturais.
- Preferir modularidade interna antes de distribuição operacional quando a equipe não sustenta complexidade.
- Planejar migração incremental para mudanças estruturais.

## Exemplos

- Um ERP pode manter monólito modular se os módulos compartilham transações e equipe pequena opera o sistema.
- Um marketplace pode separar integração de pagamentos por risco, auditoria e necessidade de isolamento.
- Um sistema com IA pode isolar camada de prompts e avaliação para permitir troca de modelo.

## Checklist

- [ ] Fronteiras estão claras.
- [ ] Contratos foram documentados.
- [ ] Fonte de verdade foi definida.
- [ ] Trade-offs foram comparados.
- [ ] ADR foi criado quando a decisão é relevante.

## Conclusão

Arquitetura deve reduzir custo de mudança e risco operacional, não apenas aplicar um desenho popular.
