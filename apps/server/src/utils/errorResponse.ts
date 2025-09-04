export function errorResponse(message: string, cause: string, code: number) {
	return {
		error: message,
		cause,
		code,
		timestamp: new Date().toISOString(),
	};
}
