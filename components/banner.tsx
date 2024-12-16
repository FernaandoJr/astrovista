import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import BannerImg from "@/public/banner.jpg"
import { Separator } from "@/components/ui/separator"

/* 
    BREAKPOINTS FOR TAILWIND CSS
    sm - 640px
    md - 768px
    lg - 1024px
    xl - 1280px
    2xl - 1536px
*/

// Text content
const title = "NASA's Image of the Day"

const description = "Welcome to AstroVista! An open-source web application that provides images from NASA's Astronomy Picture of the Day API. Our goal is to inspire and educate users about the wonders of the universe through stunning visuals. We welcome contributions and collaboration from the community, so to contribute to the project repository, please feel free to participate!"

const Banner = () => {
  return (
    <section className="py-20 px-9 flex justify-center flex-row gap-6 flex-wrap ">
      <div className="md:w-[550px]">
        <div className="">
          <h1 className="text-4xl font-bold pb-3 tracking-tighter sm:text-3xl md:text-2xl lg:text-4xl">{title}</h1>
          <p className="text-base font-light max-w-[500px] text-muted-foreground sm:text-base text-justify">{description}</p>
        </div>
        <div className="w-auto flex flex-row gap-4 py-4 sm:flex-auto">
          <Button size={"lg"}>
            <Link href="/apod">Get Started</Link>
          </Button>
          <Button size={"lg"} variant={"outline"}>
          <Link href="/about" >About us</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={BannerImg} alt="Banner image" className="w-[550px] object-fill aspect-video overflow-hidden flex-wrap rounded-xl" />
      </div>
      <Separator className="my-8" />
      <section>
      </section>
    </section>
  )
}

export default Banner
