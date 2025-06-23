import { CheckCircle, Globe, TrendingUp, Video, Code } from "lucide-react"
import { BentoGrid, BentoItem } from "../ui/bento-grid"
import { NumberTicker } from "../ui/number-ticker"

export default function StatisticsSections() {
  const itemsSample: BentoItem[] = [
    {
      title: "APOD Collection",
      meta: (
        <span className="text-accent-foreground">
          <NumberTicker value={10950} />+
        </span>
      ),
      description:
        "Our comprehensive archive contains every NASA Astronomy Picture of the Day since June 16, 1995. Each image is fully cataloged with scientific explanations and metadata.",
      icon: <TrendingUp className="text-primary h-6 w-6" />,
      status: "Active",
      tags: ["Complete Archive", "NASA Partnership", "Daily Updates"],
      hasPersistentHover: true,
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "Years of Cosmic Wonder",
      meta: (
        <span className="text-accent-foreground">
          <NumberTicker value={30} />+
        </span>
      ),
      description:
        "For three decades, we've curated NASA's astronomical discoveries, from the Hubble Deep Field to James Webb's first images, documenting humanity's expanding cosmic perspective.",
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      status: "Milestone",
      tags: ["Archive", "Space Exploration", "Scientific Discovery"],
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "Multimedia Experience",
      meta: (
        <span className="text-accent-foreground">
          <NumberTicker value={2150} />+
        </span>
      ),
      description:
        "Beyond still images, our collection features HD videos, time-lapses, and interactive visualizations of celestial phenomena from NASA and leading observatories worldwide.",
      icon: <Video className="h-6 w-6 text-purple-500" />,
      status: "Diverse",
      tags: ["Videos", "Time-lapse", "Interactive Content"],
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Global Observatory Network",
      meta: "42 Partners",
      description:
        "Collaborating with observatories across 6 continents to deliver real-time astronomical data and imagery through our edge-optimized content delivery system.",
      icon: <Globe className="h-6 w-6 text-sky-500" />,
      status: "Expanding",
      tags: ["Collaboration", "Open-source"],
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Open-Source Project",
      meta: (
        <span className="text-accent-foreground">
          <NumberTicker value={245} />+ Contributors
        </span>
      ),
      description:
        "AstroVista is proudly open-source, with all code and data processing algorithms available on GitHub. Join our growing developer community and help build the future of astronomical data visualization.",
      icon: <Code className="h-6 w-6 text-gray-500" />,
      status: "Collaborative",
      tags: ["MIT License", "Public APIs", "Developer Resources"],
      colSpan: 3,
      rowSpan: 1,
    },
  ]

  return (
    <section className="mx-auto py-4">
      <BentoGrid items={itemsSample} />
    </section>
  )
}
