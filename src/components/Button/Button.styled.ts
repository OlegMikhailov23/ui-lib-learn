import styled, { css } from 'styled-components';
import { ButtonParams } from "./Button";

const blue = "#4a86d0";
const white = "#ffffff";

export const ButtonStyled = styled.button<ButtonParams>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 12px;
  font-weight: 400;
  border: none;
  border-radius: 8px;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${blue};
          color: ${white};
        `;
      case "secondary":
        return css`
          background-color: ${white};
          color: ${blue};
          border: 1px solid ${blue};
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 6px 16px;
          font-size: 12px;
          min-height: 32px;
        `;
      case "large":
        return css`
          padding: 6px 20px;
          font-size: 16px;
          min-height: 56px;
        `;
      default: 
        return css`
          padding: 10px 20px;
          font-size: 14px;
          min-height: 40px;
        `
    }
  }}
`;
