import { NextResponse, NextRequest } from "next/server"
import { getPicture } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  // Get the date from the query string
  // Example: /api/apod?date=2001-10-30

  const date = searchParams.get("date")

  if (!date) {
    return NextResponse.error()
  }
  console.log("date:", date)

  const picture = await getPicture(date)

  return NextResponse.json(picture)
}
