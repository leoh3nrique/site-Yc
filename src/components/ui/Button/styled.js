import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid transparent;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s, color 0.3s, border 0.3s, transform 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: #1c779f;
      color: white;

      /* &:hover:not(:disabled) {
      background-color: transparent;
      border: 1px solid white;
    } */
    `}

  ${({ $variant }) =>
    $variant === "dark" &&
    css`
      background-color: #3c3c3c;
      color: #fff;
      border-radius: 30px;
      padding: 0.9rem 2rem;

      &:hover:not(:disabled) {
        background-color: #2a2a2a;
      }
    `}
`;
