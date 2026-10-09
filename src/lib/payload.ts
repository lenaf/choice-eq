import { getPayload as getPayloadInstance } from 'payload'
import config from '../payload.config'
import type { Payload } from 'payload'

let cachedPayload: Payload | null = null

export async function getPayload() {
  if (!cachedPayload) {
    cachedPayload = await getPayloadInstance({ config })
  }
  return cachedPayload
}

export async function getPageBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 3,
  })
  return result.docs[0] || null
}
