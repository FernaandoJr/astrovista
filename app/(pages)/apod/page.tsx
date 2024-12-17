"use client"

import React, { useState, useEffect } from "react"
import { Picture } from "@/lib/mongo/pictures"
import Image from "next/image"
import { Spinner } from "@/components/ui/spinner"
import Link from "next/link"
import ReactPlayer from "react-player"

async function getTodayApod(): Promise<Picture> {
  const todayApod = await fetch(`/api/apod/latestApod`)
  return todayApod.json()
}

export default function APOD() {
  const [todayApod, setTodayApod] = useState<Picture>()

  useEffect(() => {
    getTodayApod().then((apod) => setTodayApod(apod))
  }, [])

  if (todayApod && todayApod.copyright != undefined && !todayApod.copyright.startsWith("©")) {
    todayApod.copyright = `© ${todayApod.copyright}`
  }

  const formattedDate = todayApod?.date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(todayApod.date.replace(/-/g, "/")))
    : ""

  return (
    <>
      {todayApod ? (
        <div className="w-full px-12 py-12 flex-col items-center flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mx-auto mb-4">Astronomy Picture of the Day</h1>
          <div className="w-full rounded-xl flex items-center flex-col">
            {todayApod.media_type === "image" ? (
              <Link href={todayApod.hdurl ?? "#"} passHref target="_blank">
                <Image className="rounded-xl w-auto" src={todayApod.url ?? "#"} alt={todayApod.title} width={900} height={900} priority={true} />
              </Link>
            ) : (
              <ReactPlayer url={todayApod.url} controls={true} loop={true} />
            )}
            <p className="mb-7 mt-1 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{todayApod.copyright}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mr-auto mb-1">{todayApod.title}</h1>
            <h1 className="mb-7 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px] text-justify"> {todayApod.explanation}</p>
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
