import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
  devices?: ('desktop' | 'tablet' | 'mobile')[];
}

export const Hide: FC<Props> = ({ devices = [], children }) => {
  const {
    breakpoints: { desktop: desktopBreakpoint, tablet: tabletBreakpoint },
    width,
  } = useContext(ThemeContext);

  if (devices.length === 0) {
    return null;
  }
  if (width === 0) {
    return null;
  }
  if (devices.includes('desktop') && desktopBreakpoint <= width) {
    return null;
  }
  if (devices.includes('tablet') && desktopBreakpoint > width && tabletBreakpoint <= width) {
    return null;
  }
  if (devices.includes('mobile') && tabletBreakpoint > width) {
    return null;
  }
  return <>{children}</>;
};
