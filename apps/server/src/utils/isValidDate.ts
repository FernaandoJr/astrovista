export function isValidDateFormat(dateString: string): boolean {
	const regex = /^\d{4}-\d{2}-\d{2}$/;
	return regex.test(dateString);
}
