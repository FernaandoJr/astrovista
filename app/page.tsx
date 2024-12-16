import Banner from "../components/banner"
import { StarsBanner } from "../components/stars-banner"
import { Separator } from "@radix-ui/react-separator"
import BirthCall from './../components/birth-call';

export default function Home() {
  return (
    <div className="">
      <StarsBanner />
      <Banner />
      <Separator className="my-8" />
      <BirthCall />
    </div>
  )
}
