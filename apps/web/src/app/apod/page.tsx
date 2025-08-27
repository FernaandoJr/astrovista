'use client'
import ApodInfo from '@/components/templates/apod-info'
import { useApod } from '@/hooks/useApod'
import { APOD } from '@repo/shared'

export default function ApodPage() {
  const { latest } = useApod()

  if (latest.isLoading) return <div>Carregando...</div>
  if (latest.error) return <div>Erro: {latest.error.message}</div>

  return (
    <div className="container mx-auto flex flex-col items-center pt-24">
      <h1 className="mb-4 text-3xl font-bold select-none">Astronomy Picture of the Day</h1>
      <ApodInfo data={latest.data as APOD} />
    </div>
  )
}
