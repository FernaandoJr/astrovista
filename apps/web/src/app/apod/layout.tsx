import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'APOD',
  description:
    "Discover today's NASA Astronomy Picture of the Day with detailed explanations and stunning cosmic imagery from our universe.",
}

export default function APODLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
