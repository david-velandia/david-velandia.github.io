import React, { FC } from 'react';
import { Root, Container } from './Grid.styles';

export interface GridProps {
  desktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  tablet?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mobile?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  noLeftSpacing?: boolean;
  noRightSpacing?: boolean;
  className?: string;
}

export const Grid: FC<GridProps> = ({
  desktop,
  tablet,
  mobile,
  spacing = 2,
  noLeftSpacing,
  noRightSpacing,
  children,
  className,
}) => {
  return (
    <Root
      className={className}
      $desktop={desktop}
      $tablet={tablet}
      $mobile={mobile}
      $spacing={spacing}
      $noLeftSpacing={noLeftSpacing}
      $noRightSpacing={noRightSpacing}
    >
      <Container>{children}</Container>
    </Root>
  );
};
