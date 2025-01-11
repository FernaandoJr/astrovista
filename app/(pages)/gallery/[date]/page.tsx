import PictureComponent from "./picture-component"
import type { Metadata } from "next"
import { Picture } from "@/lib/mongo/pictures"

export async function generateStaticParams() {
  const response = await fetch("https://astrovista.vercel.app/api/apod/allPictures")
  const data = (await response.json()) as Picture[]

  return data.map((picture) => picture.date).map((date) => ({ params: { date } }))
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }): Promise<Metadata> {
  const { date } = await params

  const apod = await getApod(date)

  return {
    title: {
      absolute: apod.title,
    },
    description: apod.explanation,
    openGraph: {
      images: [
        {
          url: apod.url,
          alt: apod.title,
        },
      ],
    },
  }
}

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

export default function Page({ params }: { params: Promise<{ date: string }> }) {
  return (
    <>
      <PictureComponent params={params} />
    </>
  )
}
