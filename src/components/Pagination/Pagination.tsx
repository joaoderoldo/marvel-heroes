import { PaginationWrapper, PaginationItem } from "./styles";

import { Container } from "@/components";

const Pagination = ({ ...props }) => {
  return (
    <PaginationWrapper {...props}>
      <Container className="pagination-container">
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
      </Container>
    </PaginationWrapper>
  );
};

export default Pagination;
