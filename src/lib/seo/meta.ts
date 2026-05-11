import { site } from '../site';
import { env } from '../env';

export interface MetaInput {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export interface MetaResolved {
  title: string;
  description: string;
  image: string;
  canonical: string;
  type: NonNullable<MetaInput['type']>;
  noindex: boolean;
}

export function buildMeta(input: MetaInput, currentPath: string): MetaResolved {
  const title = input.title ? `${input.title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const description = input.description ?? site.description;
  const image = absolute(input.image ?? site.defaultOgImage);
  const canonical = absolute(input.canonical ?? currentPath);
  return {
    title,
    description,
    image,
    canonical,
    type: input.type ?? 'website',
    noindex: input.noindex ?? false,
  };
}

function absolute(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = env.siteUrl.replace(/\/$/, '');
  return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}
