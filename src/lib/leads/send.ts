import { env } from '../env';
import type { AnyLead } from './schema';
import { formatLeadAsHtml, formatLeadAsText } from './format';

export interface SendOptions {
  kind: 'quote' | 'contact';
  subject: string;
  lead: AnyLead;
}

export interface SendResult {
  ok: boolean;
  transport: 'console' | 'resend' | 'sheet';
  detail?: string;
}

export async function sendLead({ kind, subject, lead }: SendOptions): Promise<SendResult> {
  switch (env.leadTransport) {
    case 'resend':
      return sendViaResend(kind, subject, lead);
    case 'sheet':
      return sendViaSheet(kind, subject, lead);
    case 'console':
    default:
      console.log('\n=== LEAD (transport=console) ===');
      console.log(formatLeadAsText(kind, lead));
      console.log('=================================\n');
      return { ok: true, transport: 'console' };
  }
}

async function sendViaResend(kind: string, subject: string, lead: AnyLead): Promise<SendResult> {
  if (!env.resendApiKey) {
    return { ok: false, transport: 'resend', detail: 'RESEND_API_KEY is missing' };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.leadFromEmail,
      to: [env.leadToEmail],
      subject,
      html: formatLeadAsHtml(kind, lead),
      text: formatLeadAsText(kind, lead),
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => res.statusText);
    return { ok: false, transport: 'resend', detail };
  }
  return { ok: true, transport: 'resend' };
}

async function sendViaSheet(kind: string, subject: string, lead: AnyLead): Promise<SendResult> {
  if (!env.sheetWebhookUrl) {
    return { ok: false, transport: 'sheet', detail: 'SHEET_WEBHOOK_URL is missing' };
  }
  const res = await fetch(env.sheetWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, subject, lead, receivedAt: new Date().toISOString() }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => res.statusText);
    return { ok: false, transport: 'sheet', detail };
  }
  return { ok: true, transport: 'sheet' };
}
