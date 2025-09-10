import { HeroHeader } from '@/components/blocks/navbar'
import { Footer } from '@/components/templates/footer-section'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { GalleryParamsProvider } from '@/contexts'
import { QueryProvider } from '@/providers/query-provider'
import type { Metadata } from 'next'
import { Merriweather, Outfit } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import './globals.css'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://astrovista.vercel.app'),
  title: {
    default: "AstroVista - Explore the cosmos through NASA's eyes",
    template: '%s | AstroVista',
  },
  description:
    "AstroVista is a modern web application that brings the wonders of space directly to your screen through NASA's Astronomy Picture of the Day API. Explore our comprehensive archive of astronomical imagery dating back to 1995.",
  keywords: [
    'NASA',
    'APOD',
    'Astronomy Picture of the Day',
    'Space',
    'Universe',
    'Cosmos',
    'Astronomy',
    'AstroVista',
    'Space Photography',
    'NASA Images',
    'Astronomical Archive',
  ],
  authors: [{ name: 'FernaandoJr', url: 'https://github.com/FernaandoJr' }],
  creator: 'FernaandoJr',
  publisher: 'AstroVista',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://astrovista.vercel.app',
    siteName: 'AstroVista',
    title: "AstroVista - Explore the cosmos through NASA's eyes",
    description:
      "Discover the wonders of space through NASA's Astronomy Picture of the Day archive. Beautiful, responsive interface with advanced search capabilities.",
    images: [
      {
        url: '/astrovista-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AstroVista - NASA APOD Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astrovista',
    creator: '@fernaandojr',
    title: "AstroVista - Explore the cosmos through NASA's eyes",
    description:
      "Discover the wonders of space through NASA's Astronomy Picture of the Day archive.",
    images: ['/astrovista-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfitSans.variable} ${merriweather.variable} antialiased`}>
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <QueryProvider>
              <GalleryParamsProvider>
                <HeroHeader />
                {children}
              </GalleryParamsProvider>
              <Footer />
            </QueryProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
