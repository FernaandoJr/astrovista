'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useGalleryParams } from '@/contexts'
import { useApodSearch } from '@/hooks'
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Search, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function GalleryInputs() {
  const {
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
    setPage,
  } = useGalleryParams()

  const [mounted, setMounted] = useState(false)

  const { refetch, isLoading, isRefetching } = useApodSearch({
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
  }, [])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    setPage('1')
    refetch()
  }

  // Previne problemas de hidratação
  const safeIsLoading = mounted ? isLoading || isRefetching : false
  const isSearching = mounted ? isRefetching : false // Apenas pesquisas manuais

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-2 px-4 pt-10 select-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:pt-8">
      <div className="relative flex-1 sm:flex-none">
        <Input
          placeholder="Search..."
          className="w-full sm:min-w-[300px]"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && query.length > 0 && (
          <Button
            type="button"
            variant="default"
            size="icon"
            onClick={() => {
              setQuery('')
            }}
            className="bg-background hover:bg-background/95 absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 cursor-pointer text-gray-500 hover:!text-red-500 dark:text-gray-400">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Clear</span>
          </Button>
        )}
      </div>
      <div className="flex w-full gap-2 sm:w-auto">
        {/* SELECT MEDIATYPE */}
        <Select defaultValue={mediaType} onValueChange={(e) => setMediaType(e)}>
          <SelectTrigger className="h-max w-full cursor-pointer gap-2 sm:w-min">
            <SelectValue placeholder="Media Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="[&>*:first-child]:cursor-default [&>*:not(:first-child)]:cursor-pointer">
              <SelectLabel>Media Type</SelectLabel>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="any">Any</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* PER PAGE */}
        <Select defaultValue={perPage} onValueChange={(e) => setPerPage(e)}>
          <SelectTrigger className="h-max w-full cursor-pointer gap-2 sm:w-min">
            <SelectValue placeholder="Per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="[&>*:first-child]:cursor-default [&>*:not(:first-child)]:cursor-pointer">
              <SelectLabel>Per page</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}
        variant={'outline'}
        className="flex w-full cursor-pointer shadow-sm select-none sm:w-fit">
        {sort === 'asc' ? (
          <ArrowDownNarrowWide className="h-4" />
        ) : (
          <ArrowUpWideNarrow className="h-4" />
        )}
        {/* BUTTON SEARCH */}
      </Button>
      <Button
        type="submit"
        disabled={safeIsLoading}
        className="flex w-full cursor-pointer gap-2 shadow-sm select-none sm:w-fit">
        <Search className="h-5" />
        {isSearching ? 'Searching...' : 'Search'}
      </Button>
    </form>
  )
}
