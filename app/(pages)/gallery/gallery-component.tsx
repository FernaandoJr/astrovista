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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownNarrowWide, ArrowUpWideNarrow, Search } from "lucide-react"
import PlanetLogo from "@/components/astrovista/planet-logo"

type PerPage = 10 | 20 | 30 | 40 | 50 | 60
type MediaType = "image" | "video" | "any"
const subtitle = "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!"

export default function GalleryContent() {
  const searchParams = useSearchParams()
  const [gallery, setGallery] = useState<{ items: Picture[]; itemCount: number }>()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  // SEARCH
  const [sort, setSort] = useState<1 | -1>(searchParams.get("sort") ? (parseInt(searchParams.get("sort") ?? "-1", 10) as 1 | -1) : -1)
  const [search, setSearch] = useState<string>(searchParams.get("search") ?? "")
  const [mediaType, setMediaType] = useState<MediaType>(searchParams.get("mediaType") ? (searchParams.get("mediaType") as MediaType) : "any")

  const [perPage, setPerPage] = useState<PerPage>(searchParams.get("perPage") ? (parseInt(searchParams.get("perPage") ?? "20", 10) as PerPage) : 10)

  let page = parseInt(searchParams.get("page") ?? "", 10)
  page = !page || page < 1 ? 1 : page

  async function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("page", String(1))
    searchParams.set("perPage", String(perPage))
    searchParams.set("search", search ?? "")
    searchParams.set("sort", String(sort))
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
  }, [page, perPage])

  const prevPage = page - 1 > 0 ? page - 1 : 1
  const nextPage = page + 1

  return (
    <>
      <div className="mx-auto w-full px-12 py-16 sx:px-3 sm:px-4">
        <div className="flex flex-col place-items-center space-y-2">
          <h1 className="text-title">Gallery</h1>
          <p className="text-subtitle max-w-[80%] text-center md:max-w-[50%]">{subtitle}</p>
        </div>
        <form className="flex flex-wrap justify-center gap-2" onSubmit={handleSubmitSearch}>
          <Input
            className="w-fit"
            type="text"
            defaultValue={search}
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />

          <Select defaultValue="any" onValueChange={(value) => setMediaType(value as MediaType)}>
            <SelectTrigger className="w-min gap-2">
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

          <Select
            defaultValue={String(perPage)}
            onValueChange={(value) => {
              setPerPage(Number(value) as PerPage)
              const searchParams = new URLSearchParams(window.location.search)
              searchParams.set("perPage", value)
              window.history.pushState({}, "", `?${searchParams.toString()}`)
            }}
          >
            <SelectTrigger className="w-min gap-2">
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
            onClick={() => {
              setSort(sort === 1 ? -1 : 1)
              console.log("sort", sort)
            }}
          >
            {sort === 1 ? <ArrowDownNarrowWide /> : <ArrowUpWideNarrow />}
          </Button>
          <div className="flex w-full justify-center gap-2">
            <Button type="submit">
              <Search />
              Search
            </Button>
          </div>
        </form>
        {gallery?.itemCount === 0 && (
          <div className="flex h-[50vh] w-full flex-col flex-wrap items-center justify-center gap-2">
            <PlanetLogo size={50} className="text-red-600" />
            <p className="text-md text-subtitle font-bold">Sorry! No results found.</p>
          </div>
        )}
        {gallery?.itemCount !== 0 && (
          <div className="flex flex-col">
            <div className="my-5 w-full">
              <PaginationGallery gallery={gallery} perPage={perPage} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage} />
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
              {gallery ? (
                gallery?.items.map((item, index) => <GalleryCard key={index} date={item.date} explanation={item.explanation} url={item.url} title={item.title} media_type={item.media_type}></GalleryCard>)
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
            <div className="w-full">
              <PaginationGallery gallery={gallery} perPage={perPage} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
