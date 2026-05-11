export const imageSizes = {
  hero: { widths: [768, 1280, 1920], sizes: '100vw' },
  productCard: { widths: [320, 480, 720, 1080], sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw' },
  productHero: { widths: [640, 960, 1280, 1600], sizes: '(min-width: 1024px) 50vw, 100vw' },
  gallery: { widths: [400, 800, 1200, 1600], sizes: '(min-width: 1024px) 50vw, 100vw' },
  swatch: { widths: [96, 192], sizes: '96px' },
} as const;

export const imageFormats = ['avif', 'webp'] as const;
export const imageQuality = 70;

export type ImagePresetKey = keyof typeof imageSizes;
