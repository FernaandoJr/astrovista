import HomeHeroSection from "@/components/astrovista/home-hero"
import { HeroHeader } from "@/components/ui/navbar"
import FeaturesSection from "../../components/astrovista/features-sections"

export default function Home() {
  return (
    <div className="">
      <HeroHeader />
      <HomeHeroSection />

      <FeaturesSection />
    </div>
  )
}
