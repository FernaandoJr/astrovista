import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "APOD",
  description: "Astronomy Picture of the Day",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
