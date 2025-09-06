export interface PaginationRange {
  page: number
  isEllipsis?: boolean
  key: string | number
}

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  range: number = 3,
): PaginationRange[] {
  const startPage = Math.max(1, currentPage - range)
  const endPage = Math.min(totalPages, currentPage + range)
  const pages: PaginationRange[] = []

  // Primeira página + ellipsis se necessário
  if (startPage > 1) {
    pages.push({ page: 1, key: 1 })
    if (startPage > 2) {
      pages.push({ page: 0, isEllipsis: true, key: 'ellipsis-start' })
    }
  }

  // Páginas do range atual
  for (let i = startPage; i <= endPage; i++) {
    pages.push({ page: i, key: i })
  }

  // Ellipsis + última página se necessário
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push({ page: 0, isEllipsis: true, key: 'ellipsis-end' })
    }
    pages.push({ page: totalPages, key: totalPages })
  }

  return pages
}
