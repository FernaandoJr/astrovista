import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import BannerImg from "@/public/banner.jpg"

// Text content
const title = "NASA's Image of the Day"

const description = "Welcome to AstroVista! An open-source web application that brings the wonders of space to your screen by showcasing stunning images from NASA's Astronomy Picture of the Day (APOD) API. Built with modern technologies like Next.js, Tailwind CSS, and TypeScript, AstroVista aims to inspire curiosity about the cosmos while providing a platform for developers and space enthusiasts to collaborate, explore, and innovate."

const BannerHomePage = () => {
  return (
    <section className="flex w-full flex-row flex-wrap justify-between gap-4">
      <div className="sm:w-full md:w-full lg:w-[45%]">
        <div className="">
          <h1 className="pb-3 text-4xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">{title}</h1>
          <p className="text-justify text-base font-light text-muted-foreground sm:text-base">{description}</p>
        </div>
        <div className="flex w-auto flex-row gap-4 py-4 sm:flex-auto">
          <Button size={"lg"}>
            <Link href="/apod">Get Started</Link>
          </Button>
          <Button size={"lg"} variant={"outline"}>
            <Link href="/about">About us</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center sx:w-full sm:w-1/2 md:w-full lg:w-1/2">
        <Image src={BannerImg} alt="Banner image" className="aspect-video flex-wrap overflow-hidden rounded-xl object-fill" />
      </div>
    </section>
  )
}

export default BannerHomePage
