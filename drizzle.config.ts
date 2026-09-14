import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // schema.ts declares a 1-column stub for auth.users (just to get a typed FK
  // target) — without this filter, generate/push diff it against the REAL
  // Supabase auth.users table (dozens of columns) and try to reconcile them,
  // which would attempt to alter Supabase's own auth schema. Restricting to
  // 'public' keeps generate/push scoped to tables we actually own.
  schemaFilter: ['public'],
})
