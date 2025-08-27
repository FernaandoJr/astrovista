export interface APOD {
  id?: number
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: 'image' | 'video'
  service_version: string
  copyright?: string
}
