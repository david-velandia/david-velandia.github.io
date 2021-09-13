import React, { useRef, useState } from 'react';
import { AppProps } from 'next/app';
import '../i18n';

import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { useIsomorphicLayoutEffect } from '@/hooks';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/libre-franklin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
      U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    padding: 0;
    color: '#222222';
  }
  * {
    font-family: 'Libre Franklin', 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

const theme: DefaultTheme = {
  colors: {
    primary: '#E5E5E5',
    secondary400: '#8759fd',
    secondary: '#6B38FB',
    secondary600: '#5f33f4',
    white: '#FFFFFF',
    mainBlack: '#222222',
  },
  breakpoints: {
    desktop: 992,
    tablet: 768,
    mobile: 0,
  },
  get query() {
    return {
      desktop: `@media (min-width: ${this.breakpoints.desktop}px)`,
      tablet: `@media (min-width: ${this.breakpoints.tablet}px) and (max-width: ${
        this.breakpoints.desktop - 1
      }px)`,
    };
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    const containerElement = containerRef.current as HTMLDivElement;

    if (process.browser) {
      window.addEventListener('resize', () => setWidth(window.innerWidth));
      setWidth(window.innerWidth);

      containerElement.removeAttribute('style');
    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

  theme.width = width;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div ref={containerRef} style={{ visibility: 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
