import { BarChart2, Database, Library, Star } from 'lucide-react'
import { BentoGrid, BentoItem } from '../blocks/bentoGrid'
import { AnimatedGroup } from '../ui/animatedGroup'

export default function FeaturesSection() {
  const itemsSample: BentoItem[] = [
    {
      title: 'Complete NASA APOD Archive',
      description:
        'Access our complete archive containing every single NASA Astronomy Picture of the Day since 1995, with advanced search capabilities, scientific explanations.',
      icon: <Library className="text-primary h-6 w-6" />,
      tags: ['Archive', 'Search', 'Metadata', 'Collections'],
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: 'Personal Collection',
      description:
        'Create your own curated collection of cosmic wonders with our favorite system. Save images, organize them into custom albums, add personal notes, and share your collections with friends or the community.',
      icon: <Star className="h-6 w-6 text-amber-500" />,
      tags: ['Favorites', 'Collections', 'Sharing'],
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: 'Advanced Searching and Filtering Tools ',
      description:
        'Utilize our powerful search and filtering tools to explore the archive by date, tags, image type, and more. Find specific images or discover new favorites with ease.',
      icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
      tags: ['Search', 'Filter', 'Discovery'],
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: 'Developer Platform',
      description:
        'Build on our open API platform with comprehensive documentation. Create your own astronomical applications, or consume our API to integrate with your projects. Webhooks and SDKs available for seamless integration.',
      icon: <Database className="h-6 w-6 text-gray-500" />,
      tags: ['API', 'SDK', 'Webhooks', 'Integration'],
      colSpan: 2,
      rowSpan: 1,
    },
  ]

  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          type: 'spring' as const,
          bounce: 0.3,
          duration: 2,
        },
      },
    },
  }

  return (
    <section className="container mx-auto flex max-w-7xl py-4 select-none">
      <AnimatedGroup variants={transitionVariants} className="flex flex-col items-center">
        <h1 className="mx-auto p-4 text-4xl font-bold">Key Features</h1>
        <BentoGrid items={itemsSample} />
      </AnimatedGroup>
    </section>
  )
}
