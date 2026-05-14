export const site = {
  name: 'Micro Lines Sales Center',
  tagline: 'Custom window blinds and folding doors',
  description:
    'Made-to-measure window blinds and folding doors. On-site measure, professional fitting, and a wide fabric range.',
  defaultOgImage: '/og/default.svg',
} as const;

export type WeekDay = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface OfficeHours {
  day: WeekDay;
  open?: string;
  close?: string;
  closed?: boolean;
}

export const office = {
  name: 'Microlines Office',
  addressLines: ['4070 Magsaysay Blvd', 'Santa Mesa'],
  city: 'Manila',
  region: 'Metro Manila',
  postcode: '1016',
  country: 'PH',
  phone: '+63 917 577 8831',
  email: 'microlines.info@yahoo.com',
  hours: [
    { day: 'mon', open: '08:30', close: '17:30' },
    { day: 'tue', open: '08:30', close: '17:30' },
    { day: 'wed', open: '08:30', close: '17:30' },
    { day: 'thu', open: '08:30', close: '17:30' },
    { day: 'fri', open: '08:30', close: '17:30' },
    { day: 'sat', open: '08:30', close: '17:30' },
    { day: 'sun', closed: true },
  ] satisfies OfficeHours[],
  geo: { lat: 14.6022, lng: 121.008 },
  mapEmbedUrl:
    'https://www.google.com/maps?q=4070+Magsaysay+Blvd,+Santa+Mesa,+Manila,+Metro+Manila,+Philippines&output=embed',
} as const;

export type Office = typeof office;
