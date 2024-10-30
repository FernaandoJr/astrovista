import { NextResponse, NextRequest } from "next/server"
import { getPictures } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  // Get the start_date and end_date from the query parameters
  let start_date = req.nextUrl.searchParams.get("start_date")
  let end_date = req.nextUrl.searchParams.get("end_date")

  // If the start_date is not provided, set it to today
  if (!start_date) {
    start_date = new Date().toISOString().split("T")[0]
  }
  if (!end_date) {
    end_date = start_date
  }

  // Get the pictures from the database
  const { pictures, error } = await getPictures(start_date, end_date)

  if (error) throw new Error(error)
  return NextResponse.json({ pictures })
}
