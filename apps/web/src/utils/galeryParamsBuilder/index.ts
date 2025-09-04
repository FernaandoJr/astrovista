import { GalleryQueryParams } from '@repo/shared'

export function galeryParamsBuilder(params: GalleryQueryParams, submit: boolean = false) {
  const { query, mediaType, perPage, sort, startDate, endDate, page } = params
  const urlParams = new URLSearchParams()
  if (query) urlParams.set('q', query)
  if (mediaType) urlParams.set('mediaType', mediaType)
  if (perPage) urlParams.set('perPage', perPage.toString())
  if (sort) urlParams.set('sort', sort)
  if (startDate) urlParams.set('startDate', startDate)
  if (endDate) urlParams.set('endDate', endDate)
  if (submit) urlParams.set('page', '1')
  else urlParams.set('page', page.toString())
  return urlParams.toString()
}
