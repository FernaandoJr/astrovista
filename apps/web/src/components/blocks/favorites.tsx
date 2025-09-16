'use client'
import { useState } from 'react'
import FavoriteItem from './favoriteItem'

export default function Favorites({
  favoritesArray,
  onFavoritesUpdate,
}: {
  favoritesArray: string[]
  onFavoritesUpdate: (updatedFavorites: string[]) => void
}) {
  const [currentFavorites, setCurrentFavorites] = useState(favoritesArray)

  const handleRemoveFavorite = (dateToRemove: string) => {
    const updatedFavorites = currentFavorites.filter((date) => date !== dateToRemove)
    setCurrentFavorites(updatedFavorites)
    onFavoritesUpdate(updatedFavorites)
  }

  return (
    <div className="container flex flex-wrap justify-center gap-4 px-4">
      {currentFavorites.map((date) => (
        <FavoriteItem key={date} date={date} onRemove={handleRemoveFavorite} />
      ))}
    </div>
  )
}
