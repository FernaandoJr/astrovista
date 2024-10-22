import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AstroVista: APOD",
  description: "NASA's Astronomy Picture of the Day",
  keywords: "NASA, APOD, Astronomy, Picture, Day, AstroVista, Astro, Vista",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="@/public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
