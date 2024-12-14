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

export default function Page({ params }: { params: Promise<{ date: string }> }) {
  const [apod, setApod] = useState<Picture>()
  const router = useRouter()

  useEffect(() => {
    params.then((resolvedParams) => {
      getApod(resolvedParams.date).then((apod) => setApod(apod))
    })
  }, [])

  const baseUrl = process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000"

  async function getApod(date: string) {
    const apod = await fetch(`${baseUrl}/api/apod/picture?date=${date}`)
    return apod.json()
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
    router.push(`/gallery/${nextDateString}`)
  }

  function previousApod() {
    if (!apod) return
    const previousDate = new Date(apod.date)
    previousDate.setDate(previousDate.getDate() - 1)
    const previousDateString = previousDate.toISOString().split("T")[0]
    router.push(`/gallery/${previousDateString}`)
  }

  return (
    <>
      {apod ? (
        <div className="w-full px-12 py-12 flex-col items-center flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mx-auto mb-4">Astronomy Picture of the Day</h1>
          <div className="w-full rounded-xl flex items-center flex-col">
            {apod.media_type === "image" ? (
              <Link href={apod.hdurl ?? "#"} passHref target="_blank">
                <Image className="rounded-xl w-auto" src={apod.url ?? "#"} alt={apod.title} width={900} height={900} priority={true} />
              </Link>
            ) : (
              <ReactPlayer url={apod.url} controls={true} loop={true} />
            )}
            <p className="mb-7 mt-1 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{apod.copyright}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mr-auto mb-1">{apod.title}</h1>
            <h1 className="mb-7 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px] text-justify"> {apod.explanation}</p>
            </span>
            <div className="w-full flex justify-between mt-8">
              <Button
                variant={"outline"}
                onClick={() => {
                  previousApod()
                }}
              >
                <ChevronLeft /> Previous
              </Button>
              <Button
                variant={"outline"}
                onClick={() => {
                  nextApod()
                }}
              >
                Next
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-screen flex flex-wrap justify-center">
            <Spinner size="large">
              <p>Loading...</p>
            </Spinner>
          </div>
        </>
      )}
    </>
  )
}
