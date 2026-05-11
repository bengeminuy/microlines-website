import { z } from 'zod';

export const productInterestEnum = z.enum([
  'roller-blinds',
  'roman-blinds',
  'venetian-blinds',
  'folding-doors',
  'other',
  'not-sure',
]);

export const baseContact = z.object({
  name: z.string().trim().min(2, 'Please tell us your name.').max(120),
  email: z.string().trim().email('Please enter a valid email.'),
  phone: z.string().trim().min(7, 'Please enter a contact number.').max(40).optional().or(z.literal('')),
  postcode: z.string().trim().max(20).optional().or(z.literal('')),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
});

export const honeypot = z.object({
  company: z.string().max(0, 'Bot detected.').optional().default(''),
  startedAt: z.coerce.number().int().nonnegative().optional(),
});

export const quoteLeadSchema = baseContact
  .extend({
    productInterest: productInterestEnum.default('not-sure'),
    preferredContact: z.enum(['email', 'phone', 'either']).default('either'),
  })
  .merge(honeypot);

export const contactLeadSchema = baseContact
  .extend({
    topic: z.enum(['general', 'showroom', 'support', 'press', 'other']).default('general'),
  })
  .merge(honeypot);

export type QuoteLead = z.infer<typeof quoteLeadSchema>;
export type ContactLead = z.infer<typeof contactLeadSchema>;
export type AnyLead = QuoteLead | ContactLead;
