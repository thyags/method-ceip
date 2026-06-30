# 01 - Padrão de Stack Agnóstica

## Objetivo

Garantir que recomendações, decisões e documentos do framework não assumam tecnologia sem inspeção do projeto real.

## Contexto

Projetos CloudSix podem usar diferentes linguagens, frameworks, bancos, runtimes, serviços e estilos arquiteturais. Uma recomendação válida em uma stack pode ser inadequada em outra.

## Diretrizes

- Identificar linguagem, runtime, framework, banco, infraestrutura, ferramentas de teste e pipeline antes de propor implementação.
- Preferir padrões locais documentados a preferências externas.
- Quando a stack não estiver clara, registrar perguntas ou passos de descoberta.
- Expressar recomendações em termos conceituais antes de citar ferramentas.
- Não introduzir dependência sem justificar custo, compatibilidade e manutenção.

## Exemplos

- Em vez de "crie uma migration Laravel", escreva "crie uma migração conforme a ferramenta de versionamento de schema usada pelo projeto".
- Em vez de "use Redis", escreva "avalie cache compartilhado se houver gargalo medido, estratégia de invalidação e operação disponível".

## Checklist

- [ ] A stack foi identificada.
- [ ] Padrões locais foram verificados.
- [ ] A recomendação não depende de tecnologia não confirmada.
- [ ] Dependências novas têm justificativa.
- [ ] Alternativas foram descritas em nível conceitual.

## Conclusão

Agnosticismo de stack não significa ausência de decisão técnica; significa decidir depois de entender o ambiente real.
