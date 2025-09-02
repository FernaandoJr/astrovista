import { APOD } from '@repo/shared'
import GalleryCard from '../blocks/gallery-card'
import { PaginationGallery } from '../blocks/pagination-gallery'

export default function ApodGallery({ data }: { data: APOD[] }) {
  return (
    <>
      <PaginationGallery />
      <>
        {data.slice(0, 10).map((item) => (
          <GalleryCard
            key={item.id}
            date={item.date}
            explanation={item.explanation}
            url={item.url ?? ''}
            title={item.title}
            media_type={item.media_type}
          />
        ))}
      </>
    </>
  )
}
