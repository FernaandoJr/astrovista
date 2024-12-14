"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect } from "react"
import { Picture } from "@/lib/mongo/pictures"

function formatDateToString(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

async function getTodayApod(): Promise<Picture> {
  console.log(formatDateToString(new Date()))
  const todayApod = await fetch(`https://astrovista.vercel.app/api/apod/picture?date=${formatDateToString(new Date())}`)
  console.log(todayApod)
  return todayApod.json()
}

export default function APOD() {
  const [todayApod, setTodayApod] = useState<Picture>()

  return (
    <>
      <div className="">{todayApod?.explanation} !</div>
    </>
  )
}

{
  /* 
  <div className="w-full px-12 py-12 flex-col items-center flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mx-auto mb-4">Astronomy Picture of the Day</h1>
          <div className="w-full rounded-xl flex items-center flex-col">
            <Link href={apodImg.hdurl ?? "#"} passHref target="_blank">
              <Image className="rounded-xl" src={apodImg.url} alt={apodImg.title} width={900} height={900} />
            </Link>
            <p className="mb-7 mt-1 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{apodImg.copyright ?? ""}</p>
          </div>
          <div className="lg:max-w-[900px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl mr-auto">{apodImg.title}</h1>
            <h1 className="mb-7 text-base font-light text-muted-foreground sm:text-base max-w-[900px]">{formattedDate}</h1>
            <span className="text-xl font-semibold">
              Description:
              <p className="text-base font-light text-muted-foreground sm:text-base lg:max-w-[900px] text-justify"> {apodImg.explanation ?? }</p>
            </span>
          </div>
        </div> 
        
        
        
        
        
        <>
          <div className="w-full h-screen flex flex-wrap justify-center">
            <Spinner size="large">
              <p>Loading...</p>
            </Spinner>
          </div>
        </>
        
        
*/
}
