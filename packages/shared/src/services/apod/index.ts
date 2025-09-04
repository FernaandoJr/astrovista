import type { APOD, PaginatedAPODResponse } from '../../types'
import { ApiClient } from '../apiClient'

export class ApodService {
  private client: ApiClient

  constructor(baseURL: string) {
    this.client = new ApiClient(baseURL)
  }

  async getLatest(): Promise<APOD> {
    return this.client.get<APOD>('/apods')
  }

  async getAll(): Promise<APOD[]> {
    return this.client.get<APOD[]>('/apods/all')
  }

  async search(
    query: string,
    mediaType: string,
    perPage: number,
    sort: string,
    startDate: string,
    endDate: string,
    page: number,
  ): Promise<PaginatedAPODResponse> {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (mediaType) params.set('mediaType', mediaType)
    if (perPage) params.set('perPage', perPage.toString())
    if (sort) params.set('sort', sort)
    if (startDate) params.set('startDate', startDate)
    if (endDate) params.set('endDate', endDate)
    if (page) params.set('page', page.toString())
    return this.client.get<PaginatedAPODResponse>(`/apods/search?${params.toString()}`)
  }

  async getRandom(): Promise<APOD> {
    return this.client.get<APOD>('/apods/random')
  }

  async getByDate(date: string): Promise<APOD> {
    return this.client.get<APOD>(`/apods/${date}`)
  }
}
