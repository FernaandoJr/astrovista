'use client'
import ApodInfoSkeleton from '@/components/skeleton/apodInfoSkeleton'
import ApodInfo from '@/components/templates/apodInfo'
import { useApodByDate } from '@/hooks/useApod'
import { use } from 'react'

export default function GalleryDateLayout({
  params,
}: {
  children: React.ReactNode
  params: Promise<{ date: string }>
}) {
  const { date } = use(params)
  const { data } = useApodByDate(date)

  return (
    <div className="container mx-auto flex flex-col items-center pt-24">
      {data ? <ApodInfo data={data} /> : <ApodInfoSkeleton />}
    </div>
  )
}
