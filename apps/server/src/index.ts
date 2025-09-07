import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import apods from './routers/apods.js'

const app = new Hono()

app.use(logger())
app.use('/*', cors())

app.get('/', (c) => c.text('Hello World'))

app.route('/apods', apods)

export default app
