# Beacon-Fishkill Repair Cafe Website

Built with **Astro + Tailwind CSS**, managed via **Pages CMS** (or AI-assisted edits), and deployed free to **GitHub Pages**.

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:4321/web/`.

## Managing Events

All events live in `src/content/events/` as Markdown files:
- **`status: "upcoming"`** → Automatically displayed on the Home page (`/`).
- **`status: "past"`** → Automatically archived on the Past Events page (`/past-events`).

To archive a completed event and publish a new one:
1. Change the old event's `status` from `upcoming` to `past`.
2. Add a new Markdown file in `src/content/events/` with `status: "upcoming"`.

You can edit events directly in Git/IDE or via **[Pages CMS](https://app.pagescms.org)** (configured in `.pages.yml`).

## Deploying to GitHub Pages

Once merged to `main`, enable **GitHub Actions** as the source under **Repository Settings → Pages → Build and deployment → Source: GitHub Actions**. Every push to `main` will automatically build and publish to `https://beacon-repair-cafe.github.io/web/`.
