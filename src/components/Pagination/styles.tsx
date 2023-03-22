import styled from "styled-components";

export const PaginationWrapper = styled.div`
  background-color: var(--white, #fff);
  border-top: 1px solid #ebebeb;
  min-height: 60px;
  display: flex;
  align-items: center;

  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationItem = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 0.875rem;
  color: #707070;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: var(--primary-dark, black);
    color: var(--white, #fff);
  }
`;
