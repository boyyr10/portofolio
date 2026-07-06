# Muhammad Yusuf Ramadhan — Portfolio

A personal portfolio site built with **React + Vite**. Dark/light theme, scroll-reveal
animations, and a contact form.

## Tech stack

- React 18
- Vite 5
- Plain CSS with custom design tokens (no UI framework)

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy to Netlify

**Option A — connect the Git repo (recommended):**

1. Push this project to GitHub.
2. In Netlify: *Add new project → Import from Git → pick this repo*.
3. Build command: `npm run build` · Publish directory: `dist`
4. Deploy.

**Option B — drag & drop:**

1. Run `npm run build` locally.
2. Drag the generated `dist/` folder into the Netlify upload area.

## Editing content

All text (experience, projects, skills, links) lives in `src/data.js`.
Update that one file to change the site — no need to touch the components.

## Project structure

```
src/
  components/    UI components (Navbar, Hero, Projects, ...)
  data.js        all site content
  index.css      styles + design tokens
  useReveal.js   scroll-into-view hook
  App.jsx        composes the page
```
