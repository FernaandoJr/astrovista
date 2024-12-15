import { getGallery } from "@/lib/mongo/pictures"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url)
    
    const page = parseInt(searchParams.get("page") ?? "", 10)
    const perPage = parseInt(searchParams.get("perPage") ?? "", 10)

    const gallery = await getGallery(perPage, page)

    const response = NextResponse.json(gallery)
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