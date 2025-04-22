"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GridBackground } from "@/components/grid-background"
import { Contributor } from "../../../components/astrovista/contributor"

const technologies = [
  { name: "Next.js", icon: "/icons/svg/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/svg/tailwind.svg" },
  { name: "Vercel", icon: "/icons/svg/vercel.svg" },
  { name: "Shadcn/ui", icon: "/icons/svg/shadcnui.svg" },
  { name: "Aceternity", icon: "/icons/svg/aceternity.svg" },
  { name: "v0", icon: "/icons/svg/v0.svg" },
]

const FuturePlans = [{ desc: "Implementing a user favorite system to save and categorize favorite images." }, { desc: "Internalization by changing automatically to the user current device language." }, { desc: "Mars Hover Photos NASA API implementation" }]

const Contributors = [
  {
    nickname: "FernaandoJr",
    name: "Fernando Junior",
    role: "Project Owner",
    image: "https://avatars.githubusercontent.com/u/90939363",
    linkedin: "https://www.linkedin.com/in/fernaandojr/",
    github: "https://github.com/FernaandoJr",
  },
]

const projectOverview = "AstroVista is an open-source web application that leverages NASA's Astronomy Picture of the Day (APOD) API to bring stunning space images to users every day. Our mission is to inspire curiosity about the universe and make space exploration accessible to everyone."

const features = [
  { title: "Daily Space Images", description: "Explore a new astronomical fetched every day." },
  { title: "Detailed Explanations", description: "Learn about each image from astronomers explanation." },
  { title: "Gallery Archive", description: "Browse all APODs since 1995, with search, sort by title, and filter by image or video." },
  { title: "Mobile Responsive", description: "Enjoy the cosmos on any device, anywhere." },
]

const AditionalInfo = "Our application uses NASA's popular Astronomy Picture of the Day (APOD) API, delivering a new space image daily with a professional astronomer's explanation. The API provides a wealth of information about the astronomy, including images and videos. By integrating this API into our application, we aim to make space exploration accessible to everyone."

const openSource = "AstroVista is an open-source project, and we welcome contributions from developers and space enthusiasts alike. Whether you're a seasoned developer or just starting out, there are many ways to get involved. You can help us improve the code, add new features, or simply spread the word about our project."

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("overview")
  return (
    <>
      <GridBackground text="About Us" subtitle="An open-source project bringing the wonders of space to your screen, powered by NASA's Astronomy Picture of the Day API." />
      <div className="mx-auto w-full md:container">
        <div className="mx-auto space-y-10 px-4 py-10 sx:mx-3 sx:px-2 sx:py-2">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4 text-center"></motion.section>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full py-0">
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
                  <p>{projectOverview}</p>
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
                  <CardDescription>Built with modern web languages and framework, components libraries and AI tools.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech) => (
                      <motion.div key={tech.name} className="flex flex-col items-center space-y-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
                        <div className="p-2">
                          <Image src={tech.icon} alt={tech.name} width={80} height={80} className="" />
                        </div>
                        <span className="mx-0 text-base font-medium">{tech.name}</span>
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
                  {Contributors.map((contributor, index) => (
                    <Contributor key={index} nickname={`@${contributor.nickname}`} name={contributor.name} role={contributor.role} img={contributor.image} linkedin={contributor.linkedin} github={contributor.github} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Info */}
          <div className="grid gap-8 lg:grid-cols-2">
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
              <Card className="flex h-full flex-col justify-center">
                <CardHeader>
                  <CardTitle>Open Source</CardTitle>
                  <CardDescription>Join us in exploring the stars</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{openSource}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="https://github.com/FernaandoJr/AstroVista" target="_blank" rel="noopener noreferrer">
                        <SiGithub className="mr-2 h-4 w-4" /> View on GitHub
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
                <CardDescription>Our roadmap features to be implemented</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We&apos;re constantly working to improve AstroVista and expand its features. Some of our future plans include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  {FuturePlans.map((plan, index) => (
                    <li key={index}>{plan.desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}
