'use client'
import { useApodSearch } from '@/hooks'
import { PaginatedAPODResponse } from '@repo/shared'
import { createContext, useContext, useEffect, useState } from 'react'
import { useGalleryParams } from '../galleryParams'

interface GalleryApodsContext {
  galleryApods: PaginatedAPODResponse | undefined
  setGalleryApods: (galleryApods?: PaginatedAPODResponse) => void
}

export const GalleryApods = createContext<GalleryApodsContext>({
  galleryApods: undefined,
  setGalleryApods: () => {},
})

export const useGalleryApods = () => {
  return useContext(GalleryApods)
}

export const GalleryApodsProvider = ({ children }: { children: React.ReactNode }) => {
  const { query, mediaType, perPage, sort, startDate, endDate, page } = useGalleryParams()
  const [galleryApods, setGalleryApods] = useState<PaginatedAPODResponse | undefined>()

  const { search } = useApodSearch({
    query,
    mediaType,
    perPage: parseInt(perPage),
    sort,
    startDate,
    endDate,
    page: parseInt(page),
  })

  // Atualiza o estado quando os dados da busca mudam
  useEffect(() => {
    if (search) {
      setGalleryApods(search)
    }
  }, [search])

  return (
    <GalleryApods.Provider
      value={{
        galleryApods,
        setGalleryApods,
      }}>
      {children}
    </GalleryApods.Provider>
  )
}
