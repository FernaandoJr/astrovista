import { ApiClient } from '../apiClient'
import type { APOD } from '../../types'

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

  async search(query: string): Promise<APOD[]> {
    return this.client.get<APOD[]>(`/apods/search?q=${query}`)
  }

  async getRandom(): Promise<APOD> {
    return this.client.get<APOD>('/apods/random')
  }

  async getByDate(date: string): Promise<APOD> {
    return this.client.get<APOD>(`/apods/${date}`)
  }
}
