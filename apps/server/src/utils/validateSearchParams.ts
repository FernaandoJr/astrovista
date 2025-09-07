import { errorResponse } from "./errorResponse.js"
import { isValidDateFormat } from "./isValidDate.js"

// Função para validar parâmetros de busca
export function validateSearchParams(params: {
	startDate?: string
	endDate?: string
	mediaType?: string
	perPage: number
	page: number
	sort: string
}) {
	const { startDate, endDate, mediaType, perPage, page, sort } = params

	// Validação de datas
	if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
		return errorResponse(
			"Invalid date range",
			"startDate cannot be after endDate",
			400
		)
	}

	if (startDate && isValidDateFormat(startDate) === false) {
		return errorResponse(
			"Invalid date format",
			"startDate must be in YYYY-MM-DD format",
			400
		)
	}

	if (endDate && isValidDateFormat(endDate) === false) {
		return errorResponse(
			"Invalid date format",
			"endDate must be in YYYY-MM-DD format",
			400
		)
	}

	// Validação de tipo de mídia
	if (mediaType && !["image", "video"].includes(mediaType)) {
		return errorResponse(
			"Invalid media type",
			"Media type must be 'image' or 'video'",
			400
		)
	}

	// Validação de paginação
	if (perPage >= 200 || perPage < 1 || isNaN(perPage)) {
		return errorResponse(
			"Invalid perPage value",
			"perPage must be a number less than 200 and greater than 0",
			400
		)
	}

	if (page < 1) {
		return errorResponse(
			"Invalid page number",
			"Page must be greater than 0",
			400
		)
	}

	// Validação de ordenação
	if (sort && !["asc", "desc"].includes(sort)) {
		return errorResponse(
			"Invalid sort value",
			"sort must be 'asc' or 'desc'",
			400
		)
	}

	return null // Sem erros
}
