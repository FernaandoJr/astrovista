import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
