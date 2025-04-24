import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Favorites",
  description: "Your favorite pictures",
}

export default function FavoriteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
