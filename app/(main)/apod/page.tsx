"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import PlaceholderImage from "@/public/placeholder.jpg"

interface APOD {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export default function APOD() {
  async function getAPOD(): Promise<APOD> {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
    const data = await response.json()
    return data
  }

  const [apodImg, setApodImg] = useState<APOD>()
  useEffect(() => {
    getAPOD().then((data) => setApodImg(data))
  }, [])

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(apodImg?.date ? new Date(apodImg.date.replace(/-/g, "/")) : new Date("2024-10-20".replace(/-/g, "/")))

  return (
    <>
      {apodImg ? (
        <div className="w-full px-12 py-12 flex-col items-center flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mx-auto mb-4">Astronomy Picture of the Day</h1>
          <div className="w-full rounded-xl flex items-center flex-col">
            <Link href={apodImg.hdurl ?? "#"} passHref>
              <Image className="rounded-xl" src={apodImg.url ?? PlaceholderImage} alt={apodImg.title} width={900} height={900} />
            </Link>
            <p className="mb-7 mt-1 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">&#169;{apodImg.copyright ?? "Tom Abel & Ralf Kaehler (KIPAC, SLAC), AMNH"}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mr-auto">{apodImg.title ?? "Placeholder Title"}</h1>
            <h1 className="mb-7 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{formattedDate ?? "2024-10-20"}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px] text-justify"> {apodImg.explanation ?? " if you are seeing this is because the api key limit rate exceeded, please wait a few hours and try again, the image above is a pre-rendered image in case when the API key rate limit execeed."}</p>
            </span>
          </div>
        </div>
      ) : (
        <>
          <p>Carregando</p>
        </>
      )}
    </>
  )
}
