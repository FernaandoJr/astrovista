import GalleryInputs from '@/components/blocks/gallery-inputs'
import ApodGallery from '@/components/templates/apod-gallery'
import { Suspense } from 'react'

export default async function GalleryPage() {
  return (
    <Suspense>
      <div className="container mx-auto flex flex-col items-center py-24">
        <h1 className="text-3xl font-bold select-none">Gallery</h1>
        <GalleryInputs />
      </div>
      <div className="container mx-auto flex flex-wrap gap-3">
        <ApodGallery />
      </div>
    </Suspense>
  )
}
