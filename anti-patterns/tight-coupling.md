# Anti-pattern - Tight Coupling

## Objetivo

Identificar acoplamento forte que dificulta mudança, teste e substituição.

## Contexto

Acoplamento pode ser aceitável quando reduz complexidade sem risco. O problema é dependência rígida entre responsabilidades que mudam por motivos diferentes.

## Diretrizes

- Avalie impacto real de mudança.
- Isolar dependências externas quando o risco justificar.
- Evite abstração sem benefício claro.

## Sintomas

- Mudar integração exige alterar domínio.
- Testar regra exige serviço externo.
- Módulos conhecem detalhes internos uns dos outros.

## Exemplos

- Regra de pedido chamando SDK de fornecedor diretamente em vez de contrato interno quando o fornecedor é instável.

## Checklist

- [ ] Dependências críticas foram mapeadas.
- [ ] Acoplamento tem justificativa.
- [ ] Isolamento foi planejado quando necessário.

## Conclusão

Acoplamento deve ser uma escolha consciente, não consequência acidental.
