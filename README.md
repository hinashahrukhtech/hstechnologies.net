# HS Technologies

Modern website for **Hina Shahrukh & Co** — a consulting company offering technology, advisory, and business services across 16+ countries.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Shadcn/ui.

## Tech Stack

| Layer       | Technology                                     |
| ----------- | ---------------------------------------------- |
| Framework   | Next.js 16 (App Router, React Compiler)        |
| UI          | React 19, Shadcn/ui (New York), Radix UI       |
| Styling     | Tailwind CSS 4, custom CSS variables/animations |
| Icons       | Lucide React, custom origami-style SVGs         |
| Map         | react-simple-maps                               |
| Fonts       | Roboto, Roboto Slab, Lato (Google Fonts)        |
| Language    | TypeScript 5 (strict mode)                      |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
├── app/                        # Pages (App Router)
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage
│   ├── values/                 # Values page
│   ├── services/               # Services (placeholder)
│   ├── contact/                # Contact (placeholder)
│   ├── legal/                  # Legal (placeholder)
│   └── privacy/                # Privacy Policy (placeholder)
├── components/
│   ├── layout/                 # Header & Footer
│   ├── sections/               # Homepage sections
│   │   ├── hero.tsx            # Hero with vision pillars
│   │   ├── our-mark.tsx        # Global presence & world map
│   │   ├── partners.tsx        # Partner/client logos
│   │   ├── services.tsx        # Services grid (9 services)
│   │   ├── core-values.tsx     # Company values & circle animation
│   │   ├── quotes.tsx          # CEO & COO quotes
│   │   └── contact.tsx         # Contact information
│   ├── icons/                  # Logo, world map, service icons, partner logos
│   └── ui/                     # Shadcn/ui primitives (Button, Sheet)
└── lib/
    ├── constants.ts            # Centralized site data
    └── utils.ts                # Utility functions
```

## Homepage Sections

1. **Hero** — Tagline with vision pillars: Simple, Interoperable, Convenient
2. **Our Mark** — Global presence highlighted on an interactive world map (16 countries)
3. **Partners** — Logos of partner organizations and clients
4. **Services** — Grid of 9 service areas with custom origami-style icons
5. **Core Values** — Company philosophy with animated concentric circles
6. **Quotes** — Leadership quotes from the CEO and COO
7. **Contact** — Phone, email, and address
