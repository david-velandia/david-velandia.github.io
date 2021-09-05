import React, { FC, useState, useContext } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks';
import { ThemeContext } from 'styled-components';

interface Props {
  devices?: ('desktop' | 'tablet' | 'mobile')[];
}

export const Hide: FC<Props> = ({ devices = [], children }) => {
  const [width, setWidth] = useState(0);
  const {
    breakpoints: { desktop: desktopBreakpoint, tablet: tabletBreakpoint },
  } = useContext(ThemeContext);

  useIsomorphicLayoutEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
      setWidth(window.innerWidth);
    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

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
