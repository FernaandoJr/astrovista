import { PaginatedAPODResponse } from '@repo/shared'
import GalleryCard from '../blocks/galleryCard'
import { GalleryPagination } from '../blocks/galleryPagination'

export default function ApodGallery({ data }: { data: PaginatedAPODResponse }) {
  const toggleFavorite = (date: string) => {
    const favorites = localStorage.getItem('favoritesApod') ?? '[]'
    const favoritesArray = JSON.parse(favorites) as string[]
    if (favoritesArray.includes(date)) {
      favoritesArray.splice(favoritesArray.indexOf(date), 1)
    } else {
      favoritesArray.push(date)
    }
    localStorage.setItem('favoritesApod', JSON.stringify(favoritesArray))
  }

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
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <GalleryPagination gallery={data} />
    </div>
  )
}
