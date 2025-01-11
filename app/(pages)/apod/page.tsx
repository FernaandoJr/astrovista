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
        <div className="flex w-full flex-col items-center px-12 py-12">
          <h1 className="mx-auto mb-4 text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">Astronomy Picture of the Day</h1>
          <div className="flex w-full flex-col items-center rounded-xl">
            {todayApod.media_type === "image" ? (
              <Link href={todayApod.hdurl ?? "#"} passHref target="_blank">
                <Image className="w-auto rounded-xl" src={todayApod.url ?? "#"} alt={todayApod.title} width={900} height={900} priority={true} />
              </Link>
            ) : (
              <ReactPlayer url={todayApod.url} controls={true} loop={true} />
            )}
            <p className="mb-7 mt-1 max-w-[900px] text-base font-light text-muted-foreground sm:text-base">{todayApod.copyright}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="mb-1 mr-auto text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">{todayApod.title}</h1>
            <h1 className="mb-7 max-w-[900px] text-base font-light text-muted-foreground sm:text-base">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-justify text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px]"> {todayApod.explanation}</p>
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-screen w-full flex-wrap justify-center">
            <Spinner size="large">
              <p>Loading...</p>
            </Spinner>
          </div>
        </>
      )}
    </>
  )
}
