# CDL Compliance Engine

## Objetivo

Avaliar aderência de uma interface à CloudSix Design Language com critérios objetivos, evidência e decisão auditável.

## Quando Usar

- Nova tela, fluxo visual, dashboard, formulário, tabela ou site.
- Redesign ou ajuste visual com impacto de uso.
- Interface classificada como risco médio, alto ou crítico.
- Entrega que será submetida ao Product Experience Gate.

## Entradas

- PRD, requisito ou critério de aceite.
- Experience brief.
- CDL Core em `product-experience/CLOUDSIX_DESIGN_LANGUAGE.md`.
- Guia de conformidade em `product-experience/CDL_COMPLIANCE.md`.
- CDL local em `.ceip/product-experience/cloudsix-design-language.md`, quando houver Workspace.
- Screenshots, protótipos, especificação ou implementação.
- Design system, componentes, marca e restrições existentes.

## Processamento

1. Confirmar se a entrega impacta interface relevante.
2. Identificar design system, componentes e restrições locais.
3. Verificar identidade, hierarquia, densidade, semântica visual, estados, acessibilidade e responsividade.
4. Separar bloqueios de melhorias.
5. Registrar desvios aceitos e justificativa.
6. Atualizar `.ceip/product-experience/cdl-compliance.md` quando houver Workspace.
7. Encaminhar evidências para Visual Quality Score e Product Experience Gate.

## Saídas

- Parecer CDL: aprovado, aprovado com ressalvas ou bloqueado.
- Critérios atendidos e não atendidos.
- Bloqueios não compensatórios.
- Ações corretivas.
- Evidências para score visual e gate.

## Critérios Bloqueantes

- Ausência de CDL local em Workspace com interface relevante.
- Layout ilegível, quebrado ou sobreposto.
- Ação principal ambígua em fluxo operacional.
- Estados críticos ausentes.
- Informação crítica dependente apenas de cor.
- Benchmark copiado como aparência.
- Desvio sem justificativa.

## Checklist

- [ ] CDL Core foi consultada.
- [ ] CDL local foi preenchida ou atualizada.
- [ ] Design system local foi respeitado.
- [ ] Bloqueios foram separados de melhorias.
- [ ] Conformidade foi registrada no Workspace quando aplicável.
- [ ] Resultado foi encaminhado ao Visual Quality Score.

## Conclusão

O CDL Compliance Engine transforma linguagem visual em decisão operacional rastreável.
