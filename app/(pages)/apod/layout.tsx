import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "APOD",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
