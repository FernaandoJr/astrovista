import { ObjectId } from "mongodb"
import clientPromise from "./db"

// eslint-disable-next-line no-unused-vars
interface Picture {
  _id: ObjectId
  date: string
  explanation: string | undefined
  hdurl: string | undefined
  media_type: string | undefined
  service_version: string | undefined
  title: string | undefined
  url: string | undefined
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

export async function getPicture(date: string): Promise<{ mappedPicture: Picture }> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const picture = await collection.findOne({ date })

  if (!picture) {
    throw new Error("Picture not found")
  }

  const mappedPicture: Picture = {
    _id: picture._id,
    copyright: picture.copyright,
    date: picture.date,
    explanation: picture.explanation,
    hdurl: picture.hdurl,
    media_type: picture.media_type,
    service_version: picture.service_version,
    title: picture.title,
    url: picture.url,
  }

  return { mappedPicture }
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
