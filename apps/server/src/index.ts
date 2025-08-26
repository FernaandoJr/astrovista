import "dotenv/config"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import apod from "./routers/apod"
import apods from "./routers/apods"

const app = new Hono()

app.use(logger())
app.use(
	"/*",
	cors({
		origin: process.env.CORS_ORIGIN || "",
		allowMethods: ["GET", "POST", "OPTIONS"],
	})
)

app.route("/apod", apod)
app.route("/apods", apods)

export default app
