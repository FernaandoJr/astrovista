import { createParser } from 'nuqs'
import { MediaType } from '../../types/mediaType'

export const parseAsMediaType = createParser({
  parse(queryValue) {
    return console.log('Parsing media type:', queryValue), (queryValue as MediaType) || null
  },
  serialize(value) {
    return value ?? null
  },
})
