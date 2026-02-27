# Mbatshi Netflix Inspired Portfolio (Next.js)

A smooth, streaming-style portfolio that lets visitors browse your projects, experience, skills, and certifications like a Netflix catalog.

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Customize content

All portfolio content is centralized in:

- `src/lib/content.ts`

Update these first:

- `person.links.linkedin`
- `person.links.github`

If you want to add more projects, roles, or skills, add more objects to the `titles` array.

## Deploy

### Vercel

- Push this folder to GitHub
- Import the repo in Vercel
- Deploy

Optional (recommended) environment variable:

- `NEXT_PUBLIC_SITE_URL` (example: `https://your-domain.com`)

This improves the generated sitemap and robots file.

## Notes

- The design is inspired by the Netflix browsing experience, but uses original styling and assets.
- Posters are generated from gradients so you can ship without external images. If you want real thumbnails, add images to `/public` and update the `TitleCard` component.
