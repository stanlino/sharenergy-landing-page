import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--accent-color);
  padding: 12px 32px;

  border: none;
  border-radius: 8px;

  color: white;
  font-weight: 700;

  font-size: 16px;

  cursor: pointer;

  &:hover {
    background-color: var(--accent-color-darken);
  }
`;
