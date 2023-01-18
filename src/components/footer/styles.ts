import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 5em auto;
  justify-content: space-between;

  gap: 2rem;

  .item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .contacts {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      span {
        color: var(--text-color);
      }

      a {
        text-decoration: none;
      }
    }

    .social {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      a {
        text-decoration: none;
        color: var(--text-color);
        font-size: 20px;

        &:hover {
          color: var(--accent-color);
        }
      }
    }

    .title {
      color: var(--text-color);
    }

    ul {
      list-style: none;
    }

    li a {
      text-decoration: none;
      color: var(--heading-text);
      line-height: 2rem;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0 32px;
  }
`;
