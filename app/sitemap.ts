import { MetadataRoute } from 'next'

const baseUrl = 'https://www.jhshoreline.com.au'

type Entry = [path: string, changeFrequency: 'weekly' | 'monthly', priority: number]

const pages: Entry[] = [
  ['', 'weekly', 1],
  ['/services', 'weekly', 0.9],
  ['/pricing', 'weekly', 0.8],
  ['/about', 'monthly', 0.8],
  ['/contact', 'monthly', 0.8],
  ['/reviews', 'weekly', 0.7],
  ['/ndis', 'monthly', 0.7],
  ['/dva', 'monthly', 0.7],
]

const serviceSlugs = [
  'gutter-cleaning',
  'solar-panel-cleaning',
  'windows-cleaning',
  'windows-cleaning-high-reach',
  'end-of-lease-cleaning',
  'carpet-cleaning',
  'oven-cleaning',
  'high-pressure-cleaning',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    ...pages.map(([path, changeFrequency, priority]) => ({ url: `${baseUrl}${path}`, lastModified, changeFrequency, priority })),
    ...serviceSlugs.map((slug) => ({ url: `${baseUrl}/services/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
