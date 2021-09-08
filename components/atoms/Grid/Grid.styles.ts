import styled, { css } from 'styled-components';
import { GridProps } from './Grid';

interface RootProps {
  $desktop: GridProps['desktop'];
  $mobile: GridProps['mobile'];
  $tablet: GridProps['tablet'];
  $spacing: GridProps['spacing'];
  $noLeftSpacing: GridProps['noLeftSpacing'];
  $noRightSpacing: GridProps['noRightSpacing'];
}

export const Root = styled.div<RootProps>`
  box-sizing: border-box;
  padding: ${({ $spacing }) => $spacing * 4}px;

  ${({ $mobile }) =>
    $mobile &&
    css`
      width: ${($mobile / 12) * 100}%;
    `};

  ${({ $tablet }) =>
    $tablet &&
    css`
      ${({ theme }) => theme.query.tablet} {
        width: ${($tablet / 12) * 100}%;
      }
    `}

  ${({ $desktop }) =>
    $desktop &&
    css`
      ${({ theme }) => theme.query.desktop} {
        width: ${($desktop / 12) * 100}%;
      }
    `}

  ${({ $noLeftSpacing }) =>
    $noLeftSpacing &&
    css`
      padding-left: 0;
    `}

  ${({ $noRightSpacing }) =>
    $noRightSpacing &&
    css`
      padding-right: 0;
    `}
`;

export const Container = styled.div`
  width: 100%;
`;
