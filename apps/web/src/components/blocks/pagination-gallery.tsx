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
    <div className="my-3 px-3 select-none">
      {gallery ? (
        <Pagination>
          <PaginationContent>
            {/* Botão para primeira página - visível apenas em mobile */}
            <PaginationItem className="block sm:hidden">
              {gallery.page === 1 ? (
                <div className="h-7 w-7"></div>
              ) : (
                <PaginationLink
                  href={`/gallery?${galeryParamsBuilder({
                    query,
                    mediaType,
                    perPage: parseInt(perPage),
                    sort,
                    startDate,
                    endDate,
                    page: 1,
                  })}`}
                  className="h-7 w-7 text-xs">
                  1
                </PaginationLink>
              )}
            </PaginationItem>

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
                <PaginationItem key={item.key} className="hidden sm:block">
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item.key} className="hidden sm:block">
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
            {/* Indicador de página atual - visível apenas em mobile */}
            <PaginationItem className="block sm:hidden">
              <span className="bg-primary text-primary-foreground flex h-7 w-auto items-center justify-center rounded-md px-2 text-xs">
                {gallery.page} / {gallery.totalPages}
              </span>
            </PaginationItem>
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

            {/* Botão para última página - visível apenas em mobile */}
            <PaginationItem className="block sm:hidden">
              {gallery.page === gallery.totalPages ? (
                <div className="h-7 w-7"></div>
              ) : (
                <PaginationLink
                  href={`/gallery?${galeryParamsBuilder({
                    query,
                    mediaType,
                    perPage: parseInt(perPage),
                    sort,
                    startDate,
                    endDate,
                    page: gallery.totalPages,
                  })}`}
                  className="h-7 w-7 text-xs">
                  {gallery.totalPages}
                </PaginationLink>
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
