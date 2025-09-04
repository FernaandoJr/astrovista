import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favorites',
  description:
    'Save and organize your favorite NASA astronomy images from the APOD archive. Create your personal collection of cosmic wonders.',
}

export default function FavoriteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
