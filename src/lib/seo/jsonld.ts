import { env } from '../env';
import { office, site } from '../site';

const baseUrl = () => env.siteUrl.replace(/\/$/, '');

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl()}/#business`,
    name: site.name,
    description: site.description,
    url: baseUrl(),
    telephone: office.phone,
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.addressLines.join(', '),
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postcode,
      addressCountry: office.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.geo.lat,
      longitude: office.geo.lng,
    },
    openingHoursSpecification: office.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayName(h.day),
      opens: h.open,
      closes: h.close,
    })),
  };
}

interface ProductInput {
  name: string;
  description: string;
  image: string;
  priceFrom: number;
  currency: string;
  url: string;
}

export function buildProductJsonLd(p: ProductInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: p.image,
    url: p.url,
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: p.priceFrom,
      priceCurrency: p.currency,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function buildBreadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

function dayName(d: string): string {
  return (
    {
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday',
    } as Record<string, string>
  )[d] ?? d;
}
