"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Picture } from "@/lib/mongo/pictures"
import Image from "next/image"
import Link from "next/link"
import ReactPlayer from "react-player"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function PictureComponent({ params }: { params: Promise<{ date: string }> }) {
  const [apod, setApod] = useState<Picture>()
  const [error, setError] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    params.then((resolvedParams) => {
      getApod(resolvedParams.date)
        .then((apod) => setApod(apod))
        .catch((err) => setError(err.message))
    })
  }, [params])

  async function getApod(date: string) {
    try {
      const response = await fetch(`https://astrovista.vercel.app/api/apod/picture?date=${date}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch APOD: ${error.message}`)
      } else {
        throw new Error("Failed to fetch APOD: Unknown error")
      }
    }
  }

  const formattedDate = apod?.date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(apod.date.replace(/-/g, "/")))
    : ""

  if (apod && apod.copyright && !apod.copyright.startsWith("©")) {
    apod.copyright = `© ${apod.copyright}`
  }

  function nextApod() {
    if (!apod) return
    const nextDate = new Date(apod.date)
    nextDate.setDate(nextDate.getDate() + 1)
    const nextDateString = nextDate.toISOString().split("T")[0]

    // Handle api picture gap from 1995-06-16 to 1995-06-19
    if (nextDateString === "1995-06-17") return router.push(`/gallery/1995-06-20`)
    router.push(`/gallery/${nextDateString}`)
  }

  function previousApod() {
    if (!apod) return
    const previousDate = new Date(apod.date)
    previousDate.setDate(previousDate.getDate() - 1)
    const previousDateString = previousDate.toISOString().split("T")[0]

    // Handle api picture gap from 1995-06-20 to 1995-06-17
    if (previousDateString === "1995-06-19") return router.push(`/gallery/1995-06-16`)
    router.push(`/gallery/${previousDateString}`)
  }

  return (
    <>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : apod ? (
        <div className="flex w-full flex-col items-center px-12 py-12">
          <h1 className="mx-auto mb-4 text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">Astronomy Picture of the Day</h1>
          <div className="flex w-full flex-col items-center rounded-xl">
            {apod.media_type === "image" ? (
              <>
                {!imageLoaded && (
                  <div className="flex h-[400px] w-full items-center justify-center">
                    <Spinner size="large" />
                  </div>
                )}
                <Link href={apod.hdurl ?? "#"} passHref target="_blank">
                  <Image className={`w-auto rounded-xl ${!imageLoaded ? "hidden" : ""}`} src={apod.url ?? "#"} alt={apod.title} width={900} height={900} priority={true} onLoad={() => setImageLoaded(true)} />
                </Link>
              </>
            ) : (
              <ReactPlayer url={apod.url} controls={true} loop={true} />
            )}
            <p className="mb-7 mt-1 max-w-[900px] text-base font-light text-muted-foreground sm:text-base">{apod.copyright}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="mb-1 mr-auto text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">{apod.title}</h1>
            <h1 className="mb-7 max-w-[900px] text-base font-light text-muted-foreground sm:text-base">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-justify text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px]"> {apod.explanation}</p>
            </span>
            <div aria-disabled={apod.date === "1995-06-16"} className="mt-8 flex w-full justify-between aria-disabled:justify-end">
              {apod.date !== "1995-06-16" && (
                <Button
                  variant={"outline"}
                  onClick={() => {
                    previousApod()
                  }}
                >
                  <ChevronLeft /> Previous
                </Button>
              )}
              {apod.date !== new Date().toISOString().split("T")[0] && (
                <Button
                  variant={"outline"}
                  onClick={() => {
                    nextApod()
                  }}
                >
                  Next <ChevronRight />
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
