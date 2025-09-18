'use client'

import { cn } from '@/utils/cn'
import * as React from 'react'
import { AnimatedGroup } from '../ui/animatedGroup'

export interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string | React.ReactNode
  cta?: string
  colSpan?: number
  rowSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
}

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
        duration: 4,
      },
    },
  },
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
              duration: 0.5,
            },
          },
        },
        ...transitionVariants,
      }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 p-4 md:auto-rows-[minmax(180px,auto)] md:grid-cols-3 md:grid-rows-[auto]">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'group relative overflow-hidden rounded-xl p-4 transition-all duration-500',
              'dark:bg-card bg-card dark:border-border border',
              'hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]',
              'will-change-transform hover:-translate-y-0.5',
              item.colSpan || 'col-span-1',
              item.colSpan === 2 ? 'md:col-span-2' : '',
              item.colSpan === 3 ? 'md:col-span-3' : '',
              item.colSpan === 4 ? 'md:col-span-4' : '',
              item.rowSpan === 2 ? 'md:row-span-2' : '',
              item.rowSpan === 3 ? 'md:row-span-3' : '',
              {
                '-translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]': item.hasPersistentHover,
                'dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]': item.hasPersistentHover,
              },
            )}>
            <div
              className={`absolute inset-0 ${
                item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              } transition-opacity duration-300`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
            </div>

            <div className="relative flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 transition-all duration-300 group-hover:bg-gradient-to-br dark:bg-white/10">
                  {item.icon}
                </div>
                {item.status && (
                  <span
                    className={cn(
                      'rounded-lg px-2 py-1 text-xs font-medium backdrop-blur-sm',
                      'bg-accent-foreground text-accent',
                      'dark:group-hover:bg-accent-foreground/80 group-hover:bg-accent-foreground/80 transition-colors duration-300',
                    )}>
                    {item.status}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-foreground text-2xl font-medium tracking-tight">
                  {item.title}
                  <span className="text-secondary dark:text-accent-foreground ml-2 text-lg font-normal">
                    {item.meta}
                  </span>
                </h3>
                <p className="text-muted-foreground text-md leading-snug font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-accent-foreground flex flex-wrap items-center gap-2 text-xs">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-accent hover:bg-accent/80 rounded-md px-2 py-1 backdrop-blur-sm transition-all duration-200 dark:bg-white/10 dark:hover:bg-white/20">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
                  {item.cta}
                </span>
              </div>
            </div>

            <div
              className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-gray-100/50 to-transparent p-px dark:via-white/10 ${
                item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              } transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>
    </AnimatedGroup>
  )
}

export { BentoGrid }
