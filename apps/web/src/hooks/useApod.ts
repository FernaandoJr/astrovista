'use client'
import { useQuery } from '@tanstack/react-query'
import { ApodService } from '@repo/shared'
import { apiUrl } from '@/constants/api'

export const useApod = () => {
  const apodService = new ApodService(apiUrl as string)

  const latestQuery = useQuery({
    queryKey: ['apod', 'latest'],
    queryFn: () => apodService.getLatest(),
  })

  return {
    latest: latestQuery,
  }
}

export const useApodAll = () => {
  const apodService = new ApodService(apiUrl as string)

  const allQuery = useQuery({
    queryKey: ['apod', 'all'],
    queryFn: () => apodService.getAll(),
  })

  return {
    all: allQuery,
  }
}
