import { Hono } from "hono"
import { rateLimiter } from "hono-rate-limiter"
import { PrismaClient } from "prisma/generated/client"
import { errorResponse } from "@/utils/errorResponse"
import { handlerLinks } from "@/utils/handlerLinks"
import { isValidDateFormat } from "@/utils/isValidDate"
import { searchResponse } from "@/utils/searchResponse"

const prisma = new PrismaClient()
const apods: Hono = new Hono()

apods.get(
	"/",
	rateLimiter({
		windowMs: 60 * 1000,
		limit: 1,
		standardHeaders: "draft-6",
		keyGenerator: () => "<unique_key>",
	}),
	async (c) => {
		const key = c.req.header("x-api-key")

		if (key !== process.env.API_KEY) {
			return c.json(
				errorResponse(
					"Unauthorized",
					"Invalid or missing API key",
					401
				),
				401
			)
		}

		const id = c.req.query("id")
		if (id === "false") {
			const apods = await prisma.pictures.findMany({
				select: {
					id: false,
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
		}

		const apods = await prisma.pictures.findMany()

		return c.json(apods)
	}
)

apods.get("/search", async (c) => {
	const query = c.req.query("q")
	const today = new Date()
	const formattedToday = today.toISOString().split("T")[0] // YYYY-MM-DD
	let startDate = c.req.query("startDate") || formattedToday
	let endDate = c.req.query("endDate") || formattedToday
	const mediaType = c.req.query("mediaType")
	const perPage = c.req.query("perPage") ? Number(c.req.query("perPage")) : 10
	const page = c.req.query("page") ? Number(c.req.query("page")) : 1
	const sort = c.req.query("sort")

	// Start date is after end date
	if (new Date(startDate) > new Date(endDate)) {
		return c.json(
			errorResponse(
				"Invalid date range",
				"startDate cannot be after endDate",
				400
			),
			400
		)
	}

	if (
		isValidDateFormat(startDate) === false ||
		isValidDateFormat(endDate) === false
	) {
		return c.json(
			errorResponse(
				"Invalid date format",
				"Date must be in YYYY-MM-DD format",
				400
			),
			400
		)
	}

	if (startDate === endDate) {
		startDate = ""
		endDate = ""
	}

	if (mediaType && !["image", "video"].includes(mediaType)) {
		return c.json(
			errorResponse(
				"Invalid media type",
				"Media type must be 'image' or 'video'",
				400
			),
			400
		)
	}

	if (perPage >= 200 || perPage < 1 || isNaN(perPage)) {
		return c.json(
			errorResponse(
				"Invalid perPage value",
				"perPage must be a number less than 200 and greater than 0",
				400
			),
			400
		)
	}
	if (page < 1) {
		return c.json(
			errorResponse(
				"Invalid page number",
				"Page must be greater than 0",
				400
			),
			400
		)
	}

	if (sort && !["asc", "desc"].includes(sort)) {
		return c.json(
			errorResponse(
				"Invalid sort value",
				"sort must be 'asc' or 'desc'",
				400
			),
			400
		)
	}

	const skip = page && perPage ? (page - 1) * perPage : undefined

	const apods = await prisma.pictures.findMany({
		where: {
			title: {
				contains: query || "",
				mode: "insensitive",
			},
			date: {
				gte: startDate ? startDate : undefined,
				lte: endDate ? endDate : undefined,
			},
			media_type: {
				equals: mediaType || undefined,
			},
		},
		orderBy: {
			date: sort === "asc" ? "asc" : "desc",
		},
		take: perPage,
		skip: skip,
	})

	// count total records for pagination
	const totalRecords = await prisma.pictures.count({
		where: {
			title: {
				contains: query || "",
				mode: "insensitive",
			},
			date: {
				gte: startDate ? startDate : undefined,
				lte: endDate ? endDate : undefined,
			},
			media_type: {
				equals: mediaType || undefined,
			},
		},
		orderBy: {
			date: sort === "asc" ? "asc" : "desc",
		},
	})

	const hasNextPage = !!(page && perPage && apods.length === perPage)
	const hasPreviousPage = page > 1

	if (apods.length === 0) {
		return c.json(
			errorResponse(
				"No APODs found",
				"No results for the given query",
				404
			),
			404
		)
	}
	return c.json(
		searchResponse({
			apods,
			totalRecords,
			totalPages: Math.ceil(totalRecords / perPage),
			page: page,
			perPage: perPage,
			sort: sort || "desc",
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
		})
	)
})

export default apods
