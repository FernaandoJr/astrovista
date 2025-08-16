import { Apod } from '@/lib/types/apod'
import Image from 'next/image'

interface APodInfoProps {
  data: Apod
  hasController?: boolean
}

export default function ApodInfo({ data, hasController = false }: APodInfoProps) {
  return (
    <>
      <Image
        src={data.url}
        onClick={() => window.open(data.hdurl, '_blank')}
        className="w-auto cursor-pointer rounded-xl"
        alt={data.title}
        width={900}
        height={900}
      />

      <p className="text-muted-foreground mt-4">{`© ${data.copyright}`}</p>
      <div className="container mx-auto mt-8 flex flex-col lg:max-w-[900px]">
        <h1 className="mb-4 text-2xl font-bold select-none">{data.title}</h1>
        <p className="text-muted-foreground">{data.explanation}</p>
      </div>

      {hasController && (
        <div className="mt-8">
          <button className="btn">Previous</button>
          <button className="btn">Next</button>
        </div>
      )}
    </>
  )
}
