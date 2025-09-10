import { Skeleton } from '@/components/ui/skeleton'
import { useGalleryParams } from '@/contexts'

export default function ApodGallerySkeleton() {
  const { perPage } = useGalleryParams()
  const count = Number.parseInt(perPage || '10') || 10

  return (
    <div className="flex flex-col gap-4">
      {/* Pagination skeleton - top */}
      <div className="my-5 flex justify-center px-4">
        <div className="flex items-center gap-1">
          {/* Mobile pagination skeleton */}
          <div className="flex items-center gap-1 sm:hidden">
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
          </div>
          {/* Desktop pagination skeleton */}
          <div className="hidden items-center gap-1 sm:flex">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>

      {/* Gallery cards skeleton */}
      <div className="container flex flex-wrap justify-center gap-4 px-4">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="w-full max-w-[18rem] min-w-[15rem]">
            <div className="overflow-hidden rounded-md">
              <div className="relative aspect-video">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="p-4">
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="mb-2 h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-5/6" />
              </div>
              <div className="flex items-center justify-between p-4 pt-0">
                <Skeleton className="h-9 w-28" />
                <Skeleton className="h-9 w-9 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton - bottom */}
      <div className="my-5 flex justify-center px-4">
        <div className="flex items-center gap-1">
          {/* Mobile pagination skeleton */}
          <div className="flex items-center gap-1 sm:hidden">
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
          </div>
          {/* Desktop pagination skeleton */}
          <div className="hidden items-center gap-1 sm:flex">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>
    </div>
  )
}
