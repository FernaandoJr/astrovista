/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import { useSearchParams } from 'next/navigation';
import GalleryCard from "@/components/ui/gallery-card"
import { useEffect, useState } from 'react';
import { Picture } from "@/lib/mongo/pictures";

export default function Gallery() {
  const subtitle = "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!"
  const searchParams = useSearchParams();
  let page = parseInt(searchParams.get('page') ?? '1', 10);

  const [gallery, setGallery] = useState<{ items: Picture[], itemCount: number }>()

  page = !page || page < 1 ? 1 : page
  const perPage = 20

  useEffect(() => {
    const fetchGallery = async () => {
      const response = await fetch(`https://astrovista.vercel.app/api/apod/gallery?page=${page}&perPage=${perPage}`)
      const data = await response.json() as { items: Picture[], itemCount: number }
      return data
    }
    fetchGallery().then((data) => setGallery(data))
  },[])

  console.log(gallery)

  return (
    <>
      <div className="w-full  mx-auto py-16 px-12">
        <div className="flex flex-col place-items-center space-y-2">
          <h1 className="text-title">Gallery</h1>
          <p className="text-subtitle max-w-[50%] text-center">{subtitle}</p>
        </div>
        {/* <GalleryForm /> */}
        <p>pagina: {page}</p>
        <div className="justify-center flex gap-x-3 gap-y-3 flex-wrap my-5">
          {gallery?.items.map((item, index) => (
                        <GalleryCard 
                        key={index}
                        date={item.date} 
                        explanation={item.explanation} 
                        url={item.url} 
                        title={item.title}
                        media_type={item.media_type}>
                      </GalleryCard>
          ))}
        </div>
      </div>
    </>
  )
}
