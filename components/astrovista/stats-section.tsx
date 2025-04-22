"use server"

import { picturesCount } from "@/lib/mongo/pictures"
import { NumberTicker } from "./number-ticker"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "../ui/spinner"

const numbers = await picturesCount().then((count) => count - 1)
const years = new Date().getFullYear() - 1995 - 1

export default async function StatsSection() {
  return (
    <>
      {numbers ? (
        <div className="flex justify-evenly gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="flex flex-col items-center justify-center text-4xl font-bold">
              <div className="flex">
                <NumberTicker value={numbers} />+
              </div>
              <p className="text-xl text-muted-foreground">APODs</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Separator orientation="vertical" className="h-12" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex flex-col items-center justify-center text-4xl font-bold">
              <div className="flex">
                <NumberTicker value={years} />+
              </div>
              <p className="text-xl text-muted-foreground">Years of images</p>
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-screen w-full flex-wrap justify-center">
            <Spinner size="large">
              <p>Loading...</p>
            </Spinner>
          </div>
        </>
      )}
    </>
  )
}
