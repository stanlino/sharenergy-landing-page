import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--accent-color);
  padding: 16px 32px;

  border: none;
  border-radius: 8px;

  color: white;
  font-weight: 700;

  font-size: 16px;

  cursor: pointer;

  transition: all 0.4s;

  &:hover {
    background-color: var(--accent-color-darken);
  }
`;
