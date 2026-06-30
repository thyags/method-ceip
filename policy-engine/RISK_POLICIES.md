# Risk Policies

## Objetivo

Classificar risco de tarefas para orientar agentes, gates, aprovação, rollback e monitoramento.

## Contexto

Risco define o rigor necessário antes da execução. A CEIP classifica risco em baixo, médio, alto e crítico.

## Diretrizes

- Sempre classificar risco antes de planejar.
- Em dúvida entre dois níveis, escolher o maior até obter evidência.
- Risco crítico exige aprovação humana.

## Classificação

### Baixo risco

- Alterações cosméticas.
- Documentação.
- Pequenos ajustes sem impacto funcional.
- Correções de texto.
- Ajustes visuais isolados.

### Médio risco

- Alterações em regra de negócio simples.
- Ajustes em consultas.
- Mudanças em telas administrativas.
- Novos campos não críticos.
- Pequenas alterações em fluxos internos.

### Alto risco

- Banco de dados.
- Permissões.
- Autenticação.
- APIs externas.
- Financeiro.
- Integrações.
- Dados sensíveis.
- Performance crítica.
- Relatórios gerenciais relevantes.

### Crítico

- Produção.
- Pagamentos.
- Segurança.
- Perda de dados.
- Migração de banco.
- Alteração estrutural.
- Quebra de compatibilidade.
- Indisponibilidade do sistema.
- Dados fiscais, financeiros ou legais.

## Exemplos

- Alterar label de botão: baixo risco.
- Adicionar campo administrativo não crítico: médio risco.
- Alterar regra financeira: alto ou crítico, conforme impacto.
- Migração de banco em produção: crítico.

## Checklist

- [ ] Tipo da tarefa foi identificado.
- [ ] Impacto foi avaliado.
- [ ] Nível de risco foi definido.
- [ ] Aprovação e gates foram derivados do risco.

## Conclusão

Risk Policies definem o rigor mínimo necessário para cada tarefa.
