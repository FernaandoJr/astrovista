import { Skeleton } from '../ui/skeleton'

export default function ApodInfoSkeleton() {
  return (
    <>
      <Skeleton className="my-4 flex h-8 w-[350px]" />
      <Skeleton className="aspect-video h-[350px]" />
      <Skeleton className="mt-4 flex h-4 w-[200px]" />
      <div className="container mx-auto mt-8 flex flex-col lg:max-w-[900px]">
        <Skeleton className="my-4 flex h-6 w-[300px]" />
        <Skeleton className="my-4 flex h-60 w-full" />
      </div>
    </>
  )
}
