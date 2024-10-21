import Link from "next/link"
import { Pyramid } from "lucide-react"
import ButtonLink from "@/components/ui/buttonlink"
import { ModeToggle } from "./theme-menu"

const Navbar = (): JSX.Element => {
  return (
    <div className="">
      <header className="w-full h-auto p-4 flex flex-row">
        <Link href={"/"}>
          <Pyramid className="h-7 w-7" />
          <span className="sr-only">Home Icon</span>
        </Link>
        <nav className="ml-auto flex items-center">
          <ButtonLink path="/apod" name="APOD" />
          <ButtonLink path="/about" name="About" />
          <ModeToggle />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
