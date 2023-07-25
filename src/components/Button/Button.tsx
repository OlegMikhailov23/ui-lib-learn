import React, { MouseEventHandler, ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

export type ButtonParams = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({size = 'medium', children, variant = 'primary', onClick}: ButtonParams) => {
  return (
    <ButtonStyled variant={variant} size={size} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
