import { ObjectId } from "mongodb"
import clientPromise from "./db"

// eslint-disable-next-line no-unused-vars
export interface Picture {
  _id: ObjectId
  date: string
  explanation: string
  hdurl: string | undefined
  media_type: string
  service_version: string
  title: string
  url: string
  copyright: string | undefined
}

export async function getPictures(start_date: string, end_date: string) {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const pictures = await collection
    .find({
      date: {
        $gte: start_date,
        $lte: end_date,
      },
    })
    .toArray()

  return pictures // Return the array directly
}

// Get a picture from the database
export async function getPicture(date: string): Promise<Picture> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const picture = (await collection.findOne({ date })) as Picture

  if (!picture) {
    throw new Error("Picture not found")
  }

  return picture
}

// Post a picture to the database
export async function postApod(picture: Picture) {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const checkExistingPicture = await collection.findOne({ date: picture.date })

  if (checkExistingPicture) {
    console.log(`Picture with date ${picture.date} already exists in the database.`)
    throw new Error("Picture already exists")
  }

  const result = await collection.insertOne(picture)

  return result
}

interface GalleryParams {
  perPage: number
  page: number
  title: string | null
  mediaType: string | null
  sort: "desc" | "asc"
}

export async function getGallery({ perPage, page, title, mediaType, sort }: GalleryParams): Promise<{ items: Picture[]; itemCount: number }> {
  try {
    const client = await clientPromise
    const db = client.db("Apod")
    const collection = db.collection("pictures")

    const filters: Record<string, unknown> = {}

    const newSort = sort === "desc" ? -1 : 1

    if (title) {
      filters.title = { $regex: title, $options: "i" }
    }
    if (mediaType && mediaType !== "any") {
      filters.media_type = mediaType
    }
    const items = (await collection
      .find(filters)
      .skip(perPage * (page - 1))
      .limit(perPage)
      .sort({ date: newSort })
      .toArray()) as Picture[]

    const itemCount = await collection.countDocuments(filters)

    console.log("itemCount:", itemCount)

    const response = { items, itemCount }
    return response
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}

export async function findLatestApod(): Promise<Picture> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const picture = (await collection.findOne({}, { sort: { date: -1 } })) as Picture

  if (!picture) {
    throw new Error("Picture not found")
  }

  return picture
}

export async function getAllPictures(): Promise<Picture[]> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  console.log("Getting all pictures")
  const pictures = (await collection.find({}).sort({ date: -1 }).toArray()) as Picture[]

  return pictures
}

export async function picturesCount(): Promise<number> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const count = await collection.countDocuments()

  return count
}
