import FavoriteApods from "../../../components/astrovista/favorites-apods"
export default function FavoritesPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 py-12">
        <h1 className="text-title">Favorite APODs</h1>
        <p className="text-muted-foreground">This is a placeholder for the favorites page.</p>
      </div>

      <FavoriteApods />
    </div>
  )
}
