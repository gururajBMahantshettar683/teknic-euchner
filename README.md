# Teknic Euchner — Industrial Marketing Site

Responsive one-page marketing website for **Teknic Euchner** — industrial sensors, switches, and control gear manufacturer.

## Tech Stack

- **React 18** — component-based UI
- **Tailwind CSS** — utility-first styling
- **Vite** — build tool & dev server
- **JavaScript** — no TypeScript needed

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Image Assets

Place all exported Figma PNGs in `public/assets/`. See `ASSETS.md` for the full filename list.

## Project Structure

```
src/
├── components/     # Reusable UI (Button, Header, Footer, ProductCard, etc.)
├── data/           # All content arrays (products, stats, footerLinks, etc.)
├── hooks/          # Custom hooks (useMediaQuery, useInView)
├── layouts/        # PageLayout (Header + Footer wrapper)
├── pages/          # TeknicEuchnerPage (composition of all sections)
├── styles/         # Tailwind + custom CSS
└── utils/          # Helper functions
```

## Pages

1. **Header** — Logo, nav with About Us dropdown, CTA button
2. **Hero** — "Precision That Keeps Industry Moving."
3. **Introduction** — Eyebrow, heading, images, body copy
4. **Stats Band** — Dark textured background, 4 stat cards
5. **Products Intro** — "OUR PRODUCTS" eyebrow + CTA
6. **Product Grid** — 6 products in 2-column grid
7. **Why Teknic Euchner** — Image + 5-item stacked list
8. **Applications** — 3×2 grid
9. **Quality Band** — Dark gray, cable connector bleed
10. **Dealer CTA** — Globe illustration + "Find a Dealer"
11. **Final CTA** — Black bg, two buttons, product photo
12. **Footer** — Red bg, giant wordmark, 4 columns, copyright

## Color Palette

- **Black/Near-black**: Header & footer background (`#0a0a0a`)
- **White**: Body background
- **Red accent** (`#dc2626`): CTAs, links, eyebrow labels
- **Dark gray** (`#374151`): Quality section background

## Typography

- **Monospace**: Nav, eyebrow labels, buttons — `'JetBrains Mono'`
- **Display**: Headings — `'Space Grotesk'`
- **Sans**: Body text — `'Inter'`

## License

MIT
