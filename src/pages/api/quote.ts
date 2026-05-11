import type { APIRoute } from 'astro';
import { quoteLeadSchema } from '@lib/leads/schema';
import { sendLead } from '@lib/leads/send';

export const prerender = false;

const MIN_FILL_TIME_MS = 2000;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const raw = Object.fromEntries(form.entries()) as Record<string, string>;

  const startedAt = Number(raw.startedAt ?? 0);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return new Response('Submitted too quickly.', { status: 400 });
  }

  const parsed = quoteLeadSchema.safeParse(raw);
  if (!parsed.success) {
    if (raw.company && raw.company.length > 0) {
      return new Response('Bot detected.', { status: 400 });
    }
    const errors = Object.fromEntries(
      parsed.error.issues.map((i) => [i.path[0] ?? '_form', i.message]),
    );
    const url = new URL('/quote', request.url);
    url.searchParams.set('error', '1');
    for (const [k, v] of Object.entries(errors)) url.searchParams.set(`e_${k}`, v);
    for (const [k, v] of Object.entries(raw)) {
      if (k === 'company' || k === 'startedAt') continue;
      url.searchParams.set(`v_${k}`, v);
    }
    return redirect(url.pathname + url.search, 303);
  }

  const result = await sendLead({ kind: 'quote', subject: 'New quote request — Microlines', lead: parsed.data });
  if (!result.ok) {
    console.error('Lead transport failed', result);
    return redirect('/quote?error=transport', 303);
  }
  return redirect('/quote?ok=1', 303);
};

export const GET: APIRoute = () => new Response('Method not allowed', { status: 405 });
