# Anti-pattern - God Object

## Objetivo

Identificar objetos, módulos ou componentes que concentram responsabilidades demais.

## Contexto

Em sistemas empresariais, concentração excessiva costuma misturar domínio, persistência, integração, validação e apresentação.

## Diretrizes

- Identifique responsabilidades distintas.
- Separe por fronteiras de domínio e padrões locais.
- Refatore incrementalmente com testes de caracterização.

## Sintomas

- Arquivo ou classe muda por muitos motivos.
- Dependências excessivas.
- Dificuldade de testar comportamento isolado.
- Regras de domínios diferentes no mesmo lugar.

## Exemplos

- Um serviço que calcula cobrança, envia e-mail, atualiza estoque e chama API fiscal.

## Checklist

- [ ] Responsabilidades foram listadas.
- [ ] Comportamento atual foi protegido.
- [ ] Extração incremental foi planejada.

## Conclusão

God Object deve ser reduzido por fatias, sem reescrita impulsiva.
