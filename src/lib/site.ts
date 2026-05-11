export const site = {
  name: 'Microlines',
  tagline: 'Custom window blinds and folding doors',
  description:
    'Made-to-measure window blinds and folding doors. On-site measure, professional fitting, and a wide fabric range.',
  defaultOgImage: '/og/default.svg',
} as const;

export type WeekDay = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface OfficeHours {
  day: WeekDay;
  open: string;
  close: string;
}

export const office = {
  name: 'Microlines Office',
  addressLines: ['123 Sample Avenue', 'Barangay Placeholder'],
  city: 'Quezon City',
  region: 'Metro Manila',
  postcode: '1100',
  country: 'PH',
  phone: '+63 2 0000 0000',
  email: 'hello@microlines.example',
  hours: [
    { day: 'mon', open: '09:00', close: '18:00' },
    { day: 'tue', open: '09:00', close: '18:00' },
    { day: 'wed', open: '09:00', close: '18:00' },
    { day: 'thu', open: '09:00', close: '18:00' },
    { day: 'fri', open: '09:00', close: '18:00' },
    { day: 'sat', open: '10:00', close: '16:00' },
  ] satisfies OfficeHours[],
  geo: { lat: 14.676, lng: 121.0437 },
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=121.04,14.67,121.05,14.68',
} as const;

export type Office = typeof office;
