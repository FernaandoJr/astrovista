'use client'
import { apiUrl } from '@/constants/api'
import { ApodService } from '@repo/shared'
import { useQuery } from '@tanstack/react-query'

export const useApod = () => {
  const apodService = new ApodService(apiUrl as string)

  const {
    data: latest,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['apod', 'latest'],
    queryFn: () => apodService.getLatest(),
  })

  return {
    latest,
    isLoading,
    error,
  }
}

export const useApodSearch = (query?: string) => {
  const apodService = new ApodService(apiUrl as string)

  const {
    data: search,
    isLoading,
    error,
    refetch,
    isRefetching,
    isFetching,
    isFetched,
  } = useQuery({
    queryKey: ['apod', 'search'],
    queryFn: () => apodService.search(query ?? ''),
  })

  return {
    search,
    isLoading,
    error,
    refetch,
    isRefetching,
    isFetching,
    isFetched,
  }
}
