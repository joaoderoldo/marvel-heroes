import { useState, useEffect } from "react";
import { PaginationWrapper, PaginationItem } from "./styles";
import { fetchPageNumbers } from "@/components/Pagination/utils/helperPagination";
import { Container } from "@/components";
import { useCallback } from "react";

const Pagination = ({ totalPages, handleOffset, isHidden, ...props }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNeighbours = Math.max(1, Math.min(0, 2));
  const [pages, setPages] = useState([]);

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
      const current = Math.max(0, Math.min(page, totalPages));
      const paginationData = fetchPageNumbers({
        currentPage: current,
        totalPages,
        pageNeighbours,
      });
      setPages(paginationData);
      setCurrentPage(current);
      const offsetValue = (page - 1) * 7;
      handleOffset(offsetValue);
    },
    [pageNeighbours, totalPages]
  );

  if (isHidden) return null;

  return (
    <PaginationWrapper {...props}>
      <Container className="pagination-container">
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
