'use client'
import GalleryInputs from '@/components/blocks/gallery-inputs'
import ApodGallery from '@/components/templates/apod-gallery'
import { useGallery } from '@/hooks'
import { Suspense } from 'react'

export default function GalleryPage() {
  const { search, isLoading } = useGallery()

  return (
    <Suspense>
      <div className="container mx-auto flex flex-col items-center pt-24 pb-8">
        <h1 className="text-3xl font-bold select-none">Gallery</h1>
        <GalleryInputs />
      </div>
      <div className="container mx-auto flex w-full flex-wrap justify-center gap-3">
        {isLoading && <div className="w-full text-center">Loading...</div>}
        {search && <ApodGallery data={search} />}
      </div>
    </Suspense>
  )
}
