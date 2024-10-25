import React from "react"

interface GridBackgroundProps {
  text: string
  subtitle: string
}

export function GridBackground({ text, subtitle }: GridBackgroundProps) {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] flex-col bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 pb-5">{text}</p>
      <p className="text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 text-center max-w-[800px]">{subtitle}</p>
    </div>
  )
}
