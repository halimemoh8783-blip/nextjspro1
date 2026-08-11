# Project structure

Monorepo-style layout:

```
nextjspro1/
├── STRUCTURE.md          # This guide
├── backend/              # Express API (feature-based)
└── frontend/             # Next.js app (feature-based)
```

---

## Frontend (Next.js)

```
frontend/
├── package.json
├── next.config.ts
├── tsconfig.json
├── .env.local
├── public/
└── src/
    ├── middleware.ts
    ├── app/                              # Routes only
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── loading.tsx
    │   ├── error.tsx
    │   ├── not-found.tsx
    │   ├── (auth)/
    │   │   ├── layout.tsx
    │   │   ├── login/page.tsx
    │   │   └── register/page.tsx
    │   └── (dashboard)/
    │       ├── layout.tsx
    │       ├── dashboard/page.tsx
    │       ├── categories/page.tsx
    │       ├── courses/page.tsx
    │       └── users/page.tsx
    ├── features/
    │   ├── auth/
    │   │   ├── components/
    │   │   ├── hooks/
    │   │   ├── services/
    │   │   └── types/
    │   ├── categories/
    │   ├── courses/
    │   ├── dashboard/
    │   └── users/
    └── shared/
        ├── api/
        ├── auth/
        ├── components/
        └── utils/
```

### Feature slice (frontend)

| Folder | Purpose |
|--------|---------|
| `components/` | Feature UI (forms, views) — not route files |
| `hooks/` | Client state and side effects |
| `services/` | API calls (`*Api.ts`) |
| `types/` | Domain TypeScript types |

**Rule:** `app/` = routes · `features/` = domain · `shared/` = cross-cutting

---

## Backend (Express)

```
backend/
├── package.json
├── tsconfig.json
├── .env
└── src/
    ├── main.ts
    ├── app.ts
    ├── features/
    │   ├── auth/
    │   │   ├── auth.routes.ts
    │   │   ├── auth.controller.ts
    │   │   ├── auth.service.ts
    │   │   └── types.ts
    │   ├── categories/
    │   ├── courses/
    │   ├── dashboard/
    │   └── users/
    └── shared/
        ├── data/store.ts
        ├── errors/
        ├── middleware/
        ├── types/
        └── utils/
```

### Feature slice (backend)

| File | Purpose |
|------|---------|
| `*.routes.ts` | HTTP paths for the feature |
| `*.controller.ts` | Request/response handling |
| `*.service.ts` | Business logic |
| `types.ts` | DTOs / feature types |

---

## Run both

```bash
# terminal 1
cd backend && npm install && npm run dev

# terminal 2
cd frontend && npm install && npm run dev
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:4000  

### Demo users

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | password | admin |
| teacher@example.com | password | teacher |
| student@example.com | password | student |
