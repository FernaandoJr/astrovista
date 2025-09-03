import { serve } from '@hono/node-server'
import app from './index'
import { CronJobService } from './services/cronJobs'
import { findAvailablePort } from './utils'

const startServer = async () => {
  const startPort = process.env.PORT ? parseInt(process.env.PORT) : 3000
  const port = await findAvailablePort(startPort)

  console.log(`🚀 Server is starting on port ${port}...`)

  const server = serve({
    fetch: app.fetch,
    port,
  })

  server.on('listening', () => {
    console.log(`✅ Server is running on port ${port}`)
    console.log(`🌐 Open http://localhost:${port}`)

    // Inicia o cron job para buscar APODs automaticamente
    const apiKey = process.env.NASA_API_KEY
    if (apiKey) {
      const cronService = new CronJobService(`http://localhost:${port}`, apiKey)
      cronService.startApodCronJob()
    } else {
      console.warn('⚠️ NASA_API_KEY não encontrada - Cron job não foi iniciado')
    }
  })

  server.on('error', (error) => {
    console.error('❌ Server error:', error)
    process.exit(1)
  })
}

startServer().catch(console.error)
