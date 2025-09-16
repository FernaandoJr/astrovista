import { useApodByDate } from '@/hooks'
import { useState } from 'react'
import GalleryCard from './galleryCard'

export default function FavoriteItem({
  date,
  onRemove,
}: {
  date: string
  onRemove: (date: string) => void
}) {
  const { data } = useApodByDate(date)
  const [isRemoving, setIsRemoving] = useState(false)

  const toggleFavorite = (date: string) => {
    setIsRemoving(true)
    const favorites = localStorage.getItem('favoritesApod') ?? '[]'
    const favoritesArray = JSON.parse(favorites) as string[]
    if (favoritesArray.includes(date)) {
      favoritesArray.splice(favoritesArray.indexOf(date), 1)
      localStorage.setItem('favoritesApod', JSON.stringify(favoritesArray))
      setTimeout(() => onRemove(date), 300)
    } else {
      favoritesArray.push(date)
      localStorage.setItem('favoritesApod', JSON.stringify(favoritesArray))
      setIsRemoving(false)
    }
  }

  if (isRemoving) {
    return (
      <div className="flex w-full max-w-[18rem] min-w-[15rem] flex-col items-center justify-center p-8 opacity-50 transition-opacity">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
        <p className="text-muted-foreground mt-2 text-sm">Removing...</p>
      </div>
    )
  }

  return (
    <GalleryCard
      date={data?.date ?? ''}
      url={data?.url ?? ''}
      explanation={data?.explanation ?? ''}
      title={data?.title ?? ''}
      media_type={data?.media_type ?? ''}
      toggleFavorite={toggleFavorite}
    />
  )
}
