import { apiUrl } from '@/constants/api'
import { ApodService } from '@repo/shared'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  try {
    const apodService = new ApodService(apiUrl as string)
    const data = await apodService.getAll()

    return data?.map((picture) => picture.date).map((date) => ({ params: { date } })) || []
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>
}): Promise<Metadata> {
  const { date } = await params

  try {
    const apodService = new ApodService(apiUrl as string)
    const data = await apodService.getByDate(date)

    if (!data) {
      return {
        title: 'APOD',
        description: 'APOD',
      }
    }

    return {
      title: {
        absolute: data.title,
      },
      description: data.explanation,
      openGraph: {
        images: [
          {
            url: data.url,
            alt: data.title,
          },
        ],
      },
    }
  } catch {
    return {
      title: 'APOD',
      description: 'APOD',
    }
  }
}

export default function Page() {
  return null
}
