import { NextResponse, NextRequest } from "next/server"
import { getPictures } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  // Use the NextRequest object to get URL parameters
  const { searchParams } = new URL(req.url)

  const startDate = searchParams.get("start_date")
  const endDate = searchParams.get("end_date")

  if (!startDate || !endDate) {
    return NextResponse.error()
  }

  console.log("startDate:", startDate)
  console.log("endDate:", endDate)

  const pictures = await getPictures(startDate, endDate)

  return NextResponse.json(pictures)
}
