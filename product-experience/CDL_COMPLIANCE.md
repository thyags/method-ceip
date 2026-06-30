# CDL Compliance

## Objetivo

Definir como auditar aderência à CloudSix Design Language em interfaces, fluxos visuais, dashboards, formulários, tabelas, sites e componentes compostos.

## Escopo

Esta validação se aplica quando uma entrega impacta percepção visual, operação de tela, responsividade, estados de interface, acessibilidade ou consistência de produto.

## Regra

Nenhuma interface relevante deve ser aprovada apenas por estar tecnicamente funcional. A entrega precisa demonstrar aderência proporcional à CDL, ao Product Experience Gate e ao Visual Quality Score.

## Entradas

- PRD, requisitos ou critérios de aceite.
- Experience brief.
- Design system, componentes e padrões existentes.
- Screenshots, protótipos ou implementação.
- Restrições de marca, acessibilidade, plataforma e viewport.
- `.ceip/product-experience/cloudsix-design-language.md` quando o projeto usar Workspace.

## Matriz De Conformidade

| Critério | Pergunta | Evidência |
| --- | --- | --- |
| Identidade | A interface transmite confiança, precisão e maturidade? | Revisão visual |
| Hierarquia | O usuário entende prioridade, contexto e próxima ação? | Screenshot ou especificação |
| Densidade | A tela equilibra informação e carga cognitiva? | Justificativa por tarefa |
| Semântica | Cores, ícones e estados têm significado consistente? | Mapa de estados |
| Componentes | Componentes seguem padrão local e têm função clara? | Lista de componentes |
| Estados | Loading, vazio, erro, sucesso, disabled e permissão existem? | `interaction-states.md` |
| Acessibilidade | Contraste, foco, alvos e mensagens são suficientes? | Checklist ou teste |
| Responsividade | A tarefa principal funciona nos viewports obrigatórios? | Evidência por viewport |
| Benchmark | Referências externas foram usadas como princípio, não cópia? | Nota de benchmark |
| Rastreabilidade | Decisões e desvios foram registrados no Workspace? | `cdl-compliance.md` local |

## Classificação

| Status | Uso |
| --- | --- |
| Aprovado | Todos os critérios críticos atendidos e score mínimo alcançado |
| Aprovado com ressalvas | Pequenas melhorias pendentes sem impacto crítico |
| Bloqueado | Critério bloqueante, score insuficiente ou ausência de evidência |

## Critérios Bloqueantes

- Texto ilegível, truncado ou sobreposto.
- Layout quebrado em viewport obrigatório.
- Ação principal ausente ou ambígua.
- Informação crítica depende apenas de cor.
- Estado crítico ausente em fluxo operacional.
- Interface contradiz regra de negócio, requisito ou critério de aceite.
- Benchmark externo copiado como aparência.
- Ausência de registro local da CDL em interface relevante.
- Visual Quality Score abaixo do mínimo por risco.

## Saídas

- Parecer de conformidade CDL.
- Bloqueios e ações corretivas.
- Evidências para Product Experience Gate.
- Atualização do Visual Quality Score.
- Registro em `.ceip/product-experience/cdl-compliance.md` quando houver Workspace.

## Checklist

- [ ] CDL Core foi consultada.
- [ ] CDL local foi preenchida ou atualizada.
- [ ] Design system local foi respeitado.
- [ ] Desvios foram justificados.
- [ ] Critérios bloqueantes foram avaliados.
- [ ] Evidências foram registradas.
- [ ] Visual Quality Score foi calculado.

## Conclusão

CDL Compliance transforma linguagem de design em governança verificável, mantendo a CEIP agnóstica de tecnologia e aplicável a projetos reais da CloudSix.
