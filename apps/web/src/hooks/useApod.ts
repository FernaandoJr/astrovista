'use client'
import { apiUrl } from '@/constants/api'
import { ApodService, GalleryQueryParams } from '@repo/shared'
import { useQuery } from '@tanstack/react-query'

export const useApodLatest = () => {
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

export const useApodSearch = ({
  query,
  mediaType,
  perPage,
  sort,
  startDate,
  endDate,
  page,
}: GalleryQueryParams) => {
  const apodService = new ApodService(apiUrl as string)

  if (mediaType !== 'image' && mediaType !== 'video') mediaType = ''

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
    queryFn: () => apodService.search(query, mediaType, perPage, sort, startDate, endDate, page),
    enabled: false, // Só executa quando chamado manualmente
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

export const useApodByDate = (date: string) => {
  const apodService = new ApodService(apiUrl as string)

  const { data, isLoading, error } = useQuery({
    queryKey: ['apod', 'byDate', date],
    queryFn: () => apodService.getByDate(date),
  })

  return {
    data,
    isLoading,
    error,
  }
}

export const useApodAll = () => {
  const apodService = new ApodService(apiUrl as string)

  const { data, isLoading, error } = useQuery({
    queryKey: ['apod', 'all'],
    queryFn: () => apodService.getAll(),
  })

  return {
    data,
    isLoading,
    error,
  }
}
