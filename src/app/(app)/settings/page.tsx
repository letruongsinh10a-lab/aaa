'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/stores/authStore'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function SettingsPage() {
  const router = useRouter()
  const { status, user } = useAuthStore()
  const [displayName, setDisplayName] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (user) {
      setDisplayName(
        (user.user_metadata?.full_name as string | undefined) ??
          (user.user_metadata?.name as string | undefined) ??
          '',
      )
    }
  }, [user])

  useEffect(() => {
    if (status === 'guest') router.push('/login')
  }, [status, router])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    setSaving(true)
    setSaved(false)

    const supabase = createClient()
    await supabase.auth.updateUser({ data: { full_name: displayName } })
    await supabase
      .from('profiles')
      .update({ display_name: displayName, updated_at: new Date().toISOString() })
      .eq('id', user.id)

    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (status !== 'authenticated' || !user) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16">
        <p className="text-text-secondary">Đang tải...</p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl text-text-primary mb-8">Cài đặt tài khoản</h1>

      <Card variant="default" hoverable={false}>
        <CardHeader>
          <h2 className="text-sm font-semibold text-text-primary">Hồ sơ</h2>
        </CardHeader>
        <form onSubmit={handleSave}>
          <CardContent className="space-y-5">
            <Input
              label="Tên hiển thị"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
            <div>
              <p className="block text-xs font-medium text-text-secondary mb-1.5">Email</p>
              <p className="text-sm text-text-tertiary">{user.email}</p>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="text-xs text-accent-success">{saved ? 'Đã lưu' : ''}</span>
            <Button type="submit" variant="primary" size="sm" loading={saving}>
              Lưu thay đổi
            </Button>
          </CardFooter>
        </form>
      </Card>

      <div className="mt-8">
        <Button variant="danger" size="sm" onClick={handleSignOut}>
          Đăng xuất
        </Button>
      </div>
    </div>
  )
}
