'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Spinner } from '../ui/spinner'

// Helper function to truncate text
const truncateText = (text: string | undefined, maxLength: number): string => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export default function GalleryCard({
  date,
  explanation,
  url,
  title,
  media_type,
  toggleFavorite,
}: {
  date: string
  explanation?: string
  url: string
  title?: string
  media_type: string
  toggleFavorite: (date: string) => void
}) {
  const truncatedExplanation = truncateText(explanation, 150)
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const checkFavorite = (date: string) => {
    const favorites = localStorage.getItem('favoritesApod') ?? '[]'
    const favoritesArray = JSON.parse(favorites) as string[]
    return favoritesArray.includes(date)
  }

  useEffect(() => {
    setImageLoaded(false)
  }, [url])

  const truncatedTitle = truncateText(title, 50)

  const formattedDate = date
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(date.replace(/-/g, '/')))
    : ''

  useEffect(() => {
    setIsFavorite(checkFavorite(date))
  }, [date])

  return (
    <Card className="flex w-full max-w-[18rem] min-w-[15rem] flex-col overflow-hidden">
      <CardContent className="flex-grow p-0">
        <div className="relative aspect-video overflow-hidden">
          {media_type === 'image' ? (
            <>
              {!imageLoaded && (
                <div className="flex h-full w-full place-content-center items-center justify-center">
                  <Spinner />
                </div>
              )}
              <Image
                src={url}
                alt={title ?? ''}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={true}
                className="transition-all duration-300 select-none hover:scale-105"
                onLoad={handleImageLoad}
              />
            </>
          ) : url ? (
            <div className="">
              <ReactPlayer
                src={url}
                controls={false}
                loop={false}
                playing={false}
                height={'170px'}
                width={'100%'}
              />
            </div>
          ) : (
            <div className="bg-muted flex h-full w-full place-content-center items-center justify-center">
              <p className="text-muted-foreground text-sm">No media available</p>
            </div>
          )}
        </div>
        <div className="flex flex-col p-4">
          <div className="text-pretty">
            <h2 className="mb-2 text-2xl font-semibold">{truncatedTitle}</h2>
            <p className="text-muted-foreground flex-grow text-sm">{formattedDate}</p>
            <p className="text-muted-foreground flex-grow text-sm">{truncatedExplanation}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-between p-4">
        <Button className="cursor-pointer" variant="outline">
          <Link href={`/gallery/${date}`} passHref className="select-none">
            View Details
          </Link>
        </Button>
        <motion.div
          whileHover={{
            scale: 1.1,
            zIndex: 1,
          }}
          whileTap={{
            scale: 0.7,
          }}>
          <Button
            variant="link"
            className="cursor-pointer"
            size="icon"
            aria-label="Save to favorites"
            onClick={() => {
              toggleFavorite(date)
              setIsFavorite(!isFavorite)
            }}>
            {isFavorite ? (
              <Heart className="text-primary aspect-square fill-current" />
            ) : (
              <Heart className="text-muted-foreground aspect-square" />
            )}
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}
