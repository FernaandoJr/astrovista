import HomeHeroSection from '@/components/templates/home-hero'
import FeaturesSection from '../../components/templates/features-sections'
import { Footer } from '@/components/templates/footer-section'

export default function Home() {
  return (
    <div className="">
      <HomeHeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
