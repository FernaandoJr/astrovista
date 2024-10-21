import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import BannerImg from "@/public/banner.jpg"

/* 
    BREAKPOINTS FOR TAILWIND CSS
    sm - 640px
    md - 768px
    lg - 1024px
    xl - 1280px
    2xl - 1536px
*/

const Banner = () => {
  return (
    <section className="pt-20 px-9 flex justify-center flex-row gap-6 flex-wrap ">
      <div className="md:w-[550px]">
        <div className="">
          <h1 className="text-4xl font-bold pb-3 tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">NASA&apos;s Image of the Day</h1>
          <p className="text-base font-light max-w-[500px] text-muted-foreground sm:text-base text-justify">Welcome to my personal project, NASA&apos;s Image of the Day! This project is a simple web application that fetches the Astronomy Picture of the Day (APOD) from NASA&apos;s API. The APOD API provides a new image or video every day, along with a brief explanation written by a professional astronomer. I built this project to practice my skills with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
        <div className="w-auto flex flex-row gap-4 py-4 sm:flex-auto">
          <Button asChild>
            <Link href="/apod">Get Started</Link>
          </Button>
          <Link href="/about" className={buttonVariants({ variant: "outline" })}>
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={BannerImg} alt="Banner image" className="w-[550px] object-fill aspect-video overflow-hidden flex-wrap rounded-xl" />
      </div>
    </section>
  )
}

export default Banner
