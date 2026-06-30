# Product Experience Policies

## Objetivo

Definir políticas obrigatórias para uso do Product Experience System antes de UX, UI, Frontend, QA ou release quando uma demanda impactar interface ou experiência visual.

## Quando aplicar

- Nova tela.
- Dashboard.
- Formulário.
- Tabela operacional.
- Página de detalhe.
- Site institucional.
- Fluxo responsivo.
- Componente composto.
- Redesign.
- Mudança visual com impacto funcional, operacional ou de percepção de produto.

## Políticas

### PXS-001 - Interface relevante exige Product Experience

Toda interface relevante deve passar por `product-experience/` antes de UX/UI/Frontend ou release.

### PXS-002 - Design system local tem precedência

O PXS deve respeitar design system, componentes, marca e restrições locais quando existirem. A CloudSix Design Language atua como critério de qualidade, não como substituição automática.

### PXS-003 - Benchmark não pode virar cópia

Benchmarks podem orientar princípios, mas não podem reproduzir identidade, layout, marca ou componentes proprietários de terceiros.

### PXS-004 - Visual Quality Score obrigatório

Toda interface relevante deve registrar Visual Quality Score, salvo exceção formal pelo Policy Engine.

### PXS-005 - Gate visual bloqueia release

Falha crítica no Product Experience Gate bloqueia frontend, merge ou release até correção, mitigação ou aprovação excepcional.

### PXS-006 - Experience Memory não armazena dado sensível

Referências visuais locais devem remover dados sensíveis, screenshots privados, marcas de cliente sem autorização e qualquer artefato que não possa ser versionado.

## Gates obrigatórios

- `quality-gates/product-experience-gate.md`
- `quality-gates/frontend-gate.md`
- `quality-gates/qa-gate.md` quando houver fluxo validável
- `quality-gates/accessibility` quando existir gate específico ou checklist equivalente

## Agentes obrigatórios

- Product Experience System.
- Frontend UX Specialist.
- UI Designer.
- QA Engineer.
- Quality Governor quando risco médio, alto ou crítico.

## Evidências

- Experience brief.
- Screen spec.
- Design review.
- Visual Quality Score.
- Screenshots, protótipo ou implementação quando aplicável.
- Registro em `.ceip/product-experience/` em projetos consumidores.

## Checklist

- [ ] A demanda impacta interface?
- [ ] PXS foi exigido ou dispensado com justificativa?
- [ ] Design system local foi consultado?
- [ ] Visual Quality Score foi exigido?
- [ ] Product Experience Gate foi definido?
- [ ] Risco de cópia de benchmark foi eliminado?
- [ ] Memória de experiência não contém dados sensíveis?

## Conclusão

Product Experience Policies garantem que qualidade de produto seja governada antes da implementação visual.
