/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
import { postApod } from "@/lib/mongo/pictures"
import { Picture } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  try {
    console.log("Calling API...")
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
    const data: Picture = await response.json()
    console.log("API response:", data)

    // Post the picture to the database
    await postApod(data)

    return NextResponse.json({ message: "Cron job executed" })
  } catch (error) {
    console.error("Error executing cron job", error)
    return NextResponse.json({ message: "Error executing cron job" }, { status: 500 })
  }
}
