import { ImageResponse } from 'next/og'

export const alt = 'Hàn Ngữ — Học tiếng Hàn đẳng cấp'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0A0F',
          color: '#F0EEF8',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 600,
            color: '#FF6B4A',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          한 · 국 · 어
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Hàn Ngữ
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: '#9B99AF' }}>
          Học tiếng Hàn như người Hàn
        </div>
      </div>
    ),
    { ...size },
  )
}
