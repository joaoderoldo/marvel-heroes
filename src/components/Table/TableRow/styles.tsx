import styled, { css } from "styled-components";

export const TableRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white, #fff);
  box-shadow: 0px 6px 10px 0 rgba(201, 201, 201, 1);
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  padding: 16px 24px;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}

  & + & {
    margin-top: 8px;
  }

  @media all and (max-width: 767px) {
    display: block;
  }
`;
