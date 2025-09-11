import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedGroup } from '../ui/animatedGroup'
import { Button } from '../ui/button'

export default function HomeHeroSection() {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          type: 'spring' as const,
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate z-[2] hidden opacity-50 contain-strict md:block">
        <div className="absolute top-0 left-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute top-0 left-0 h-[80rem] w-56 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        <div className="absolute top-0 left-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section>
        <div className="relative pt-24 md:pt-36">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
          />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="/apod"
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                  <span className="text-foreground text-xs sm:text-sm">
                    {"Discover Today's Astronomy Picture"}
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1 className="mx-auto mt-8 max-w-4xl text-4xl text-balance sm:text-5xl md:text-6xl lg:mt-16 lg:text-7xl xl:text-[5.25rem]">
                  The Beauty of Space, Simplified.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base text-balance sm:mt-8 sm:text-lg">
                  {
                    "A modern and fast interface to explore NASA's Astronomy Picture of the Day. Built for space enthusiasts and the curious."
                  }
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="/gallery">
                      <span className="text-nowrap">Explore the Full Gallery</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5">
                  <Link href="/about">
                    <span className="text-nowrap">About the Project</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}>
            <div className="relative mt-8 overflow-hidden px-4 sm:mt-12 md:mt-20 lg:px-0">
              <div
                aria-hidden
                className="to-background absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35%"
              />
              <div className="ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 sm:p-4 dark:inset-shadow-white/20">
                <div className="relative aspect-video w-full md:aspect-[3/2] lg:aspect-[15/8]">
                  <Image
                    className="bg-background rounded-2xl object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
                    alt="app screen"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  )
}
