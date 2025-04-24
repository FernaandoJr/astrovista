"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { DatePicker } from "@/components/astrovista/date-picker"
import Image from "next/image"
import BannerImg from "@/public/date-banner.png"
import { Rocket } from "lucide-react"

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date)
}

const formatToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const firstApod = formatDate(new Date("1995-06-16"))

export default function BirthdaySection() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      let validDate = selectedDate

      if (selectedDate > new Date()) {
        validDate = new Date()
      }
      if (selectedDate <= new Date("1995-06-16")) {
        validDate = new Date("1995-06-17")
      }
      if (selectedDate >= new Date("1995-06-17") && selectedDate <= new Date("1995-06-20")) {
        validDate = new Date("1995-06-17")
      }

      setDate(validDate)
      redirectToGallery(validDate)
    }
  }

  const redirectToGallery = (date: Date | undefined): string => {
    if (!date) return "/gallery"

    const formattedDate = formatToYYYYMMDD(date)
    return `/gallery/${formattedDate}`
  }

  return (
    <section className="flex w-full flex-row flex-wrap justify-between gap-6">
      <div className="flex sx:w-full sm:w-1/2 md:w-full lg:w-1/2">
        <Image src={BannerImg} alt="Banner image" className="aspect-video flex-wrap overflow-hidden rounded-xl object-fill" />
      </div>
      <div className="sm:w-full md:w-full lg:w-[45%]">
        <div className="">
          <h2 className="mb-3 text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">Explore all our entire Archive!</h2>
          <p className="text-subtitle mb-4 max-w-[550px] text-justify">
            Discover the cosmos like never before! Enter a date between {firstApod}, and {formatDate(new Date())}, to explore the Astronomy Picture of the Day (APOD) for that moment in time. Whether it&apos;s your birthday, an anniversary, or a date that holds special meaning to you, uncover the unique celestial wonder captured on that day.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <DatePicker startYear={1995} onChange={handleDateChange} />
          <Link className="max-w-fit" href={redirectToGallery(date)}>
            <Button
              className="gap-1"
              onClick={() => {
                console.log(date)
              }}
            >
              <Rocket className="h-4 w-4" />
              Explore!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
