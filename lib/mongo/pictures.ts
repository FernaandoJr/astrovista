import { ObjectId } from "mongodb"
import clientPromise from "./db"

// eslint-disable-next-line no-unused-vars
interface Picture {
  _id: ObjectId
  date: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
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

  return { pictures }
}

export async function getOnePicture(date: string): Promise<{ picture: Picture }> {
  const client = await clientPromise
  const db = client.db("Apod")
  const collection = db.collection("pictures")

  const picture = await collection.findOne({ date })

  if (!picture) {
    throw new Error("Picture not found")
  }

  const mappedPicture: Picture = {
    _id: picture._id,
    date: picture.date,
    hdurl: picture.hdurl,
    media_type: picture.media_type,
    service_version: picture.service_version,
    title: picture.title,
    url: picture.url,
  }

  return { picture: mappedPicture }
}
