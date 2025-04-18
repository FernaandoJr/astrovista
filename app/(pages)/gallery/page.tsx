import { Suspense } from "react"
import GalleryContent from "./gallery-component"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Access all the archive of images from NASA's Astronomy Picture of the Day API in one place!",
}

export default function Gallery() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GalleryContent />
    </Suspense>
  )
}
