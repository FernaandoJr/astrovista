'use client'
import { BentoGrid, BentoItem } from '@/components/blocks/bento-grid'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Code, Database, Search, Zap } from 'lucide-react'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.2,
      },
    },
  },
}

const techStackItems: BentoItem[] = [
  {
    title: 'Next.js 15 & React 19',
    description:
      'Modern React framework with App Router, server components, and cutting-edge performance optimizations for lightning-fast user experiences.',
    icon: <Code className="h-6 w-6 text-blue-500" />,
    tags: ['frontend', 'react', 'ssr', 'performance'],
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: 'Hono API Server',
    description:
      'Ultra-fast, lightweight web framework designed for edge computing with exceptional performance and developer experience.',
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    tags: ['backend', 'api', 'edge', 'fast'],
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: 'MongoDB & Prisma',
    description:
      'Robust NoSQL database with type-safe ORM providing reliable data persistence and seamless developer experience.',
    icon: <Database className="h-6 w-6 text-green-500" />,
    tags: ['database', 'ORM', 'nosql', 'typesafe'],
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: 'Advanced Search Engine',
    description:
      'Powerful full-text search capabilities with intelligent filtering, date ranges, and pagination for exploring 25+ years of space imagery.',
    icon: <Search className="h-6 w-6 text-purple-500" />,
    tags: ['search', 'filter', 'pagination', 'discovery'],
    colSpan: 2,
    rowSpan: 1,
  },
]

export default function AboutUs() {
  return (
    <div className="container mx-auto min-h-screen py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold">About Us</h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Learn about AstroVista&apos;s mission to bring NASA&apos;s Astronomy Picture of the Day
          archive to space enthusiasts through modern technology and beautiful design.
        </p>
      </div>
      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="px-4">
              <h2 className="text-2xl font-bold">Built with Modern Technology</h2>
              <p className="text-muted-foreground text-xl">
                Built with cutting-edge technologies for exceptional performance and scalability.
              </p>
            </div>

            <BentoGrid items={techStackItems} />
          </AnimatedGroup>
        </div>
      </section>

      {/* Roadmap */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedGroup variants={transitionVariants}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">Future Roadmap</h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Exciting features and improvements coming soon to enhance your cosmic exploration
                experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Star className="h-6 w-6 text-yellow-500" />,
                  title: 'Personal Collections',
                  desc: 'Save and organize favorite APODs',
                },
                {
                  icon: <Smartphone className="h-6 w-6 text-blue-500" />,
                  title: 'Mobile App',
                  desc: 'React Native companion app',
                },
                {
                  icon: <Globe className="h-6 w-6 text-green-500" />,
                  title: 'Internationalization',
                  desc: 'Multi-language support',
                },
                {
                  icon: <Rocket className="h-6 w-6 text-purple-500" />,
                  title: 'Mars Rover Photos',
                  desc: 'Integration with Mars APIs',
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-pink-500" />,
                  title: 'AI Recommendations',
                  desc: 'Smart content discovery',
                },
                {
                  icon: <Users className="h-6 w-6 text-indigo-500" />,
                  title: 'Social Features',
                  desc: 'Sharing and community',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 bg-white/30 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg dark:bg-slate-800/30">
                  <CardContent className="p-0">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-white/50 p-2 dark:bg-slate-700/50">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedGroup>
        </div>
      </section> */}
    </div>
  )
}
