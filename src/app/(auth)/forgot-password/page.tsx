'use client'

import { useState } from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/client'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const emailSchema = z.string().email('Email không hợp lệ')

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const parsed = emailSchema.safeParse(email)
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Email không hợp lệ')
      return
    }

    setLoading(true)
    const supabase = createClient()
    await supabase.auth.resetPasswordForEmail(parsed.data, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    })
    setLoading(false)
    // Always show the same confirmation regardless of whether the email exists —
    // avoids leaking which emails have accounts.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center">
        <h1 className="font-serif text-3xl text-text-primary mb-4">Kiểm tra email của bạn</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Nếu <span className="text-text-primary">{email}</span> có tài khoản, chúng tôi đã gửi link đặt lại mật khẩu tới email đó.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-text-primary text-center mb-3">Quên mật khẩu?</h1>
      <p className="text-sm text-text-secondary text-center mb-8">
        Nhập email để nhận link đặt lại mật khẩu.
      </p>

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
        {error && <p className="text-xs text-accent-error">{error}</p>}
        <Button type="submit" variant="primary" className="w-full justify-center" loading={loading}>
          Gửi link đặt lại mật khẩu
        </Button>
      </form>

      <p className="text-center text-sm text-text-secondary mt-8">
        <Link href="/login" className="text-accent-coral hover:underline">
          ← Quay lại đăng nhập
        </Link>
      </p>
    </div>
  )
}
