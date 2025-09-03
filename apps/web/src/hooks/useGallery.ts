'use client'
import { useGalleryParams } from '@/contexts'
import { useEffect, useState } from 'react'
import { useApodSearch } from './useApod'

export const useGallery = () => {
  const { query, mediaType, perPage, sort, startDate, endDate, page } = useGalleryParams()
  const [mounted, setMounted] = useState(false)

  const { search, isLoading, refetch, isRefetching, isFetching, isFetched } = useApodSearch({
    query,
    mediaType,
    perPage: parseInt(perPage),
    sort,
    startDate,
    endDate,
    page: parseInt(page),
  })

  useEffect(() => {
    setMounted(true)
    refetch()
  }, [refetch])

  // Previne problemas de hidratação retornando estado consistente até o componente estar montado
  return {
    search,
    isLoading: mounted ? isLoading : false,
    refetch,
    isRefetching,
    isFetching,
    isFetched,
  }
}
