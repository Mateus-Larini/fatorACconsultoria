// Configuração de ambiente do Micro-App

const isProduction = import.meta.env.PROD;

export const API_URLS = {
  chat: isProduction
    ? 'https://fluxos.concretousinadomaringa.com.br/webhook/AGENTEFATORAC'
    : 'https://automacao.concretousinadomaringa.com.br/webhook-test/AGENTEFATORAC',

  audit: isProduction
    ? 'https://fluxos.concretousinadomaringa.com.br/webhook/AUDITORIA'
    : 'https://automacao.concretousinadomaringa.com.br/webhook-test/AUDITORIA',
} as const;
