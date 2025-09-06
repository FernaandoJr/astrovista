import { handlerLinks } from '@/utils/handlerLinks'
import { searchResponse } from '@/utils/searchResponse'
import { validateSearchParams } from '@/utils/validateSearchParams'
import axios from 'axios'
import { Hono } from 'hono'
import { rateLimiter } from 'hono-rate-limiter'
import { PrismaClient, type Pictures } from 'prisma/generated/client'
import { errorResponse } from '../utils/errorResponse.js'

const prisma = new PrismaClient()
const apods = new Hono()

apods.get('/', async (c) => {
  const latestApod = await prisma.pictures.findFirst({
    orderBy: {
      date: 'desc',
    },
  })

  if (!latestApod) {
    return c.text('No APOD found', 404)
  }

  return c.json(latestApod)
})

apods.get(
  '/all',
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 1,
    standardHeaders: 'draft-6',
    keyGenerator: () => '<unique_key>',
  }),
  async (c) => {
    const id = c.req.query('id')
    const apods = await prisma.pictures.findMany({
      select: {
        id: id === 'true' ? true : false,
        date: true,
        title: true,
        media_type: true,
        url: true,
        explanation: true,
        copyright: true,
        hdurl: true,
        service_version: true,
      },
    })

    return c.json(apods)
  },
)

apods.post(
  '/',
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 1,
    standardHeaders: 'draft-6',
    keyGenerator: (c) => '<unique_key>',
  }),
  async (c) => {
    const key = c.req.header('x-api-key')

    if (!key || key !== process.env.NASA_API_KEY) {
      return c.json(errorResponse('Unauthorized', 'Invalid or missing API key', 401), 401)
    }

    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    const newApod = response.data as Pictures

    const exists = await prisma.pictures.findFirst({
      where: {
        date: newApod.date,
      },
    })

    if (exists) {
      return c.json(errorResponse('APOD already exists', 'APOD for this date already exists', 409), 409)
    }

    await prisma.pictures.create({
      data: newApod,
    })

    return c.json(newApod, 201)
  },
)

apods.get('/search', async (c) => {
  // Pega os parâmetros da URL
  const query = c.req.query('q')
  const startDate = c.req.query('startDate')
  const endDate = c.req.query('endDate')
  const mediaType = c.req.query('mediaType')
  const perPage = c.req.query('perPage') ? Number(c.req.query('perPage')) : 10
  const page = c.req.query('page') ? Number(c.req.query('page')) : 1
  const sort = c.req.query('sort') || 'desc'

  // Valida todos os parâmetros
  const validationError = validateSearchParams({ startDate, endDate, mediaType, perPage, page, sort })
  if (validationError) {
    return c.json(validationError, 400)
  }

  // Monta os filtros de busca
  const filters: any = {}

  if (query) {
    filters.title = {
      contains: query,
      mode: 'insensitive',
    }
  }

  if (startDate || endDate) {
    filters.date = {}
    if (startDate) filters.date.gte = startDate
    if (endDate) filters.date.lte = endDate
  }

  if (mediaType) {
    filters.media_type = mediaType
  }

  // Busca os APODs
  const skip = (page - 1) * perPage
  const apods = await prisma.pictures.findMany({
    where: filters,
    orderBy: {
      date: sort === 'asc' ? 'asc' : 'desc',
    },
    take: perPage,
    skip: skip,
  })

  // Conta o total para paginação
  const totalRecords = await prisma.pictures.count({
    where: filters,
  })

  const hasNextPage = !!(page && perPage && apods.length === perPage)
  const hasPreviousPage = page > 1

  if (apods.length === 0) {
    return c.json(errorResponse('No APODs found', 'No results for the given query', 404), 404)
  }
  return c.json(
    searchResponse({
      apods,
      totalRecords,
      totalPages: Math.ceil(totalRecords / perPage),
      page: page,
      perPage: perPage,
      sort: sort,
      hasNextPage,
      hasPreviousPage,
      links: handlerLinks({
        hasNextPage,
        hasPreviousPage,
        totalPages: Math.ceil(totalRecords / perPage),
        query,
        startDate,
        endDate,
        mediaType,
        perPage,
        page,
        sort,
      }),
    }),
  )
})

apods.get('/random', async (c) => {
  const randomApod = await prisma.pictures.findFirst({
    orderBy: {
      date: 'asc',
    },
    take: 1,
    skip: Math.floor(Math.random() * (await prisma.pictures.count())),
  })
  if (!randomApod) {
    return c.json(errorResponse('No APOD found', 'No random APOD available', 404), 404)
  }
  return c.json(randomApod)
})

apods.get('/:date', async (c) => {
  const date = c.req.param('date')
  const apodData = await prisma.pictures.findFirst({
    where: {
      date: date,
    },
  })
  if (!apodData) {
    return c.json(errorResponse('APOD not found', `No APOD found for date: ${date}`, 404), 404)
  }
  return c.json(apodData)
})

export default apods
