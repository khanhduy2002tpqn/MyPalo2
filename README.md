# MyPalo Website

Bilingual MyPalo website built with Next.js App Router and Sanity Studio.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the website and `http://localhost:3000/studio` for the CMS.

## Sanity

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` after creating a Sanity project. The public site includes local seeded content so it can render before the CMS is connected.
