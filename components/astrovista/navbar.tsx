import Link from "next/link"
import { Pyramid } from "lucide-react"
import ButtonLink from "@/components/ui/buttonlink"
import { ModeToggle } from "@/components/theme-menu"

const Navbar = (): JSX.Element => {
  return (
    <div className="w-full">
      <header className="flex h-auto w-full flex-row p-4">
        <Link href={"/"} className="my-auto">
          <Pyramid className="h-7 w-7" />
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
