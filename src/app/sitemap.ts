import type { MetadataRoute } from 'next'

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const routes = ['/', '/learn', '/courses', '/topik', '/vocab', '/learn/grammar', '/learn/flashcards']

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
