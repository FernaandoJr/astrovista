'use client'

import ApodInfoSkeleton from '@/components/skeleton/apod-info'

export default function ApodPage() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center pt-24">
        <h1 className="mb-4 text-3xl font-bold select-none">Astronomy Picture of the Day</h1>
        <ApodInfoSkeleton />
        {/* <ApodInfo data={mock} /> */}
      </div>
    </>
  )
}
