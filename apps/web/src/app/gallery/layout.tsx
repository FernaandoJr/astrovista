import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore the entire NASA Astronomy Picture of the Day archive with our curated gallery. Discover thousands of stunning cosmic images from our universe.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
