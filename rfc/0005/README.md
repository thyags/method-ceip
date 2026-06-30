# RFC-0005 - CloudSix Engineering CLI

## Objetivo

Propor um CLI futuro chamado `cloudsix-engineering` para operacionalizar o uso do framework.

## Contexto

O framework já orienta humanos e IAs por documentos. Um CLI pode reduzir fricção ao localizar documentos, montar contexto, gerar prompts e criar artefatos como ADRs e RFCs.

## Diretrizes

- Não implementar antes de validar o framework em projeto piloto.
- Manter comandos agnósticos de tecnologia.
- Priorizar leitura e montagem de contexto antes de escrita automática.
- Não coletar segredos.

## Proposta

Especificar comandos:

- `cloudsix validate`
- `cloudsix review`
- `cloudsix architect`
- `cloudsix plan`
- `cloudsix agents`
- `cloudsix adr create`
- `cloudsix rfc create`
- `cloudsix quality`

## Alternativas

- Continuar apenas com documentação: menor custo, maior fricção.
- Criar CLI após piloto: mais seguro e alinhado ao uso real.

## Impactos

- Facilita adoção pela equipe.
- Integra framework ao fluxo de desenvolvimento.
- Pode preparar contexto para diferentes IAs.
- Exige cuidado com segurança e manutenção.

## Exemplos

`cloudsix agents backend --task "criar endpoint de pedidos"` poderia listar documentos, prompts, gates e checklists aplicáveis.

## Checklist

- [ ] Piloto foi planejado.
- [ ] Comandos foram especificados.
- [ ] Modelo de contexto foi definido.
- [ ] Roadmap de implementação existe.

## Conclusão

O CLI é o próximo grande passo depois que o framework provar utilidade em projeto real.
