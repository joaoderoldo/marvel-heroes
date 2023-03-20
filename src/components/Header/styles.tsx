import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--white-color, #fff);
  height: 65px;
  padding: 16px 0;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    display: flex;
    align-items: center;

    .user-content {
      text-align: right;
      margin-right: 8px;

      > .name {
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 0.875rem;
      }

      > .subtitle {
        font-size: 0.625rem;
        line-height: 0.625rem;
        margin-top: 8px;
      }

      > .name,
      > .subtitle {
        display: block;
      }
    }
  }

  .user-avatar {
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    background-color: var(--primary, black);
    color: var(--white, #fff);
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;
