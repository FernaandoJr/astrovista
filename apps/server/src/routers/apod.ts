import axios from "axios";
import { Hono } from "hono";
import { rateLimiter } from "hono-rate-limiter";
import { type Pictures, PrismaClient } from "prisma/generated/client";
import { errorResponse } from "@/utils/errorResponse";

const prisma = new PrismaClient();
const apod = new Hono();

apod.get("/", async (c) => {
	const latestApod = await prisma.pictures.findFirst({
		orderBy: {
			date: "desc",
		},
	});

	if (!latestApod) {
		return c.text("No APOD found", 404);
	}

	return c.json(latestApod);
});

apod.post(
	"/",
	rateLimiter({
		windowMs: 60 * 1000,
		limit: 1,
		standardHeaders: "draft-6",
		keyGenerator: (c) => "<unique_key>",
	}),
	async (c) => {
		const key = c.req.header("x-api-key");

		if (!key || key !== process.env.NASA_API_KEY) {
			return c.json(
				errorResponse("Unauthorized", "Invalid or missing API key", 401),
				401,
			);
		}

		const response = await axios.get(
			`https://api.nasa.gov/planetary/apod?api_key=${key}`,
		);
		const newApod = response.data as Pictures;

		const exists = await prisma.pictures.findFirst({
			where: {
				date: newApod.date,
			},
		});

		if (exists) {
			return c.json(
				errorResponse(
					"APOD already exists",
					"APOD for this date already exists",
					409,
				),
				409,
			);
		}

		await prisma.pictures.create({
			data: newApod,
		});

		return c.json(newApod, 201);
	},
);

apod.get("/random", async (c) => {
	const randomApod = await prisma.pictures.findFirst({
		orderBy: {
			date: "asc",
		},
		take: 1,
		skip: Math.floor(Math.random() * (await prisma.pictures.count())),
	});
	if (!randomApod) {
		return c.json(
			errorResponse("No APOD found", "No random APOD available", 404),
			404,
		);
	}
	return c.json(randomApod);
});

apod.get("/:date", async (c) => {
	const date = c.req.param("date");
	const apodData = await prisma.pictures.findFirst({
		where: {
			date: date,
		},
	});
	if (!apodData) {
		return c.json(
			errorResponse("APOD not found", `No APOD found for date: ${date}`, 404),
			404,
		);
	}
	return c.json(apodData);
});

export default apod;
