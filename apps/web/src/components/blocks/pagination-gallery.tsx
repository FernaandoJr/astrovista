import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNextMobile,
  PaginationPreviousMobile,
} from '@/components/blocks/pagination'
import { APOD } from '@repo/shared'

interface PaginationGalleryProps {
  gallery: { items: APOD[]; itemCount: number } | undefined
  page: number
  totalPages: number
  pageNumbers: number[]
  prevPage: number
  nextPage: number
  perPage: number
}

export function PaginationGallery({
  gallery,
  page,
  totalPages,
  pageNumbers,
  prevPage,
  nextPage,
  perPage,
}: PaginationGalleryProps) {
  return (
    <div className="my-5 select-none">
      {gallery ? (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {page === 1 ? (
                <div className=""></div>
              ) : (
                <PaginationPreviousMobile
                  href={`/gallery?${new URLSearchParams({
                    ...Object.fromEntries(new URLSearchParams(window.location.search)),
                    page: prevPage.toString(),
                    perPage: perPage.toString(),
                  }).toString()}`}
                  className={page === 1 ? 'cursor-not-allowed' : ''}
                />
              )}
            </PaginationItem>
            {pageNumbers.map((pageNumber, index) => {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={pageNumber === page}
                    href={`/gallery?${new URLSearchParams({
                      ...Object.fromEntries(new URLSearchParams(window.location.search)),
                      page: pageNumber.toString(),
                      perPage: perPage.toString(),
                    }).toString()}`}
                    className={pageNumber === page ? 'bg' : ''}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>{page === totalPages ? '' : <PaginationEllipsis />}</PaginationItem>
            <PaginationItem>
              {page === totalPages ? (
                <div className="cursor-not-allowed"></div>
              ) : (
                <PaginationNextMobile
                  href={`/gallery?${new URLSearchParams({
                    ...Object.fromEntries(new URLSearchParams(window.location.search)),
                    page: nextPage.toString(),
                    perPage: perPage.toString(),
                  }).toString()}`}
                  className={page === totalPages ? 'cursor-not-allowed' : ''}
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : (
        <> </>
      )}
    </div>
  )
}
