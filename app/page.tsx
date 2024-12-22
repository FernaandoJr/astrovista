import BannerHomePage from "../components/astrovista/banner-home-page"
import { StarsBanner } from "../components/astrovista/stars-banner"
import { Separator } from "../components/ui/separator"
import ExploreSection from "../components/astrovista/explore-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <StarsBanner />

      <div className="sm:py-15 sm:px-15 mx-auto flex w-full max-w-[1600px] flex-col sx:px-6 sx:py-6 md:px-8 md:py-8 lg:px-20 lg:py-20">
        <BannerHomePage />
        <Separator className="my-16 w-full" />
        <ExploreSection />
      </div>
    </div>
  )
}
