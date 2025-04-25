"use client"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ReactPlayer from "react-player"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"

// Helper function to truncate text
const truncateText = (explanation: string, maxLength: number): string => {
  if (explanation.length <= maxLength) return explanation
  return explanation.slice(0, maxLength) + "..."
}

export default function GalleryCard({ date, explanation, url, title, media_type, toggleFavorite }: { date: string; explanation: string; url: string; title: string; media_type: string; toggleFavorite?: (date: string) => Promise<boolean> }) {
  const truncatedExplanation = truncateText(explanation, 150)
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  useEffect(() => {
    setImageLoaded(false)
  }, [url])

  const truncatedTitle = truncateText(title, 50)

  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(date.replace(/-/g, "/")))
    : ""

  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as string[]
    setIsFavorite(existingFavorites.includes(date))
  }, [date])

  return (
    <Card className="flex w-full min-w-[15rem] max-w-[18rem] flex-col overflow-hidden">
      <CardContent className="flex-grow p-0">
        <div className="relative aspect-video">
          {media_type === "image" ? (
            <>
              {!imageLoaded && (
                <div className="flex h-full w-full place-content-center items-center justify-center">
                  <Spinner />
                </div>
              )}
              <Image src={url} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} priority={true} className="select-none" onLoad={handleImageLoad} />
            </>
          ) : (
            <div className="">
              <ReactPlayer url={url} controls={false} loop={false} playing={false} height={"170px"} width={"100%"} />
            </div>
          )}
        </div>
        <div className="flex flex-col p-4">
          {/* 56.25% is the aspect ratio of 16:9 */}
          <div className="text-pretty">
            <h2 className="mb-2 text-2xl font-semibold">{truncatedTitle}</h2>
            <p className="flex-grow text-sm text-muted-foreground">{formattedDate}</p>
            <p className="flex-grow text-sm text-muted-foreground">{truncatedExplanation}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-between p-4">
        <Button className="" variant="secondary">
          <Link href={`/gallery/${date}`} passHref className="select-none">
            View Details
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Save to favorites"
          onClick={() => {
            toggleFavorite?.(date)
            setIsFavorite(!isFavorite)
            console.log("Clicked", isFavorite)
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              zIndex: 1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            {isFavorite ? <Heart className="h-5 w-5 fill-current text-red-500" /> : <Heart className="h-5 w-5" />}
          </motion.div>
        </Button>
      </CardFooter>
    </Card>
  )
}
