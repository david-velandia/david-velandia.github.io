import React, { FC } from 'react';
import { Box, Container, Inner } from './Hamburger.styles';

interface HamburgerProps {
  isActive?: boolean;
  onClick: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ isActive, onClick }) => (
  <Container onClick={onClick}>
    <Box>
      <Inner $isActive={isActive} />
    </Box>
  </Container>
);
