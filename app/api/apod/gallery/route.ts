import { getGallery } from "@/lib/mongo/pictures"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(req.url)
    
    const page = parseInt(searchParams.get("page") ?? "", 10)
    const perPage = parseInt(searchParams.get("perPage") ?? "", 10)

    const gallery = await getGallery(perPage, page)
    return NextResponse.json(gallery)
}