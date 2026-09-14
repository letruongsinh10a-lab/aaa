'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { signupSchema } from '@/lib/validation/auth'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { GoogleButton } from '@/components/auth/GoogleButton'

export default function SignupPage() {
  const router = useRouter()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const parsed = signupSchema.safeParse({ displayName, email, password })
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: { data: { full_name: parsed.data.displayName } },
    })
    setLoading(false)

    if (signUpError) {
      setError(
        signUpError.message === 'User already registered'
          ? 'Email này đã có tài khoản'
          : 'Không thể tạo tài khoản, vui lòng thử lại',
      )
      return
    }

    // Project has "Confirm email" on — no session yet until the user clicks the email link.
    if (!data.session) {
      setAwaitingConfirmation(true)
      return
    }

    router.push('/learn')
    router.refresh()
  }

  if (awaitingConfirmation) {
    return (
      <div className="text-center">
        <h1 className="font-serif text-3xl text-text-primary mb-4">Kiểm tra email của bạn</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Chúng tôi đã gửi link xác nhận tới <span className="text-text-primary">{email}</span>.
          Mở email và bấm vào link để hoàn tất tạo tài khoản.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-text-primary text-center mb-8">Tạo tài khoản</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Tên hiển thị"
          type="text"
          name="displayName"
          autoComplete="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Mật khẩu"
          type="password"
          name="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-xs text-accent-error">{error}</p>}
        <Button type="submit" variant="primary" className="w-full justify-center" loading={loading}>
          Tạo tài khoản
        </Button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        <span className="text-[11px] text-text-tertiary uppercase tracking-wider">Hoặc</span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
      </div>

      <GoogleButton label="Đăng ký với Google" />

      <p className="text-center text-sm text-text-secondary mt-8">
        Đã có tài khoản?{' '}
        <Link href="/login" className="text-accent-coral hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  )
}
