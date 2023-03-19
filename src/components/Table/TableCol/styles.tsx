import styled from "styled-components";

export const TableColWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

  @media all and (max-width: 767px) {
    display: flex;
    padding: 10px 0;
    width: 100%;

    &:last-child {
      justify-content: flex-start;
    }

    &:before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr(data-label);
      width: 40%;
      display: flex;
      flex-shrink: 0;
    }
  }
`;
