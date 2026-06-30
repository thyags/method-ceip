# Gestão de Mudanças

## Objetivo

Definir como planejar, executar, revisar e comunicar mudanças técnicas com controle de risco.

## Contexto

Mudanças em sistemas empresariais podem afetar usuários, dados, processos operacionais, integrações, automações e relatórios. A gestão de mudanças reduz surpresas e permite recuperação quando algo falha.

## Diretrizes

- Classificar a mudança por impacto: baixa, média, alta ou crítica.
- Identificar sistemas, usuários, dados e integrações afetadas.
- Preferir entregas pequenas com validação incremental.
- Definir plano de rollback ou mitigação antes da implantação.
- Comunicar mudanças que afetam operação, suporte ou comportamento visível.
- Registrar decisões, evidências de teste e validação pós-deploy.

## Fluxo

```mermaid
flowchart LR
    A["Solicitacao"] --> B["Analise de impacto"]
    B --> C["Plano de mudanca"]
    C --> D["Implementacao"]
    D --> E["Validacao"]
    E --> F["Release"]
    F --> G["Monitoramento"]
    G --> H["Registro final"]
```

## Exemplos

- Alteração em cálculo de cobrança exige validação de negócio, testes com casos históricos e comunicação ao suporte.
- Mudança em integração externa exige plano para falhas de contrato, retentativas e monitoramento.

## Checklist

- [ ] Impacto classificado.
- [ ] Donos e revisores definidos.
- [ ] Plano de validação documentado.
- [ ] Plano de rollback ou mitigação definido.
- [ ] Comunicação necessária preparada.
- [ ] Monitoramento pós-mudança planejado.

## Conclusão

Mudança bem gerida não é burocracia; é proteção contra perda de contexto, falhas operacionais e decisões irreversíveis sem análise.
