'use client'
import { useQueryState } from 'nuqs'
import { createContext, useContext } from 'react'

const GalleryParams = createContext<{
  query: string
  mediaType: string
  perPage: string
  sort: string
  startDate: string
  endDate: string
  page: string
  setQuery: (query: string) => void
  setMediaType: (mediaType: string) => void
  setPerPage: (perPage: string) => void
  setSort: (sort: string) => void
  setStartDate: (startDate: string) => void
  setEndDate: (endDate: string) => void
  setPage: (page: string) => void
}>({
  query: '',
  mediaType: 'any',
  perPage: '10',
  sort: 'desc',
  startDate: '',
  endDate: '',
  page: '1',
  setQuery: () => {},
  setMediaType: () => {},
  setPerPage: () => {},
  setSort: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  setPage: () => {},
})

export default GalleryParams

export const GalleryParamsProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useQueryState('q', {
    defaultValue: '',
    clearOnDefault: true,
  })
  const [mediaType, setMediaType] = useQueryState('mediaType', {
    defaultValue: 'any',
    clearOnDefault: true,
  })
  const [perPage, setPerPage] = useQueryState('perPage', {
    defaultValue: '10',
    clearOnDefault: true,
  })
  const [sort, setSort] = useQueryState('sort', {
    defaultValue: 'desc',
    clearOnDefault: true,
  })
  const [startDate, setStartDate] = useQueryState('startDate', {
    defaultValue: '',
    clearOnDefault: true,
  })
  const [endDate, setEndDate] = useQueryState('endDate', {
    defaultValue: '',
    clearOnDefault: true,
  })
  const [page, setPage] = useQueryState('page', {
    defaultValue: '1',
    clearOnDefault: true,
  })

  return (
    <GalleryParams.Provider
      value={{
        query,
        mediaType,
        perPage,
        sort,
        startDate,
        endDate,
        page,
        setQuery,
        setMediaType,
        setPerPage,
        setSort,
        setStartDate,
        setEndDate,
        setPage,
      }}>
      {children}
    </GalleryParams.Provider>
  )
}

export const useGalleryParams = () => {
  return useContext(GalleryParams) as {
    query: string
    startDate: string
    endDate: string
    mediaType: string
    perPage: string
    page: string
    sort: string
    setQuery: (query: string) => void
    setMediaType: (mediaType: string) => void
    setPerPage: (perPage: string) => void
    setPage: (page: string) => void
    setSort: (sort: string) => void
    setStartDate: (startDate: string) => void
    setEndDate: (endDate: string) => void
  }
}
