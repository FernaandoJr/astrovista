'use client'
import ApodInfoSkeleton from '@/components/skeleton/apod-info'
import ApodInfo from '@/components/templates/apod-info'
import { useApod } from '@/hooks/useApod'

export default function ApodPage() {
  const { latest, isLoading } = useApod()

  return (
    <div className="container mx-auto flex flex-col items-center pt-24">
      {isLoading ? <ApodInfoSkeleton /> : <ApodInfo data={latest} />}
    </div>
  )
}
