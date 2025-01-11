import { NextResponse } from "next/server"
import { getAllPictures } from "@/lib/mongo/pictures"

export async function GET() {
  const pictures = await getAllPictures()

  return NextResponse.json(pictures)
}
