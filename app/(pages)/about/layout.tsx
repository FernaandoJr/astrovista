import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "An open-source project bringing the wonders of space to your screen, powered by NASA's Astronomy Picture of the Day API.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
