import clsx from "clsx";
import { FC, useCallback, useEffect, useState } from "react";

import { Container } from "@/components";
import { fetchPageNumbers } from "@/components/Pagination/utils/helperPagination";

import { PaginationItem, PaginationWrapper } from "./styles";
import { PaginationProps } from "./types";

const Pagination: FC<PaginationProps> = ({
  totalPages,
  handleOffset,
  classes,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<Array<string | number>>([]);
  const pageNeighbours: number = Math.max(1, Math.min(0, 2));

  useEffect(() => {
    if (!Number.isNaN(totalPages) && currentPage === 1) {
      const initialPagination = fetchPageNumbers({
        currentPage: 1,
        totalPages,
        pageNeighbours,
      });

      setPages(initialPagination);
    }
  }, [totalPages]);

  const goToPage = useCallback(
    (page: number) => {
      const current: number = Math.max(0, Math.min(page, totalPages));
      const paginationData = fetchPageNumbers({
        currentPage: current,
        totalPages,
        pageNeighbours,
      });
      setPages(paginationData);
      setCurrentPage(current);
      const offsetValue: number = (page - 1) * 7;
      handleOffset(offsetValue);
    },
    [handleOffset, pageNeighbours, totalPages]
  );

  return (
    <PaginationWrapper className={clsx(classes)}>
      <Container classes="pagination-container">
        {pages.length &&
          pages.map((page) => {
            if (page === "LEFT") {
              return (
                <PaginationItem
                  onClick={() => {
                    goToPage(currentPage - 1);
                  }}
                  key={page}
                >
                  <span aria-hidden="true">&laquo;</span>
                </PaginationItem>
              );
            }

            if (page === "RIGHT") {
              return (
                <PaginationItem
                  onClick={() => {
                    goToPage(currentPage + 1);
                  }}
                  key={page}
                >
                  <span aria-hidden="true">&raquo;</span>
                </PaginationItem>
              );
            }

            return (
              <PaginationItem
                key={page}
                className={`${currentPage === page ? " active" : ""}`}
                onClick={() => {
                  goToPage(+page);
                }}
              >
                {page}
              </PaginationItem>
            );
          })}
      </Container>
    </PaginationWrapper>
  );
};

export default Pagination;
