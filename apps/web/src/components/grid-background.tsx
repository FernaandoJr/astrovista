interface GridBackgroundProps {
  text: string
  subtitle: string
}

export function GridBackground({ text, subtitle }: GridBackgroundProps) {
  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-[40rem] w-full flex-col items-center justify-center bg-white dark:bg-black">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text pb-5 text-4xl font-bold text-transparent sm:text-7xl">
        {text}
      </p>
      <p className="relative z-20 max-w-[800px] bg-gradient-to-b from-neutral-400 to-neutral-600 bg-clip-text text-center text-xl text-transparent">
        {subtitle}
      </p>
    </div>
  )
}
