/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import GalleryCard from "@/components/ui/gallery-card"
import GalleryForm from "@/components/gallery-form"

export default function Gallery() {
  const subtitle = "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!"
  const dev_message = "This page is under development. Please check back later."

  return (
    <>
      <div className="w-full  mx-auto py-16 px-12">
        <div className="flex flex-col place-items-center space-y-2">
          <h1 className="text-title">Gallery</h1>
          <p className="text-subtitle max-w-[50%] text-center">{subtitle}</p>
        </div>
        {/* <GalleryForm /> */}
        <div className="justify-center flex gap-x-3 gap-y-3 flex-wrap my-5">
          <GalleryCard imageUrl="https://apod.nasa.gov/apod/image/2410/NGC7293_preview.png"></GalleryCard>
          <GalleryCard imageUrl="https://apod.nasa.gov/apod/image/2410/NGC7293_preview.png"></GalleryCard>
          <GalleryCard imageUrl="https://apod.nasa.gov/apod/image/2410/NGC7293_preview.png"></GalleryCard>
          <GalleryCard imageUrl="https://apod.nasa.gov/apod/image/2410/NGC7293_preview.png"></GalleryCard>
        </div>
      </div>
    </>
  )
}
