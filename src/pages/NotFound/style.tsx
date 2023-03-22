import styled from "styled-components";

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: 100vh;

  img {
    max-width: 500px;
    height: auto;
    object-fit: cover;
    display: block;
  }

  a {
    color: var(--secondary, #ccc);
    font-weight: 600;
    font-size: 1.25rem;
    text-decoration: none;
  }
`;
