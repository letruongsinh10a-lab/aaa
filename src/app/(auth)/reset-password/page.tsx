'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/stores/authStore'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const passwordSchema = z.string().min(8, 'Mật khẩu tối thiểu 8 ký tự')

export default function ResetPasswordPage() {
  const router = useRouter()
  const { status } = useAuthStore()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const parsed = passwordSchema.safeParse(password)
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Mật khẩu không hợp lệ')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error: updateError } = await supabase.auth.updateUser({ password: parsed.data })
    setLoading(false)

    if (updateError) {
      setError('Không thể đặt lại mật khẩu, link có thể đã hết hạn.')
      return
    }

    setDone(true)
    setTimeout(() => {
      router.push('/learn')
      router.refresh()
    }, 1500)
  }

  if (done) {
    return (
      <div className="text-center">
        <h1 className="font-serif text-3xl text-text-primary mb-4">Đã đặt lại mật khẩu</h1>
        <p className="text-sm text-text-secondary">Đang chuyển tới trang học...</p>
      </div>
    )
  }

  // Loading in status !== 'guest' means AuthProvider hasn't resolved the recovery session yet.
  if (status === 'guest') {
    return (
      <div className="text-center">
        <h1 className="font-serif text-3xl text-text-primary mb-4">Link đã hết hạn</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn. Vui lòng yêu cầu link mới.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-text-primary text-center mb-8">Đặt mật khẩu mới</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Mật khẩu mới"
          type="password"
          name="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-xs text-accent-error">{error}</p>}
        <Button type="submit" variant="primary" className="w-full justify-center" loading={loading}>
          Đặt mật khẩu mới
        </Button>
      </form>
    </div>
  )
}
