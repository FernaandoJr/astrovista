'use client'
import Favorites from '@/components/blocks/favorites'
import { Heart } from 'lucide-react'
import { Suspense, useEffect, useState } from 'react'

export default function FavoritesPage() {
  const [favoritesArray, setFavoritesArray] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only access localStorage on the client side
    const favorites = localStorage.getItem('favoritesApod') ?? '[]'
    const parsedFavorites = JSON.parse(favorites) as string[]
    setFavoritesArray(parsedFavorites)
    setIsLoading(false)
  }, [])

  const handleFavoritesUpdate = (updatedFavorites: string[]) => {
    setFavoritesArray(updatedFavorites)
  }

  if (isLoading) {
    return (
      <Suspense>
        <div className="container mx-auto flex flex-col items-center pt-24 pb-4">
          <h1 className="text-3xl font-bold select-none">Favorites</h1>
        </div>
        <div className="container mx-auto flex w-full flex-wrap justify-center gap-3 px-4">
          <div className="flex flex-col items-center justify-center py-12 text-center select-none">
            <div className="border-primary mb-2 h-10 w-10 animate-spin rounded-full border-b-2"></div>
            <h2 className="text-muted-foreground mb-2 text-2xl font-semibold">
              Loading favorites...
            </h2>
          </div>
        </div>
      </Suspense>
    )
  }

  return (
    <Suspense>
      <div className="container mx-auto flex flex-col items-center pt-24 pb-4">
        <h1 className="text-3xl font-bold select-none">Favorites</h1>
      </div>
      <div className="container mx-auto flex w-full flex-wrap justify-center gap-3 px-4">
        {favoritesArray.length > 0 ? (
          <Favorites favoritesArray={favoritesArray} onFavoritesUpdate={handleFavoritesUpdate} />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center select-none">
            <Heart className="text-primary mb-2 h-10 w-10" />
            <h2 className="text-muted-foreground mb-2 text-2xl font-semibold">No favorites yet</h2>
            <p className="text-muted-foreground">
              Start adding images to your favorites by clicking the heart icon in the gallery.
            </p>
          </div>
        )}
      </div>
    </Suspense>
  )
}
