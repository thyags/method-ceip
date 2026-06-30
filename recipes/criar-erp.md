# Recipe - Criar ERP

## Objetivo

Orientar fundação ou evolução de ERP com módulos, dados e processos integrados.

## Contexto

ERP envolve cadastros, vendas, compras, estoque, financeiro, fiscal, relatórios e permissões.

## Diretrizes

- Começar por Product Intelligence, discovery e PRD.
- Validar processos de negócio com Business Analyst depois do PRD inicial.
- Definir módulos e dependências.
- Preservar consistência e fonte de verdade.
- Registrar decisões arquiteturais.

## Passos

1. Executar `product-intelligence/playbooks/novo-erp.md`.
2. Criar Idea Brief, Discovery Brief, PRD, Requirements Map, MVP e Roadmap.
3. Mapear processos com Business Analyst.
4. Priorizar módulos iniciais com Product Manager.
5. Aplicar Policy Engine para risco, documentos, gates e aprovações.
6. Acionar Orchestrator para agentes especialistas.
7. Avaliar arquitetura, dados, permissões, auditoria e relatórios.
8. Planejar testes por processo.
9. Criar ADRs para decisões estruturais.

## Agentes

Product Intelligence System, Business Analyst, Product Manager, Policy Engine, Orchestrator, Chief Software Architect, Database Architect, Backend Engineer, Security Engineer, QA Engineer, Documentation Engineer.

## Exemplos

- ERP para oficina.
- ERP administrativo com financeiro e estoque.

## Checklist

- [ ] Processos foram mapeados.
- [ ] Product Intelligence gerou PRD, MVP e roadmap.
- [ ] Policy Engine classificou risco antes da arquitetura.
- [ ] Módulos têm fronteiras claras.
- [ ] Fonte de verdade foi definida.
- [ ] Relatórios foram considerados.
- [ ] ADRs foram criados.

## Conclusão

ERP deve ser desenhado por processos e dados, não por telas isoladas.
