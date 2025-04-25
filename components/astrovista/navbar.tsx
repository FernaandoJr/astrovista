"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PlanetLogo from "./planet-logo"

export default function Navbar() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "APOD",
      description: "Astronomy Picture of the Day",
      items: [
        {
          title: "Today's APOD",
          href: "/apod",
        },
        {
          title: "Gallery",
          href: "/gallery",
        },
        {
          title: "Favorites",
          href: "/favorites",
        },
      ],
    },
    {
      title: "Project",
      description: "Learn more about the project",
      items: [
        {
          title: "About us",
          href: "/about",
        },
      ],
    },
  ]

  return (
    <header className="sticky left-0 top-0 z-40 w-full select-none bg-background">
      <div className="container relative mx-auto flex flex-row items-center gap-4 py-6 lg:grid lg:grid-cols-3">
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost">{item.title}</Button>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                          <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                          <div className="flex h-full flex-col justify-end text-sm">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink href={subItem.href} key={subItem.title} className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted">
                                <span>{subItem.title}</span>
                                <MoveRight className="h-4 w-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href={"/"}>
          <div className="flex items-center gap-1 lg:justify-center">
            <PlanetLogo size={24} className="lg:hidden" />
            <p className="text-xl font-semibold">Astrovista</p>
          </div>
        </Link>
        <div className="flex w-full items-center justify-end gap-8">
          <ModeToggle />
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <DropdownMenu modal={true}>
            <DropdownMenuTrigger>
              <Menu className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mx-auto mt-2 p-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.title === "Home" ? null : (
                    <div className="flex w-full flex-col gap-2 p-4" key={item.title}>
                      {item.href ? (
                        <Link href={item.href} className="flex items-center justify-between">
                          <span className="text-lg">{item.title}</span>
                        </Link>
                      ) : (
                        <motion.div className="w-fit cursor-default select-none">
                          <p className="border-b-[1px] border-transparent text-lg transition-all duration-100 ease-in-out hover:border-b-[1px] hover:border-muted-foreground">{item.title}</p>
                        </motion.div>
                      )}
                      {item.items &&
                        item.items.map((subItem) => (
                          <Link key={subItem.title} href={subItem.href} className="flex items-center justify-between">
                            <motion.div
                              whileTap={{
                                scale: 0.9,
                              }}
                              whileHover={{
                                scale: 1.05,
                                zIndex: 1,
                              }}
                            >
                              <span className="text-muted-foreground">{subItem.title}</span>
                            </motion.div>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
