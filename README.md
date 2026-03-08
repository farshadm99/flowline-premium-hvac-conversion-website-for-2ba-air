# Cloudflare Workers React Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/farshadm99/flowline-premium-hvac-conversion-website-for-2ba-air)

A production-ready Cloudflare Workers + React template featuring multi-entity storage powered by a single Durable Object. Perfect for building scalable full-stack apps with cost-effective persistence.

## ✨ Features

- **React 18 + TypeScript** with Vite for lightning-fast development
- **ShadCN UI + Tailwind CSS** for beautiful, accessible components
- **React Router 6** with proper error boundaries
- **Single Durable Object** for multi-entity storage (users, chats, etc.) with automatic indexing
- **Hono** backend with type-safe API routes
- **TanStack Query** for data fetching & caching
- **Dark/Light theme** support with next-themes
- **Production-ready**: ESLint, Prettier, error reporting, optimized builds
- **Mobile-responsive** with hooks for sidebar/collapsible layouts
- **Cloudflare-first**: Optimized for Workers, Pages, SPA assets handling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite 6, Tailwind CSS, ShadCN UI, React Router, TanStack Query
- **Backend**: Cloudflare Workers, Hono, Durable Objects (single DO for multi-entity)
- **UI/UX**: Lucide Icons, Framer Motion, Sonner (toasts), React Hook Form
- **State**: Zustand (optional), Immer
- **Tools**: Bun (package manager), ESLint, Prettier, PostCSS
- **Cloudflare**: Workers, Durable Objects, KV asset handling, Observability

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (Node.js alternative, faster installs)
- [Cloudflare CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`wrangler`) for deployment

### Installation

```bash
# Clone the repo
git clone <your-repo> my-app
cd my-app

# Install dependencies
bun install
```

### Development

```bash
# Start dev server
bun run dev

# Open http://localhost:3000
```

Hot reload works on both frontend and backend. Changes to `worker/*.ts` require browser refresh.

### Build & Deploy

```bash
# Production build + deploy
bun run deploy
```

Deploys to Cloudflare Workers with automatic asset bundling.

## 📖 Usage

### Frontend

Replace `src/pages/HomePage.tsx` with your app. Router is configured in `src/main.tsx`:

```tsx
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  // Add your routes here
]);
```

**Navigation**: Use `Link` from `react-router-dom`.

**API Calls**: Use shared types from `@/shared/types` + `api` helper:

```tsx
import { api } from '@/lib/api-client';
import type { User } from '@shared/types';

const users = await api<User[]>('/api/users');
```

**Error Handling**: Built-in `ErrorBoundary` + `RouteErrorBoundary`.

**Sidebar**: Use `AppLayout` with collapsible sidebar (`src/components/layout/AppLayout.tsx`).

### Backend

Add routes in `worker/user-routes.ts` using entity helpers:

```ts
import { UserEntity } from './entities';
import { ok, bad } from './core-utils';

app.post('/api/users', async (c) => {
  const { name } = await c.req.json();
  if (!name?.trim()) return bad(c, 'name required');
  return ok(c, await UserEntity.create(c.env, { id: crypto.randomUUID(), name: name.trim() }));
});
```

**Entities**: Extend `IndexedEntity` in `worker/entities.ts` for automatic CRUD + pagination.

**Storage**: One DO handles all entities. No direct DO access needed.

### Shared Types

Define types in `shared/types.ts` - auto-imported in frontend/backend.

## 🏗️ Architecture

```
Frontend (React + Vite)
  ↓ SPA Assets (Cloudflare Pages)
Cloudflare Workers (Hono)
  ↓ /api/* routes → Single Durable Object (GlobalDurableObject)
Storage (DO Storage API + Indexes)
```

- **Assets**: Vite bundles to SPA, served via Cloudflare Workers with `assets` config
- **API**: Hono routes with entity helpers (list/create/delete/paginate)
- **Persistence**: Single DO per entity + indexes for listing/pagination
- **Type Safety**: Shared types + API response wrappers

## 🚀 Deployment

Deploy with one command:

```bash
bun run deploy
```

This builds frontend assets and deploys to your Cloudflare account.

**Custom Domain**: Update `wrangler.jsonc` (do not modify bindings/migrations).

**Environment Variables**: Add via Cloudflare Dashboard → Workers → Settings → Variables.

**Production Config**:
- Minification enabled (`minify: true`)
- Inline source maps for debugging
- SPA fallback (`assets.not_found_handling: "single-page-application"`)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/farshadm99/flowline-premium-hvac-conversion-website-for-2ba-air)

## 🤝 Contributing

1. Fork & clone
2. `bun install`
3. `bun run dev`
4. Make PR

## 📄 License

MIT - see [LICENSE](LICENSE)