import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { parsePlan } from '@/lib/plans'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/learn'
  const plan = parsePlan(searchParams.get('plan'))

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Only set on first sign-up via Google — never overwrite an existing
      // user's plan just because they logged in again with a stray ?plan=.
      if (plan !== 'free') {
        const { data: { user } } = await supabase.auth.getUser()
        if (user && !user.user_metadata?.requested_plan) {
          await supabase.auth.updateUser({ data: { requested_plan: plan } })
        }
      }
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
