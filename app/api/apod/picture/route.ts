import { NextResponse, NextRequest } from "next/server"
import { getPicture } from "@/lib/mongo/pictures"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const date = searchParams.get("date")

  if (!date) {
    return NextResponse.error()
  }
  console.log("date:", date)

  const picture = await getPicture(date)

  const response = NextResponse.json(picture)
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

  return response
}

export async function OPTIONS() {
  const response = NextResponse.json({})
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  return response
}
