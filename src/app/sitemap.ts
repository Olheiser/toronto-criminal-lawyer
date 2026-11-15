import type { MetadataRoute } from 'next'
import { blogPagePath, getSortedPosts, getTotalPages } from '@/content/blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://torontocriminallaw.net'

  // Blog — generated from src/content/blog/posts.ts (no manual edits needed)
  const blogPosts = getSortedPosts()
  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: blogPosts[0] ? new Date(blogPosts[0].dateModified) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...Array.from({ length: getTotalPages() - 1 }, (_, i) => ({
      url: `${baseUrl}${blogPagePath(i + 2)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    // Homepage - Highest priority
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // About Section
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/reported-cases`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Criminal Process Section
    {
      url: `${baseUrl}/criminal-process`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/criminal-process/can-i-beat-the-charges`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/criminal-process/should-i-plead-guilty`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/criminal-process/your-rights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/criminal-process/penalties-and-sentencing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/criminal-process/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Practice Areas - Main Page
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Practice Areas - Subpages
    {
      url: `${baseUrl}/practice-areas/criminal-harassment`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/young-offenders`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/assault-charges`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/assault-charges/assault`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas/driving-offences`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/driving-offences/impaired-driving`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/fraud-charges`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/fraud-charges/fraud`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas/drug-charges`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/drug-charges/possession-of-narcotics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas/property-crimes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/property-crimes/robbery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas/sexual-offences`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas/sexual-offences/sexual-assault`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogEntries,
  ]
}
