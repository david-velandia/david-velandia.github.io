import React, { FC } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  handleClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  handleClick,
}) => {
  return (
    <StyledButton $variant={variant} className={className} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};
