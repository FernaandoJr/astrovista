'use client'
import { APOD } from '@repo/shared'
import Image from 'next/image'

interface APodInfoProps {
  data: APOD
  hasController?: boolean
}

export default function ApodInfo({ data, hasController = false }: APodInfoProps) {
  return (
    <>
      {data.url && (
        <Image
          src={data.url}
          onClick={() => window.open(data.hdurl || data.url, '_blank')}
          className="w-auto cursor-pointer rounded-xl"
          alt={data.title}
          width={900}
          height={900}
        />
      )}

      <p className="text-muted-foreground mt-4">{`© ${data.copyright}`}</p>
      <div className="container mx-auto mt-8 flex flex-col lg:max-w-[900px]">
        <h1 className="mb-4 text-2xl font-bold">{data.title}</h1>
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
