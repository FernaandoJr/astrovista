import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about AstroVista's mission to bring NASA's Astronomy Picture of the Day archive to space enthusiasts through modern technology and beautiful design.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
