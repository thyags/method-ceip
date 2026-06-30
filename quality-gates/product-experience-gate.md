# Product Experience Gate

## Objetivo

Validar se uma interface, fluxo visual, dashboard, formulário, tabela ou componente composto atende ao Product Experience System antes de implementação, merge ou release.

## Quando aplicar

- Nova tela ou fluxo relevante.
- Redesign ou alteração visual com impacto de uso.
- Dashboard, tabela, formulário ou página de detalhe.
- Interface de produto SaaS, ERP, CRM, marketplace, site institucional ou sistema com IA.
- Qualquer entrega frontend classificada como risco médio, alto ou crítico.

## Critérios obrigatórios

- Product Intelligence foi consultado quando a demanda nasceu de produto, feature, módulo, API ou integração.
- Product Experience System foi aplicado quando houve impacto de interface.
- CloudSix Design Language foi aplicada ao contexto local do projeto.
- CDL Compliance foi registrada ou justificada.
- Experience brief ou especificação de tela existe.
- Hierarquia visual e ação principal foram definidas.
- Layout foi justificado por tarefa e contexto.
- Estados de loading, vazio, erro, sucesso, disabled e permissão foram considerados quando aplicáveis.
- Acessibilidade básica foi avaliada.
- Responsividade foi verificada nos viewports obrigatórios.
- Visual Quality Score foi calculado.

## Critérios bloqueantes

- Texto ilegível ou sobreposto.
- Layout quebrado em viewport obrigatório.
- Ação principal ausente em fluxo operacional.
- Estado de erro ausente em operação crítica.
- Informação crítica depende apenas de cor.
- Interface contradiz requisito ou regra de negócio.
- Uso de benchmark como cópia visual.
- Ausência de CDL local em interface relevante.
- Visual Quality Score abaixo do mínimo por risco.

## Evidências exigidas

- `product-experience/templates/experience-brief-template.md`
- `product-experience/templates/screen-spec-template.md`
- `product-experience/templates/visual-review-template.md`
- `product-experience/templates/visual-quality-scorecard-template.md`
- Screenshots, protótipos, gravações ou implementação revisada quando aplicável.
- Registro local em `.ceip/product-experience/` quando o projeto usar Workspace.
- Registro local em `.ceip/product-experience/cloudsix-design-language.md` e `.ceip/product-experience/cdl-compliance.md` quando houver interface relevante.

## Agentes responsáveis

Frontend UX Specialist, UI Designer, QA Engineer, Performance Engineer, Code Reviewer Tech Lead e Quality Governor.

## Checklist

- [ ] Gate aplicado no estágio correto.
- [ ] PXS e CDL foram consultados.
- [ ] CDL local e conformidade CDL foram registradas.
- [ ] Visual Quality Score tem evidência.
- [ ] Bloqueios foram resolvidos ou aceitos formalmente.
- [ ] Handoff para Frontend e QA está completo.

## Score mínimo

Baixo 70, médio 80, alto 85, crítico 90.

## Resultado esperado

Interface com qualidade de produto, consistente, acessível, responsiva, profissional e pronta para uso real.

## Conclusão

Product Experience Gate impede que a CEIP aprove telas apenas porque funcionam tecnicamente.
