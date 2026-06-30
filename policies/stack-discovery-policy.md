# Stack Discovery Policy

## Objetivo

Exigir identificação da stack antes de recomendação técnica ou implementação.

## Contexto

A CEIP é agnóstica de tecnologia. Recomendar ferramenta ou padrão sem identificar stack cria risco e desalinhamento.

## Diretrizes

- Gatilho: qualquer tarefa técnica.
- Regra: identificar linguagem, framework, banco, runtime, arquitetura, testes e padrões locais quando aplicável.
- Exceção: quando a stack não puder ser descoberta, registrar lacuna e propor passos de descoberta.
- Validação: Context Engine deve produzir context brief.

## Exemplos

- Não recomendar migration de ferramenta específica sem identificar a ferramenta do projeto.
- Não escolher cache sem saber infraestrutura e operação.

## Checklist

- [ ] Stack foi identificada.
- [ ] Padrões locais foram observados.
- [ ] Lacunas foram registradas.
- [ ] Recomendações não assumem tecnologia.

## Conclusão

Stack Discovery Policy mantém a plataforma compatível com projetos diversos.
