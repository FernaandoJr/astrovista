import { Pictures } from "../../prisma/generated/client.js"

interface SearchResponse {
	apods: Pictures[]
	totalRecords: number
	totalPages: number
	page: number
	perPage: number
	sort: string
	hasNextPage?: boolean
	hasPreviousPage?: boolean
	links: {
		next: string | null
		previous: string | null
		first: string | null
		last: string | null
	}
}

export function searchResponse({
	apods,
	totalRecords,
	page,
	perPage,
	sort,
	hasNextPage = false,
	hasPreviousPage = false,
	totalPages,
	links,
}: SearchResponse) {
	return {
		totalRecords,
		totalPages,
		page,
		perPage,
		sort,
		hasNextPage,
		hasPreviousPage,
		links,
		apods: apods,
	}
}
