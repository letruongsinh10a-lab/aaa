'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { loginSchema } from '@/lib/validation/auth'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { GoogleButton } from '@/components/auth/GoogleButton'

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchParams.get('error') === 'auth_callback_failed') {
      setError('Đăng nhập thất bại, vui lòng thử lại.')
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const parsed = loginSchema.safeParse({ email, password })
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error: signInError } = await supabase.auth.signInWithPassword(parsed.data)
    setLoading(false)

    if (signInError) {
      setError('Email hoặc mật khẩu không đúng')
      return
    }

    router.push('/learn')
    router.refresh()
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-text-primary text-center mb-8">Đăng nhập</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
          <Input
            label="Mật khẩu"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link href="/forgot-password" className="block text-right text-xs text-text-tertiary hover:text-accent-coral transition-colors mt-1.5">
            Quên mật khẩu?
          </Link>
        </div>
        {error && <p className="text-xs text-accent-error">{error}</p>}
        <Button type="submit" variant="primary" className="w-full justify-center" loading={loading}>
          Đăng nhập
        </Button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        <span className="text-[11px] text-text-tertiary uppercase tracking-wider">Hoặc</span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
      </div>

      <GoogleButton label="Đăng nhập với Google" />

      <p className="text-center text-sm text-text-secondary mt-8">
        Chưa có tài khoản?{' '}
        <Link href="/signup" className="text-accent-coral hover:underline">
          Đăng ký
        </Link>
      </p>
    </div>
  )
}
