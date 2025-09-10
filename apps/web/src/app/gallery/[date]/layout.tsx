'use client'
import ApodInfoSkeleton from '@/components/skeleton/apod-info'
import ApodInfo from '@/components/templates/apod-info'
import { useApodByDate } from '@/hooks/useApod'
import { use } from 'react'

export default function GalleryDateLayout({
  params,
}: {
  children: React.ReactNode
  params: Promise<{ date: string }>
}) {
  const { date } = use(params)
  const { data, isLoading } = useApodByDate(date)

  return (
    <div className="container mx-auto flex flex-col items-center pt-24">
      {data ? <ApodInfo data={data} /> : <ApodInfoSkeleton />}
    </div>
  )
}
