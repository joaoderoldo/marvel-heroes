import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  flex-flow: column wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--secondary, gray);

  h1 {
    color: #707070;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 20px;
  }
`;
