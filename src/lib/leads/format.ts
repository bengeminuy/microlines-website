import type { AnyLead } from './schema';

export function formatLeadAsText(kind: string, lead: AnyLead): string {
  const lines = [`New ${kind} lead from microlines.example`, ''];
  for (const [k, v] of Object.entries(lead)) {
    if (k === 'company' || k === 'startedAt') continue;
    if (v == null || v === '') continue;
    lines.push(`${k}: ${String(v)}`);
  }
  lines.push('', `Received: ${new Date().toISOString()}`);
  return lines.join('\n');
}

export function formatLeadAsHtml(kind: string, lead: AnyLead): string {
  const rows = Object.entries(lead)
    .filter(([k, v]) => k !== 'company' && k !== 'startedAt' && v !== '' && v != null)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px;color:#666;font-family:sans-serif">${escapeHtml(k)}</td>` +
        `<td style="padding:4px 12px;font-family:sans-serif">${escapeHtml(String(v))}</td></tr>`,
    )
    .join('');
  return [
    `<h2 style="font-family:sans-serif;margin:0 0 8px">New ${escapeHtml(kind)} lead</h2>`,
    `<table style="border-collapse:collapse;font-size:14px">${rows}</table>`,
    `<p style="font-family:sans-serif;color:#999;margin-top:12px">Received ${new Date().toISOString()}</p>`,
  ].join('');
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
