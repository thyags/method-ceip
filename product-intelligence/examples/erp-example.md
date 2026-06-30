# Exemplo PIS: ERP

## Ideia

Criar um ERP para centralizar compras, estoque, financeiro e relatórios.

## Discovery

- Problema: processos espalhados em planilhas e sistemas isolados.
- Usuários: compras, estoque, financeiro, diretoria.
- Impacto: retrabalho, erro de estoque, baixa visibilidade financeira.

## PRD resumido

- Escopo MVP: cadastros base, produtos, fornecedores, compras, estoque simples e contas a pagar.
- Fora do MVP: fiscal avançado, BI completo e integrações bancárias.
- Regras: movimentação de estoque deve gerar histórico; compra aprovada altera previsão financeira.

## MVP

1. Cadastro de produtos e fornecedores.
2. Pedido de compra.
3. Entrada de estoque.
4. Contas a pagar.
5. Relatório operacional básico.

## Roadmap

- V1: estoque e compras.
- V2: financeiro expandido.
- V3: fiscal e integrações.
- V4: BI e automações.

## Gates

- Regras financeiras validadas.
- Dados mestres definidos.
- Policy Engine classifica risco alto para dados e financeiro.
