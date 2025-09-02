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

export const useApodAll = () => {
  const apodService = new ApodService(apiUrl as string)

  const {
    data: all,
    isLoading,
    error,
    refetch,
    isRefetching,
    isFetching,
    isFetched,
  } = useQuery({
    queryKey: ['apod', 'all'],
    queryFn: () => apodService.getAll(),
  })

  return {
    all,
    isLoading,
    error,
    refetch,
    isRefetching,
    isFetching,
    isFetched,
  }
}
