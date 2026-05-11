import { getCollection, type CollectionEntry } from 'astro:content';

type BlindEntry = CollectionEntry<'blinds'>;
type DoorEntry = CollectionEntry<'folding-doors'>;
type CategoryEntry = CollectionEntry<'categories'>;
type GalleryEntry = CollectionEntry<'gallery'>;

const isPublished = <T extends { data: { draft?: boolean } }>(entry: T) => !entry.data.draft;

export async function getBlinds(): Promise<BlindEntry[]> {
  const entries = await getCollection('blinds', isPublished);
  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedBlinds(limit = 6): Promise<BlindEntry[]> {
  const all = await getBlinds();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export async function getBlindsByCategorySlug(categorySlug: string): Promise<BlindEntry[]> {
  const all = await getBlinds();
  return all.filter((p) => p.data.category.id === categorySlug);
}

export async function getFoldingDoors(): Promise<DoorEntry[]> {
  const entries = await getCollection('folding-doors', isPublished);
  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedFoldingDoors(limit = 6): Promise<DoorEntry[]> {
  const all = await getFoldingDoors();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export async function getCategories(): Promise<CategoryEntry[]> {
  const entries = await getCollection('categories');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getGalleryItems(): Promise<GalleryEntry[]> {
  return getCollection('gallery');
}

export async function getFeaturedGalleryItems(limit = 6): Promise<GalleryEntry[]> {
  const all = await getGalleryItems();
  const featured = all.filter((g) => g.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export async function getTestimonials(limit?: number) {
  const entries = await getCollection('testimonials');
  const sorted = entries.sort((a, b) => +b.data.date - +a.data.date);
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

export async function getFaqs() {
  const entries = await getCollection('faqs');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export type { BlindEntry, DoorEntry, CategoryEntry, GalleryEntry };
