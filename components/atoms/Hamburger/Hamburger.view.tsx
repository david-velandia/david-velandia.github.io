import React, { FC } from 'react';
import { Box, Container, Inner } from './Hamburger.styles';

interface HamburgerProps {
  className?: string;
  isActive?: boolean;
  onClick: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ isActive, onClick, className }) => (
  <Container className={className} onClick={onClick}>
    <Box>
      <Inner $isActive={isActive} />
    </Box>
  </Container>
);
