# LearnHub Frontend

Next.js App Router client using a **feature-based** architecture.

## Run

```bash
# from repo root: start backend first on :4000
npm install
npm run dev
```

App: `http://localhost:3000`

## Demo accounts

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | password | admin |
| teacher@example.com | password | teacher |
| student@example.com | password | student |

## Architecture

- `src/app/` — routes only (thin `page.tsx` files)
- `src/features/<name>/` — components, hooks, services, types
- `src/shared/` — API client, auth storage, UI, layout

See [ARCHITECTURE.md](./ARCHITECTURE.md).
