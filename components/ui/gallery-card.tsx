
"use client"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ReactPlayer from "react-player"
import Link from 'next/link';

// Helper function to truncate text
const truncateText = (explanation: string, maxLength: number): string => {
  if (explanation.length <= maxLength) return explanation
  return explanation.slice(0, maxLength) + "..."
}

export default function GalleryCard({ date, explanation, url, title, media_type }: { date: string; explanation: string; url: string; title: string ; media_type: string}) {

  const truncatedExplanation = truncateText(explanation, 150)

  const truncatedTitle = truncateText(title, 50)

  const formattedDate = date
  ? new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date.replace(/-/g, "/")))
  : ""

  return (
    <Card className="w-full max-w-[18rem] min-w-[15rem] overflow-hidden flex flex-col">
      <CardContent className="p-0 flex-grow">
        <div className="relative aspect-video">
          {media_type === "image" ? (
            <Image src={url} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 ease-in-out" />
          ) : (
            <div className="">
            <ReactPlayer url={url} controls={false} loop={false} playing={false} height={"170px"} width={"100%"}/>
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col ">
          {/* 56.25% is the aspect ratio of 16:9 */}
          <div className="text-pretty">
            <h2 className="text-2xl font-semibold mb-2">{truncatedTitle}</h2>
            <p className="text-sm text-muted-foreground flex-grow">{formattedDate}</p>
            <p className="text-sm text-muted-foreground flex-grow">{truncatedExplanation}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-between p-4">
        <Button className="" variant="secondary">
          <Link href={`/gallery/${date}`} passHref>
          View Details
          </Link>
        </Button>
        <Button variant="ghost" size="icon" aria-label="Save to favorites">
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
