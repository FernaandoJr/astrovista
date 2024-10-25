"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Spinner } from "@/components/ui/spinner"
import PlaceholderImage from "@/public/placeholder.jpg"

const placeholder_description = ` This is a placeholder description, if you are seeing this is because the api key limit rate exceeded, please wait a few hours and try again, the image above is a pre-rendered image in case when the API key rate limit execeed.`
const placeholder_title = "Placeholder Title"
const placeholder_date = "2024-10-20"

interface APOD {
  copyright?: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version?: string
  title: string
  url: string
}
async function getAPOD(): Promise<APOD> {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
  const data = await response.json()
  return data
}

export default function APOD() {
  const [apodImg, setApodImg] = useState<APOD>()

  useEffect(() => {
    // Check if there is local data
    const localData = localStorage.getItem("apod")
    if (localData) {
      const parsedData: APOD = JSON.parse(localData)
      setApodImg(parsedData)
      console.log("Using local data")
    }

    getAPOD().then((data) => {
      // Check if the media type is an image
      if (data.media_type === "image") {
        // Check if the data is different from the local data
        if (!localData || JSON.stringify(data) !== localData) {
          setApodImg(data)
          localStorage.setItem("apod", JSON.stringify(data))
          console.log("Using API data")
        }
      }
    })
  }, [])

  // Format the date to a more readable format (Month, Day, Year)
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(apodImg?.date ? new Date(apodImg.date.replace(/-/g, "/")) : new Date(placeholder_date.replace(/-/g, "/")))

  return (
    <>
      {apodImg ? (
        <div className="w-full px-12 py-12 flex-col items-center flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mx-auto mb-4">Astronomy Picture of the Day</h1>
          <div className="w-full rounded-xl flex items-center flex-col">
            <Link href={apodImg.hdurl ?? "#"} passHref target="_blank">
              <Image className="rounded-xl" src={apodImg.url ?? PlaceholderImage} alt={apodImg.title} width={900} height={900} />
            </Link>
            <p className="mb-7 mt-1 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{apodImg.copyright ?? ""}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mr-auto">{apodImg.title ?? placeholder_title}</h1>
            <h1 className="mb-7 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px] text-justify"> {apodImg.explanation ?? placeholder_description}</p>
            </span>
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
