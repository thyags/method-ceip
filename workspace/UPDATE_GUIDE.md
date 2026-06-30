# Guia de Atualização Core + Workspace

## Objetivo

Explicar como atualizar o CEIP Core e manter o CEIP Workspace evoluindo junto com o projeto.

## Atualizar CEIP Core via submodule

No projeto consumidor:

```bash
cd .cloudsix/method
git pull origin main
cd ../..
git add .cloudsix/method
git commit -m "Update CEIP Core"
```

## Atualizar Workspace

O `.ceip/` deve evoluir junto com o projeto e receber atualizações de:

- Contexto.
- Decisões.
- Métricas.
- Reviews.
- Tarefas.
- Aprendizados.
- Dívida técnica.
- Artefatos.

## Quando atualizar

- Após decisão arquitetural.
- Após mudança relevante de escopo.
- Após review.
- Após incidente.
- Após release.
- Após descoberta de dívida técnica.
- Após aprendizado importante.

## Checklist

- [ ] Submodule foi atualizado quando necessário.
- [ ] Mudanças no Core foram revisadas.
- [ ] `.ceip/PROJECT.md` continua correto.
- [ ] `.ceip/STACK.md` reflete a stack atual.
- [ ] Métricas e dashboard foram atualizados.
- [ ] Memória recebeu aprendizados relevantes.

## Conclusão

Core e Workspace evoluem em ritmos diferentes: o Core como método oficial, o Workspace como estado vivo do projeto.
