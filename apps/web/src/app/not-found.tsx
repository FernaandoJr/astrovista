import { Button } from '@/components/ui/button'
import { AlertCircle, MoveLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 text-center">
        <AlertCircle className="mx-auto h-20 w-20 text-red-600" aria-hidden="true" />
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found!</h1>
        <p className="text-muted-foreground mt-2 text-lg font-light">
          Houston, we have a problem. The page you&apos;re looking for has drifted off into the
          cosmos.
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
