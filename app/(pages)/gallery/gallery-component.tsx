/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import { useSearchParams } from "next/navigation"
import GalleryCard from "@/components/astrovista/gallery-card"
import { useEffect, useState } from "react"
import { Picture } from "@/lib/mongo/pictures"
import { Spinner } from "@/components/ui/spinner"
import { PaginationGallery } from "@/components/astrovista/pagination-gallery"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Search, XIcon } from "lucide-react"
import PlanetLogo from "@/components/astrovista/planet-logo"

type PerPage = 10 | 20 | 30 | 40 | 50 | 100
type MediaType = "image" | "video" | "any"
type Sort = "asc" | "desc"
const subtitle = "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!"

const fetchApod = async (date: string) => {
  const response = await fetch(`https://astrovista.vercel.app/api/apod/picture?date=${date}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

export const toggleFavorite = async (date: string): Promise<boolean> => {
  const data = await fetchApod(date)

  const existingFavorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as string[]
  console.log("existingFavorites", existingFavorites)
  if (!existingFavorites.includes(data.date)) {
    const updatedFavorites = [...existingFavorites, data.date]
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    return true
  }

  if (existingFavorites.includes(data.date)) {
    const updatedFavorites = existingFavorites.filter((favorite: string) => favorite !== data.date)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    return false
  }

  return false // Default return to ensure all code paths return a boolean
}

export default function GalleryContent() {
  const searchParams = useSearchParams()
  const [gallery, setGallery] = useState<{ items: Picture[]; itemCount: number }>()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  // SEARCH
  const [sort, setSort] = useState<Sort>((searchParams.get("sort") as Sort) ?? ("desc" as Sort))
  const [search, setSearch] = useState<string>(searchParams.get("search") ?? "")
  const [mediaType, setMediaType] = useState<MediaType>(searchParams.get("mediaType") ? (searchParams.get("mediaType") as MediaType) : "any")

  const [perPage, setPerPage] = useState<PerPage>(searchParams.get("perPage") ? (parseInt(searchParams.get("perPage") ?? "20", 10) as PerPage) : 20)

  let page = parseInt(searchParams.get("page") ?? "", 10)
  page = !page || page < 1 ? 1 : page

  async function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("page", String(1))
    searchParams.set("perPage", String(perPage))
    searchParams.set("search", search ?? "")
    searchParams.set("sort", sort)
    searchParams.set("mediaType", mediaType)
    window.history.pushState({}, "", `?${searchParams.toString()}`)

    const fetchGallery = async () => {
      const response = await fetch(`https://astrovista.vercel.app/api/apod/gallery?page=${page}&perPage=${perPage}&sort=${sort}&search=${search ?? ""}&mediaType=${mediaType}`)
      const data = (await response.json()) as { items: Picture[]; itemCount: number }
      return data
    }

    fetchGallery().then((data) => {
      setGallery(data)
      const totalPages = Math.ceil(data.itemCount / perPage)
      setTotalPages(totalPages)

      const pageOffset = 2

      const newPageNumbers = []
      for (let i = page - pageOffset; i <= page + pageOffset; i++) {
        if (i > 0 && i <= totalPages) {
          newPageNumbers.push(i)
        }
      }
      setPageNumbers(newPageNumbers)
      window.history.pushState({}, "", `?${searchParams.toString()}`)
    })
  }

  useEffect(() => {
    async function fetchGallery() {
      const searchParams = new URLSearchParams(window.location.search)
      const paramSearch = searchParams.get("search")
      const paramPage = searchParams.get("page")
      const paramPerPage = searchParams.get("perPage")
      const paramSort = searchParams.get("sort")
      const paramMediaType = searchParams.get("mediaType")
      window.history.pushState({}, "", `?${searchParams.toString()}`)

      const response = await fetch(`https://astrovista.vercel.app/api/apod/gallery?page=${paramPage ?? page}&perPage=${paramPerPage ?? perPage}&sort=${paramSort ?? sort}&search=${paramSearch ?? search ?? ""}&mediaType=${paramMediaType ?? mediaType}`)
      const data = (await response.json()) as { items: Picture[]; itemCount: number }
      return data
    }

    fetchGallery().then((data) => {
      setGallery(data)
      const totalPages = Math.ceil(data.itemCount / perPage)
      setTotalPages(totalPages)

      const pageOffset = 2

      const newPageNumbers = []
      for (let i = page - pageOffset; i <= page + pageOffset; i++) {
        if (i > 0 && i <= totalPages) {
          newPageNumbers.push(i)
        }
      }
      setPageNumbers(newPageNumbers)
    })
  }, [page, perPage, mediaType, sort])

  const prevPage = page - 1 > 0 ? page - 1 : 1
  const nextPage = page + 1

  return (
    <>
      <div className="mx-auto w-full px-12 py-16 sx:px-3 sm:px-4">
        <div className="flex flex-col place-items-center space-y-2">
          <h1 className="text-title">Gallery</h1>
          <p className="text-subtitle max-w-[80%] text-center md:max-w-[50%]">{subtitle}</p>
        </div>
        <form className="flex select-none flex-wrap items-center justify-center gap-2 px-4 pt-10 sm:pt-8" onSubmit={handleSubmitSearch}>
          <div className="relative">
            <Input
              className="w-full md:w-fit"
              type="text"
              value={search ?? ""}
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
            {search.length > 0 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                onClick={() => {
                  setSearch("")
                  const searchParams = new URLSearchParams(window.location.search)
                  searchParams.delete("search")
                  window.history.pushState({}, "", `?${searchParams.toString()}`)
                  console.log("search", search)
                  setSearch("")
                }}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Clear</span>
              </Button>
            )}
          </div>
          {/* SELECT MEDIATYPE */}
          <Select
            defaultValue={mediaType}
            onValueChange={(value) => {
              setMediaType(value as MediaType)
              const searchParams = new URLSearchParams(window.location.search)
              searchParams.set("mediaType", value)
              console.log("mediaType", value)
              window.history.pushState({}, "", `?${searchParams.toString()}`)
            }}
          >
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
          <Select
            defaultValue={String(perPage)}
            onValueChange={(value) => {
              setPerPage(Number(value) as PerPage)
              const searchParams = new URLSearchParams(window.location.search)
              searchParams.set("perPage", value)
              window.history.pushState({}, "", `?${searchParams.toString()}`)
            }}
          >
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
            variant={"outline"}
            className="flex flex-grow select-none shadow-sm sm:w-fit sm:flex-none"
            onClick={() => {
              setSort(sort === "asc" ? "desc" : "asc")
              const searchParams = new URLSearchParams(window.location.search)
              searchParams.set("sort", sort === "asc" ? "desc" : "asc")
              window.history.pushState({}, "", `?${searchParams.toString()}`)
              console.log("sort", sort)
            }}
          >
            {sort === "asc" ? <ArrowDownNarrowWide className="h-4" /> : <ArrowUpWideNarrow className="h-4" />}
            {/* BUTTON SEARCH */}
          </Button>
          <Button type="submit" className="flex flex-grow select-none gap-2 shadow-sm sm:w-fit sm:flex-none">
            <Search className="h-5" />
            Search
          </Button>
        </form>
        {gallery?.itemCount === 0 && (
          <div className="flex h-[50vh] w-full flex-col flex-wrap items-center justify-center gap-2">
            <PlanetLogo size={50} className="text-red-600" />
            <p className="text-md text-subtitle font-bold">Sorry! No results found.</p>
          </div>
        )}
        {gallery?.itemCount !== 0 && (
          <div className="flex flex-col">
            <div className="mb-2 mt-5 w-full">
              <PaginationGallery gallery={gallery} perPage={perPage} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage} />
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
              {gallery ? (
                gallery?.items.map((item, index) => <GalleryCard key={index} date={item.date} explanation={item.explanation} url={item.url} title={item.title} media_type={item.media_type} toggleFavorite={async () => await toggleFavorite(item.date)} />)
              ) : (
                <>
                  <div className="flex h-[50vh] w-full flex-wrap justify-center">
                    <Spinner size="large">
                      <p>Loading...</p>
                    </Spinner>
                  </div>
                </>
              )}
            </div>
            <div className="mb-5 mt-2 w-full">
              <PaginationGallery gallery={gallery} perPage={perPage} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
