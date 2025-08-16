import { MediaType } from '../enums/mediaType'

export interface Apod {
  _id: string
  date: string
  explanation: string
  hdurl?: string
  media_type: MediaType
  service_version: string
  title: string
  url: string
  copyright?: string
}

export type ApodDate = `${number}-${number}-${number}`
