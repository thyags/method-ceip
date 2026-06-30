# 03 - Padrões de Código

## Objetivo

Definir atributos esperados de código legível, testável, seguro e sustentável, independentemente da linguagem.

## Contexto

Cada stack possui convenções próprias. Este padrão não substitui guias locais; ele estabelece critérios universais para avaliar qualidade de implementação.

## Diretrizes

- Seguir estilo, nomenclatura, organização e ferramentas existentes no projeto.
- Manter funções, classes, módulos ou componentes com responsabilidade clara.
- Evitar duplicação de regra de negócio.
- Tratar erro de forma explícita e diagnosticável.
- Escrever testes proporcionais ao risco.
- Adicionar comentários apenas quando explicam intenção, restrição ou decisão não óbvia.
- Não fazer refatoração ampla junto com mudança funcional sem separar escopo.

## Exemplos

- Se uma validação existe em vários pontos, centralize conforme padrão local ou documente por que a duplicação é necessária.
- Se uma função trata cobrança, seu nome deve refletir regra de domínio, não detalhe técnico genérico.

## Checklist

- [ ] Código segue padrões locais.
- [ ] Responsabilidades são claras.
- [ ] Regras de negócio não foram duplicadas indevidamente.
- [ ] Erros relevantes são tratados.
- [ ] Testes cobrem comportamento crítico.
- [ ] Mudança funcional e refatoração foram separadas.

## Conclusão

Código de qualidade comunica intenção, reduz surpresa e facilita evolução segura.
