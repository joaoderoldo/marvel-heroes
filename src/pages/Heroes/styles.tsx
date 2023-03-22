import styled from "styled-components";

export const HomeWrapper = styled.main`
  background-color: var(--bg-base, #eee);
  padding-top: 32px;

  .characters-name {
    img {
      width: 44px;
      height: 44px;
      border-radius: 5px;
      object-fit: cover;
      margin-right: 16px;
    }

    span {
      font-weight: 500;
      color: var(--secondary, #ccc);
    }
  }

  .characters-series,
  .characters-events {
    color: var(--secondary-light, #eee);
    font-weight: 300;
    font-size: 0.875rem;
  }

  .characters-series {
    flex-flow: column wrap;
    align-items: flex-start;
    padding-left: 20px;
  }

  .pagination {
    margin-top: 78px;
  }

  .heroes-table {
    margin-bottom: 32px;

    &:hover {
      .heroes-item {
        opacity: 0.4;
      }
    }
  }

  .heroes-item {
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1 !important;
    }
  }

  .not-found-heroes {
    min-height: calc(100vh - 98px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    h1 {
      text-align: center;

      span {
        display: block;
        color: var(--red, red);
      }
    }

    button {
      padding: 12px 24px;
      cursor: pointer;
      background-color: var(--primary, #0fc0fc);
      border: none;
      border-radius: 5px;
      color: var(--black, #000);
    }
  }
`;

export const HomeHeading = styled.section`
  .page-title {
    font-size: 1.75rem;
    line-height: 1.75;
    margin: 0;
    font-weight: 500;
  }

  .search-container {
    margin-top: 24px;

    > label {
      font-size: 1.25rem;
      line-height: 1.25rem;
      font-weight: 500;
      margin-bottom: 16px;
      display: block;
    }

    .input-with-button {
      display: flex;
      align-items: center;
      background-color: var(--white, #fff);
      border: 1px solid #d7d7d7;
      padding: 0 12px;
      height: 50px;
      max-width: 370px;
      border-radius: 4px;

      > input {
        background: transparent;
        border: none;
        outline: none;
        flex-grow: 1;
        color: #a09999;
        font-size: 1.25rem;

        &:focus {
          outline: none;
        }

        &::placeholder {
          font-style: italic;
        }
      }

      > button {
        background: none;
        border: none;
        cursor: pointer;
        line-height: 1;

        &:hover {
          svg {
            path {
              fill: var(--primary, #000);
              transition: fill 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
`;
