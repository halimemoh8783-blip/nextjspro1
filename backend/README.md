# Backend

Feature-based Express API for the learning platform.

## Run

```bash
npm install
npm run dev
```

API: `http://localhost:4000`

## Demo users

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | password | admin |
| teacher@example.com | password | teacher |
| student@example.com | password | student |

## Endpoints

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/me`
- `GET /api/dashboard`
- `GET|POST /api/categories`
- `GET|POST /api/courses`
- `GET /api/users` (admin)

## Structure

```
src/
├── features/     # auth, categories, courses, dashboard, users
├── shared/       # middleware, errors, data store, types
├── app.ts
└── main.ts
```
