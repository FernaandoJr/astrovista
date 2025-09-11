import { PaginatedAPODResponse } from '@repo/shared'
import GalleryCard from '../blocks/galleryCard'
import { GalleryPagination } from '../blocks/galleryPagination'

export default function ApodGallery({ data }: { data: PaginatedAPODResponse }) {
  return (
    <div className="flex flex-col gap-4">
      <GalleryPagination gallery={data} />
      <div className="container flex flex-wrap justify-center gap-4 px-4">
        {data.apods.map((item) => (
          <GalleryCard
            key={item.id}
            date={item.date}
            explanation={item.explanation}
            url={item.url ?? ''}
            title={item.title}
            media_type={item.media_type}
          />
        ))}
      </div>
      <GalleryPagination gallery={data} />
    </div>
  )
}
