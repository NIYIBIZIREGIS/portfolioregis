# Developer Portfolio

A modern, responsive full stack developer portfolio built with React + TypeScript + Tailwind CSS.

## Features

- Dark/Light mode toggle
- Responsive design (mobile-first)
- Hero section with animated availability badge
- About section with stats
- Skills section with proficiency bars
- Projects section with filtering by category
- Experience timeline
- Contact form (uses mailto)
- Smooth scroll navigation
- SEO meta tags

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4**
- **Lucide React** (icons)
- **Wouter** (routing)
- **shadcn/ui** components

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

All portfolio data is stored in `src/lib/data.ts`. Update the following:

- `personalInfo` — your name, title, bio, location, email, social links
- `skills` — skill categories and items
- `techStack` — proficiency bars
- `projects` — your projects with title, description, tech, links
- `experience` — work history
- `education` — educational background
- `stats` — summary numbers

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

Or drag-and-drop this folder into Vercel.
