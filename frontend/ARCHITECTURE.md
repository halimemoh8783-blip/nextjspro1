# Frontend architecture

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Feature slices for domain code
- API client talking to Express backend (`NEXT_PUBLIC_API_URL`)

## Data flow

```
UI (feature component)
  → hook (state / side effects)
    → service (*Api.ts)
      → shared apiClient
        → backend REST /api/*
```

## Routing

| URL | Source |
|-----|--------|
| `/` | `app/page.tsx` |
| `/login`, `/register` | `app/(auth)/…` |
| `/dashboard` | `app/(dashboard)/dashboard/page.tsx` |
| `/courses`, `/categories`, `/users` | dashboard route group |

Auth guard:

1. `middleware.ts` checks `auth_token` cookie
2. `(dashboard)/layout.tsx` verifies client session via `AuthProvider`

## Feature rule

`app/` owns **URLs**.  
`features/` owns **domain UI + logic**.  
Route files stay thin and import views/forms from features.
