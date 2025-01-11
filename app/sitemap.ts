import { MetadataRoute } from "next"
import { Picture } from "@/lib/mongo/pictures"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://astrovista.vercel.app/api/apod/allPictures")
  const data = (await response.json()) as Picture[]

  const entries: MetadataRoute.Sitemap = data.map((picture) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/${picture.date}`,
    lastModified: new Date(picture.date).toISOString(),
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    ...entries,
  ]
}
