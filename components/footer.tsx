import { Facebook, Instagram, Twitter, Pyramid } from "lucide-react"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

const description = "AstroVista is open-source web application that provides images from NASA's Astronomy Picture of the Day API."

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Pyramid />
              <span className="ml-2 text-xl font-bold">AstroVista</span>
            </div>
            <p className="max-w-xs mt-4 text-sm text-muted-foreground">{description}</p>
            <div className="flex mt-8 space-x-6 text-muted-foreground">
              <Link className="hover:text-primary" href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link className="hover:text-primary" href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link className="hover:text-primary" href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="font-medium">Navigation</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
                <Link className="hover:text-primary" href="#">
                  APOD
                </Link>
                <Link className="hover:text-primary" href="#">
                  About
                </Link>
                <Link className="hover:text-primary" href="#">
                  Gallery
                </Link>
                <Link className="hover:text-primary" href="#">
                  Source Code
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 AstroVista. Licensed under{" "}
            <Link className="hover:text-primary" href="#">
              MIT License
            </Link>
            . Feel free to use and contribute!
          </p>
          <div className="flex mt-4 space-x-4 sm:mt-0">
            <p className="text-xs text-muted-foreground hover:text-primary">Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
