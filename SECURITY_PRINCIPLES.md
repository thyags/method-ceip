# Princípios de Segurança

## Objetivo

Definir princípios de segurança aplicáveis a qualquer tecnologia usada em projetos CloudSix.

## Contexto

Sistemas empresariais lidam com dados pessoais, credenciais, transações, permissões, documentos, relatórios e integrações. Segurança precisa ser tratada desde o desenho da solução, não apenas em auditorias finais.

## Diretrizes

- Autenticação deve ser explícita, adequada ao contexto e protegida contra abuso.
- Autorização deve ser validada no servidor ou camada confiável equivalente, nunca apenas na interface.
- Entradas externas devem ser validadas e normalizadas conforme o domínio.
- Dados sensíveis devem ter exposição mínima, retenção justificada e proteção compatível.
- Segredos não devem ser versionados, logados ou expostos em mensagens de erro.
- Logs devem ajudar diagnóstico sem vazar informações sensíveis.
- Dependências e integrações devem ser avaliadas por risco, contrato e confiabilidade.
- Alterações de permissão, cobrança, dados pessoais ou autenticação exigem revisão de segurança.

## Exemplos

- Em um CRM, campos de clientes devem respeitar escopo de acesso por perfil, unidade ou carteira, quando o domínio exigir.
- Em uma API pública, rate limit, autenticação, validação de payload e respostas de erro devem ser definidos.
- Em automações com IA, prompts e saídas não devem expor dados confidenciais sem necessidade.

## Checklist

- [ ] Autenticação e autorização foram avaliadas.
- [ ] Entradas externas são validadas.
- [ ] Dados sensíveis têm tratamento explícito.
- [ ] Segredos estão fora do repositório.
- [ ] Logs não vazam informações indevidas.
- [ ] Falhas e abuso previsível foram considerados.

## Conclusão

Segurança é uma propriedade do sistema e do processo. Ela deve estar presente nos padrões, revisões, testes e decisões arquiteturais.
