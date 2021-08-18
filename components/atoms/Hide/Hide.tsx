import React, { FC, useState, useEffect } from 'react';

interface Props {
  devices?: ('desktop' | 'tablet' | 'mobile')[];
}

export const Hide: FC<Props> = ({ devices = [], children }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
      setWidth(window.innerWidth);
    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, [width]);

  if (devices.length === 0) {
    return null;
  }
  if (devices.includes('desktop') && 992 <= width) {
    return null;
  }
  if (devices.includes('tablet') && 992 > width && 769 <= width) {
    return null;
  }
  if (devices.includes('mobile') && 768 > width) {
    return null;
  }

  return <>{children}</>;
};
