import HomeHeroSection from "@/components/astrovista/home-hero"
import { HeroHeader } from "@/components/ui/navbar"
import StatisticsSections from "../../components/astrovista/statistics-sections"

export default function Home() {
  return (
    <div className="">
      <HeroHeader />
      <HomeHeroSection />

      <StatisticsSections />
    </div>
  )
}
