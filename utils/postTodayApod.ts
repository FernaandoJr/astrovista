import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { postApod } from "@/lib/mongo/pictures"
import { Picture } from "@/lib/mongo/pictures"


function scheduleDailyTask() {
  console.log("Scheduling daily task...")
  const now = new Date()
  console.log("Current time:", now)
  const nextMidnight = new Date(now)
  nextMidnight.setUTCHours(24, 0, 0, 0) // Set to next 00:00 UTC
  console.log("Next midnight:", nextMidnight)

  const timeUntilNextMidnight = nextMidnight.getTime() - now.getTime()
  console.log("Time until next midnight (s):", timeUntilNextMidnight / 1000)

  // Set a timeout to trigger at the next 00:00 UTC
  setTimeout(() => {
    console.log("Timeout reached, triggering API call...")
    // Call the API and handle the response
    triggerPostApod()

    // Set an interval to trigger every 24 hours
    setInterval(() => {
      console.log("Interval reached, triggering API call...")
      triggerPostApod()
    }, 24 * 60 * 60 * 1000)
  }, timeUntilNextMidnight)

  async function triggerPostApod() {
    try {
      console.log("Calling API...")
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
      const data: Picture = await response.json()
      console.log("API response:", data)

      // Post the picture to the database
      console.log("Posting data to the database...")
      await postApod(data)
      console.log("Data posted successfully")
    } catch (error) {
      console.error("Error calling API:", error)
    }
  }
}

scheduleDailyTask()
