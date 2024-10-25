import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export default function GalleryCard({ imageUrl, title = "NGC 7293: The Helix Nebula", description = "This is a placeholder description, if you are seeing this is because the api key limit rate exceeded, please wait a few hours and try again, the above is a pre-rendered image in case when the API key rate limit execeed." }: { imageUrl: string; title?: string; description?: string }) {
  const truncatedDescription = truncateText(description, 80)

  return (
    <Card className="w-full max-w-[17rem] min-w-[15rem] overflow-hidden flex flex-col">
      <CardContent className="p-0 flex-grow">
        <div className="relative aspect-video">
          <a href="https://apod.nasa.gov/apod/image/2410/NGC7293_preview.png" target="_blank" rel="noopener noreferrer">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 ease-in-out hover:scale-105" />
          </a>
        </div>
        <div className="p-4 flex flex-col h-[calc(100%-56.25%)]">
          {/* 56.25% is the aspect ratio of 16:9 */}
          <div className="text-pretty">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground flex-grow">{truncatedDescription}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-4">
        <Button variant="ghost" size="icon" aria-label="Save to favorites">
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
