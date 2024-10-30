import { NextResponse, NextRequest } from "next/server"
import { getPictures } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  // Use the NextRequest object to get URL parameters
  const { searchParams } = new URL(req.url)

  // Get the start_date and end_date from the query string
  // Example: /api/apod?start_date=2001-10-30&end_date=2001-11-30

  const startDate = searchParams.get("start_date")
  const endDate = searchParams.get("end_date")

  console.log("startDate:", startDate)
  console.log("endDate:", endDate)

  const { pictures, error } = await getPictures(startDate, endDate)

  if (error) throw new Error(error)

  return NextResponse.json({ pictures })
}
