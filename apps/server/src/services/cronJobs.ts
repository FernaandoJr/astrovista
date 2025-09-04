import axios from 'axios'
import * as cron from 'node-cron'

export class CronJobService {
  private baseUrl: string
  private apiKey: string

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  /**
   * Inicia o cron job que busca um novo APOD a cada hora
   */
  public startApodCronJob(): void {
    // Executa a cada hora (0 minutos de cada hora)
    cron.schedule('0 * * * *', async () => {
      try {
        console.log('🕐 [CRON] Executando job para buscar novo APOD...')

        const response = await axios.post(
          `${this.baseUrl}/apods`,
          {},
          {
            headers: {
              'x-api-key': this.apiKey,
              'Content-Type': 'application/json',
            },
          },
        )

        if (response.status === 201) {
          console.log('✅ [CRON] Novo APOD salvo com sucesso:', response.data.title)
        } else if (response.status === 409) {
          console.log('ℹ️ [CRON] APOD já existe para esta data')
        }
      } catch (error: any) {
        if (error.response?.status === 409) {
          console.log('ℹ️ [CRON] APOD já existe para esta data')
        } else {
          console.error('❌ [CRON] Erro ao buscar novo APOD:', error.message)
          console.error('Details:', error.response?.data || error)
        }
      }
    })

    console.log('⏰ [CRON] Job de APOD iniciado - executará a cada hora')
  }

  /**
   * Para todos os cron jobs
   */
  public stopAllJobs(): void {
    cron.getTasks().forEach((task) => task.stop())
    console.log('⏹️ [CRON] Todos os jobs foram parados')
  }
}
