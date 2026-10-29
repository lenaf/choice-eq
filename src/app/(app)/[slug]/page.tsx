import { getPayload } from '@/lib/payload'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { getSiteSettings } from '@/lib/siteData'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { serverURL } from '@/lib/serverUrl'
import type { Metadata } from 'next'
import type { Page, Media } from '@/payload-types'

export async function generateStaticParams() {
  try {
    const payload = await getPayload()
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          not_equals: 'home'
        }
      }
    })

    return pages.docs.map((page) => ({
      slug: page.slug,
    }))
  } catch {
    // No database at build time; pages render on request.
    return []
  }
}

async function getPage(slug: string, draft = false): Promise<Page | null> {
  const payload = await getPayload()
  const pages = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    depth: 3,
    draft,
  })
  return (pages.docs[0] as Page) || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const page = await getPage(slug)
    if (!page) return {}

    const seo = (page as { seo?: { title?: string; description?: string; ogImage?: Media | string | null; noIndex?: boolean } }).seo
    const title = seo?.title || `${page.title} | Choice Equine`
    const description = seo?.description || undefined
    const ogImage = seo?.ogImage && typeof seo.ogImage === 'object' ? (seo.ogImage as Media).url : undefined

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        ...(ogImage ? { images: [ogImage] } : {}),
      },
      robots: seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    }
  } catch {
    return {}
  }
}

export default async function PageComponent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()
  const page = await getPage(slug, draft)

  if (!page) {
    notFound()
  }

  const sections = page.sections || []
  const settings = await getSiteSettings()

  return (
    <main className="min-h-screen pt-24">
      {draft && <LivePreviewListener serverURL={serverURL} />}
      <RenderBlocks sections={sections} settings={settings} />
    </main>
  )
}
