interface HandlerLinks {
  totalPages: number
  query?: string
  startDate?: string
  endDate?: string
  mediaType?: string
  perPage?: number
  page?: number
  sort?: string
  hasNextPage?: boolean
  hasPreviousPage?: boolean
}

export function handlerLinks({
  hasNextPage,
  hasPreviousPage,
  totalPages,
  query,
  startDate,
  endDate,
  mediaType,
  perPage,
  page,
  sort,
}: HandlerLinks) {
  const baseUrl = '/apods/search?'

  const nextLink = hasNextPage
    ? (() => {
        const params: Record<string, string> = {}
        if (query) params.q = query
        if (startDate) params.startDate = startDate
        if (endDate) params.endDate = endDate
        if (mediaType) params.mediaType = mediaType
        if (perPage) params.perPage = String(perPage)
        if (page) params.page = String(page + 1)
        if (sort) params.sort = sort
        return `${baseUrl}${new URLSearchParams(params)}`
      })()
    : null

  const previousLink = hasPreviousPage
    ? (() => {
        const params: Record<string, string> = {}
        if (query) params.q = query
        if (startDate) params.startDate = startDate
        if (endDate) params.endDate = endDate
        if (mediaType) params.mediaType = mediaType
        if (perPage) params.perPage = String(perPage)
        if (page) params.page = String((page ?? 1) - 1)
        if (sort) params.sort = sort
        return `${baseUrl}${new URLSearchParams(params)}`
      })()
    : null

  const params: Record<string, string> = {}
  if (query) params.q = query
  if (startDate) params.startDate = startDate
  if (endDate) params.endDate = endDate
  if (mediaType) params.mediaType = mediaType
  if (perPage) params.perPage = String(perPage)
  params.page = '1'
  if (sort) params.sort = sort

  const firstLink = `${baseUrl}${new URLSearchParams(params)}`

  const lastParams: Record<string, string> = {}
  if (query) lastParams.q = query
  if (startDate) lastParams.startDate = startDate
  if (endDate) lastParams.endDate = endDate
  if (mediaType) lastParams.mediaType = mediaType
  if (perPage) lastParams.perPage = String(perPage)
  lastParams.page = String(totalPages)
  if (sort) lastParams.sort = sort

  const lastLink = `${baseUrl}${new URLSearchParams(lastParams)}`

  const links = {
    next: nextLink,
    previous: previousLink,
    first: firstLink,
    last: lastLink === firstLink ? null : lastLink,
  }

  return links
}
