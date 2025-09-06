import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNextMobile,
  PaginationPreviousMobile,
} from '@/components/blocks/pagination'
import { useGalleryParams } from '@/contexts'
import { galeryParamsBuilder } from '@/utils/galeryParamsBuilder'
import { getPaginationRange } from '@/utils/paginationHelper'
import { PaginatedAPODResponse } from '@repo/shared'

interface PaginationGalleryProps {
  gallery: PaginatedAPODResponse
}

export function PaginationGallery({ gallery }: PaginationGalleryProps) {
  const { query, mediaType, perPage, sort, startDate, endDate } = useGalleryParams()

  return (
    <div className="my-5 select-none">
      {gallery ? (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {gallery.page === 1 ? (
                <div className=""></div>
              ) : (
                <PaginationPreviousMobile
                  href={gallery.links.previous ?? ''}
                  className={gallery.page === 1 ? 'cursor-not-allowed' : ''}
                />
              )}
            </PaginationItem>
            {getPaginationRange(gallery.page, gallery.totalPages).map((item) =>
              item.isEllipsis ? (
                <PaginationItem key={item.key}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item.key}>
                  <PaginationLink
                    isActive={item.page === gallery.page}
                    href={`/gallery?${galeryParamsBuilder({
                      query,
                      mediaType,
                      perPage: parseInt(perPage),
                      sort,
                      startDate,
                      endDate,
                      page: item.page,
                    })}`}
                    className={item.page === gallery.page ? 'bg' : ''}>
                    {item.page}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            <PaginationItem>
              {gallery.page === gallery.totalPages ? (
                <div className="cursor-not-allowed"></div>
              ) : (
                <PaginationNextMobile
                  href={`/gallery?${galeryParamsBuilder({
                    query,
                    mediaType,
                    perPage: parseInt(perPage),
                    sort,
                    startDate,
                    endDate,
                    page: gallery.page + 1,
                  })}`}
                  className={gallery.page === gallery.totalPages ? 'cursor-not-allowed' : ''}
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
