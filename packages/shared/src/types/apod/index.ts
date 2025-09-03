export interface APOD {
  id: string
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string | null
  media_type: 'image' | 'video'
  service_version: string
  copyright?: string | null
}

export interface PaginatedAPODResponse {
  totalRecords: number
  totalPages: number
  page: number
  perPage: number
  sort: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  links: {
    next: string | null
    previous: string | null
    first: string
    last: string
  }
  apods: APOD[]
}
