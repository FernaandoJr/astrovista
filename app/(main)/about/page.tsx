"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GridBackground } from "../../../components/grid-background"

const technologies = [
  { name: "Next.js", icon: "/icons/nextjs-light.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-light.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Vercel", icon: "/icons/vercel-light.svg" },
  { name: "Shadcn", icon: "/icons/shadcn.png" },
  { name: "Acetertinity", icon: "/icons/aceternity.png" },
  { name: "v0", icon: "/icons/v0.svg" },
]

const FuturePlans = [{ desc: "Implementing a user favorite system to save and categorize favorite images" }, { desc: "Adding a community forum for discussions about astronomy and space exploration" }, { desc: "Developing an educational section with resources for students and teachers" }, { desc: "Creating a mobile app version for on-the-go cosmic exploration" }, { desc: "Adding a Gallery page, where you can search by date and explore the entire APOD archive" }]

const Contributors = [{ name: "Fernando Junior", role: "Project Owner", image: "https://avatars.githubusercontent.com/u/90939363" }]

const features = [
  { title: "Daily Space Images", description: "Explore a new astronomical wonder every day." },
  { title: "Detailed Explanations", description: "Learn about each image from expert astronomers." },
  { title: "Search Archive", description: "Dive into past APODs and discover the universe&apos;s history." },
  { title: "Mobile Responsive", description: "Enjoy the cosmos on any device, anywhere. " },
]

const AditionalInfo = "Our application uses NASA's popular Astronomy Picture of the Day (APOD) API, delivering a new space image daily with a professional astronomer's explanation. The API also provides metadata and keywords, enhancing discoverability and allowing integration into other apps or social media with auto-generated hashtags."

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      <GridBackground text="About Us" subtitle="An open-source project bringing the wonders of space to your screen, powered by NASA's Astronomy Picture of the Day API." />
      <div className="container mx-auto px-4 space-y-10 py-10 ">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center space-y-4"></motion.section>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tech">Technologies</TabsTrigger>
            <TabsTrigger value="contributors">Contributors</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>Explore the cosmos through daily astronomical images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>AstroVista is an open-source web application that leverages NASA&apos;s Astronomy Picture of the Day (APOD) API to bring stunning space imagery to users every day. Our mission is to inspire curiosity about the universe and make space exploration accessible to everyone.</p>
                <Accordion type="single" collapsible className="w-full">
                  {features.map((feature, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{feature.title}</AccordionTrigger>
                      <AccordionContent>{feature.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technologies */}
          <TabsContent value="tech">
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
                <CardDescription>Built with cutting-edge web technologies, modern components libraries and AI tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  {technologies.map((tech) => (
                    <motion.div key={tech.name} className="flex flex-col items-center space-y-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <div className="bg-muted rounded-full p-2">
                        <Image src={tech.icon} alt={tech.name} width={80} height={80} className="" />
                      </div>
                      <span className="text-base font-medium mx-0">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="contributors">
            <Card>
              <CardHeader>
                <CardTitle>Contributors</CardTitle>
                <CardDescription>Meet the contributors who made this project possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Contributors.map((member, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex flex-col items-center p-6">
                              <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full mb-4" />
                              <h3 className="font-semibold text-lg">{member.name}</h3>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Info */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>NASA APOD API</CardTitle>
              <CardDescription>Powered by NASA&apos;s Astronomy Picture of the Day</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{AditionalInfo}</p>
              <Button asChild variant="outline">
                <Link href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">
                  Learn more about NASA APIs <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Open Source */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Join us in exploring the stars</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>AstroVista is an open-source project, and we welcome contributions from developers of all skill levels. Whether you want to fix a bug, add a feature, or improve our documentation, your help is appreciated!</p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="https://github.com/FernaandoJr/AstroVista" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://github.com/FernaandoJr/AstroVista/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                      How to Contribute <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Future Plans */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Future Plans</CardTitle>
              <CardDescription>Our roadmap for the stars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We&apos;re constantly working to improve AstroVista and expand its features. Some of our future plans include:</p>
              <ul className="list-disc pl-6 space-y-2">
                {FuturePlans.map((plan, index) => (
                  <li key={index}>{plan.desc}</li>
                ))}
              </ul>
              <p>We&apos;re excited about the future of AstroVista and invite you to join us on this cosmic journey!</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  )
}
