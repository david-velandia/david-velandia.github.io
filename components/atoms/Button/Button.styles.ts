import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.view';

interface StyledButtonProps {
  $variant?: ButtonProps['variant'];
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 16px;
  border-radius: 9999px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  ${({ theme, $variant }) =>
    $variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.mainBlack};
        `
      : css`
          background-color: ${theme.colors.secondary600};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.secondary};
          }
        `}
`;
