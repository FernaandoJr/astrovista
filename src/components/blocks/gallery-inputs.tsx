'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useQueryState } from 'nuqs'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Search, XIcon } from 'lucide-react'
import { nuqsHandler } from '@/lib/utils/queryInputHandler'

export default function GalleryInputs() {
  const sort = 'asc'
  const [query, setQuery] = useQueryState('q', {})
  const [mediaType, setMediaType] = useQueryState('mediaType')

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 px-4 pt-10 select-none sm:pt-8">
      <div className="relative">
        <Input
          className="w-full md:w-fit"
          type="text"
          value={query}
          onChange={(e) => nuqsHandler(e, setQuery)}
        />
        {query && query.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setQuery(null)}
            className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Clear</span>
          </Button>
        )}
      </div>
      {/* SELECT MEDIATYPE */}
      <Select>
        <SelectTrigger className="h-max w-min gap-2">
          <SelectValue placeholder="Media Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Media Type</SelectLabel>
            <SelectItem value="image">Image</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="any">Any</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* SELECT SORT */}
      <Select onValueChange={() => {}}>
        <SelectTrigger className="h-max w-min gap-2">
          <SelectValue placeholder="Per page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
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
      <Button
        variant={'outline'}
        className="flex flex-grow shadow-sm select-none sm:w-fit sm:flex-none">
        {sort === 'asc' ? (
          <ArrowDownNarrowWide className="h-4" />
        ) : (
          <ArrowUpWideNarrow className="h-4" />
        )}
        {/* BUTTON SEARCH */}
      </Button>
      <Button
        type="submit"
        className="flex flex-grow gap-2 shadow-sm select-none sm:w-fit sm:flex-none">
        <Search className="h-5" />
        Search
      </Button>
    </div>
  )
}
