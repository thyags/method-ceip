# Recipe - Criar Importador

## Objetivo

Orientar criação de importadores de dados com validação, rastreabilidade e recuperação.

## Contexto

Importadores podem inserir dados incorretos em massa. Eles precisam tratar formato, validação, duplicidade, erros e auditoria.

## Diretrizes

- Definir contrato de arquivo/API.
- Validar linha a linha ou item a item.
- Registrar rejeições.
- Planejar reprocessamento seguro.

## Passos

1. Confirmar origem, formato e volume.
2. Mapear campos e semântica.
3. Definir validações e normalizações.
4. Definir estratégia de duplicidade e idempotência.
5. Implementar processamento com relatório de erros.
6. Testar com amostras reais anonimizadas.
7. Documentar operação e suporte.

## Agentes

Business Analyst, Database Architect, Backend Engineer, API Integration Engineer, Security Engineer, QA Engineer.

## Exemplos

- Importação de catálogo de autopeças.
- Importação de clientes legados.

## Checklist

- [ ] Formato foi definido.
- [ ] Validações foram especificadas.
- [ ] Duplicidade foi tratada.
- [ ] Rejeições são rastreáveis.
- [ ] Reprocessamento é seguro.

## Conclusão

Importador profissional prioriza integridade e diagnóstico, não apenas volume processado.
