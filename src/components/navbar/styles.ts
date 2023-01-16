import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  padding: 0 32px;
  height: 5rem;

  .image {
    position: relative;
    width: 200px;
    min-width: 200px;

    img {
      object-fit: contain;
    }
  }

  .menu-button {
    display: none;
    border: 0;
    background-color: transparent;
    color: var(--heading-color);
    font-size: 2rem;

    cursor: pointer;

    @media (max-width: 720px) {
      display: block;
    }
  }
`;

interface INavProps {
  visible: boolean;
}

export const Nav = styled.nav<INavProps>`
  display: flex;
  flex-direction: column;

  .close-button {
    align-self: flex-end;
    width: 50px;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    font-size: 32px;

    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex: 1;

    gap: 1rem;
  }

  li {
    display: flex;
    min-width: max-content;
    padding: 8px;

    align-items: center;
    justify-content: center;

    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: var(--heading-color);
    font-size: 14px;
  }

  @media (max-width: 720px) {
    display: ${({ visible }) => (visible ? "flex" : "none")};

    height: 100vh;
    width: 70vw;
    left: 0;
    position: absolute;
    background-color: white;

    padding: 32px;

    box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.4);

    ul {
      flex-direction: column;
    }

    li {
      justify-content: flex-start;
    }

    .close-button {
      display: flex;
    }
  }

  @media (max-width: 640px) {
    width: 100vw;
  }
`;
