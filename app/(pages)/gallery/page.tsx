/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import { useSearchParams } from "next/navigation"
import GalleryCard from "@/components/ui/gallery-card"
import { Suspense, useEffect, useState } from "react"
import { Picture } from "@/lib/mongo/pictures"
import { Spinner } from "@/components/ui/spinner"
import { PaginationGallery } from "@/components/pagination-gallery"

function GalleryContent() {
  const subtitle = "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!"
  const searchParams = useSearchParams()
  const [gallery, setGallery] = useState<{ items: Picture[]; itemCount: number }>()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  let page = parseInt(searchParams.get("page") ?? "", 10)
  page = !page || page < 1 ? 1 : page
  const perPage = 20

  useEffect(() => {
    const fetchGallery = async () => {
      const response = await fetch(`https://astrovista.vercel.app/api/apod/gallery?page=${page}&perPage=${perPage}`)
      const data = (await response.json()) as { items: Picture[]; itemCount: number }
      return data
    }
    fetchGallery().then((data) => {
      setGallery(data)
      const totalPages = Math.ceil(data.itemCount / perPage)
      setTotalPages(totalPages)

      const pageOffset = 3
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
      <div className="w-full mx-auto py-16 px-12">
        <div className="flex flex-col place-items-center space-y-2">
          <h1 className="text-title">Gallery</h1>
          <p className="text-subtitle max-w-[50%] text-center">{subtitle}</p>
        </div>
        <div className="my-5">
          <PaginationGallery gallery={gallery} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage}/>
        </div>
        <div className="justify-center flex gap-x-3 gap-y-3 flex-wrap">
          {gallery ? (
            gallery?.items.map((item, index) => <GalleryCard key={index} date={item.date} explanation={item.explanation} url={item.url} title={item.title} media_type={item.media_type}></GalleryCard>)
          ) : (
            <>
              <div className="w-full h-screen flex flex-wrap justify-center">
                <Spinner size="large">
                  <p>Loading...</p>
                </Spinner>
              </div>
            </>
          )}
          <PaginationGallery gallery={gallery} page={page} totalPages={totalPages} pageNumbers={pageNumbers} prevPage={prevPage} nextPage={nextPage}/>
        </div>
      </div>
    </>
  )
}

export default function Gallery() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GalleryContent />
    </Suspense>
  )
}
