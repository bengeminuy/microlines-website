# Micro Lines Sales Corp. — Design System
## Typography

---

## Typefaces

The website uses two typefaces. They are loaded from Google Fonts and cover every text use case on the site.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
  rel="stylesheet"
/>
```

```css
--font-display: 'Syne', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

---

### Syne — Display & Headlines

Syne is a geometric grotesque designed for tight, bold display use. It is used exclusively for things the user should notice first: page titles, section headlines, product names, and large statistics.

**Why Syne and not something else:** The brand sells precision-made interior products. The typeface needs to feel structured and deliberate, not decorative or casual. Syne communicates exactness — the same quality the brand promises in its products. Its geometric construction also echoes the horizontal-line motif from the logo.

**Weights in use:** 500, 600, 700. We cap at 700 — at weight 800 Syne's caps sit so close to the top of the line-box that headlines visually feel pressed from above. 500 is the floor for smaller Syne sizes (15–18px) where 600+ would compete too aggressively with the larger weights above it. Anything below 500 is DM Sans territory.

**Tracking:** Always negative. Headlines feel tighter and more confident with reduced letter-spacing.

---

### DM Sans — Body & UI

DM Sans is a humanist sans-serif. It is slightly warmer than purely geometric options like Inter or Outfit, which makes it better suited for service-oriented copy where the tone should be approachable, not clinical.

It handles everything Syne does not: paragraphs, navigation links, button labels, form fields, captions, and metadata. At small sizes it remains legible without requiring increased tracking.

**Why DM Sans and not something else:** It shares geometric roots with Syne so the two typefaces feel related, but DM Sans is softer in its curves. This contrast — Syne's rigidity against DM Sans's warmth — reflects the brand's positioning: precise craftsmanship delivered with a personal touch. It also ships as a variable font, meaning one file covers all weights from 300 to 600.

**Weights in use:** 300 (light body on dark backgrounds), 400 (standard body copy), 500 (UI elements, navigation), 600 (button labels, strong labels). The italic variant is available in weight 300 for pull quotes or editorial emphasis.

---

## Type Scale

All sizes are defined as CSS custom properties. Do not use arbitrary sizes — always pull from this scale.

```css
--text-display:  48px;   /* Syne 700, tracking -0.025em */
--text-h1:       32px;   /* Syne 700, tracking -0.02em  */
--text-h2:       22px;   /* Syne 600, tracking -0.01em  */
--text-h3:       18px;   /* Syne 500, tracking -0.01em  */
--text-accent:   15px;   /* Syne 500, brand color       */
--text-body:     16px;   /* DM Sans 400, lh 1.65        */
--text-body-sm:  14px;   /* DM Sans 400, lh 1.6         */
--text-ui:       13px;   /* DM Sans 500                 */
--text-label:    11px;   /* DM Sans 600, UC, track 0.1em */
--text-caption:  11px;   /* DM Sans 400, track 0.02em   */
```

---

## Usage by Element

### Page & section headlines

```css
font-family: var(--font-display);
font-size:   var(--text-display);   /* or --text-h1 for section titles */
font-weight: 700;                   /* 700 for display & H1, 600 for H2, 500 for H3 */
letter-spacing: -0.025em;
line-height: 1.1;                   /* tight — display type should feel stacked, without crashing */
color: #0D0908;                     /* or #FEFCFB on dark backgrounds */
```

The display size (48px) is reserved for the hero headline only. Use `--text-h1` (32px) for all section-level titles below the fold. Use `--text-h2` (22px) for subsection titles and card headings.

---

### Product names & callout stats

```css
font-family: var(--font-display);
font-size:   var(--text-h2);        /* 22px is the sweet spot for product names */
font-weight: 600;
letter-spacing: -0.01em;
color: #0D0908;
```

For large statistics (e.g. "200+ Projects", "Free Install"), use `--text-h1` or `--text-display` depending on the layout context. Statistics in the brand color `#570a0d` are reserved for the single most important number on a given section — do not make every stat red.

---

### Body copy

```css
font-family: var(--font-body);
font-size:   var(--text-body);      /* 16px */
font-weight: 400;
line-height: 1.65;
color: #3D3233;                     /* Charcoal — not full ink, slightly softer */
```

On dark section backgrounds, body copy drops to `rgba(255, 255, 255, 0.45)` at weight 300. Do not use full white for body text on dark backgrounds — it creates too much contrast and becomes tiring to read.

Paragraph line length should stay between 60–75 characters. Beyond 75 characters, the eye has difficulty tracking back to the start of the next line. In practice this means limiting body copy containers to around 640px on desktop.

---

### Navigation

```css
font-family: var(--font-body);
font-size:   var(--text-ui);        /* 13px */
font-weight: 500;
letter-spacing: 0;
color: #7A6E6F;                     /* Muted — inactive state */
```

The active navigation item uses `color: #0D0908` (full ink) with no other visual treatment. Avoid underlines, backgrounds, or bold weight changes for the active state — the color shift is sufficient.

The logo wordmark is set in Syne 700, not DM Sans. It should read `MICRO.LINES` with the period rendered in `#570a0d`.

---

### Buttons

```css
font-family: var(--font-body);
font-size:   var(--text-ui);        /* 13px */
font-weight: 600;
letter-spacing: 0.04em;
```

Button labels use slight positive tracking (0.04em) to compensate for the weight — at 600 weight and 13px, zero tracking reads slightly cramped. Do not use Syne for button labels. The geometric heaviness of Syne at small sizes works against legibility in interactive contexts.

---

### Labels & captions

```css
/* Category labels, tag chips, section eyebrows */
font-family: var(--font-body);
font-size:   var(--text-label);     /* 11px */
font-weight: 600;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #7A6E6F;                     /* or #570a0d for brand-colored labels */
```

```css
/* Image captions, metadata, timestamps */
font-family: var(--font-body);
font-size:   var(--text-caption);   /* 11px */
font-weight: 400;
letter-spacing: 0.02em;
color: #ADA4A4;
```

Uppercase labels use 0.1em tracking because all-caps text at small sizes becomes unreadable without it. Do not apply uppercase treatment to text above 13px — at larger sizes it looks stylistically heavy rather than purposeful.

---

### Accent text (Syne in brand color)

Reserved for short, high-importance lines that sit between or beneath a headline — things like a value proposition under a section title, or a product category highlight.

```css
font-family: var(--font-display);
font-size:   var(--text-accent);    /* 15px */
font-weight: 500;
color: #570a0d;
letter-spacing: 0.01em;
```

Use sparingly. One instance per section maximum. If every section has a brand-colored accent line, none of them feel important.

---

## Rules

**Do not mix Syne and DM Sans in the same text node.** If a sentence needs both — for example, a headline with a light subtitle — use two separate HTML elements with their respective font assignments.

**Do not use Syne for body copy.** Below 18px, Syne's tight geometry works against readability. Everything at 16px and below is DM Sans.

**Do not use DM Sans for headlines above 18px.** At display sizes, DM Sans lacks the visual weight to hold a layout. Use Syne.

**Line height scales inversely with font size.** Large display type uses `line-height: 1.1`. Body text uses `line-height: 1.65`. Do not apply body line-height to headlines — the gap between lines becomes visually dead space.

**Italic is available but rare.** DM Sans italic (weight 300) can appear in pull quotes or editorial callouts. It should not appear in navigation, buttons, labels, or product names. Syne has no italic variant.

**Font loading.** The `display=swap` parameter is required in the Google Fonts URL. Without it, text is invisible until the font loads — a flash of invisible text (FOIT) that is worse than a flash of fallback text (FOUT). The fallback stack for both families is `sans-serif`.

---

## Quick Reference

| Element | Family | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Hero headline | Syne | 48px | 700 | -0.025em | Sentence |
| Section title H1 | Syne | 32px | 700 | -0.02em | Sentence |
| Section title H2 | Syne | 22px | 600 | -0.01em | Sentence |
| Product name / H3 | Syne | 18px | 500 | -0.01em | Sentence |
| Accent line | Syne | 15px | 500 | 0.01em | Sentence |
| Body copy | DM Sans | 16px | 400 | 0 | Sentence |
| Small body | DM Sans | 14px | 400 | 0 | Sentence |
| Navigation | DM Sans | 13px | 500 | 0 | Sentence |
| Button label | DM Sans | 13px | 600 | 0.04em | Sentence |
| Category label | DM Sans | 11px | 600 | 0.1em | Uppercase |
| Caption / meta | DM Sans | 11px | 400 | 0.02em | Sentence |

---

*design.md — Micro Lines Sales Corp. · Typography section · v1.0*

## Colors

---

## Brand Color

The single source of truth for the entire color system. Every other color in this document is derived from or chosen to work alongside this value.

```css
--color-brand: #570a0d;
```

`#570a0d` is a deep crimson — almost dark enough to read as near-black at small sizes, but unmistakably red at display scale. This depth is an asset: it works as a text color, a button fill, a background, and an icon tint without needing a lighter or darker substitute in most contexts.

**Do not approximate it.** Do not use `#cc0000`, `#8b0000`, or any other red that looks similar. The exact value is what was extracted from the original logo and is the basis of every tint and shade in the brand scale below.

---

## CSS Custom Properties

Paste this block into your `:root`. Every color used on the site should reference one of these tokens — never a raw hex value inline.

```css
:root {
  /* Brand scale */
  --color-brand-950:   #1E0304;
  --color-brand-900:   #3D070A;
  --color-brand:       #570a0d;   /* ← primary brand color */
  --color-brand-500:   #8C1521;
  --color-brand-400:   #B82E38;
  --color-brand-300:   #D4636B;
  --color-brand-200:   #EBA8AB;
  --color-brand-100:   #F5D8D9;
  --color-brand-50:    #FCF0F0;

  /* Neutral scale — warm-tinted */
  --color-ink:         #0D0908;
  --color-dark:        #1C1314;
  --color-charcoal:    #3D3233;
  --color-muted:       #7A6E6F;
  --color-subtle:      #ADA4A4;
  --color-border:      #E5DCDC;
  --color-surface-alt: #F0EAEA;
  --color-surface:     #F7F3F3;
  --color-canvas:      #FEFCFB;

  /* Semantic aliases */
  --color-text-primary:    var(--color-ink);
  --color-text-secondary:  var(--color-charcoal);
  --color-text-muted:      var(--color-muted);
  --color-text-disabled:   var(--color-subtle);
  --color-bg-page:         var(--color-canvas);
  --color-bg-section-alt:  var(--color-surface);
  --color-bg-dark:         var(--color-ink);
  --color-bg-brand:        var(--color-brand);
  --color-border-default:  var(--color-border);
  --color-border-strong:   var(--color-subtle);
}
```

---

## The Brand Scale

Nine stops generated from `#570a0d`. The brand color sits at the 700 position — dark enough for strong contrast on white, light enough to be visually distinct from black.

| Token | Hex | Use |
|---|---|---|
| `--color-brand-950` | `#1E0304` | Near-black tint — avoid in most cases |
| `--color-brand-900` | `#3D070A` | Hover state for brand-colored dark elements |
| `--color-brand` | `#570a0d` | Primary — CTAs, active states, key accents |
| `--color-brand-500` | `#8C1521` | Secondary accent, icon tints, hover on light bg |
| `--color-brand-400` | `#B82E38` | Decorative use only — never for text or buttons |
| `--color-brand-300` | `#D4636B` | Large decorative text only (fails AA at small sizes) |
| `--color-brand-200` | `#EBA8AB` | Dividers, decorative borders on light backgrounds |
| `--color-brand-100` | `#F5D8D9` | Tinted backgrounds — error states, alert banners |
| `--color-brand-50` | `#FCF0F0` | Very subtle tinted surface — tag chips, badges |

**Stops 300 and lighter are not for text.** They do not meet WCAG AA contrast requirements at body size on white backgrounds. Use them only for decorative fills, borders, or large headline text where the WCAG large-text threshold (3:1) applies.

---

## The Neutral Scale

The neutrals are not pure grays. Each value carries a faint warm tint — a trace of the brand's red hue baked into the lightness. This makes the neutrals feel cohesive alongside `#570a0d` rather than disconnected.

| Token | Hex | Use |
|---|---|---|
| `--color-ink` | `#0D0908` | Primary text, dark section backgrounds |
| `--color-dark` | `#1C1314` | Footer background, deep dark surfaces |
| `--color-charcoal` | `#3D3233` | Secondary body text on white |
| `--color-muted` | `#7A6E6F` | Supporting text, inactive nav items, placeholders |
| `--color-subtle` | `#ADA4A4` | Disabled text, metadata, timestamps |
| `--color-border` | `#E5DCDC` | Default borders, dividers, card outlines |
| `--color-surface-alt` | `#F0EAEA` | Slightly tinted surface — table rows, code blocks |
| `--color-surface` | `#F7F3F3` | Alternate section backgrounds, card fills |
| `--color-canvas` | `#FEFCFB` | Page background |

---

## Section Backgrounds

The website alternates between four background contexts. Most pages follow this order, though it can vary based on content needs.

### White / Canvas — `#FEFCFB`

The default. Used for the majority of content sections: product listings, feature explanations, testimonials. Text uses `--color-ink` and `--color-charcoal`. Borders use `--color-border`.

```css
background: var(--color-canvas);
color: var(--color-text-primary);
```

### Warm Surface — `#F7F3F3`

Used as an alternating section background to create visual rhythm without introducing a new color. Useful for "how it works" steps, FAQs, and specification tables.

```css
background: var(--color-surface);
color: var(--color-text-primary);
```

### Near-Black — `#0D0908`

Used for high-contrast sections: the navigation bar, the footer, promotional banners, and occasionally a mid-page feature section. Text flips to `--color-canvas`. Body copy on dark backgrounds uses `rgba(254, 252, 251, 0.45)` — not full white, which is too harsh — at weight 300.

```css
background: var(--color-bg-dark);
color: var(--color-canvas);
```

```css
/* Body copy on dark backgrounds */
color: rgba(254, 252, 251, 0.45);
font-weight: 300;
```

### Brand — `#570a0d`

Used extremely sparingly — one section per page at most, and only when the goal is maximum conversion impact (e.g. a quote request banner, a closing CTA section). Text on brand backgrounds is always `--color-canvas`. The only button style that works on a brand background is a white-fill button with brand-colored text.

```css
background: var(--color-bg-brand);
color: var(--color-canvas);
```

```css
/* CTA button on brand background */
background: var(--color-canvas);
color: var(--color-brand);
font-weight: 700;
```

---

## Color Combinations

These are the only approved foreground/background pairings. Do not introduce combinations outside this list without checking contrast ratios first.

### On canvas (`#FEFCFB`)

| Foreground | Token | Ratio | Use |
|---|---|---|---|
| `#0D0908` | `--color-ink` | 19.4:1 AAA | Primary text, headlines |
| `#3D3233` | `--color-charcoal` | 10.1:1 AAA | Body copy |
| `#570a0d` | `--color-brand` | 12.4:1 AAA | Brand text, links, CTAs |
| `#7A6E6F` | `--color-muted` | 4.7:1 AA | Secondary text, nav items |
| `#ADA4A4` | `--color-subtle` | 2.8:1 — | Disabled only — never for readable content |

### On near-black (`#0D0908`)

| Foreground | Token | Ratio | Use |
|---|---|---|---|
| `#FEFCFB` | `--color-canvas` | 19.4:1 AAA | Headlines, strong labels |
| `rgba(254,252,251,0.45)` | — | ~4.5:1 AA | Body copy, supporting text |
| `#570a0d` | `--color-brand` | 1.4:1 — | Never — fails completely |
| `#D4636B` | `--color-brand-300` | 4.9:1 AA | Accent text, large stats only |

> **Note:** The brand color `#570a0d` is nearly invisible on dark backgrounds — its luminance is too close to `#0D0908`. Never use it as a text or icon color on dark sections. Use `--color-brand-300` (`#D4636B`) as the dark-section accent instead.

### On brand (`#570a0d`)

| Foreground | Token | Ratio | Use |
|---|---|---|---|
| `#FEFCFB` | `--color-canvas` | 12.4:1 AAA | All text on brand backgrounds |
| `rgba(254,252,251,0.5)` | — | ~5.5:1 AA | Supporting / body copy |

---

## Buttons

Button color follows a strict hierarchy. There are four variants and each has a defined context.

### Primary — ink fill

The default CTA. Used for the main action in any section that sits on a canvas or surface background.

```css
background: var(--color-ink);        /* #0D0908 */
color:       var(--color-canvas);    /* #FEFCFB */
border:      none;

/* Hover */
background: var(--color-dark);       /* #1C1314 */
```

### Brand fill — for high-priority CTAs

Used when the action is the most important on the page — "Get a Quote", "Book an Installation". Limit to one per section.

```css
background: var(--color-brand);      /* #570a0d */
color:       var(--color-canvas);    /* #FEFCFB */
border:      none;

/* Hover */
background: var(--color-brand-900);  /* #3D070A */
```

### Outline

Secondary action alongside a primary button — "View Projects", "Learn More".

```css
background:   transparent;
color:        var(--color-ink);
border:       1.5px solid var(--color-border-strong);  /* #ADA4A4 */

/* Hover */
background:   var(--color-surface);
border-color: var(--color-charcoal);
```

### Ghost — on dark backgrounds

Used for secondary actions in dark sections or the navigation bar.

```css
background:   transparent;
color:        rgba(254, 252, 251, 0.5);
border:       1px solid rgba(254, 252, 251, 0.15);

/* Hover */
color:        var(--color-canvas);
border-color: rgba(254, 252, 251, 0.35);
```

---

## Interactive States

Every interactive element needs all four states defined. These values apply across buttons, links, and card-level interactions.

```css
/* Links */
color:           var(--color-brand);       /* default */
text-decoration: none;

color:           var(--color-brand-500);   /* hover — slightly lighter */
text-decoration: underline;

color:           var(--color-brand-900);   /* active / pressed */

color:           var(--color-subtle);      /* disabled */
pointer-events:  none;
```

```css
/* Focus ring — applies to all interactive elements */
outline:        2px solid var(--color-brand);
outline-offset: 3px;
border-radius:  inherit;
```

The focus ring always uses `--color-brand`. It is high-contrast on both canvas and dark backgrounds and clearly communicates the brand identity at the accessibility level.

---

## Tags, Pills & Badges

### Category tag chips

Used for filter controls (Venetian, Roller, Panel, Motorized).

```css
/* Default */
background: var(--color-surface);     /* #F7F3F3 */
color:      var(--color-charcoal);    /* #3D3233 */
border:     1px solid var(--color-border);

/* Active / selected */
background: var(--color-ink);         /* #0D0908 */
color:      var(--color-canvas);      /* #FEFCFB */
border:     1px solid var(--color-ink);
```

### Status & feature pills

Used for callouts like "Free Install", "Custom Sizing".

```css
/* Brand pill */
background: var(--color-brand-50);    /* #FCF0F0 */
color:      var(--color-brand);       /* #570a0d */

/* Neutral pill */
background: var(--color-surface-alt); /* #F0EAEA */
color:      var(--color-charcoal);    /* #3D3233 */
```

---

## Borders & Dividers

All borders use values from the neutral scale. Never use the brand color as a border except for the focus ring.

```css
/* Default card border */
border: 1px solid var(--color-border);         /* #E5DCDC */

/* Emphasized border — hover state, active card */
border: 1px solid var(--color-border-strong);  /* #ADA4A4 */

/* Section divider */
border-top: 1px solid var(--color-border);

/* Divider on dark backgrounds */
border-top: 1px solid rgba(255, 255, 255, 0.08);

/* Divider on brand backgrounds */
border-top: 1px solid rgba(255, 255, 255, 0.15);
```

---

## What Not to Do

**Do not use the brand color as a dominant background across multiple sections.** `#570a0d` on large areas reads as heavy and aggressive. One brand-background section per page is the maximum.

**Do not use brand scale stops 300–200 for text.** `#D4636B` and lighter fail WCAG AA at normal text sizes. They exist for decorative borders, tinted fills, and large display text only.

**Do not introduce off-palette colors.** No blues, greens, yellows, or purples. The system is intentionally monochromatic — warm neutrals and a single crimson accent. Adding a second hue breaks the cohesion immediately.

**Do not use pure black (`#000000`) or pure white (`#FFFFFF`).** The warmth of `--color-ink` and `--color-canvas` is deliberate. Pure black and white read as cold against the warm-tinted neutrals and will create an obvious inconsistency.

**Do not use `--color-brand` on dark backgrounds.** Its luminance is too close to `--color-ink` to be visible. Use `--color-brand-300` (`#D4636B`) for brand accents on dark sections.

---

## Quick Reference

| Token | Hex | Primary use |
|---|---|---|
| `--color-brand` | `#570a0d` | CTAs, active states, links |
| `--color-brand-50` | `#FCF0F0` | Tag backgrounds, subtle tints |
| `--color-brand-300` | `#D4636B` | Brand accent on dark backgrounds |
| `--color-ink` | `#0D0908` | Primary text, dark section bg |
| `--color-charcoal` | `#3D3233` | Body copy |
| `--color-muted` | `#7A6E6F` | Supporting text, inactive items |
| `--color-subtle` | `#ADA4A4` | Disabled, metadata |
| `--color-border` | `#E5DCDC` | Card borders, dividers |
| `--color-surface` | `#F7F3F3` | Alternate section backgrounds |
| `--color-canvas` | `#FEFCFB` | Page background, text on dark |

---

*design.md — Micro Lines Sales Corp. · Colors section · v1.0*
