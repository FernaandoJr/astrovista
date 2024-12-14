import { NextResponse, NextRequest } from "next/server"
import { getPictures } from "@/lib/mongo/pictures"

// function formatDateToString(date: Date): string {
//   const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
//   const year = utcDate.getUTCFullYear()
//   const month = String(utcDate.getUTCMonth() + 1).padStart(2, "0")
//   const day = String(utcDate.getUTCDate()).padStart(2, "0")

//   return `${year}-${month}-${day}`
// }

export async function GET(req: NextRequest) {
  // Use the NextRequest object to get URL parameters
  const { searchParams } = new URL(req.url)

  // Get the start_date and end_date from the query string
  // Example: /api/apod?start_date=2001-10-30&end_date=2001-11-30

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
