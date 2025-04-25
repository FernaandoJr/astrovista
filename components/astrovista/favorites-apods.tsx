"use client"
import { useEffect, useState } from "react"
import GalleryCard from "./gallery-card"
import { Picture } from "@/lib/mongo/pictures"
import { toggleFavorite } from "@/app/(pages)/gallery/gallery-component"
import { Spinner } from "../ui/spinner"

const fetchApod = async (date: string) => {
  const response = await fetch(`https://astrovista.vercel.app/api/apod/picture?date=${date}`).catch((error) => {
    console.error("Error fetching APOD:", error)
    return null
  })

  if (!response || !response.ok) {
    console.error("Error fetching APOD:", response?.statusText || "No response")
    return null
  }

  return response.json()
}

export default function FavoriteApods() {
  const [favorites, setFavorites] = useState<Picture[]>([])

  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as string[]
    const fetchPromises = existingFavorites.map((date: string) => fetchApod(date)) as Promise<Picture | null>[]
    Promise.all(fetchPromises)
      .then((data) => {
        const validData = data.filter((apod): apod is Picture => apod !== null) // Filter out null values
        setFavorites(validData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  })

  return (
    <div className="">
      {favorites.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
          {favorites.map((apod) => (
            <GalleryCard key={apod.date} date={apod.date} explanation={apod.explanation} url={apod.url} title={apod.title} media_type={apod.media_type} toggleFavorite={async () => await toggleFavorite(apod.date)} />
          ))}
        </div>
      ) : (
        <div className="flex h-screen w-full flex-wrap justify-center">
          <Spinner size="large">
            <p>Loading...</p>
          </Spinner>
        </div>
      )}
    </div>
  )
}
