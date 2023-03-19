import styled from "styled-components";

export const TableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media all and (max-width: 767px) {
    display: none;
  }

  & > div {
    font-size: 1.25rem;
    padding: 0 24px;
    color: var(--secondary, #ccc);
  }
`;
