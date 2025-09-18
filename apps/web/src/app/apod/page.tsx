'use client'
import ApodInfoSkeleton from '@/components/skeleton/apodInfoSkeleton'
import ApodInfo from '@/components/templates/apodInfo'
import { useApodLatest } from '@/hooks/useApod'

export default function ApodPage() {
  const { latest } = useApodLatest()

  return (
    <div className="container mx-auto flex flex-col items-center pt-24">
      {latest ? <ApodInfo data={latest} /> : <ApodInfoSkeleton />}
    </div>
  )
}
