"use client"
import React from "react"
import { SparklesCore } from "@/components/ui/sparkles"
import { FlipWords } from "@/components/ui/flip-words"

const words = ["Stars", "Comets", "Nebulae", "Auroras", "The Moon", "Planets", "Galaxies", "Eclipses", "Asteroids", "Exoplanets", "Black Holes", "The Milky Way", "Meteor Showers", "Space Missions", "Constellations"]

export function StarsBanner() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none select-none">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
      </div>
      <div className="w-full flex h-fit">
        <h1 className="text-3xl mx-auto font-normal text-neutral-400 dark:text-neutral-400 sm:text-5xl md:text-6xl">
          See
          <FlipWords duration={1000} words={words} />
          <br />
          Like Never Before.
        </h1>
      </div>
    </div>
  )
}
