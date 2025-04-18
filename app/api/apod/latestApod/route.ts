import { NextResponse } from "next/server"
import { findLatestApod } from "@/lib/mongo/pictures"

export async function GET() {
  const picture = await findLatestApod()

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
