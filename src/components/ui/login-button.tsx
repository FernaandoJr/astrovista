import { CircleUserRound } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { ModeToggle } from './theme-menu'

export default function LoginButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <CircleUserRound className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-1">
          <DropdownMenuItem asChild>
            <Button variant="ghost" className="w-full">
              <Link href="/login">Login</Link>
            </Button>
          </DropdownMenuItem>
          <ModeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
