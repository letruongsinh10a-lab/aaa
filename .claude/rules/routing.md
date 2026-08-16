# Routing Architecture

## Route Groups

Three route groups control which shell wraps each page:

| Group | Shell | When to use |
|---|---|---|
| `(marketing)` | Header + Footer | Public pages: landing, pricing, about |
| `(app)` | Sidebar (240px) | Authenticated app pages: dashboard, courses, TOPIK |
| `(focus)` | No chrome | Full-screen, distraction-free: flashcard session, speaking, TOPIK test |

## Adding a New Page

**Marketing page** (public, has Header + Footer):
```
src/app/(marketing)/about/page.tsx
src/app/(marketing)/pricing/page.tsx
```

**App page** (authenticated, has Sidebar):
```
src/app/(app)/learn/grammar/page.tsx
src/app/(app)/vocab/page.tsx
src/app/(app)/leaderboard/page.tsx
src/app/(app)/profile/[username]/page.tsx
```

**Focus page** (full-screen, no Sidebar or Header):
```
src/app/(focus)/learn/flashcards/page.tsx
src/app/(focus)/topik/[id]/page.tsx
src/app/(focus)/learn/speaking/page.tsx
```

## Route Map

```
/                        → (marketing)/page.tsx       Landing
/learn                   → (app)/learn/page.tsx        Dashboard
/learn/flashcards        → (focus)/learn/flashcards/  Full-screen SRS session
/learn/grammar           → (app)/learn/grammar/
/learn/listening         → (app)/learn/listening/
/learn/reading           → (app)/learn/reading/
/learn/speaking          → (focus)/learn/speaking/    Full-screen
/courses                 → (app)/courses/page.tsx
/courses/[slug]          → (app)/courses/[slug]/
/topik                   → (app)/topik/page.tsx
/topik/[id]              → (focus)/topik/[id]/        Full-screen test
/vocab                   → (app)/vocab/page.tsx
/profile/[username]      → (app)/profile/[username]/
/settings                → (app)/settings/page.tsx
/leaderboard             → (app)/leaderboard/page.tsx
```

## Auth Middleware

Create `src/middleware.ts` when Supabase auth is wired up:

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.has('sb-access-token')
  const isAppRoute = request.nextUrl.pathname.startsWith('/learn') ||
                     request.nextUrl.pathname.startsWith('/courses') ||
                     request.nextUrl.pathname.startsWith('/topik') ||
                     request.nextUrl.pathname.startsWith('/vocab') ||
                     request.nextUrl.pathname.startsWith('/profile') ||
                     request.nextUrl.pathname.startsWith('/settings') ||
                     request.nextUrl.pathname.startsWith('/leaderboard')

  if (isAppRoute && !hasSession) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

## API Routes

Place in `src/app/api/[resource]/route.ts`. Keep them thin — logic goes in `src/lib/`.

```
src/app/api/flashcards/route.ts
src/app/api/srs/review/route.ts
src/app/api/user/progress/route.ts
```
