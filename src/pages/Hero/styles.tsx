import styled from "styled-components";

export const HeroHeading = styled.section`
  display: flex;

  .hero-picture {
    width: 300px;
    flex-shrink: 0;

    img {
      max-width: 300px;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }

  .hero-content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(7, 7, 7, 0.85);
    padding: 32px;
    text-align: center;
    position: relative;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    flex-grow: 1;

    .hero-name {
      font-size: 2.25rem;
      margin: 0;
      color: var(--white, #fff);
      font-weight: 600;
    }

    .hero-about {
      font-size: 0.875rem;
      color: var(--white, #fff);
      font-weight: 500;
      display: block;
      margin-top: 16px;
      max-width: 80%;
    }
  }
`;

export const HeroEvents = styled.section`
  padding: 36px 0;

  .page-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .hero-list {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 265px);
    column-gap: 40px;
    row-gap: 40px;
    justify-content: space-between;

    .hero-item {
      max-width: 265px;

      .hero-picture {
        max-width: 265px;
        height: 265px;
        margin: 0 auto;
        object-fit: cover;
        display: block;
      }

      .hero-content {
        background-color: var(--black, #000);
        color: var(--white, #fff);
        padding: 16px;
        height: 215px;
        display: flex;
        flex-flow: column wrap;
        border-top: 2px solid var(--red, #ccc);

        .hero-name {
          margin: 0;
          font-weight: 600;
        }

        .hero-about {
          font-size: 0.8rem;
          line-height: 0.8rem;
          margin-top: auto;
          display: block;
        }
      }
    }
  }
`;
