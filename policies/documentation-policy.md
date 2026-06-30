# Documentation Policy

## Objetivo

Garantir que mudanças relevantes atualizem documentação e navegação.

## Contexto

Documentação é interface da CEIP e memória operacional de projetos. Mudanças sem documentação degradam reutilização.

## Diretrizes

- Gatilho: mudança em comportamento, arquitetura, contrato, operação, política, engine, agent, gate ou recipe.
- Regra: atualizar documento afetado e navegação quando necessário.
- Exceção: ajuste interno sem impacto documental pode justificar ausência.
- Validação: Documentation Gate ou Documentation Engineer.

## Exemplos

- Criar novo engine exige atualizar `INDEX.md` e `layers/README.md`.
- Criar nova recipe exige relacionar agentes e gates.

## Checklist

- [ ] Documento afetado foi atualizado.
- [ ] Índice foi revisado.
- [ ] Links e caminhos foram verificados.
- [ ] Ausência de documentação foi justificada quando aplicável.

## Conclusão

Documentation Policy mantém a plataforma utilizável e navegável.
