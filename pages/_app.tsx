import { AppProps } from 'next/app';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';

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
    secondary: '#6B38FB',
    white: '#FFFFFF',
    mainBlack: '#222222',
  },
  breakpoints: {
    desktop: ' @media (min-width: 992px)',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log('render');
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
