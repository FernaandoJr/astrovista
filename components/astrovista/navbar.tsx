import Link from "next/link"
import ButtonLink from "@/components/ui/buttonlink"
import { ModeToggle } from "@/components/theme-menu"
import PlanetLogo from "./planet-logo"

const Navbar = (): JSX.Element => {
  return (
    <div className="w-full">
      <header className="flex h-auto w-full flex-row p-4">
        <Link href={"/"} className="my-auto flex items-center justify-center gap-2">
          <PlanetLogo size={28} />
          <p className="text-xl font-bold">AstroVista</p>
          <span className="sr-only">Home Icon</span>
        </Link>
        <nav className="ml-auto flex items-center">
          <ButtonLink path="/apod" name="APOD" />
          <ButtonLink path="/gallery" name="Gallery" />
          <ButtonLink path="/about" name="About" />
          <ModeToggle />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
