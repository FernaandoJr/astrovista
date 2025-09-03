import { MediaType } from '@/lib/types/mediaType'
import { createParser } from 'nuqs'

export const parseAsMediaType = createParser({
  parse(queryValue) {
    return (console.log('Parsing media type:', queryValue), (queryValue as MediaType) || null)
  },
  serialize(value) {
    return value ?? null
  },
})
