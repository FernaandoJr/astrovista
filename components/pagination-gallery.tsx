import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Picture } from "@/lib/mongo/pictures"



export function PaginationGallery({gallery, page, totalPages, pageNumbers, prevPage, nextPage}: {gallery: {items: Picture[], itemCount:number} | undefined, page: number, totalPages: number, pageNumbers: number[], prevPage: number, nextPage: number}) {
    return(
        <div className="my-5">
          {gallery ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  {page === 1 ? (
                    <div className="">
                      
                    </div>
                  ) : (
                    <PaginationPrevious href={`?page=${prevPage}`} />
                  )}
                </PaginationItem>
                {pageNumbers.map((pageNumber, index) => {
                  return (
                    <PaginationItem key={index}>
                      <PaginationLink isActive={pageNumber === page} href={`?page=${pageNumber}`} className={pageNumber === page ? "bg" : ""}>
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}
                <PaginationItem>
                  {page === totalPages ? (
                    ""
                  ): (
                    <PaginationEllipsis />
                  )}
                </PaginationItem>
                <PaginationItem>
                  {page === totalPages ? (
                    <div className="cursor-not-allowed">
                    </div>
                  ) : (
                    <PaginationNext href={`?page=${nextPage}`} />
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