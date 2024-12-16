import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MoveLeft, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <AlertCircle className="mx-auto h-24 w-24 text-red-600" aria-hidden="true" />
        <h1 className="mt-2 text-4xl font-extrabold  tracking-tight sm:text-5xl">
          Page not found!
        </h1>
        <p className="mt-2 text-lg font-light text-muted-foreground">
        Houston, we have a problem. The page you&apos;re looking for has drifted off into the cosmos.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/" className="inline-flex items-center">
              <MoveLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

