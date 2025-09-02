import { mock } from '@repo/shared'
import GalleryCard from '../blocks/gallery-card'

export default function ApodGallery() {
  return (
    <>
      {mock.slice(0, 10).map((item) => (
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
  )
}
