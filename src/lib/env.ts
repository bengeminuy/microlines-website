type LeadTransport = 'console' | 'resend' | 'sheet';

function read(name: string, fallback = ''): string {
  return (import.meta.env[name] as string | undefined) ?? process.env[name] ?? fallback;
}

export const env = {
  siteUrl: read('PUBLIC_SITE_URL', 'https://microlines.example'),
  turnstileSiteKey: read('PUBLIC_TURNSTILE_SITE_KEY'),
  turnstileSecretKey: read('TURNSTILE_SECRET_KEY'),
  leadTransport: (read('LEAD_TRANSPORT', 'console') as LeadTransport) ?? 'console',
  resendApiKey: read('RESEND_API_KEY'),
  leadToEmail: read('LEAD_TO_EMAIL', 'sales@microlines.example'),
  leadFromEmail: read('LEAD_FROM_EMAIL', 'no-reply@microlines.example'),
  sheetWebhookUrl: read('SHEET_WEBHOOK_URL'),
};

export type Env = typeof env;
