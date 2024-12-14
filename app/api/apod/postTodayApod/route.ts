import { VercelRequest, VercelResponse } from "@vercel/node"
import dotenv from "dotenv"
dotenv.config()

import { ObjectId } from "mongodb"
import { postApod } from "@/lib/mongo/pictures"

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("Calling API...")
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
    const data: Picture = await response.json()
    console.log("API response:", data)

    // Post the picture to the database
    console.log("Posting data to the database...")
    await postApod(data)
    console.log("Data posted successfully")

    res.status(200).json({ message: "Data posted successfully" })
  } catch (error) {
    console.error("Error calling API:", error)
    res.status(500).json({ error: "Error calling API" })
  }
}
